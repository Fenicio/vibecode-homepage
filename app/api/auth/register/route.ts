import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import crypto from "crypto";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, name, first_name, last_name } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Validate password strength
    if (password.length < 8) {
      return NextResponse.json(
        { error: "Password must be at least 8 characters long" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.users.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.users.create({
      data: {
        email,
        password: hashedPassword,
        name: name || email.split("@")[0],
        first_name: first_name || null,
        last_name: last_name || null,
        emailVerified: null, // User needs to verify email
      },
      select: {
        id: true,
        email: true,
        name: true,
        created_at: true,
      },
    });

    // Generate verification token
    const verificationToken = crypto.randomBytes(32).toString("hex");
    const expires = new Date(Date.now() + 24 * 3600000); // 24 hours from now

    // Store verification token
    await prisma.verification_token.create({
      data: {
        identifier: email,
        token: verificationToken,
        expires,
      },
    });

    // TODO: Send verification email
    // For now, we'll just log it (in production, use a service like SendGrid, Resend, or Nodemailer)
    const verificationUrl = `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/verify-email?token=${verificationToken}`;

    console.log("Email verification link:", verificationUrl);
    console.log("Send this link to:", email);

    // In production, send email here:
    // await sendVerificationEmail(email, verificationUrl);

    return NextResponse.json(
      {
        message: "User created successfully. Please check your email to verify your account.",
        user,
        // Remove this in production - only for development
        ...(process.env.NODE_ENV === "development" && { verificationUrl }),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json(
      { error: "Failed to register user" },
      { status: 500 }
    );
  }
}
