"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const { t, isRTL } = useLanguage();

  const cards = t("expertise.cards");

  return (
    <section className="w-full py-20 bg-[#f3f6f8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div dir={isRTL ? "rtl" : "ltr"}>
            <div className="inline-flex items-center mb-4 gap-3">
              <div className="h-px w-8 bg-brand-primary" />
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
                {t("expertise.label")}
              </span>
              <div className="h-px w-8 bg-brand-primary" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-6">
              {t("expertise.title.line1")}
              <br />
              {t("expertise.title.line2")}
            </h2>

            <p className="text-gray-600 max-w-lg">
              {t("expertise.description")}
            </p>
          </div>

          {/* Right Cards */}
          <div className="space-y-6" dir={isRTL ? "rtl" : "ltr"}>
            {cards.map(
              (card: { title: string; desc: string }, index: number) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-600 ${
                    isRTL ? "border-l-0 border-r-4" : ""
                  }`}
                >
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {card.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{card.desc}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
