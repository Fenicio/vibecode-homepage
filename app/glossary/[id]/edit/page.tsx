"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditGlossaryPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params as { id: string };
  const [term, setTerm] = useState("");
  const [definition, setDefinition] = useState("");
  const [slug, setSlug] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`/api/glossary/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && !data.error) {
          setTerm(data.term);
          setDefinition(data.definition);
          setSlug(data.slug || "");
        }
        setLoading(false);
      });
  }, [id]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const res = await fetch(`/api/glossary/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ term, definition, slug }),
    });
    if (res.ok) {
      router.push(`/glossary/${id}`);
    } else {
      setError("Failed to update term");
    }
  }

  if (loading) return <main style={{padding: 40}}><p>Loading...</p></main>;

  return (
    <main style={{padding: 40}}>
      <h1>Edit Glossary Term</h1>
      <form onSubmit={handleSubmit} className="flex flex-col max-w-md">
        <label>Term</label>
        <input value={term} onChange={e => setTerm(e.target.value)} required className="mb-2 border px-2 py-1" />
        <label>Slug</label>
        <input value={slug} onChange={e => setSlug(e.target.value)} required className="mb-2 border px-2 py-1" />
        <label>Definition</label>
        <textarea value={definition} onChange={e => setDefinition(e.target.value)} required className="mb-2 border px-2 py-1" rows={6} />
        {error && <p className="text-red-600">{error}</p>}
        <div className="flex gap-2">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Update</button>
          <button type="button" onClick={() => router.push(`/glossary/${id}`)} className="bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>
        </div>
      </form>
    </main>
  );
}
