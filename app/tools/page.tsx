"use client";
import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";

interface ToolItem {
  id: number;
  name: string;
  description: string;
  category: string | null;
}

export default function ToolsPage() {
  const [items, setItems] = useState<ToolItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    fetch("/api/tools")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = items
      .map((item) => item.category)
      .filter((cat): cat is string => cat !== null && cat !== "");
    return Array.from(new Set(cats)).sort();
  }, [items]);

  // Filter items based on search and category
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch =
        searchQuery === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [items, searchQuery, selectedCategory]);

  return (
    <main style={{ padding: 40 }}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Tools</h1>

        {/* Search and Filter Controls */}
        <div className="mb-6 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search tools by name or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div className="sm:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-sm text-gray-600">
            Showing {filteredItems.length} of {items.length} tools
            {searchQuery && ` matching "${searchQuery}"`}
            {selectedCategory !== "all" && ` in ${selectedCategory}`}
          </div>
        </div>

        {/* Add New Tool Button */}
        <Link
          href="/tools/new"
          className="inline-block mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Add New Tool
        </Link>

        {/* Tools List */}
        {loading ? (
          <p>Loading...</p>
        ) : filteredItems.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p>No tools found.</p>
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-2 text-blue-600 hover:underline"
              >
                Clear filters
              </button>
            )}
          </div>
        ) : (
          <ul className="space-y-3">
            {filteredItems.map((item) => (
              <li key={item.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <Link
                      href={`/tools/${item.id}`}
                      className="text-lg font-medium text-blue-700 hover:text-blue-900 hover:underline"
                    >
                      {item.name}
                    </Link>
                    {item.category && (
                      <span className="ml-3 inline-block px-2 py-1 text-xs bg-gray-200 rounded">
                        {item.category}
                      </span>
                    )}
                    {item.description && (
                      <p className="mt-1 text-gray-600 text-sm">
                        {item.description.length > 120
                          ? `${item.description.substring(0, 120)}...`
                          : item.description}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
