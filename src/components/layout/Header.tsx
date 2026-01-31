"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { MdLanguage } from "react-icons/md";
import Logo from "./Logo";
interface NavItem {
  id: string;
  labelKey: "home" | "services" | "about" | "store" | "blog" | "contact";
  href: string;
  hasDropdown?: boolean;
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, toggleLang, isRTL, lang } = useLanguage();

  const navItems: NavItem[] = [
    { id: "home", labelKey: "home", href: "/" },
    { id: "services", labelKey: "services", href: "/service" },
    { id: "about", labelKey: "about", href: "/about" },
    { id: "store", labelKey: "store", href: "/store" },
    { id: "blog", labelKey: "blog", href: "/blog" },
    { id: "contact", labelKey: "contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-bg-primary shadow-lg">
      <div className="container mx-auto px-4 py-3 ">
        {/* Top Bar */}
        <div className="flex items-center justify-between " dir="ltr">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 " dir={isRTL?"rtl":"ltr"}>
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.id}
                className="text-bg-light hover:text-brand-primary font-medium py-2 transition-colors"
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-brand-primary hover:bg-white/10 hover:border-brand-primary hover:scale-[0.97] transition-all duration-300 cursor-pointer"
            >
              <MdLanguage className="text-lg" />

              <span className="text-sm font-medium text-bg-light hidden md:inline-block">
                {lang === "en" ? "English" : "العربية"}
              </span>
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-brand-primary hover:bg-gray-100 transition"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 border-t border-gray-200 pt-4">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className="px-4 py-3 text-left font-medium text-gray-800 hover:text-brand-primary hover:bg-gray-50 rounded-lg transition"
                >
                  {t(item.labelKey)}
                </button>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200">
                <button className="w-full flex items-center justify-center px-5 py-3 bg-linear-to-r from-brand-primary to-brand-light text-white font-medium rounded-lg transition shadow-md">
                  {t("getStarted")}
                  <svg
                    className={`w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0 ${
                      isRTL ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}