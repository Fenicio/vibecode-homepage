"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function ToolDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params as { id: string };
  interface ToolItem {
    name: string;
    description: string;
    error?: string;
  }
  const [item, setItem] = useState<ToolItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/tools/${id}`)
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
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <Link href={`/tools/${id}/edit`} className="mr-4 text-blue-600 underline">Edit</Link>
      <button
        className="text-red-600 underline"
        onClick={async () => {
          await fetch(`/api/tools/${id}`, { method: "DELETE" });
          router.push("/tools");
        }}
      >Delete</button>
      <br />
      <Link href="/tools" className="inline-block mt-4">Back to Tools</Link>
    </main>
  );
}
