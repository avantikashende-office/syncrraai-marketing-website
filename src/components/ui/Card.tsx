import { ArrowUp, ArrowUpRight, LucideIcon } from "lucide-react";
import Image from "next/image";
import Button from "./Button";

type CardProps = {
  icon?: LucideIcon;
  title: string;
  description: string;
  imageIcon?: string;
  buttonLabel?: string;
  buttonOnClick?: () => void;
};

export default function Card({
  icon: Icon,
  title,
  description,
  imageIcon,
  buttonLabel,
  buttonOnClick,
}: CardProps) {
  return (
    <div
      className={`benefit-card-wrapper group ${
        imageIcon ? "card-base" : ""
      }`}
    >
      {!imageIcon && !buttonLabel && <div className="card-glow" />}
      {/*   OPTIONAL - ICON / IMAGE   */}
      {imageIcon ? (
        <div className="img-box mb-4">
          <Image src={imageIcon} alt={title} width={650} height={6500} />
        </div>
      ) : Icon ? (
        <div className="icon-box !bg-black mb-4">
          <Icon className="w-8 h-8 text-[#39D373] " />
        </div>
      ) : null}

      {/* Title */}
      <h3 className="card-text-title">{title}</h3>

      {/* Description */}
      <p className="card-text-description">{description}</p>

      {/* Optional */}
      {buttonLabel && (
        <div className="mt-4">
          <button onClick={buttonOnClick} className="card-btn">
            {buttonLabel} <ArrowUpRight className="ml-1 w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

// import React from "react";
// import { LucideIcon } from "lucide-react";

// interface CardProps {
//   icon?: LucideIcon;
//   title: string;
//   description: string;
//   children?: React.ReactNode;
// }

// const Card: React.FC<CardProps> = ({ icon: Icon, title, description, children }) => {
//   return (
//     <div className="relative group card-base card-hover p-6 overflow-hidden">
//       <div className="card-glow" />

//       {Icon && (
//         <div className="icon-box mb-4">
//           <Icon className="w-6 h-6 text-white/80" />
//         </div>
//       )}

//       <h3 className="card-text-title">{title}</h3>

//       <p className="card-text-description">{description}</p>

//       {children && <div className="mt-4">{children}</div>}

//       <div className="card-border-hover group-hover:border-green-500/30" />
//     </div>
//   );
// };

// export default Card;
