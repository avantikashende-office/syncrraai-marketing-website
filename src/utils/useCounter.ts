import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useTransform } from "framer-motion";

interface UseCounterProps {
    from?: number;
    to: number;
    duration?: number;
}

export const useCounter = ({ from = 0, to, duration = 1 }: UseCounterProps) => {
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.floor(latest));
    const ref = useRef<HTMLSpanElement | null>(null);
    const inView = useInView(ref, {
        once: false,   
        margin: "-50px"
    });

    useEffect(() => {
        if (inView) {
            const controls = animate(count, to, {
                duration,
                ease: "easeOut",
            });

            return controls.stop;
        }
    }, [inView, count, to, duration]);

    return { rounded, ref };
};
