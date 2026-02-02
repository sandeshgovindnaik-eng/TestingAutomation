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

    return (
        <main className="min-h-screen bg-slate-950 text-white px-6 py-12 flex flex-col">
            <h1 className="text-3xl font-bold text-cyan-400">{moduleData.title}</h1>
            <p className="text-slate-300 mt-4 mb-8">{moduleData.content}</p>

            {/* Back button at the bottom */}
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
