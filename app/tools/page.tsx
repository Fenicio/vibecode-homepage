"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface ToolItem {
  id: number;
  name: string;
  description: string;
}

export default function ToolsPage() {
  const [items, setItems] = useState<ToolItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/tools")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);

  return (
    <main style={{ padding: 40 }}>
      <h1>Tools</h1>
      <Link href="/tools/new" className="inline-block mb-4 px-4 py-2 bg-blue-600 text-white rounded">Add New Tool</Link>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id} className="mb-2">
              <Link href={`/tools/${item.id}`} className="text-blue-700 underline">
                {item.name}
              </Link>
              <span className="ml-2 text-gray-500">{item.description?.substring(0, 60)}...</span>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
