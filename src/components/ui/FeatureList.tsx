import { Check } from "lucide-react";
import Image from "next/image";
type Feature = { text: string };

type FeatureListProps = {
  title: string;
  features: Feature[];
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
  listClassName?: string;
  reverse?: boolean; // toggles image left / right
};

export function FeatureList({
  title,
  features,
  imageSrc,
  imageAlt,
  imageClassName = "",
  listClassName = "",
  reverse = false,
}: FeatureListProps) {
  const Content = (
    <div className="split-pane">
      <h3 className="split-title title-side gradient-gray-text">{title}</h3>

      <ul className={`ai-feature-list ${listClassName}`}>
        {features.map((feature, index) => (
          <li key={index} className="ai-feature-item">
            <div className="ai-feature-check-icon">
              <Check className="text-white text-sm" />
            </div>
            <p className="text-description">{feature.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  const Media = (
    <div className="split-media">
      <div className="split-media-frame">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={`split-media-img ${imageClassName}`}
          priority
        />
      </div>
    </div>
  );

  return (
    <div className="content-wrap">
      <div className="split-block">
        {reverse ? (
          <>
            {Media}
            {Content}
          </>
        ) : (
          <>
            {Content}
            {Media}
          </>
        )}
      </div>
    </div>
  );
}
