"use client";

import Image from "next/image";
import { Settings } from "lucide-react";

export type Testimonial = {
  company: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

export default function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="trustedby-testimonial-card ">
      {/* Header */}
      <div className="trustedby-testimonial-card-company">
        <Settings />
        <span className="customer-testimonial-company">{item.company}</span>
      </div>

      {/* Quote */}
      <p className="testimonial-quote">“{item.quote}”</p>

      {/* User */}
      <div className="trustedby-testimonial-card-user">
        <Image src={item.avatar} alt={item.name} width={44} height={44} />

        <div className="testimonial-user-details">
          <p className="testimonial-user-name">{item.name}</p>
          <p className="testimonial-user-role">{item.role}</p>
        </div>
      </div>
    </div>
  );
}
