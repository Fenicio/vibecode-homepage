"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditToolPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params as { id: string };
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [icon, setIcon] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");
  const [createdAt, setCreatedAt] = useState<string | null>(null);
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`/api/tools/${id}`)
      .then(res => res.json())
      .then(data => {
        setName(data.name || "");
        setDescription(data.description || "");
        setUrl(data.url || "");
        setIcon(data.icon || "");
        setSlug(data.slug || "");
        setCategory(data.category || "");
        setCreatedAt(data.created_at ? new Date(data.created_at).toLocaleString() : null);
        setUpdatedAt(data.updated_at ? new Date(data.updated_at).toLocaleString() : null);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load tool");
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    if (!name.trim()) {
      setError("Name is required");
      setSaving(false);
      return;
    }
    try {
      const res = await fetch(`/api/tools/${id}`, {
        method: "PUT",
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
      if (!res.ok) throw new Error("Failed to update tool");
      router.push(`/tools/${id}`);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Error updating tool");
      }
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <main style={{ padding: 40 }}><p>Loading...</p></main>;

  return (
    <main style={{ padding: 40 }}>
      <h1>Edit Tool</h1>
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
        {id && (
          <div>
            <label className="block font-medium">ID</label>
            <input value={id} className="border px-2 py-1 w-full bg-gray-100" readOnly />
          </div>
        )}
        {createdAt && (
          <div>
            <label className="block font-medium">Created At</label>
            <input value={createdAt} className="border px-2 py-1 w-full bg-gray-100" readOnly />
          </div>
        )}
        {updatedAt && (
          <div>
            <label className="block font-medium">Updated At</label>
            <input value={updatedAt} className="border px-2 py-1 w-full bg-gray-100" readOnly />
          </div>
        )}
        {error && <p className="text-red-600">{error}</p>}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded" disabled={saving}>
          {saving ? "Saving..." : "Update Tool"}
        </button>
      </form>
    </main>
  );
}
