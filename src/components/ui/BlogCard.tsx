import Link from "next/link";

interface BlogCardProps {
  data: {
    id: number;
    title: string;
    description: string;
    author: string;
    authorAvatar: string;
    date: string;
    image: string;
  };
}

export function BlogCard({ data }: BlogCardProps) {
  return (
    <Link href={`/blog/${data.id}`} className="block">
      <div className="rounded-2xl bg-black text-white shadow-lg transition hover:-translate-y-1 hover:cursor-pointer">
        {/* Image */}
        <div className="overflow-hidden rounded-xl">
          <img
            src={data.image}
            alt={data.title}
            className="h-[220px] w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-3 p-5">
          <h3 className="text-base font-semibold leading-snug">{data.title}</h3>

          <p className="text-sm leading-relaxed text-neutral-400">
            {data.description}
          </p>

          <div className="flex items-center gap-2 pt-2 text-xs text-neutral-400">
            <img
              src={data.authorAvatar}
              alt={data.author}
              className="h-5 w-5 rounded-full object-cover"
            />
            <span>By {data.author}</span>
            <span className="text-sm leading-none">•</span>
            <span>{data.date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
