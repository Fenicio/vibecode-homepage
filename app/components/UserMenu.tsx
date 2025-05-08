"use client";
import { useSession, signIn, signOut } from 'next-auth/react';

export default function UserMenu() {
  const { data: session } = useSession();
  return (
    <div className="absolute right-4 top-4 z-20">
      {session ? (
        <div className="flex items-center space-x-2">
          {/* TODO: Replace with user avatar and dropdown */}
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold">?</div>
          <span className="text-sm text-gray-700">User</span>
          <button onClick={() => signOut()} className="ml-2 px-2 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300">Sign out</button>
        </div>
      ) : (
        <button onClick={() => signIn()} className="px-3 py-1 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition-all text-sm font-semibold">Sign In</button>
      )}
    </div>
  );
}
