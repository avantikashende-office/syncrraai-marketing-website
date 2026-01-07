"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Button from "@/components/ui/Button";
import Logo from "../../../public/Logos/Logo";
import NavDropdown from "./NavDropdown";
import { Boxes, Brain, Plug } from "lucide-react";

export default function Navbar() {
  const { i18n } = useTranslation();
  const { scrollY } = useScroll();

  const paddingY = useTransform(scrollY, [0, 100], [34, 16]);
  const background = useTransform(
    scrollY,
    [0, 80],
    ["rgba(0,0,0,0)", "rgba(0,0,0,0.1)"]
  );
  const blur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(14px)"]);
  const offsetY = useTransform(scrollY, [0, 80], [0, 20]);

  return (
    <header className="nav-container">
      <motion.nav
        layout
        className="nav-inner"
        style={{
          paddingTop: paddingY,
          paddingBottom: paddingY,
          backgroundColor: background,
          backdropFilter: blur,
          y: offsetY,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 26,
        }}
      >
        {/* Logo */}
        <Link href="/" className="nav-logo-link">
          <Logo />
        </Link>
        <div className="flex-1 flex justify-center">
          {/* Center Links */}
          <div className="nav-links">
            <NavDropdown
              title="Product"
              items={[
                {
                  label: "Product Overview",
                  href: "/product-overview",
                  icon: <Boxes />,
                },
                {
                  label: "AI Features",
                  href: "/AIFeatures",
                  icon: <Brain />,
                },
                {
                  label: "Integrations",
                  href: "/integrations",
                  icon: <Plug />,
                },
              ]}
            />
            <NavDropdown
              title="Solutions"
              items={[
                { label: "Small Size Company", href: "/solutions/small-size" },
                { label: "Mid Size Company", href: "/solutions/mid-size" },
                { label: "Enterprise level", href: "/solutions/enterprise" },
              ]}
            />
            <NavDropdown
              title="About Us"
              width="w-44"
              items={[{ label: "Blog", href: "/blog" }]}
            />
            {/* <NavDropdown
              title="Resources"
              width="w-44"
              items={[{ label: "Help Center", href: "/help" }]}
            /> */}
            <Link href="/pricing" className="nav-link">
              Pricing
            </Link>
          </div>
        </div>

        {/* Right CTA */}
        <div className="nav-cta-group ml-auto">
          <select
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            className="nav-select bg-transparent"
          >
            <option value="en">EN</option>
            <option value="hi">हि</option>
          </select>

          <Link href="/login" className="nav-link text-sm">
            Login
          </Link>
          <Button variant="primary">Start Free Trial</Button>
        </div>
      </motion.nav>
    </header>
  );
}

// "use client";

// import Link from "next/link";
// import { useTranslation } from "react-i18next";
// import Button from "@/components/ui/Button";
// import ThemeToggle from "@/components/ui/ThemeToggle";
// import Logo from "../../../public/Logos/Logo";
// import { motion, useScroll, useTransform } from "framer-motion";

// export default function Navbar() {
//   const { t, i18n } = useTranslation();

//   const changeLanguage = (lng: string) => {
//     i18n.changeLanguage(lng);
//   };
//   const { scrollY } = useScroll();

//   // Background fade
//   const backgroundColor = useTransform(
//     scrollY,
//     [0, 80],
//     ["rgba(0,0,0,0)", "rgba(0,0,0,0.45)"]
//   );

//   // Blur animation
//   const backdropFilter = useTransform(
//     scrollY,
//     [0, 80],
//     ["blur(0px)", "blur(12px)"]
//   );

//   // Border fade
//   const borderColor = useTransform(
//     scrollY,
//     [0, 80],
//     ["rgba(255,255,255,0)", "rgba(255,255,255,0.1)"]
//   );

//   // Slight height compression
//   const height = useTransform(scrollY, [0, 80], ["96px", "80px"]);

//   return (
//     <motion.header
//       className="nav-container"
//       style={{
//         backgroundColor,
//         backdropFilter,
//         borderColor,
//         height,
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 260,
//         damping: 30,
//       }}
//     >
//       <nav className="nav-inner">
//         <Link href="/" className="nav-logo-link">
//           <Logo />
//         </Link>

//         <div className="nav-links">
//           <Link href="/product-overview" className="nav-link">
//             {t("navbar.product")}
//           </Link>
//           <Link href="/solutions" className="nav-link">
//             {t("navbar.solutions")}
//           </Link>
//           <Link href="/pricing" className="nav-link">
//             {t("navbar.pricing")}
//           </Link>
//           <Link href="/blog" className="nav-link">
//             Blog
//           </Link>
//           <Link href="/integrations" className="nav-link">
//             Integrations
//           </Link>
//         </div>

//         {/* Right CTA */}
//         <div className="nav-cta-group">
//           <div className="relative">
//             <select
//               value={i18n.language}
//               onChange={(e) => changeLanguage(e.target.value)}
//               className="nav-select focus:ring-0"
//               style={{ backgroundColor: "transparent" }}
//             >
//               <option value="en">EN</option>
//               <option value="hi">हि</option>
//             </select>
//           </div>

//           <Link href="/login" className="text-sm nav-link">
//             {t("navbar.login")}
//           </Link>
//           <Button variant="primary">{t("navbar.startFreeTrial")}</Button>
//         </div>
//       </nav>
//     </motion.header>
//   );
// }
