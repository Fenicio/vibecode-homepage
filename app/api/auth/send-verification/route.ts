import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import crypto from "crypto";
import { getSession } from "@/lib/auth";

export async function POST() {
  try {
    const session = await getSession();

    if (!session || !session.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const user = await prisma.users.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    if (user.emailVerified) {
      return NextResponse.json(
        { error: "Email already verified" },
        { status: 400 }
      );
    }

    // Generate verification token
    const verificationToken = crypto.randomBytes(32).toString("hex");
    const identifier = user.email;
    const expires = new Date(Date.now() + 24 * 3600000); // 24 hours from now

    // Store verification token in database
    await prisma.verification_token.create({
      data: {
        identifier,
        token: verificationToken,
        expires,
      },
    });

    // TODO: Send verification email
    // For now, we'll just log it (in production, use a service like SendGrid, Resend, or Nodemailer)
    const verificationUrl = `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/verify-email?token=${verificationToken}`;

    console.log("Email verification link:", verificationUrl);
    console.log("Send this link to:", user.email);

    // In production, send email here:
    // await sendVerificationEmail(user.email, verificationUrl);

    return NextResponse.json({
      message: "Verification email sent. Please check your inbox.",
      // Remove this in production - only for development
      ...(process.env.NODE_ENV === "development" && { verificationUrl }),
    });
  } catch (error) {
    console.error("Send verification error:", error);
    return NextResponse.json(
      { error: "Failed to send verification email" },
      { status: 500 }
    );
  }
}
