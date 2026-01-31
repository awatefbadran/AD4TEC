"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Logo from "./Logo";
import {
  MdArrowForward,
  MdEmail,
  MdPhone,
  MdLocationOn,
} from "react-icons/md";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const { t, isRTL } = useLanguage();

  return (
    <footer className="bg-white text-bg-primary">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Left Section */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              {t("tagline")}
            </h2>

            <div className="space-y-3 text-sm">
              <p className="font-semibold">{t("letsTalk")}</p>

              <div className="flex items-center gap-2 text-gray-600">
                <MdPhone className="text-brand-primary" />
                <p dir="ltr">01027249494 \\ 01000045030</p>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <MdEmail className="text-brand-primary text-xl" />
                <p>Info@ad4tec.com</p>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <MdLocationOn className="text-brand-primary text-xl" />
                <p className="text-xs max-w-xs" dir="ltr">
                  {t("address")}
                </p>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <p className="font-semibold text-brand-primary">{t("company")}</p>
            <div className="flex flex-col space-y-2 text-sm">
              <Link href="/" className="footer-link">
                {t("home")}
              </Link>
              <Link href="/services" className="footer-link">
                {t("services")}
              </Link>
              <Link href="/about" className="footer-link">
                {t("about")}
              </Link>
              <Link href="/career" className="footer-link">
                {t("career")}
              </Link>
              <Link href="/news" className="footer-link">
                {t("news")}
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <p className="font-semibold text-brand-primary">{t("services")}</p>
            <div className="flex flex-col space-y-2 text-sm">
              <Link href="#" className="footer-link">
                {t("technicalSupport")}
              </Link>
              <Link href="#" className="footer-link">
                {t("testing")}
              </Link>
              <Link href="#" className="footer-link">
                {t("development")}
              </Link>
              <Link href="#" className="footer-link">
                {t("awsAzure")}
              </Link>
              <Link href="#" className="footer-link">
                {t("consulting")}
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <p className="font-semibold text-brand-primary">{t("resources")}</p>
            <div className="flex flex-col space-y-2 text-sm">
              <Link href="/about" className="footer-link">
                {t("about")}
              </Link>
              <Link href="#" className="footer-link">
                {t("testimonials")}
              </Link>
              <Link href="#" className="footer-link">
                {t("privacy")}
              </Link>
              <Link href="#" className="footer-link">
                {t("terms")}
              </Link>
              <Link href="/blog" className="footer-link">
                {t("blog")}
              </Link>

              {/* Contact CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-4 text-brand-primary font-medium group"
              >
                {t("contactUs")}
                <MdArrowForward
                  className={`transition-transform ${
                    isRTL
                      ? "rotate-180 group-hover:-translate-x-1"
                      : "group-hover:translate-x-1"
                  }`}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-bg-light">
    <div
  className="container mx-auto px-4 sm:px-6 py-4
             flex items-center justify-between
             text-sm text-bg-primary/80"
  dir="ltr"
>
  {/* Logo */}
  <div className="flex items-center gap-4">
    <Logo className="scale-90" />
  </div>

  {/* Center Text */}
  <p className="flex-1 text-center">
    © 2026 AD4TEC. جميع الحقوق محفوظة.
  </p>

  {/* Social Icons */}
  <div className="flex items-center gap-6 text-xl">
    <Link href="#" aria-label="Facebook">
      <FaFacebook />
    </Link>
    
  </div>
</div>
</div>
    </footer>
  );
}
