import content from "../../../data/content.json";
import Link from "next/link";

type ModulePageProps = {
  params: { section: string; module: string } | Promise<{ section: string; module: string }>;
};

export default async function ModulePage({ params }: ModulePageProps) {
  const resolvedParams = await params;
  const { section, module } = resolvedParams;

  const moduleName = decodeURIComponent(module);

  const sectionData = content.sections.find((s) => s.id === section);
  if (!sectionData) return <div>Section not found</div>;

  const moduleData = sectionData.modules.find((m) => m.title === moduleName);
  if (!moduleData) return <div>Module not found</div>;

  // Ensure content is always an array for multi-line handling
  const contentLines = Array.isArray(moduleData.content)
    ? moduleData.content
    : moduleData.content.split("\n");

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-12 flex flex-col">
      {/* Module Title */}
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">{moduleData.title}</h1>

      {/* Module Image (only if exists) */}
      {moduleData.image && (
        <img
          src={moduleData.image} // e.g., "/images/sdlc_stlc.png"
          alt={moduleData.title}
          className="w-full max-w-3xl h-auto rounded-lg mb-6 object-cover shadow-lg"
        />
      )}

      {/* Module Content */}
      <div className="text-slate-300 max-w-3xl mb-8">
        {contentLines.map((line, idx) => (
          <p key={idx} className="mb-2">
            {line}
          </p>
        ))}
      </div>

      {/* Back Button */}
      <div className="mt-auto">
        <Link href={`/${section}`}>
          <button className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600">
            ← Back to {sectionData.title}
          </button>
        </Link>
      </div>
    </main>
  );
}
