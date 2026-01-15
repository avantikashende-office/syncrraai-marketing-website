"use client";

import ApptwareLogo from "../../../public/Logos/ApptwareLogo";
import FooterLine from "../../../public/Logos/FooterLine";
import Logo from "../../../public/Logos/Logo";
import Syncrra from "../../../public/Logos/Syncrra";
import { NewsletterCard } from "./NewsletterCard";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="section-bg-gray ">
      <div className="section-container ">
        <div className="footer-grid-top">
          <div className="footer-grid-logo">
            <Link href="/">
              <Logo />
            </Link>
            <FooterLine />
            <Link
              href="https://apptware.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ApptwareLogo />
            </Link>
          </div>

          {/* <div className="footer-grid-icons">
            <div className="footer-icon">
              <Instagram size={18} />
            </div>

            <div className="footer-icon">
              <Facebook fill="#171717" size={18} />
            </div>

            <div className="footer-icon">
              <Linkedin fill="#171717" size={18} />
            </div>

            <div className="footer-icon">
              <Twitter fill="#171717" size={18} />
            </div>
          </div> */}
        </div>

        <div className="footer-grid">
          {/* Pages */}
          <div>
            <p className="footer-col-title">Pages</p>
            <ul className="space-y-1">
              <li>
                <Link href="/features" className="footer-link">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/overview" className="footer-link">
                  Product
                </Link>
              </li>
              <li>
                <span className="footer-link">Pricing</span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="footer-col-title">Company</p>
            <ul className="space-y-1">
              <li>
                <Link
                  className="footer-link"
                  href="https://apptware.com/careers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <li>
                  <Link href="/blog" className="footer-link">
                    Blog
                  </Link>
                </li>
              </li>
            </ul>
          </div>

          {/* Support */}
          {/* <div>
            <p className="footer-col-title">Support</p>
            <ul className="space-y-1">
              <li>
                <span className="footer-link">Help Center</span>
              </li>
              <li>
                <span className="footer-link">Customer Support</span>
              </li>
              <li>
                <span className="footer-link">API Docs</span>
              </li>
              <li>
                <span className="footer-link">System Status</span>
              </li>
            </ul>
          </div> */}

          {/* Resources */}
          <div>
            <p className="footer-col-title">Resources</p>
            <ul className="space-y-1">
              <li>
                <span className="footer-link">FAQ</span>
              </li>

              <li>
                <span className="footer-link">Privacy Policy</span>
              </li>
              <li>
                <span className="footer-link">Terms of Service</span>
              </li>
            </ul>
          </div>

          {/* <NewsletterCard /> */}
        </div>

        <div className="flex justify-center items-center w-full max-w-4xl mx-auto">
          <Syncrra />
        </div>
      </div>
    </footer>
  );
}
