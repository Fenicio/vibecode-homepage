import Image from 'next/image';
import Link from 'next/link';

const tools = [
  {
    name: 'ChatGPT',
    description: 'AI coding assistant',
    icon: '/chatgpt.svg',
  },
  {
    name: 'Cursor',
    description: 'Code editor with built-in AI',
    icon: '/cursor.svg',
  },
  {
    name: 'Replit',
    description: 'Collaborative online IDE',
    icon: '/replit.svg',
  },
  {
    name: 'Vercel',
    description: 'Front-end deployment platform',
    icon: '/vercel.svg',
  },
];

export function ToolsSection() {
  return (
    <section className="w-full max-w-5xl">
      <h2 className="text-4xl font-bold mb-6">Tools</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {tools.map((tool) => (
          <div 
            key={tool.name}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm flex items-center gap-4"
          >
            <div className="w-8 h-8 relative">
              <Image
                src={tool.icon}
                alt={`${tool.name} icon`}
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-semibold">{tool.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Link 
        href="/tools"
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        Explore Tools →
      </Link>
    </section>
  );
}
