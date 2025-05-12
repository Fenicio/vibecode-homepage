"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewSuccessStoryPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if (!title.trim()) {
      setError("Title is required");
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("/api/success-stories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, summary })
      });
      if (!res.ok) throw new Error("Failed to create success story");
      const data = await res.json();
      router.push(`/success-stories/${data.id}`);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Error creating success story");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: 40 }}>
      <h1>Add New Success Story</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Title *</label>
          <input value={title} onChange={e => setTitle(e.target.value)} className="border px-2 py-1 w-full" required />
        </div>
        <div>
          <label className="block font-medium">Summary</label>
          <textarea value={summary} onChange={e => setSummary(e.target.value)} className="border px-2 py-1 w-full" />
        </div>
        {error && <p className="text-red-600">{error}</p>}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded" disabled={loading}>
          {loading ? "Saving..." : "Create Story"}
        </button>
      </form>
    </main>
  );
}
