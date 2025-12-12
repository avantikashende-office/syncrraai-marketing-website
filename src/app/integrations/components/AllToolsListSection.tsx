"use client";
import { useState } from "react";
import Card from "@/components/ui/Card";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInMain } from "@/utils/animations";

const AllToolsListSection = () => {
  const [search, setSearch] = useState("");

  const TOOLS = [
    {
      imageIcon: "/integrations/sap.svg",
      title: "SAP",
      description: "Enterprise ERP for finance and supply chain across global operations.",
      buttonLabel: "Learn More",
    },
    {
      imageIcon: "/integrations/tallyprime.svg",
      title: "TallyPrime",
      description: "Smart accounting for invoicing, GST, and financial reporting.",
      buttonLabel: "Learn More",
    },
    {
      imageIcon: "/integrations/oracle.svg",
      title: "Oracle NetSuite",
      description: "Cloud platform for finance, commerce, and business management.",
      buttonLabel: "Learn More",
    },
    {
      imageIcon: "/integrations/zohobooks.svg",
      title: "Zoho Books",
      description: "Online accounting software for billing, payments, and compliance.",
      buttonLabel: "Learn More",
    },
    {
      imageIcon: "/integrations/powerBI.svg",
      title: "Power BI",
      description: "Analytics dashboards and data visualization for better decisions.",
      buttonLabel: "Learn More",
    },
    {
      imageIcon: "/integrations/tableau.svg",
      title: "Tableau",
      description: "Advanced charts and business dashboards for data insights.",
      buttonLabel: "Learn More",
    },
    {
      imageIcon: "/integrations/shopify.svg",
      title: "Shopify",
      description: "Sync products, orders, and stock across online and retail channels.",
      buttonLabel: "Learn More",
    },
    {
      imageIcon: "/integrations/i6.svg",
      title: "Razorpay",
      description: "Fast and secure payment collections and settlements.",
      buttonLabel: "Learn More",
    },
    {
      imageIcon: "/integrations/stripe.svg",  
      title: "Stripe",
      description: "Online payments and subscription billing for global businesses.",
      buttonLabel: "Learn More",
    },
  ];

  // Filter logic
  const filteredTools = TOOLS.filter((tool) =>
    tool.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      <div className="section-container space-y-10">

        {/* ---- Heading + Search Bar ---- */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <motion.h2 
            className="text-3xl text-white"
            variants={fadeInMain}
            initial="initial"
            whileInView="animate"
          >
            List of All Tools
          </motion.h2>

          {/* Search Box (Styled like screenshot) */}
          <div className="relative w-full md:w-70">
            <span className="absolute left-3 top-1/2 -translate-y-1/2">
              <Search size={20} />
            </span>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full bg-transparent border rounded-lg
                py-3 pl-12 pr-4 text-white 
                focus:outline-none focus:border-gray-300 transition
              "
            />
          </div>
        </div>

        {/* ---- Card Grid ---- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredTools.length > 0 ? (
            filteredTools.map((tool, idx) => (
              <Card
                key={idx}
                imageIcon={tool.imageIcon}
                title={tool.title}
                description={tool.description}
                buttonLabel={tool.buttonLabel}
                buttonOnClick={() => alert(`${tool.title} clicked`)}
              />
            ))
          ) : (
            <p className="text-[#404040] col-span-full text-center py-10">
              We are sorry, the Tool you are looking for does not exist in our list
            </p>
          )}

        </div>

      </div>
    </section>
  );
};

export default AllToolsListSection;
