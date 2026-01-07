"use client";

import { motion } from "framer-motion";
import { fadeInMain } from "@/utils/animations";
import { Settings } from "lucide-react";
import Image from "next/image";

export default function TestimonialSection() {
  return (
    <div className="relative overflow-visible">
      <div className="ai-testimonial-quote-decoration">
        <Image
          src="/img/quote.png"
          alt="Quote decoration"
          fill
          className="object-contain"
          priority
        />
      </div>

      <section className="section-container-gray">
        <div className="ai-testimonial-grid">
          <motion.div
            className="ai-testimonial-content"
            variants={fadeInMain}
            initial="initial"
            whileInView="animate"
          >
            <div className="ai-testimonial-company-header">
              <Settings size={50} />
              <motion.h3
                className="text-4xl"
                variants={fadeInMain}
                initial="initial"
                whileInView="animate"
              >
                GreenWorks
              </motion.h3>
            </div>

            <p className="ai-testimonial-quote">
              Before Syncrra, keeping projects aligned felt impossible. Now
              everything runs smoothly, and our clients notice the difference.
            </p>

            <div className="testimonial-user-details">
              <p className="text-3xl">Brendan</p>
              <p className="subtitle-side">Marketing Director at StratIQ</p>
            </div>
          </motion.div>

          <div />
        </div>
      </section>
      <div className="ai-testimonial-user-image">
        <Image
          src="/img/UserImage.png"
          alt="User"
          fill
          className="ai-testimonial-user-image-content"
          priority
        />
      </div>
    </div>
  );
}

// "use client";

// import EmptyCard from "@/components/ui/EmptyCard";
// import { fadeInMain } from "@/utils/animations";
// import { motion } from "framer-motion";
// import { Settings } from "lucide-react";
// import Image from "next/image";

// export default function TestimonialSection() {
//   return (
//     <>
//       <section className="section-container-gray space-y-8">
//         <div className="grid grid-cols-2 ">
//           <div className="space-y-12">
// <div className="text-[#D4D4D4] flex justify-start gap-3 items-center">
//   <Settings size={50} />
//   <motion.h3
//     className="text-4xl "
//     variants={fadeInMain}
//     initial="initial"
//     whileInView="animate"
//   >
//     GreenWorks
//   </motion.h3>
// </div>

//             <p className="text-4xl max-w-[60%] leading-snug">
//               Before Syncrra, keeping projects aligned felt impossible. Now
//               everything runs smoothly, and our clients notice the difference.
//             </p>

// <div className="testimonial-user-details">
//   <p className="text-4xl ">Brendan</p>
//   <p className="subtitle-side">Marketing Director at StratIQ</p>
// </div>
//           </div>

//           <Image
//             src="/img/UserImage.png"
//             alt="User"
//             width={720}
//             height={720}
//             className="object-cover object-bottom"
//           />
//         </div>
//       </section>
//     </>
//   );
// }
