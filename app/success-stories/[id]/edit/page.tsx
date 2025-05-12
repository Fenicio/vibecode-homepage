"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditSuccessStoryPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params as { id: string };
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`/api/success-stories/${id}`)
      .then(res => res.json())
      .then(data => {
        setTitle(data.title || "");
        setSummary(data.summary || "");
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load success story");
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    if (!title.trim()) {
      setError("Title is required");
      setSaving(false);
      return;
    }
    try {
      const res = await fetch(`/api/success-stories/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, summary })
      });
      if (!res.ok) throw new Error("Failed to update success story");
      router.push(`/success-stories/${id}`);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Error updating success story");
      }
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <main style={{ padding: 40 }}><p>Loading...</p></main>;

  return (
    <main style={{ padding: 40 }}>
      <h1>Edit Success Story</h1>
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
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded" disabled={saving}>
          {saving ? "Saving..." : "Update Story"}
        </button>
      </form>
    </main>
  );
}
