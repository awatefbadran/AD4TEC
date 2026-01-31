"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import Logo from "../layout/Logo";

export default function Hero() {
  const { t, isRTL } = useLanguage();

  const TextContent = () => (
    <div
      className={`text-bg-light ${
        isRTL ? "text-right" : "text-left"
      } flex-1`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        {t("hero.title.line1")}{" "}
        {t("hero.title.line2")}{" "}
        <Logo istext={true}></Logo>
      </h1>

      <p className="text-[#ece5d7] max-w-lg mb-8">
        {t("hero.description")}
      </p>

      <Link
        href="/contact"
        className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 transition px-6 py-3 rounded-md text-white font-semibold"
      >
        {t("hero.cta")}
        <span className="text-lg transition-transform">
          {isRTL ? "←" : "→"}
        </span>
      </Link>
    </div>
  );

  const ImageContent = () => (
    <div className="flex-1 rounded-xl overflow-hidden shadow-2xl">
      <Image
        src="/hero.png"
        height={500}
        width={800}
        alt={t("hero.imageAlt")}
        className="w-full h-full object-cover"
        priority
      />
    </div>
  );

  return (
    <section className="w-full min-h-screen py-20 bg-bg-primary flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row gap-12 items-center rtl:lg:flex-row-reverse">
          {isRTL ? (
            <>
              <ImageContent />
              <TextContent />
            </>
          ) : (
            <>
              <TextContent />
              <ImageContent />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
