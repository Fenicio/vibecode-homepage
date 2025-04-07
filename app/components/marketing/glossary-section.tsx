import Link from 'next/link';

const terms = [
  {
    term: 'Prompt Engineering',
    link: '/glossary/prompt-engineering',
    description: 'Art of crafting effective prompts for AI code generation'
  },
  {
    term: 'Blind Acceptance',
    link: '/glossary/blind-acceptance',
    description: 'Practice of accepting AI suggestions without detailed review'
  },
  {
    term: 'Model Selection Strategy',
    link: '/glossary/model-selection',
    description: 'Choosing appropriate AI models for different coding tasks'
  },
  {
    term: 'Intuition-Driven Process',
    link: '/glossary/intuition-driven',
    description: 'Development guided by feel rather than formal specifications'
  },
  {
    term: 'Tool Augmentation',
    link: '/glossary/tool-augmentation',
    description: 'Leveraging AI tools to reduce technical barriers'
  },
  {
    term: 'Iterative Refinement',
    link: '/glossary/iterative-refinement',
    description: 'Continuous testing and adjustment based on immediate feedback'
  },
  {
    term: 'Problem Isolation',
    link: '/glossary/problem-isolation',
    description: 'Breaking complex requirements into AI-solvable chunks'
  },
  {
    term: 'Frequent Committing',
    link: '/glossary/frequent-committing',
    description: 'Preserving working states frequently for experimental branches'
  },
  {
    term: 'Technical Ownership',
    link: '/glossary/technical-ownership',
    description: 'Understanding and maintaining AI-generated code'
  },
  {
    term: 'Rapid Prototyping',
    link: '/glossary/rapid-prototyping',
    description: 'Quick development of functional prototypes using AI'
  },
  {
    term: 'Version Control Strategy',
    link: '/glossary/version-control',
    description: 'Managing AI-assisted code changes and experiments'
  },
  {
    term: 'AI-Assisted Debugging',
    link: '/glossary/ai-debugging',
    description: 'Using AI to identify and fix code issues'
  }
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
            className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm group hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">{item.term}</span>
              <span className="text-gray-400 group-hover:text-blue-500">→</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
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
