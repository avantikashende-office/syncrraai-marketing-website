import { LucideIcon } from "lucide-react";

type PainPointsCardProps = {
  title: string;
  description: string;

  beforeLabel?: string;
  beforeDescription?: string;

  icon?: LucideIcon;
  iconColor?: string;
};

export default function PainPointsCard({
  title,
  description,
  beforeLabel = "Before Syncra",
  beforeDescription,
  icon: Icon,
  iconColor = "#39D373",
}: PainPointsCardProps) {
  return (
    <div className="relative rounded-xl bg-[#171717] p-8 transition-all space-y-4 duration-300 ">
      {Icon && (
        <div className="flex h-10 w-10 items-center justify-center rounded-lg">
          <Icon className="h-10 w-10" style={{ color: iconColor }} />
        </div>
      )}
      <h3 className="text-white text-2xl font-semibold ">{title}</h3>
      <p className="subtitle-side">
        {description}
      </p>

      {beforeDescription && (
        <div className="border-t border-[#404040] py-6">
          <p className="text-white text-2xl ">
            {beforeLabel}
          </p>
      <p className="subtitle-side">
            {beforeDescription}
          </p>
        </div>
      )}
    </div>
  );
}
