import { motion } from "framer-motion";
import { useCounter } from "@/utils/useCounter";

interface CounterProps {
    from?: number;
    to: number;
    duration?: number;
}

const Counter = ({ from = 0, to, duration = 1 }: CounterProps) => {
    const { rounded, ref } = useCounter({ from, to, duration });

    return (
        <motion.span ref={ref}>
            {rounded}
        </motion.span>
    );
};

export default Counter;
