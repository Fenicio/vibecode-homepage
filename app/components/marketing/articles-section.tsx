import Link from 'next/link';

const articles = [
  {
    title: 'How to Build a Startup in a Weekend with Vibe Coding',
    link: '/articles/startup-weekend',
  },
  {
    title: 'Model Selection for Debugging',
    link: '/articles/model-selection-debugging',
  },
  {
    title: 'Common Vibe Coding Mistakes',
    link: '/articles/common-mistakes',
  },
];

export function ArticlesSection() {
  return (
    <section className="w-full max-w-5xl">
      <h2 className="text-4xl font-bold mb-6">Articles & Tutorials</h2>
      <div className="space-y-4 mb-6">
        {articles.map((article) => (
          <Link
            key={article.link}
            href={article.link}
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.917 1.083h-18a1.833 1.833 0 00-1.834 1.834v18.166a1.833 1.833 0 001.834 1.834h18a1.833 1.833 0 001.833-1.834V2.917a1.833 1.833 0 00-1.833-1.834zm-18 1.834h18v18.166h-18V2.917z"/>
              <path d="M7.75 12h8.5M12 7.75v8.5"/>
            </svg>
            {article.title}
          </Link>
        ))}
      </div>
      <Link 
        href="/articles"
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        All Articles →
      </Link>
    </section>
  );
}
