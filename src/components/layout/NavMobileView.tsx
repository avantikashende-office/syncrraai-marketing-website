"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Logo from "../../../public/Logos/Logo";
import { X } from "lucide-react";
import Image from "next/image";

export type MobileSection = null | "product" | "company" | "why";

type MenuItem = {
  label: string;
  href: string;
};

type MobileItems = {
  product: readonly MenuItem[];
  company: readonly MenuItem[];
  why: readonly MenuItem[];
};

interface NavMobileViewProps {
  isOpen: boolean;
  openSection: MobileSection;
  mobileItems: MobileItems;
  onClose: () => void;
  onToggleSection: (section: Exclude<MobileSection, null>) => void;
}

function MobileSectionBlock({
  title,
  sectionKey,
  openSection,
  items,
  onToggleSection,
  onClose,
  children,
}: {
  title: string;
  sectionKey: Exclude<MobileSection, null>;
  openSection: MobileSection;
  items: readonly MenuItem[];
  onToggleSection: (section: Exclude<MobileSection, null>) => void;
  onClose: () => void;
  children?: React.ReactNode;
}) {
  const isActive = openSection === sectionKey;

  return (
    <>
      <button
        className="nav-mobile-section-btn"
        onClick={() => onToggleSection(sectionKey)}
      >
        <span className="hover:cursor-pointer">{title}</span>
        <span
          className={`text-xs opacity-70 transition-transform duration-200 hover:cursor-pointer ${
            isActive ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="overflow-hidden"
          >
            <div className="nav-mobile-items">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              ))}

              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function NavMobileView({
  isOpen,
  openSection,
  mobileItems,
  onClose,
  onToggleSection,
}: NavMobileViewProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="nav-mobile-panel"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.22 }}
          style={{
            backgroundColor: "rgba(0,0,0,0.70)",
            backdropFilter: "blur(18px)",
          }}
        >
          {/* PANEL HEADER */}
          <div className="nav-mobile-header">
            <Link href="/" onClick={onClose} className="nav-logo-link">
              <Logo />
            </Link>

            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="nav-link text-lg"
                onClick={onClose}
              >
                Login
              </Link>

              <button
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 nav-link hover:cursor-pointer"
              >
                <X size={22} />
              </button>
            </div>
          </div>

          {/* ONLY 3 SECTIONS */}
          <div className="nav-mobile-sections">
            <MobileSectionBlock
              title="Product"
              sectionKey="product"
              openSection={openSection}
              items={mobileItems.product}
              onToggleSection={onToggleSection}
              onClose={onClose}
            >
              {/* Future requirement kept */}
              {/* <Link
                href="/integrations"
                className="nav-link"
                onClick={onClose}
              >
                Integrations
              </Link> */}
            </MobileSectionBlock>

            <MobileSectionBlock
              title="Company"
              sectionKey="company"
              openSection={openSection}
              items={mobileItems.company}
              onToggleSection={onToggleSection}
              onClose={onClose}
            >
              {/* <Link
                href="/help"
                className="nav-link"
                onClick={onClose}
              >
                Help Center
              </Link> */}
            </MobileSectionBlock>

            <MobileSectionBlock
              title="Why Syncrra"
              sectionKey="why"
              openSection={openSection}
              items={mobileItems.why}
              onToggleSection={onToggleSection}
              onClose={onClose}
            />

            {/* FOOTER CTA */}
            <div className="nav-mobile-footer">
              {/* <select
                value={i18n.language}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                className="nav-select bg-transparent"
              >
                <option value="en">EN</option>
                <option value="hi">हि</option>
              </select> */}

              <Link
                href="https://app.syncrra.ai/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
              >
                <Button className="w-full">Start Free Trial</Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
