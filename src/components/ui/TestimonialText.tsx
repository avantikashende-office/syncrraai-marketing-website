import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedRevealTextProps {
  text: string;
  chunkSize?: number;
  className?: string;
  delayStep?: number;
  duration?: number;
  baseColor?: string;
  waveColor?: string;
  once?: boolean;
}

const chunkText = (text: string, size: number) => {
  const chunks: string[] = [];
  for (let i = 0; i < text.length; i += size) {
    chunks.push(text.slice(i, i + size));
  }
  return chunks;
};

export default function AnimatedRevealText({
  text,
  chunkSize = 1,
  className = "",
  delayStep = 0.04,
  duration = 1,
  baseColor = "#404040",
  waveColor = "#ffffff",
  once = false,
}: AnimatedRevealTextProps) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const isInView = useInView(ref, { once });

  const chunks = chunkText(text, chunkSize);

  // Character count of first 2 words (including space)
  const firstTwoWordsLength = text.split(" ").slice(0, 3).join(" ").length;

  return (
    <div className="border-t border-b border-[#404040] py-10">
      <p ref={ref} className={className}>
        {chunks.map((chunk, i) => (
          <motion.span
            key={i}
            className="inline-block whitespace-pre"
            style={{ color: baseColor }}
            animate={
              isInView
                ? {
                    color:
                      i < firstTwoWordsLength
                        ? [baseColor, waveColor, waveColor]
                        : [baseColor, waveColor, baseColor],
                    y: [0, 3, 0],
                    scale: [1, 1.08, 1],
                  }
                : {}
            }
            transition={{
              delay: i * delayStep,
              duration,
              ease: "easeInOut",
            }}
          >
            {chunk}
          </motion.span>
        ))}
      </p>
    </div>
  );
}
