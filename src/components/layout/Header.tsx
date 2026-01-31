"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MdLanguage } from "react-icons/md";
import { useLanguage } from "@/context/LanguageContext";
import Logo from "./Logo";

interface NavItem {
  id: string;
  labelKey: "home" | "services" | "about" | "store" | "blog" | "contact";
  href: string;
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
    { id: "contact", labelKey: "contact", href: "/contact" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-bg-primary shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between" dir="ltr">
          <Logo />

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center space-x-6"
            dir={isRTL ? "rtl" : "ltr"}
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-bg-light hover:text-brand-primary font-medium py-2 transition-colors"
              >
                {t(`nav.${item.labelKey}`)}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-brand-primary hover:bg-white/10 transition cursor-pointer"
            >
              <MdLanguage className="text-lg" />
              <span className="text-sm font-medium text-bg-light hidden md:inline-block">
                {lang === "en" ? "English" : "العربية"}
              </span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 flex flex-col space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="px-4 py-3 font-medium hover:text-brand-primary"
              >
                {t(`nav.${item.labelKey}`)}
              </Link>
            ))}

            <button className="mt-4 w-full bg-brand-primary text-white py-3 rounded-lg">
              {t("nav.getStarted")}
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
