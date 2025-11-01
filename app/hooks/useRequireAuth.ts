"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

/**
 * Hook to require authentication on a page
 * Redirects to sign-in page if user is not authenticated
 */
export function useRequireAuth() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Still loading, wait

    if (status === "unauthenticated") {
      router.push("/signin");
    }
  }, [status, router]);

  return { session, status, isLoading: status === "loading" };
}

/**
 * Hook to require specific role on a page
 * Redirects to home page if user doesn't have required role
 */
export function useRequireRole(requiredRole: "USER" | "MODERATOR" | "ADMIN") {
  const { session, status, isLoading } = useRequireAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoading || !session) return;

    const roleHierarchy: Record<string, number> = {
      USER: 1,
      MODERATOR: 2,
      ADMIN: 3,
    };

    const userRole = session.user?.role || "USER";
    const userLevel = roleHierarchy[userRole] || 0;
    const requiredLevel = roleHierarchy[requiredRole] || 0;

    if (userLevel < requiredLevel) {
      router.push("/");
    }
  }, [session, isLoading, requiredRole, router]);

  return { session, status, isLoading };
}
