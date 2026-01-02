import Button from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="section-container">
      <div className="border-t border-b border-[#404040] py-10">
        {/* Quote */}
        <p className="text-4xl leading-tight max-w-[80%] text-[#404040]">
          <span className="text-white">“Syncrra transformed </span>
          how we manage daily operations. What used to take hours across
          multiple tools now happens automatically in one place.”
        </p>

        {/* Bottom row */}
        <div className="mt-8 flex items-center justify-between">
          {/* User info */}
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

          {/* CTA */}
          <Button variant="outline" className="flex items-center gap-2">
            Read story
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
