// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { fadeInMain } from "@/utils/animations";
// import ScrollingBadges from "@/components/ui/ScrollingBadges";

// const items = [
//   "Manual Reports",
//   "Slow Approvals",
//   "Data Chaos",
//   "Guesswork",
//   "Misaligned Teams",
//   "Human Errors",
// ];

// const ROW_H = 80;
// const CURVE_DEPTH = 140;

// export default function BusinessChallengesSection() {
//   const [isMobile, setIsMobile] = useState(false);

//   // continuous scroll offset
//   const [offset, setOffset] = useState(0);
//   const rafRef = useRef<number | null>(null);
//   const lastTimeRef = useRef<number>(0);

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   useEffect(() => {
//     if (isMobile) return;

//     const speedPxPerSec = 80; // tweak speed (px/second)
//     const totalHeight = items.length * ROW_H * 1.2;

//     const loop = (t: number) => {
//       if (!lastTimeRef.current) lastTimeRef.current = t;
//       const dt = (t - lastTimeRef.current) / 1000;
//       lastTimeRef.current = t;

//       setOffset((prev) => {
//         const next = prev + speedPxPerSec * dt;
//         return next % totalHeight;
//       });

//       rafRef.current = requestAnimationFrame(loop);
//     };

//     rafRef.current = requestAnimationFrame(loop);

//     return () => {
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//       lastTimeRef.current = 0;
//     };
//   }, [isMobile]);

//   const loopItems = [...items, ...items];
//   const spacing = ROW_H * 1.2;
//   const totalHeight = items.length * spacing;

//   return (
//     <div
//       className="challenges-wrapper bg-no-repeat bg-center"
//       style={{
//         height: isMobile ? "auto" : "100vh",
//         backgroundSize: "1200px",
//       }}
//     >
//       <section className="challenges-section">
//         <div className="glow-background" />

//         <div className="challenges-content">
//           {!isMobile ? (
//             <motion.span
//               className="challenges-text"
//               variants={fadeInMain}
//               initial="initial"
//               whileInView="animate"
//             >
//               Time to ditch
//             </motion.span>
//           ) : (
//             " "
//           )}

//           {!isMobile ? (
//             <div
//               className="challenges-scroll-items"
//               style={{
//                 position: "relative",
//                 overflow: "hidden",
//                 height: `${spacing * 5}px`, // show ~5 rows (adjust if needed)
//               }}
//             >
//               {loopItems.map((text, i) => {
//                 const yRaw = i * spacing - offset;

//                 // wrap into visible range so items never jump
//                 const yWrapped =
//                   ((yRaw % (2 * totalHeight)) + 2 * totalHeight) %
//                   (2 * totalHeight);

//                 // push items upwards so center is around top section
//                 const y = yWrapped - totalHeight;

//                 // distance from "middle row" for curve styling
//                 const center = spacing * 2; // middle visible row
//                 const distance = (y - center) / spacing;

//                 const t = Math.min(Math.abs(distance) / 4, 1);
//                 const eased = t * 0.7;

//                 return (
//                   <motion.span
//                     key={i}
//                     className="challenges-scroll-item"
//                     animate={{
//                       y,
//                       x: CURVE_DEPTH * eased,
//                       scale: 1 - eased * 1.2,
//                       opacity: 1 - eased * 0.9,
//                       // filter: `blur(${eased * 20}px)`,
//                     }}
//                     transition={{
//                       type: "spring",
//                       stiffness: 90,
//                       damping: 20,
//                     }}
//                     style={{
//                       position: "absolute",
//                       left: 0,
//                       top: 0,
//                       willChange: "transform",
//                     }}
//                   >
//                     {text}
//                   </motion.span>
//                 );
//               })}
//             </div>
//           ) : (
//             <div className="mobile-view-wrapper">
//               <ScrollingBadges
//                 itemsTop={items.slice(0, 3)}
//                 itemsBottom={items.slice(3)}
//                 variant="transparent"
//                 speed={40}
//                 rowGap={120}
//               />

//               <motion.span
//                 className="challenges-text mobile-overlay-text"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 Time to ditch
//               </motion.span>
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { fadeInMain } from "@/utils/animations";
// import ScrollingBadges from "@/components/ui/ScrollingBadges";

// const items = [
//   "manual reports",
//   "slow approvals",
//   "data chaos",
//   "guesswork",
//   "misaligned teams",
//   "human errors",
// ];

// const ROW_H = 80;
// const CURVE_DEPTH = 140;

// export default function BusinessChallengesSection() {
//   const [isMobile, setIsMobile] = useState(false);
//   const [activeIdx, setActiveIdx] = useState(3);

//   const intervalRef = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   useEffect(() => {
//     if (isMobile) return;

//     if (intervalRef.current) clearInterval(intervalRef.current);

//     intervalRef.current = setInterval(() => {
//       setActiveIdx((prev) => (prev + 1) % items.length);
//     }, 1500);

//     return () => {
//       if (intervalRef.current) clearInterval(intervalRef.current);
//     };
//   }, [isMobile]);

//   return (

//     <div
//       className="challenges-wrapper"
//       style={{
//         height: isMobile ? "auto" : "100vh",
//         backgroundSize: "1200px",
//       }}
//     >
//       <section className="challenges-section">
//         <div className="glow-background" />

//         <div className="challenges-content">
//           {!isMobile ? (
//             <motion.span
//               className="challenges-text"
//               variants={fadeInMain}
//               initial="initial"
//               whileInView="animate"
//             >
//               Time to ditch
//             </motion.span>
//           ) : (
//             " "
//           )}

//           {!isMobile ? (
//             <div className="challenges-scroll-items">
//               {items.map((text, i) => {
//                 const distance = i - activeIdx;
//                 const y = distance * ROW_H * 1.2;

//                 const t = Math.min(Math.abs(distance) / 4, 1);
//                 const eased = t * 0.7;

//                 return (
//                   <motion.span
//                     key={i}
//                     className="challenges-scroll-item"
//                     animate={{
//                       y,
//                       x: CURVE_DEPTH * eased,
//                       scale: 1 - eased * 1.2,
//                       opacity: 1 - eased * 0.9,
//                       filter: `blur(${eased * 20}px)`,
//                     }}
//                     transition={{
//                       type: "spring",
//                       stiffness: 90,
//                       damping: 24,
//                     }}
//                   >
//                     {text}
//                   </motion.span>
//                 );
//               })}
//             </div>
//           ) : (
//             <div className="mobile-view-wrapper">
//               <ScrollingBadges
//                 itemsTop={items.slice(0, 3)}
//                 itemsBottom={items.slice(3)}
//                 variant="transparent"
//                 speed={40}
//                 rowGap={120}
//               />

//               <motion.span
//                 className="challenges-text mobile-overlay-text"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 Time to ditch
//               </motion.span>
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { fadeInMain } from "@/utils/animations";
import ScrollingBadges from "@/components/ui/ScrollingBadges";

const items = [
  "Manual follow-ups",
  "Disconnected systems",
  "Approval delays",
  "Data silos",
  "Operational blind spots",
  "Rework and corrections",
];


const ROW_H = 80;
const CURVE_DEPTH = 140;

export default function BusinessChallengesSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const onScroll = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;
      const progress = Math.min(Math.max(-rect.top / totalScrollable, 0), 1);
      setActiveIdx(Math.round(progress * (items.length - 1)));
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const rawIndex = useMotionValue(3);
  const [activeIdx, setActiveIdx] = useState(3);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const onScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const winH = window.innerHeight;
      const totalScrollable = rect.height - winH;

      let progress = 0;
      if (totalScrollable > 0) {
        progress = Math.min(Math.max(-rect.top / totalScrollable, 0), 1);
      }

      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const maxIdx = items.length - 1;
        const idx = progress * maxIdx;

        rawIndex.set(idx);
        setActiveIdx(Math.round(idx));
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [rawIndex]);

  return (
    <div
      ref={wrapperRef}
      className="challenges-wrapper  bg-no-repeat bg-center "
      style={{
        height: isMobile ? "auto" : `${items.length * 100}vh`,
        // backgroundImage: "url('/homepage/greenCricleBG.svg')",
        backgroundSize: "1200px",
      }}
    >
      <section
        className="
    challenges-section

  "
      >
        <div className="glow-background " />

        {/* Glow ONLY in center */}
      {/* <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <img
          src="/homepage/greenCricleBG.svg"
          alt=""
          className="
  w-[900px] sm:w-[1200px] md:w-[1500px]
  max-w-none opacity-100
  [mask-image:radial-gradient(circle,black_55%,transparent_75%)]
  [-webkit-mask-image:radial-gradient(circle,black_55%,transparent_75%)]
"
        />
      </div> */}
        <div className="challenges-content">
          {!isMobile ? (
            <motion.span
              className="challenges-text"
              variants={fadeInMain}
              initial="initial"
              whileInView="animate"
            >
              Time to move beyond
            </motion.span>
          ) : (
            " "
          )}

          {!isMobile ? (
            <div className="challenges-scroll-items">
              {items.map((text, i) => {
                const distance = i - activeIdx;
                const y = distance * ROW_H * 1.2;

                const t = Math.min(Math.abs(distance) / 4, 1);
                const eased = t * 0.7;

                return (
                  <motion.span
                    key={i}
                    className="challenges-scroll-item"
                    animate={{
                      y: y,
                      x: CURVE_DEPTH * eased,
                      scale: 1 - eased * 1.2,
                      opacity: 1 - eased * 0.9,
                      filter: `blur(${eased * 20}px)`,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 90,
                      damping: 24,
                    }}
                  >
                    {text}
                  </motion.span>
                );
              })}
            </div>
          ) : (
            <div className="mobile-view-wrapper">
              <ScrollingBadges
                itemsTop={items.slice(0, 3)}
                itemsBottom={items.slice(3)}
                variant="transparent"
                speed={40}
                rowGap={120}
              />

              <motion.span
                className="challenges-text mobile-overlay-text"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                Time to ditch
              </motion.span>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
