import Link from "next/link";

type ModuleCardProps = {
    sectionId: string;
    moduleId: string;
    title: string;
};

export default function ModuleCard({ sectionId, moduleId, title }: ModuleCardProps) {
    return (
        <Link
            href={`/${sectionId}/${encodeURIComponent(moduleId)}`}
            className="block bg-slate-900 border border-slate-800 rounded-lg p-4 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition cursor-pointer"
        >
            <h3 className="text-lg font-semibold text-cyan-300">{title}</h3>
        </Link>
    );
}
