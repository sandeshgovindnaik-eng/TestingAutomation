import content from "../data/content.json";
import SectionCard from "../components/SectionCard";

export default function Page() {
    return (
        <main className="min-h-screen bg-slate-950 text-white px-6 py-12">
            {/* Page Title */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 text-center mb-12">
                Automation Testing & DevOps Academy
            </h1>

            {/* Sections Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 mb-12">
                {content.sections.map((section) => (
                    <SectionCard
                        key={section.id}
                        id={section.id}
                        title={section.title}
                        description={section.description}
                        image={section.image} // your section image
                    />
                ))}
            </section>

            {/* About Author Section */}
            <section className="bg-slate-900 rounded-lg p-8 max-w-4xl mx-auto mt-16 shadow-lg">
                <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
                    About the Author
                </h2>

                <div className="flex flex-col md:flex-row items-center gap-6">
                    {/* Author Photo */}
                    <img
                        src="/images/1604.jpg" // place your photo in public/images/
                        alt="Author Photo"
                        className="w-40 h-40 rounded-full object-cover border-4 border-cyan-400"
                    />

                    {/* Author Details */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-semibold mb-2">Sandesh Govind Naik</h3>
                        <p className="text-gray-300 mb-2">
                            Automation & DevOps Engineer | Passionate about testing, CI/CD pipelines, and building quality software.
                        </p>
                        <p className="text-gray-400">
                            I create tutorials, courses, and content to help developers and testers level up their automation skills.
                        </p>

                        {/* Optional Social Links */}
                        <div className="flex justify-center md:justify-start gap-4 mt-4">
                            <a
                                href="https://github.com/sandeshgovindnaik-eng"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan-400 hover:text-white transition"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sandeshgovindnaik/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan-400 hover:text-white transition"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
