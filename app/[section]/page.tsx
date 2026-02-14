import ModuleCard from "../../components/ModuleCard";
import Link from "next/link";
import content from "../../data/content.json";

type PageProps = { params: { section: string; module: string } | Promise<{ section: string; module: string }> };

export default async function ModulePage({ params }: PageProps) {
  const resolvedParams = await params;
  const sectionData = content.sections.find((s) => s.id === resolvedParams.section);

  if (!sectionData) return <div>Section not found</div>;

  const moduleData = sectionData.modules.find((m) => m.title === resolvedParams.module);

  if (!moduleData) return <div>Module not found</div>;

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-12 flex flex-col">
      <h1 className="text-3xl font-bold text-cyan-400 mb-4">{moduleData.title}</h1>
      <p className="text-slate-400 mb-6 max-w-2xl">{moduleData.content}</p>

      {/* If the module has an image, display it */}
      {moduleData.image && (
        <img
          src={moduleData.image}
          alt={moduleData.title}
          className="rounded-lg shadow-lg max-w-full h-auto mb-6"
        />
      )}

      <Link href={`/${sectionData.id}`}>
        <button className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600">
          ← Back to {sectionData.title}
        </button>
      </Link>
    </main>
  );
}
