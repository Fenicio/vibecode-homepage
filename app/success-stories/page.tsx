"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface SuccessStoryItem {
  id: number;
  title: string;
  summary: string;
}

export default function SuccessStoriesPage() {
  const [items, setItems] = useState<SuccessStoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/success-stories")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);

  return (
    <main style={{ padding: 40 }}>
      <h1>Success Stories</h1>
      <Link href="/success-stories/new" className="inline-block mb-4 px-4 py-2 bg-blue-600 text-white rounded">Add New Story</Link>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id} className="mb-2">
              <Link href={`/success-stories/${item.id}`} className="text-blue-700 underline">
                {item.title}
              </Link>
              <span className="ml-2 text-gray-500">{item.summary?.substring(0, 60)}...</span>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
