import Link from 'next/link';
import { Twitter, Github, BookOpen } from 'lucide-react';

interface VibeCodingFigure {
  name: string;
  role: string;
  affiliation?: string;
  contribution: string;
  year?: number;
  platform?: string;
  notable_work?: string;
}

const vibeCodingFigures: VibeCodingFigure[] = [
  {
    name: "Andrej Karpathy",
    role: "Creator/Originator",
    affiliation: "OpenAI co-founder",
    contribution: "Coined the term Vibe Coding",
    year: 2024,
    platform: "Twitter"
  },
  {
    name: "Peter Levels",
    role: "Early adopter/Popularizer",
    contribution: "Three.js flight simulator project",
    notable_work: "Flight simulator implementation"
  },
  {
    name: "David Andre",
    role: "Implementer",
    contribution: "Startup development implementation and documentation"
  },
  {
    name: "Matthew Berman",
    role: "Educator",
    contribution: "Vibe Coding Tutorial and Best Practices",
    year: 2025
  },
  {
    name: "David Ondrej",
    role: "Contributor",
    contribution: "Educational content"
  },
  {
    name: "Nick Saraev",
    role: "Contributor",
    contribution: "AI automation expertise"
  }
];

const distributionPlatforms = ["Twitter", "Reddit"];

export function SocialSection() {
  return (
    <section className="w-full max-w-5xl py-12">
      <h2 className="text-4xl font-bold mb-8">Community & Key Figures</h2>
      
      {/* Key Figures Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {vibeCodingFigures.map((figure, index) => (
          <div 
            key={index}
            className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
          >
            <h3 className="font-bold text-lg mb-2">{figure.name}</h3>
            <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">{figure.role}</p>
            {figure.affiliation && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{figure.affiliation}</p>
            )}
            <p className="text-sm">{figure.contribution}</p>
            {figure.notable_work && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{figure.notable_work}</p>
            )}
            {figure.year && (
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">{figure.year}</p>
            )}
          </div>
        ))}
      </div>

      {/* Social Platforms */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold mb-4">Join the Movement</h3>
        <div className="flex flex-wrap gap-4">
          {distributionPlatforms.map((platform, index) => (
            <Link
              key={index}
              href={`https://${platform.toLowerCase()}.com/hashtag/vibecoding`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {platform === "Twitter" ? (
                <Twitter className="w-4 h-4" />
              ) : (
                <BookOpen className="w-4 h-4" />
              )}
              #{platform.toLowerCase()}/vibecoding
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Link 
            href="/community"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            Explore the Community
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
