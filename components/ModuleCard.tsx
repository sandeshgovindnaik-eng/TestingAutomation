import Link from "next/link";

type ModuleCardProps = {
    sectionId: string;
    moduleId: string;
    title: string;
    image?: string; // <-- add optional image prop
};

export default function ModuleCard({ sectionId, moduleId, title,image }: ModuleCardProps) {
    return (
        <Link
            href={`/${sectionId}/${encodeURIComponent(moduleId)}`}
            className="block bg-slate-900 border border-slate-800 rounded-lg p-4 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition cursor-pointer"
        >
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer h-full flex flex-col">

                        {/* Render image if provided */}
                        {image && (
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-40 object-cover rounded-lg mb-4"
                            />
                        )}
                    </div>
            <h3 className="text-lg font-semibold text-cyan-300">{title}</h3>
        </Link>
    );
}
