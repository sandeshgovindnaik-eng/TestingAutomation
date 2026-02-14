import { useState } from "react";

type ModuleCardProps = {
  sectionId: string;
  moduleId: string;
  title: string;
  content: string;
  image: string;
};

export default function ModuleCard({ title, content, image }: ModuleCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-slate-900 border border-slate-800 rounded-lg p-4 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <h3 className="text-lg font-semibold text-cyan-300">{title}</h3>

      {isOpen && (
        <div className="mt-4">
          <img src={image} alt={title} className="w-full rounded-lg mb-3" />
          <p className="text-slate-400">{content}</p>
        </div>
      )}
    </div>
  );
}
