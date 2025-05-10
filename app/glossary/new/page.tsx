"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewGlossaryPage() {
  const router = useRouter();
  const [term, setTerm] = useState("");
  const [definition, setDefinition] = useState("");
  const [slug, setSlug] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/glossary", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ term, definition, slug }),
    });
    if (res.ok) {
      router.push("/glossary");
    } else {
      setError("Failed to create term");
    }
  }

  return (
    <main style={{padding: 40}}>
      <h1>Add New Glossary Term</h1>
      <form onSubmit={handleSubmit} className="flex flex-col max-w-md">
        <label>Term</label>
        <input value={term} onChange={e => setTerm(e.target.value)} required className="mb-2 border px-2 py-1" />
        <label>Slug</label>
        <input value={slug} onChange={e => setSlug(e.target.value)} required className="mb-2 border px-2 py-1" />
        <label>Definition</label>
        <textarea value={definition} onChange={e => setDefinition(e.target.value)} required className="mb-2 border px-2 py-1" />
        {error && <p className="text-red-600">{error}</p>}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Create</button>
      </form>
    </main>
  );
}
