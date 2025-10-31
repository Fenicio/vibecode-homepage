"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
}

export default function EditProfilePage() {
  const { status } = useSession();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    first_name: "",
    last_name: "",
    bio: "",
    experience_level: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

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
        const data: UserProfile = await res.json();
        setFormData({
          name: data.name || "",
          first_name: data.first_name || "",
          last_name: data.last_name || "",
          bio: data.bio || "",
          experience_level: data.experience_level || "",
        });
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching profile:", error);
      setLoading(false);
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setSaving(true);

    try {
      const res = await fetch("/api/users/me", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setTimeout(() => {
          router.push("/profile");
        }, 1500);
      } else {
        const data = await res.json();
        setError(data.error || "Failed to update profile");
      }
    } catch {
      setError("An unexpected error occurred");
    } finally {
      setSaving(false);
    }
  }

  if (loading || status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="bg-white rounded-lg border p-8">
        <h1 className="text-3xl font-bold mb-6">Edit Profile</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Username
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="Your username"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="first_name" className="block text-sm font-medium mb-1">
                First Name
              </label>
              <input
                id="first_name"
                name="first_name"
                type="text"
                value={formData.first_name}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="First name"
              />
            </div>

            <div>
              <label htmlFor="last_name" className="block text-sm font-medium mb-1">
                Last Name
              </label>
              <input
                id="last_name"
                name="last_name"
                type="text"
                value={formData.last_name}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="Last name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="experience_level" className="block text-sm font-medium mb-1">
              Experience Level
            </label>
            <select
              id="experience_level"
              name="experience_level"
              value={formData.experience_level}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Select experience level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="expert">Expert</option>
            </select>
          </div>

          <div>
            <label htmlFor="bio" className="block text-sm font-medium mb-1">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={6}
              className="w-full border rounded px-3 py-2"
              placeholder="Tell us about yourself..."
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}
          {success && (
            <p className="text-green-600 text-sm">
              Profile updated successfully! Redirecting...
            </p>
          )}

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={saving}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:bg-blue-400"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
            <button
              type="button"
              onClick={() => router.push("/profile")}
              className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
