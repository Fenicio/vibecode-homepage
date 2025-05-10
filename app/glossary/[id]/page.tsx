"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function GlossaryDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params as { id: string };
  interface GlossaryItem {
    term: string;
    definition: string;
    error?: string;
  }
  const [item, setItem] = useState<GlossaryItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/glossary/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <main style={{padding: 40}}><p>Loading...</p></main>;
  if (!item || item.error) return <main style={{padding: 40}}><p>Not found</p></main>;

  return (
    <main style={{padding: 40}}>
      <h1>{item.term}</h1>
      <p>{item.definition}</p>
      <Link href={`/glossary/${id}/edit`} className="mr-4 text-blue-600 underline">Edit</Link>
      <button
        className="text-red-600 underline"
        onClick={async () => {
          await fetch(`/api/glossary/${id}`, { method: "DELETE" });
          router.push("/glossary");
        }}
      >Delete</button>
      <br />
      <Link href="/glossary" className="inline-block mt-4">Back to Glossary</Link>
    </main>
  );
}
