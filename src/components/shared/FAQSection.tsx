"use client";

import React, { useState } from "react";
import Badge from "../ui/Badge";
import AccordionList from "../ui/AccordionList";
import { CircleChevronRight } from "lucide-react";

const FAQSection = () => {
  const [active, setActive] = useState("implementation");
  const FAQData = [
    {
      key: "implementation",
      title: "How long does it take to implement Syncrra?",
      description:
        "Most teams go live in weeks, not months. Syncrra is workflow-driven and configurable, so you avoid heavy customisation and long implementation cycles. Timelines depend on the number of plants, users, and integrations, but onboarding is fast and structured.",
    },
    {
      key: "existing-erp",
      title: "Do we need to replace our existing ERP to use Syncrra?",
      description:
        "No. You can use Syncrra as a full ERP or deploy the Syncrra AI Layer on top of your existing ERP. This lets you add intelligence, insights, and automation without disrupting current systems.",
    },
    {
      key: "process-coverage",
      title: "Which manufacturing processes does Syncrra cover end to end?",
      description:
        "Syncrra supports the full operational lifecycle including planning, inventory, production, quality checks, rejections, dispatch, and billing. Every stage is connected through approval-driven workflows and real-time visibility.",
    },
    {
      key: "multi-plant",
      title: "Is Syncrra suitable for multi-plant or distributed operations?",
      description:
        "Yes. Syncrra is built for multi-plant environments with centralized control and local execution. You can track performance across locations while maintaining role-based access and plant-level workflows.",
    },
    {
      key: "security",
      title: "How does Syncrra ensure data security and access control?",
      description:
        "Syncrra uses role-based permissions, approval controls, and activity logs to ensure users only see and act on what they are authorised to. This keeps operations secure and audit-ready across teams and departments.",
    },
    {
      key: "ai-capabilities",
      title: "What kind of AI capabilities does Syncrra offer?",
      description:
        "Syncrra provides AI-powered insights, natural language queries, forecasting, anomaly detection, and contextual recommendations. The AI works on your operational data and supports decision-making without replacing human judgment.",
    },
    {
      key: "integrations",
      title:
        "Can Syncrra integrate with our existing accounting and business tools?",
      description:
        "Yes. Syncrra integrates with commonly used accounting, communication, and analytics tools. Integrations are system-driven and stable, without brittle custom builds.",
    },
    {
      key: "onboarding-support",
      title: "What training and support are available during onboarding?",
      description:
        "Syncrra offers guided onboarding, documentation, and ongoing support based on your plan. For larger teams and enterprise setups, assisted onboarding and training sessions are available.",
    },
    {
      key: "scalability",
      title: "How does Syncrra handle changes as our operations grow?",
      description:
        "Syncrra is modular and scalable. You can add users, plants, workflows, and capabilities as your operations evolve, without re-implementing the system or disrupting existing processes.",
    },
    {
      key: "trial",
      title: "Is there a free trial or pilot option available?",
      description:
        "Yes. You can start with a free trial to explore core features or request a guided pilot to evaluate Syncrra in a real operational context before committing.",
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
