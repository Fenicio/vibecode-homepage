import Link from 'next/link';

export function QuickStart() {
  return (
    <section className="w-full max-w-5xl">
      <h2 className="text-4xl font-bold mb-6">Quick Start</h2>
      <ol className="space-y-4 mb-6">
        <li className="flex gap-2">
          <span className="font-semibold">1.</span>
          Choose your stack
        </li>
        <li className="flex gap-2">
          <span className="font-semibold">2.</span>
          Use an AI assistant
        </li>
        <li className="flex gap-2">
          <span className="font-semibold">3.</span>
          Start coding!
        </li>
      </ol>
      <Link 
        href="/tools"
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        Tooling Recommendations →
      </Link>
    </section>
  );
}
