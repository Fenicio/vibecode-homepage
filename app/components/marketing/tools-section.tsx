import Image from 'next/image';
import Link from 'next/link';

const tools = [
  {
    name: 'ChatGPT',
    description: 'AI coding assistant for natural language programming',
    icon: '/chatgpt.svg',
  },
  {
    name: 'Cursor',
    description: 'Code editor with native GitHub Copilot integration and AI chat',
    icon: '/cursor.svg',
  },
  {
    name: 'Windsor',
    description: 'AI-powered web development with visual editing',
    icon: '/windsor.svg',
  },
  {
    name: 'Replit',
    description: 'Browser-based IDE with GhostWriter AI assistance',
    icon: '/replit.svg',
  },
  {
    name: 'GitHub Copilot',
    description: 'AI pair programmer with code suggestions',
    icon: '/github-copilot.svg',
  },
  {
    name: 'Codeium',
    description: 'AI code completion and assistance',
    icon: '/codeium.svg',
  },
  {
    name: 'Vercel',
    description: 'Front-end deployment platform with instant updates',
    icon: '/vercel.svg',
  },
  {
    name: 'GitHub Desktop',
    description: 'Simplified version control interface',
    icon: '/github-desktop.svg',
  },
  {
    name: 'Figma',
    description: 'UI design and prototyping platform',
    icon: '/figma.svg',
  },
  {
    name: 'Webflow',
    description: 'Visual web development platform',
    icon: '/webflow.svg',
  },
  {
    name: 'Notion',
    description: 'Documentation and workspace organization',
    icon: '/notion.svg',
  },
  {
    name: 'Obsidian',
    description: 'Knowledge management and documentation',
    icon: '/obsidian.svg',
  }
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
    </section>
  );
}
