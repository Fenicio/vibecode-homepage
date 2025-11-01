import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-config";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export enum UserRole {
  USER = "USER",
  MODERATOR = "MODERATOR",
  ADMIN = "ADMIN",
}

/**
 * Get the current user's session with role information
 */
export async function getSession() {
  return await getServerSession(authOptions);
}

/**
 * Require authentication - returns error response if not authenticated
 */
export async function requireAuth() {
  const session = await getSession();

  if (!session?.user?.id) {
    return {
      error: NextResponse.json({ error: "Unauthorized" }, { status: 401 }),
      session: null,
    };
  }

  return { error: null, session };
}

/**
 * Check if user has required role (or higher)
 * Role hierarchy: USER < MODERATOR < ADMIN
 */
export function hasRole(userRole: string | undefined, requiredRole: UserRole): boolean {
  if (!userRole) return false;

  const roleHierarchy: Record<string, number> = {
    USER: 1,
    MODERATOR: 2,
    ADMIN: 3,
  };

  const userLevel = roleHierarchy[userRole] || 0;
  const requiredLevel = roleHierarchy[requiredRole] || 0;

  return userLevel >= requiredLevel;
}

/**
 * Require specific role - returns error response if user doesn't have required role
 */
export async function requireRole(role: UserRole) {
  const { error, session } = await requireAuth();

  if (error) {
    return { error, session: null };
  }

  if (!hasRole(session?.user?.role, role)) {
    return {
      error: NextResponse.json({ error: "Forbidden - insufficient permissions" }, { status: 403 }),
      session: null,
    };
  }

  return { error: null, session };
}

/**
 * Check if user owns a resource (by user_id field)
 */
export async function requireOwnership(
  resourceType: "success_stories" | "glossary" | "tools" | "comments",
  resourceId: number,
  session: any
) {
  const userId = parseInt(session.user.id);

  let resource: any;

  switch (resourceType) {
    case "success_stories":
      resource = await prisma.success_stories.findUnique({
        where: { id: resourceId },
        select: { user_id: true },
      });
      break;
    case "glossary":
      // Glossary doesn't have user_id, so we'll allow moderators and admins only
      return hasRole(session.user.role, UserRole.MODERATOR);
    case "tools":
      // Tools don't have user_id, so we'll allow moderators and admins only
      return hasRole(session.user.role, UserRole.MODERATOR);
    case "comments":
      resource = await prisma.comments.findUnique({
        where: { id: resourceId },
        select: { user_id: true },
      });
      break;
  }

  if (!resource) {
    return false;
  }

  // Allow if user owns the resource OR user is moderator/admin
  return (
    resource.user_id === userId ||
    hasRole(session.user.role, UserRole.MODERATOR)
  );
}

/**
 * Require ownership or moderator role
 */
export async function requireOwnershipOrModerator(
  resourceType: "success_stories" | "glossary" | "tools" | "comments",
  resourceId: number
) {
  const { error, session } = await requireAuth();

  if (error) {
    return { error, session: null };
  }

  const isOwnerOrModerator = await requireOwnership(resourceType, resourceId, session);

  if (!isOwnerOrModerator) {
    return {
      error: NextResponse.json(
        { error: "Forbidden - you don't have permission to modify this resource" },
        { status: 403 }
      ),
      session: null,
    };
  }

  return { error: null, session };
}
