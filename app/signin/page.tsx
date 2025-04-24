// This file was previously app/signin.tsx. It is now placed correctly for Next.js App Router.
// If you are using NextAuth.js, you should not manually create a sign-in page unless you want to customize it.
// By default, NextAuth.js provides its own /api/auth/signin route and page.
// If you want a custom sign-in page, you need to set 'pages: { signIn: "/signin" }' in your NextAuth options.
// Here is a basic custom sign-in page:

"use client";

import { getProviders, signIn, ClientSafeProvider } from "next-auth/react";
import { useEffect, useState } from "react";

export default function SignIn() {
  const [providers, setProviders] = useState<Record<string, ClientSafeProvider> | null>(null);

  useEffect(() => {
    (async () => {
      const provs = await getProviders();
      setProviders(provs);
    })();
  }, []);

  if (!providers) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
      <h1>Sign in</h1>
      {Object.values(providers).map((provider) => (
        <div key={provider.name} style={{ margin: "1rem" }}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}
