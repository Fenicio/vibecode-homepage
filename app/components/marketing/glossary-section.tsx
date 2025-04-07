import Link from 'next/link';

const terms = [
  {
    term: 'Prompt Engineering',
    link: '/glossary/prompt-engineering',
  },
  {
    term: 'Blind Acceptance',
    link: '/glossary/blind-acceptance',
  },
  {
    term: 'Model Selection Strategy',
    link: '/glossary/model-selection',
  },
];

export function GlossarySection() {
  return (
    <section className="w-full max-w-5xl">
      <h2 className="text-4xl font-bold mb-6">Glossary of Terms</h2>
      <div className="space-y-4 mb-6">
        {terms.map((item) => (
          <Link
            key={item.link}
            href={item.link}
            className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm group"
          >
            <span>{item.term}</span>
            <span className="text-gray-400 group-hover:text-blue-500">→</span>
          </Link>
        ))}
      </div>
      <Link 
        href="/glossary"
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        All Terms →
      </Link>
    </section>
  );
}
