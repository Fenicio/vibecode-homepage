"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewToolPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [icon, setIcon] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if (!name.trim()) {
      setError("Name is required");
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("/api/tools", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          description: description || null,
          url: url || null,
          icon: icon || null,
          slug: slug || null,
          category: category || null
        })
      });
      if (!res.ok) throw new Error("Failed to create tool");
      const data = await res.json();
      router.push(`/tools/${data.id}`);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Error creating tool");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: 40 }}>
      <h1>Add New Tool</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Name *</label>
          <input value={name} onChange={e => setName(e.target.value)} className="border px-2 py-1 w-full" required />
        </div>
        <div>
          <label className="block font-medium">Description</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} className="border px-2 py-1 w-full" />
        </div>
        <div>
          <label className="block font-medium">URL</label>
          <input value={url} onChange={e => setUrl(e.target.value)} className="border px-2 py-1 w-full" placeholder="https://..." />
        </div>
        <div>
          <label className="block font-medium">Icon (URL or emoji)</label>
          <input value={icon} onChange={e => setIcon(e.target.value)} className="border px-2 py-1 w-full" placeholder=":rocket: or https://..." />
        </div>
        <div>
          <label className="block font-medium">Slug</label>
          <input value={slug} onChange={e => setSlug(e.target.value)} className="border px-2 py-1 w-full" placeholder="unique-slug" />
        </div>
        <div>
          <label className="block font-medium">Category</label>
          <input value={category} onChange={e => setCategory(e.target.value)} className="border px-2 py-1 w-full" placeholder="category" />
        </div>
        {error && <p className="text-red-600">{error}</p>}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded" disabled={loading}>
          {loading ? "Saving..." : "Create Tool"}
        </button>
      </form>
    </main>
  );
}
