import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Find user by email
    const user = await prisma.users.findUnique({
      where: { email },
    });

    // Always return success to prevent email enumeration
    if (!user) {
      return NextResponse.json({
        message: "If an account exists with this email, a password reset link has been sent.",
      });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour from now

    // Save token to database
    await prisma.users.update({
      where: { email },
      data: {
        reset_password_token: resetToken,
        reset_password_expiration: resetTokenExpiry,
      },
    });

    // TODO: Send email with reset link
    // For now, we'll just log it (in production, use a service like SendGrid, Resend, or Nodemailer)
    const resetUrl = `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/reset-password?token=${resetToken}`;

    console.log("Password reset link:", resetUrl);
    console.log("Send this link to:", email);

    // In production, send email here:
    // await sendPasswordResetEmail(email, resetUrl);

    return NextResponse.json({
      message: "If an account exists with this email, a password reset link has been sent.",
      // Remove this in production - only for development
      ...(process.env.NODE_ENV === "development" && { resetUrl }),
    });
  } catch (error) {
    console.error("Forgot password error:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request" },
      { status: 500 }
    );
  }
}
