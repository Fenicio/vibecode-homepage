import Link from 'next/link';

export function QuickStart() {
  return (
    <section className="w-full max-w-5xl">
      <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
        <span>Quick Start</span>
        <span className="text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></span>
      </h2>
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
