"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Logo from "./Logo";
import { MdArrowForward, MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
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
              {t("general.tagline")}
            </h2>

            <div className="space-y-3 text-sm">
              <p className="font-semibold">
                {t("general.letsTalk")}
              </p>

              <div className="flex items-center gap-2 text-gray-600">
                <MdPhone className="text-brand-primary" />
                <p dir="ltr">+20 10 40190064</p>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <MdEmail className="text-brand-primary text-xl" />
                <p>Info@ad4tec.com</p>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <MdLocationOn className="text-brand-primary text-xl" />
                <p className="text-xs max-w-xs" dir="ltr">
                  {t("contact.address")}
                </p>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <p className="font-semibold text-brand-primary">
              {t("nav.company")}
            </p>
            <div className="flex flex-col space-y-2 text-sm">
              <Link href="/" className="footer-link">
                {t("nav.home")}
              </Link>
              <Link href="/services" className="footer-link">
                {t("nav.services")}
              </Link>
              <Link href="/about" className="footer-link">
                {t("nav.about")}
              </Link>
              <Link href="/blog" className="footer-link">
                {t("nav.blog")}
              </Link>
              <Link href="/contact" className="footer-link">
                {t("nav.contact")}
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <p className="font-semibold text-brand-primary">
              {t("services.label")}
            </p>
            <div className="flex flex-col space-y-2 text-sm">
              <Link href="#" className="footer-link">
                {t("services.items.vehicle.title")}
              </Link>
              <Link href="#" className="footer-link">
                {t("services.items.pedestrian.title")}
              </Link>
              <Link href="#" className="footer-link">
                {t("services.items.parking.title")}
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <p className="font-semibold text-brand-primary">
              {t("nav.resources")}
            </p>
            <div className="flex flex-col space-y-2 text-sm">
              <Link href="/about" className="footer-link">
                {t("nav.about")}
              </Link>
              <Link href="/blog" className="footer-link">
                {t("nav.blog")}
              </Link>
              <Link href="#" className="footer-link">
                {t("nav.privacy")}
              </Link>
              <Link href="#" className="footer-link">
                {t("nav.terms")}
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-4 text-brand-primary font-medium group"
              >
                {t("nav.contact")}
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
          className="container mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-bg-primary/80"
          dir="ltr"
        >
          <div className="flex items-center gap-4">
            <Logo
              responsive
              iconWidth={500}
              iconHeight={500}
              iconClassName="w-4 h-4"
              logoWidth={500}
              logoHeight={500}
              logoClassName="h-4 md:w-24 ml-2 mx-1"
            />
            <p>{t("general.rights")}</p>
          </div>

          <div className="flex items-center gap-6 mt-3 md:mt-0 text-xl">
            <Link href="https://www.facebook.com/profile.php?id=61585550430439">
              <FaFacebook className="hover:text-brand-primary transition" />
            </Link>
            <Link href="#">
              <FaTwitter className="hover:text-brand-primary transition" />
            </Link>
            <Link href="#">
              <FaLinkedin className="hover:text-brand-primary transition" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
