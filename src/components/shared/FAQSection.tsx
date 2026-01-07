"use client";

import React, { useState } from "react";
import Badge from "../ui/Badge";
import AccordionList from "../ui/AccordionList";
import { CircleChevronRight } from "lucide-react";

const FAQSection = () => {
  const [active, setActive] = useState("modules");
  const FAQData = [
    {
      key: "modules",
      title: "Which ERP modules do I need for my business?",
      description:
        "The right modules depend on your industry, workflows, and growth stage. Our experts can help you select the most relevant modules to streamline your operations.",
    },
    {
      key: "training",
      title: "What kind of training and support is provided?",
      description:
        "We offer onboarding assistance, user training sessions, and ongoing support to ensure your team gets maximum value from the platform.",
    },
    {
      key: "trial",
      title: "Is there a free trial period?",
      description:
        "Yes, we offer a trial period so you can explore the platform’s capabilities and evaluate how it fits your business needs before committing.",
    },
    {
      key: "nonprofit",
      title: "Does Syncrra offer solutions for non-profit organizations?",
      description:
        "Syncrra provides flexible, cost-effective ERP modules suitable for NGOs and non-profit operations, helping streamline processes and increase transparency.",
    },
    {
      key: "security",
      title: "How does Syncrra handle data security and compliance?",
      description:
        "Your data is protected with multi-layer encryption, secure cloud infrastructure, access controls, and compliance with global standards.",
    },
    {
      key: "integration",
      title: "Can Syncrra integrate with my existing accounting software?",
      description:
        "Yes, Syncrra supports smooth integrations with popular accounting tools, enabling unified data flow without manual work or data duplication.",
    },
    {
      key: "kpi",
      title: "How can I track key performance indicators (KPIs)?",
      description:
        "You can monitor KPIs using real-time dashboards, customizable reports, and automated insights for better decision-making.",
    },
    {
      key: "permissions",
      title: "How do I configure user roles and permissions?",
      description:
        "Easily set up granular role-based permissions to ensure each user accesses only the information and features relevant to their responsibilities.",
    },
  ];

  return (
    <section className="space-y-6 section-container ">
      <div className="flex justify-center">
        <Badge label="FAQ" />
      </div>

      <h2 className="title-center gradient-gray-text ">
        Frequently Asked Questions
      </h2>

      <div className="flex justify-center">
        <AccordionList
          containerClassName="faq-container"
          items={FAQData}
          active={active}
          onSelect={setActive}
          icon={CircleChevronRight}
          itemPaddingY="py-4"
          titleClassName="faq-title"
          descriptionClassName="faq-description"
        />
      </div>
    </section>
  );
};

export default FAQSection;
