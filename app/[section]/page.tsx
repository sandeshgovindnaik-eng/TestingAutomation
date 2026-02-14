import ModuleCard from "../../components/ModuleCard";
import Link from "next/link";
import content from "../../data/content.json";

type PageProps = { params: { section: string } };

export default async function SectionPage({ params }: PageProps) {
  const resolvedParams = await params;

  // Fetch JSON from public folder
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ""}/data/content.json`);
  const content = await res.json();

  const sectionData = content.sections.find((s: any) => s.id === resolvedParams.section);

  if (!sectionData) return <div>Section not found</div>;

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-12 flex flex-col">
      <h1 className="text-4xl font-bold text-cyan-400 mb-6">{sectionData.title}</h1>
      <p className="text-slate-400 mb-8 max-w-2xl">{sectionData.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 mb-8">
        {sectionData.modules.map((module: any) => (
          <ModuleCard
            key={module.title}
            sectionId={sectionData.id}
            moduleId={module.title}
            title={module.title}
            content={module.content}
            image={module.image}
          />
        ))}
      </div>

      {/* Back button at the bottom */}
      <div className="mt-auto">
        <Link href="/">
          <button className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600">
            ← Back to Home
          </button>
        </Link>
      </div>
    </main>
  );
}
