import { neon } from '@neondatabase/serverless';
import { InlineSVG } from './InlineSVG';

interface Tool {
  id: number;
  toolname: string;
  description: string;
  svgicon: string;
}

export default async function ToolsSection() {
  const sql = neon(process.env.POSTGRES_URL!);
  const result = await sql`SELECT id, toolName, description, svgIcon FROM vibe_tools ORDER BY id ASC;`;
  const tools: Tool[] = (result) as Tool[];

  return (
    <section className="w-full max-w-5xl">
      <h2 className="text-4xl font-bold mb-6">Tools</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm flex items-center gap-4"
          >
            <div className="w-8 h-8 relative">
              <InlineSVG svg={tool.svgicon} />
            </div>
            <div>
              <h3 className="font-semibold">{tool.toolname}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
