"use client";
import AnimatedRevealText from "@/components/ui/TestimonialText";

export default function Testimonial() {
  return (
    <section className="section-container">
      {/* Quote */}
      <AnimatedRevealText
        className="text-4xl leading-tight text-[#404040]"
        text=" '' Syncrra completely changed how our factory operates. Our teams no longer chase spreadsheets or approvals. Production delays dropped by more than half in the first 60 days. It feels like the plant finally runs itself '' "
      />

      {/* Bottom row */}
      {/* <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/img/testimonial.png"
              alt="Adam Smith"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <p className="text-white font-medium">Adam Smith</p>
              <p className="text-sm text-[#A3A3A3]">
                VP of Classic Roof India Ltd
              </p>
            </div>
          </div>

          <Button variant="outline" className="flex items-center gap-2">
            Read story
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div> */}
    </section>
  );
}
