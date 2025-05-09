"use client";
import React from "react";
import AuthProvider from "../auth-provider";
import { ThemeProvider } from "next-themes";

export default function WrapProviders({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </AuthProvider>
  );
}
