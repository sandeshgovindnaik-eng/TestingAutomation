import Link from "next/link";

type SectionCardProps = {
    id: string;
    title: string;
    description: string;
    image?: string; // <-- add optional image prop
};

export default function SectionCard({ id, title, description, image }: SectionCardProps) {
    return (
        <Link href={`/${id}`}>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer h-full flex flex-col">

                {/* Render image if provided */}
                {image && (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                )}

                <h2 className="text-xl font-bold text-cyan-300 mb-2">{title}</h2>
                <p className="text-slate-400 flex-1">{description}</p>
            </div>
        </Link>
    );
}
