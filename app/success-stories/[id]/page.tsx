"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function SuccessStoryDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params as { id: string };
  interface SuccessStoryItem {
    title: string;
    summary: string;
    error?: string;
  }
  const [item, setItem] = useState<SuccessStoryItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/success-stories/${id}`)
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
      <h1>{item.title}</h1>
      <p>{item.summary}</p>
      <Link href={`/success-stories/${id}/edit`} className="mr-4 text-blue-600 underline">Edit</Link>
      <button
        className="text-red-600 underline"
        onClick={async () => {
          await fetch(`/api/success-stories/${id}`, { method: "DELETE" });
          router.push("/success-stories");
        }}
      >Delete</button>
      <br />
      <Link href="/success-stories" className="inline-block mt-4">Back to Success Stories</Link>
    </main>
  );
}
