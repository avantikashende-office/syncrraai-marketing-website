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
      className={`blog-carousel-card-wrapper  ${active ? " " : "opacity-90"}`}
    >
      {/* Background Image */}
      <img src={data.image} alt={data.title} className="blog-carousel-img" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="blog-carousel-content ">
        <h3 className="blog-carousel-title">{data.title}</h3>

        <div className="blog-carousel-bottom-content-wrapper">
          {/* Left meta */}
          <div className="blog-carousel-bottom-content ">
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
