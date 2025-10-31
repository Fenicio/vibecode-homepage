import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WrapProviders from "./components/WrapProviders";
import { Navbar } from "./components/Navbar"; // Add Navbar import

// Commented out due to network restrictions - using system fonts instead
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "VibeCode - Developer Community",
  description: "Share your coding success stories, discover tools, and learn from the community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <WrapProviders>
          <Navbar />
          {children}
        </WrapProviders>
      </body>
    </html>
  );
}
