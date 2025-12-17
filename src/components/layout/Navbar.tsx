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

"use client";

import Link from "next/link";
import { useTranslation } from 'react-i18next';
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Logo from "../../../public/Logos/Logo";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      const nav = document.getElementById("navbar");
      if (window.scrollY > 10) nav?.classList.add("is-sticky");
      else nav?.classList.remove("is-sticky");
    });
  }

  return (
    <header className="nav-container">
      <nav className=" nav-inner">
        {/* Logo */}
        <Link href="/" className="nav-logo-link">
          <Logo />
        </Link>

        {/* Center Nav Links */}
        <div className="nav-links">
          <Link href="/product-overview" className="nav-link">
            Product
          </Link>
          <Link href="/solutions" className="nav-link">
            Solutions
          </Link>
          <Link href="/pricing" className="nav-link">
            Pricing
          </Link>
          {/* <Link href="/resources" className="nav-link">
            {t('navbar.resources')}
          </Link>
          <Link href="/company" className="nav-link">
            {t('navbar.company')}
          </Link> */}
          <Link href="/blog" className="nav-link">
            Blog
          </Link>
          <Link href="/integrations" className="nav-link">
            Integrations
          </Link>
        </div>

        {/* Right CTA */}
        <div className="nav-cta-group">
          {/* <ThemeToggle /> */}
          <div className="relative">
            <select
              value={i18n.language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="nav-select focus:ring-0"
              style={{ backgroundColor: 'transparent' }}
            >
              <option value="en">EN</option>
              <option value="hi">हि</option>
            </select>
          </div>

          <Link href="/login" className="text-sm nav-link">
            Login
          </Link>
          <Button variant="primary">
            Start Free Trial
          </Button>
        </div>
      </nav>
    </header>
  );
}
