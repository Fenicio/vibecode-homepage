"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface GlossaryItem {
  id: number;
  term: string;
  slug: string;
  definition: string;
}

export default function GlossaryPage() {
  const [items, setItems] = useState<GlossaryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/glossary")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);

  return (
    <main style={{ padding: 40 }}>
      <h1>Glossary</h1>
      <Link href="/glossary/new" className="inline-block mb-4 px-4 py-2 bg-blue-600 text-white rounded">Add New Term</Link>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id} className="mb-2">
              <Link href={`/glossary/${item.id}`} className="text-blue-700 underline">
                {item.term}
              </Link>
              <span className="ml-2 text-gray-500">{item.definition.substring(0, 60)}...</span>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
