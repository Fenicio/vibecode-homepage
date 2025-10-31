"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

interface UserProfile {
  id: number;
  email: string;
  name: string | null;
  first_name: string | null;
  last_name: string | null;
  bio: string | null;
  avatar: string | null;
  image: string | null;
  experience_level: string | null;
  created_at: string;
}

export default function ProfilePage() {
  const { status } = useSession();
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin");
      return;
    }

    if (status === "authenticated") {
      fetchProfile();
    }
  }, [status, router]);

  async function fetchProfile() {
    try {
      const res = await fetch("/api/users/me");
      if (res.ok) {
        const data = await res.json();
        setProfile(data);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching profile:", error);
      setLoading(false);
    }
  }

  if (loading || status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Profile not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-white rounded-lg border p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            {(profile.image || profile.avatar) && (
              <img
                src={profile.image || profile.avatar || ""}
                alt={profile.name || "User"}
                className="w-24 h-24 rounded-full"
              />
            )}
            <div>
              <h1 className="text-3xl font-bold">{profile.name || "Anonymous"}</h1>
              <p className="text-gray-600">{profile.email}</p>
              {profile.experience_level && (
                <p className="text-sm text-gray-500 mt-1">
                  Experience: {profile.experience_level}
                </p>
              )}
            </div>
          </div>

          <Link
            href="/profile/edit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Edit Profile
          </Link>
        </div>

        <div className="space-y-4">
          {(profile.first_name || profile.last_name) && (
            <div>
              <h2 className="text-sm font-medium text-gray-500">Full Name</h2>
              <p className="text-lg">
                {[profile.first_name, profile.last_name].filter(Boolean).join(" ")}
              </p>
            </div>
          )}

          {profile.bio && (
            <div>
              <h2 className="text-sm font-medium text-gray-500">Bio</h2>
              <p className="text-lg">{profile.bio}</p>
            </div>
          )}

          <div>
            <h2 className="text-sm font-medium text-gray-500">Member Since</h2>
            <p className="text-lg">
              {new Date(profile.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
