import Image from "next/image";

type PeopleCardProps = {
  imageSrc: string;
  name: string;
  designation: string;
};

const PeopleCard = ({ imageSrc, name, designation }: PeopleCardProps) => {
  return (
    <div className="peoplecard-wrapper group image-reveal-color">
      {/* GREEN GLOW */}
      <div
        className="pointer-events-none absolute inset-x-6 bottom-8 z-0
      h-32 rounded-full bg-green-500/60 blur-3xl
      opacity-0 transition-opacity duration-300
      group-hover:opacity-100"
      />

      {/* CARD */}
      <div className="relative overflow-hidden rounded-xl">
        {/* IMAGE */}
        <div className="relative w-full aspect-[3/4] overflow-hidden">
          <Image
            src={imageSrc}
            alt={name}
            fill
            priority
            className="object-cover "
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 -translate-y-1/2 px-[10%]">
          <div className="flex flex-col items-center rounded-lg bg-[#171717] px-[6%] py-[10%]">
            <p className="text-xl">{name}</p>
            <p className="text-subdescription">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
