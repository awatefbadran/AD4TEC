"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="w-full min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div
            className="text-[#f7eee3]"
            dir={isRTL ? "rtl" : "ltr"}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {t("heroTitleLine1")}
              <br />
              {t("heroTitleLine2").replace(
                "AD4TEC",
                "AD"
              )}
              <span className="text-amber-600">4</span>TEC
            </h1>

            <p className="text-[#ece5d7] max-w-lg mb-8">
              {t("heroDescription")}
            </p>

            <button className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 transition px-6 py-3 rounded-md text-white font-semibold">
              {t("requestQuote")}
              <span
                className={`text-lg transition-transform ${
                  isRTL ? "rotate-180" : ""
                }`}
              >
                →
              </span>
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/hero.png"
                alt="Automatic Car Gate System by AD4TEC"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
