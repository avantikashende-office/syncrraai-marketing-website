export type BlogDetails = {
  id: number;

  hero: {
    title: string;
    subtitle: string;
    image: string;
  };

  meta: {
    author: {
      name: string;
      avatar: string;
    };
    published: string;
    updated: string;
  };

  body: {
    toc: { id: string; label: string }[]; // ✅ now clickable
    quickSummary: string;
    sections: {
      id: string; // ✅ must match toc.id
      heading: string;
      paragraphs: string[];
    }[];
  };
};

export const blogDetailsData: BlogDetails[] = [
  {
    id: 0,
    hero: {
      title: "AI in Manufacturing: Revolutionizing the Industry",
      subtitle:
        "Learn about the transformative effects of AI on industrial workflows, automation, and operational excellence.",
      image: "/blog/1.png",
    },
    meta: {
      author: { name: "Will Lowe", avatar: "/img/testimonial.png" },
      published: "Dec 23, 2025",
      updated: "Dec 23, 2025",
    },
    body: {
      toc: [
        {
          id: "streamlined-ai-erp",
          label: "Streamlined AI-Driven ERP Solutions",
        },
        {
          id: "cost-effective-plans",
          label: "Cost-Effective Subscription Plans Tailored for You",
        },
        {
          id: "diverse-erp-modules",
          label: "Diverse Range of ERP Modules to Choose From",
        },
        {
          id: "rapid-implementation",
          label: "Rapid Implementation & Seamless Integration",
        },
        {
          id: "dependable-solutions",
          label: "Dependable & Efficient Business Solutions",
        },
      ],
      quickSummary:
        "In the fast-paced world of business, leveraging technology is crucial. Our AI-driven ERP solutions are designed to optimize operations, enhance productivity, and drive growth. With a focus on user-friendly interfaces and robust functionalities, we ensure that your business can adapt and thrive in a competitive landscape.",
      sections: [
        {
          id: "streamlined-ai-erp",
          heading: "AI-Powered ERP with Smart Solutions",
          paragraphs: [
            "In today’s dynamic business environment, adopting an AI-driven ERP system is essential for streamlining processes and enhancing efficiency.",
            "Our platform simplifies complex workflows so you can focus on strategic growth instead of manual coordination.",
          ],
        },
        {
          id: "cost-effective-plans",
          heading: "Effortless Setup and User Experience",
          paragraphs: [
            "Our AI ERP solution offers a straightforward setup process, allowing you to integrate various systems with minimal downtime.",
            "With intuitive navigation and minimal training required, your team becomes productive quickly.",
          ],
        },
        {
          id: "diverse-erp-modules",
          heading: "Flexible Pricing Model",
          paragraphs: [
            "We provide flexible subscription plans tailored to your business needs.",
            "Whether you’re a startup or an enterprise, our pricing ensures maximum value without compromise.",
          ],
        },
        {
          id: "rapid-implementation",
          heading: "Comprehensive ERP Features",
          paragraphs: [
            "From inventory and production planning to finance and HR — the solution is designed to cover end-to-end operations.",
            "You can configure modules that match your organization’s processes and scale as needed.",
          ],
        },
        {
          id: "dependable-solutions",
          heading: "Built-in Implementation and Support",
          paragraphs: [
            "We support businesses with seamless onboarding, migration assistance, and ERP adoption best practices.",
            "You get dependable long-term support to ensure system stability and growth.",
          ],
        },
      ],
    },
  },

  {
    id: 1,
    hero: {
      title: "The Rise of Remote Work Tools: A New Era of Productivity",
      subtitle:
        "Explore how modern collaboration platforms are redefining communication and efficiency across teams worldwide.",
      image: "/blog/2.png",
    },
    meta: {
      author: { name: "Emily Roberts", avatar: "/img/testimonial.png" },
      published: "Jun 25, 2024",
      updated: "Jul 01, 2024",
    },
    body: {
      toc: [
        { id: "why-remote-tools", label: "Why Remote Tools Matter" },
        { id: "collaboration", label: "Communication & Collaboration" },
        { id: "security", label: "Security and Compliance" },
        { id: "automation", label: "Automations & Integrations" },
        { id: "hybrid-work", label: "Future of Hybrid Work" },
      ],
      quickSummary:
        "Remote work is no longer temporary — it's a global operating model. Tools that support async work, secure communication, and deep integrations are critical for productivity. The organizations that invest in the right tools build resilience and scale faster.",
      sections: [
        {
          id: "why-remote-tools",
          heading: "Why Remote Tools Matter",
          paragraphs: [
            "Remote tools create continuity. Work doesn’t stop when employees aren’t on-site.",
            "Modern platforms allow teams to coordinate smoothly across time zones and departments.",
          ],
        },
        {
          id: "collaboration",
          heading: "Communication & Collaboration",
          paragraphs: [
            "Chat, video conferencing, and shared workspaces reduce friction in daily workflows.",
            "The best teams combine synchronous meetings with asynchronous documentation.",
          ],
        },
        {
          id: "security",
          heading: "Security and Compliance",
          paragraphs: [
            "With distributed teams, access control and data protection become top priorities.",
            "SSO, audit logs, encrypted storage, and device management are now essential features.",
          ],
        },
        {
          id: "automation",
          heading: "Automations & Integrations",
          paragraphs: [
            "Productivity increases when tools integrate: calendars, email, project boards, and documentation.",
            "Automations reduce repetitive work and help teams focus on high-impact tasks.",
          ],
        },
        {
          id: "hybrid-work",
          heading: "Future of Hybrid Work",
          paragraphs: [
            "Hybrid work is evolving into policy-driven workflows, not ad-hoc flexibility.",
            "Companies will measure outcomes rather than hours — and tooling will support that.",
          ],
        },
      ],
    },
  },

  {
    id: 2,
    hero: {
      title: "Augmented Reality: Bridging the Gap Between Digital and Physical",
      subtitle:
        "Discover how AR is changing training, visualization, and real-world operations across industries.",
      image: "/blog/3.png",
    },
    meta: {
      author: { name: "Michael Cooper", avatar: "/img/testimonial.png" },
      published: "Jun 30, 2024",
      updated: "Jul 05, 2024",
    },
    body: {
      toc: [
        { id: "ar-industry", label: "AR in Industry" },
        { id: "ar-training", label: "Training with AR" },
        { id: "ar-maintenance", label: "Maintenance & Assistance" },
        { id: "ar-ai", label: "AR + AI: Next Level" },
        { id: "ar-benefits", label: "Key Business Benefits" },
      ],
      quickSummary:
        "Augmented Reality blends real-world environments with digital overlays. From factory training to maintenance guidance, AR reduces errors and improves speed. When combined with AI, AR becomes a powerful real-time decision and productivity tool.",
      sections: [
        {
          id: "ar-industry",
          heading: "AR in Industry",
          paragraphs: [
            "AR enables real-time overlays of instructions, blueprints, and indicators in physical environments.",
            "Industries use AR to reduce mistakes and speed up complex tasks.",
          ],
        },
        {
          id: "ar-training",
          heading: "Training with AR",
          paragraphs: [
            "AR training gives employees hands-on learning without expensive setups.",
            "Simulations create safe learning environments for hazardous procedures.",
          ],
        },
        {
          id: "ar-maintenance",
          heading: "Maintenance & Assistance",
          paragraphs: [
            "AR can guide technicians through repairs using step-by-step overlays.",
            "Remote experts can assist live by seeing exactly what the technician sees.",
          ],
        },
        {
          id: "ar-ai",
          heading: "AR + AI: Next Level",
          paragraphs: [
            "AI can detect objects and context, making AR overlays smarter and dynamic.",
            "This brings predictive guidance and automatic recognition of equipment issues.",
          ],
        },
        {
          id: "ar-benefits",
          heading: "Key Business Benefits",
          paragraphs: [
            "AR reduces training time, lowers operational errors, and improves workforce performance.",
            "It enhances productivity by giving real-time guidance to workers.",
          ],
        },
      ],
    },
  },

  {
    id: 3,
    hero: {
      title: "Sustainable Solutions: Embracing Eco-Friendly Technologies",
      subtitle:
        "Learn how companies are using technology to reduce emissions, optimize energy, and build greener operations.",
      image: "/blog/4.png",
    },
    meta: {
      author: { name: "Mark Chen", avatar: "/img/testimonial.png" },
      published: "Jun 10, 2024",
      updated: "Jun 15, 2024",
    },
    body: {
      toc: [
        { id: "why-sustainability", label: "Why Sustainability Matters" },
        { id: "energy-management", label: "Smart Energy Management" },
        { id: "green-supply", label: "Green Supply Chains" },
        { id: "ai-waste", label: "AI for Waste Reduction" },
        { id: "future-factories", label: "Building Future-Ready Factories" },
      ],
      quickSummary:
        "Sustainability is now a competitive advantage. Using smart monitoring, AI forecasting, and green supply chain platforms, businesses cut costs while improving environmental impact. Future-ready factories will be measurable, efficient, and cleaner by design.",
      sections: [
        {
          id: "why-sustainability",
          heading: "Why Sustainability Matters",
          paragraphs: [
            "Customers, regulators, and investors expect measurable sustainability results.",
            "Eco-friendly processes reduce risk and improve long-term operational resilience.",
          ],
        },
        {
          id: "energy-management",
          heading: "Smart Energy Management",
          paragraphs: [
            "Sensors and monitoring platforms track real-time energy use across operations.",
            "AI forecasting helps optimize consumption and reduce peak-time costs.",
          ],
        },
        {
          id: "green-supply",
          heading: "Green Supply Chains",
          paragraphs: [
            "Modern ERPs help track sustainability across procurement, logistics, and delivery.",
            "Supplier compliance and carbon tracking create visibility across the chain.",
          ],
        },
        {
          id: "ai-waste",
          heading: "AI for Waste Reduction",
          paragraphs: [
            "AI helps detect waste points early and suggests smarter resource allocation.",
            "Factories can forecast production needs more accurately and reduce overproduction.",
          ],
        },
        {
          id: "future-factories",
          heading: "Building Future-Ready Factories",
          paragraphs: [
            "The factories of the future will be smart, clean, highly automated, and data-driven.",
            "This reduces waste and boosts long-term profitability.",
          ],
        },
      ],
    },
  },
];
