"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function VerifyEmailForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function verifyEmail() {
      if (!token) {
        setError("Invalid verification link");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch("/api/auth/verify-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });

        const data = await res.json();

        if (!res.ok) {
          setError(data.error || "Failed to verify email");
        } else {
          setMessage(data.message);
        }
      } catch {
        setError("Failed to verify email. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    verifyEmail();
  }, [token]);

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Email Verification</h1>
        </div>

        <div className="bg-white p-6 rounded-lg border space-y-4">
          {loading && (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600">Verifying your email...</p>
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded">
              <p className="text-red-600 font-medium">Verification Failed</p>
              <p className="text-red-600 text-sm mt-1">{error}</p>
            </div>
          )}

          {message && (
            <div className="p-4 bg-green-50 border border-green-200 rounded">
              <p className="text-green-600 font-medium">Success!</p>
              <p className="text-green-600 text-sm mt-1">{message}</p>
            </div>
          )}

          {!loading && (
            <div className="text-center space-y-3 pt-4">
              {message && (
                <Link
                  href="/signin"
                  className="inline-block w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Go to Sign In
                </Link>
              )}

              {error && (
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    Need a new verification link?{" "}
                    <Link href="/signin" className="text-blue-600 hover:underline font-medium">
                      Sign in
                    </Link>
                    {" "}and request a new one.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    }>
      <VerifyEmailForm />
    </Suspense>
  );
}
