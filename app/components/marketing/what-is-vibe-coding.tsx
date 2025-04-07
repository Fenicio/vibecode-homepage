import Link from 'next/link';

export function WhatIsVibeCoding() {
  return (
    <section className="w-full max-w-5xl">
      <h2 className="text-4xl font-bold mb-4">What Is Vibe Coding?</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        A spectrum of AI-driven development methodologies prioritizing intuition,
        rapid experimentation, and minimal manual coding.
      </p>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-center gap-4 text-sm">
          <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded">Prompt</div>
          <div className="text-gray-500">→</div>
          <div className="px-4 py-2 bg-green-100 dark:bg-green-900 rounded">Generate</div>
          <div className="text-gray-500">→</div>
          <div className="px-4 py-2 bg-purple-100 dark:bg-purple-900 rounded">Refine</div>
        </div>
        <Link 
          href="/intro"
          className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline"
        >
          Intro to Vibe Coding →
        </Link>
      </div>
    </section>
  );
}
