import content from "../data/content.json";
import SectionCard from "../components/SectionCard";

export default function Page() {
    return (
        <main className="min-h-screen bg-slate-950 text-white px-6 py-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 text-center mb-12">
                Automation Testing & DevOps Academy
            </h1>

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 mb-8">
                {content.sections.map((section) => (
                    <SectionCard
                        key={section.id}
                        id={section.id}
                        title={section.title}
                        description={section.description}
                        image={section.image} // <-- pass the image here
                    />
                ))}
            </section>
        </main>
    );
}
