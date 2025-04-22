// Helper to render SVG from string
export function InlineSVG({ svg }: { svg: string; }) {
  return (
    <span
      className="w-8 h-8 block"
      dangerouslySetInnerHTML={{ __html: svg }}
      aria-hidden="true" />
  );
}
