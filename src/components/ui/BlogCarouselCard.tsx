import Button from "./Button";

export interface BlogItem {
  id: number;
  title: string;
  image: string;
  author: string;
  authorAvatar: string;
  date: string;
}

export interface BlogCarouselCardProps {
  data: {
    title: string;
    image: string;
    author: string;
    authorAvatar: string;
    date: string;
  };
  active?: boolean;
}

export function BlogCarouselCard({
  data,
  active = false,
}: BlogCarouselCardProps) {
  return (
    <div
      className={`relative h-[420px] w-full overflow-hidden rounded-xl text-white shadow-xl transition-all ${
        active ? " " : "opacity-90"
      }`}
    >
      {/* Background Image */} 
      <img
        src={data.image}
        alt={data.title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end p-6">
        {/* Title (INCREASED SIZE) */}
        <h3 className="max-w-[90%] text-2xl leading-snug md:text-3xl">
          {data.title}
        </h3>

        {/* Meta + Button (SAME LINE) */}
        <div className="mt-4 flex items-center justify-between">
          {/* Left meta */}
          <div className="flex items-center gap-3 text-sm text-neutral-300">
            <img
              src={data.authorAvatar}
              alt={data.author}
              className="h-8 w-8 rounded-full object-cover"
            />

            <span>{data.author}</span>

            <span className="text-lg leading-none">•</span>

            <span>{data.date}</span>
          </div>
          <Button variant="outline"> Read</Button>
        </div>
      </div>
    </div>
  );
}
