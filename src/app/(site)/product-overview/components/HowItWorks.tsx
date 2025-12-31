import Button from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="section-container">
      <div className="space-y-8">
        <h1 className="title-side gradient-gray-text">How It Works</h1>

        <div className="flex items-start justify-between gap-7">
          <p className="subtitle-side ">
            A simple, fast and secure platform to manage your factory <br /> in
            just a few steps.
          </p>

          <Button variant="outline">
            Create Account <ArrowUpRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
}
