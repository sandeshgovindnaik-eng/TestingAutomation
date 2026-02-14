import Link from "next/link";

type ModuleCardProps = {
  sectionId: string;
  moduleId: string;
  title: string;
  description?: string; // optional
};

export default function ModuleCard({
  sectionId,
  moduleId,
  title,
  description,
}: ModuleCardProps) {
  return (
    <Link
      href={`/${sectionId}/${encodeURIComponent(moduleId)}`}
      className="block cursor-pointer"
    >
      <div className="flex flex-col h-full bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition">
        <h3 className="text-lg font-semibold text-cyan-300">{title}</h3>
        {description && (
          <p className="text-slate-400 text-sm mt-2 line-clamp-3">{description}</p>
        )}
      </div>
    </Link>
  );
}
