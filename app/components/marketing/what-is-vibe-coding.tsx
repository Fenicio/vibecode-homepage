import Link from 'next/link';

export function WhatIsVibeCoding() {
  return (
    <section className="w-full max-w-3xl mx-auto text-center py-4" id="main-action">
      <h2 className="text-3xl font-bold mb-2">Vibe Coding</h2>
      <p className="text-base text-gray-700 dark:text-gray-200 mb-4">
        AI-powered coding. Intuitive. Fast. Minimal effort.
      </p>
      <div className="flex items-center justify-center gap-2 text-xs mb-2">
        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded">Prompt</span>
        <span className="text-gray-400">→</span>
        <span className="px-3 py-1 bg-green-100 dark:bg-green-900 rounded">Generate</span>
        <span className="text-gray-400">→</span>
        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 rounded">Refine</span>
      </div>
      <Link 
        href="/intro"
        className="inline-block text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium mb-0"
      >
        What is Vibe Coding? →
      </Link>
    </section>
  );
}
