"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function CTASection() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`
            relative overflow-hidden rounded-2xl
            bg-gradient-to-r from-[#6B6EF9] to-[#5A5EF7]
            px-8 py-12 md:px-12 md:py-16
            flex flex-col lg:flex-row items-center gap-6
            ${isRTL ? "lg:flex-row-reverse text-right" : "text-left"}
          `}
          dir={isRTL ? "rtl" : "ltr"}
        >
          {/* Decorative blocks */}
          <span className="absolute top-0 left-0 w-6 h-6 bg-brand-primary opacity-60" />
          <span className="absolute bottom-0 right-0 w-6 h-6 bg-brand-light opacity-60" />

          {/* Text */}
          <div className="flex-1 text-white">
            <p className="text-sm uppercase tracking-widest opacity-80 mb-2">
              {t("cta.upperTitle")}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold max-w-xl">
              {t("cta.title")}
            </h3>
          </div>

          {/* Input + Button */}
          <div className="flex w-full lg:w-auto gap-0">
            <input
              type="text"
              placeholder={t("cta.placeholder")}
              className="px-4 py-3 rounded-l-lg w-full lg:w-64 text-bg-primary outline-0 border border-brand-dark"
            />
            <button
              className="px-6 py-3 rounded-r-lg bg-brand-primary text-white font-semibold hover:bg-brand-dark transition cursor-pointer"
            >
              {t("cta.button")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
