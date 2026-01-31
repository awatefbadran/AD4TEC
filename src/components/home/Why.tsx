"use client";

import { useLanguage } from "@/context/LanguageContext";
import { HiCheckBadge } from "react-icons/hi2";

export default function TrustSection() {
  const { t, isRTL } = useLanguage();

  const TextContent = () => (
    <div
      className={`w-full lg:w-1/2 ${isRTL ? "text-right" : "text-left"}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="inline-flex items-center mb-4 gap-3">
        <div className="h-px w-8 bg-brand-primary" />
        <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
          {t("trust.upperTitle")}
        </span>
        <div className="h-px w-8 bg-brand-primary" />
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-bg-primary mb-4">
        {t("trust.title")}
      </h2>

      <p className="text-bg-primary/70 mb-6 max-w-md">
        {t("trust.description")}
      </p>

      <div className="flex flex-col gap-3">
        {[t("trust.point1"), t("trust.point2"), t("trust.point3")].map(
          (item, i) => (
            <div key={i} className="flex items-center gap-2">
              <HiCheckBadge className="text-brand-primary text-xl shrink-0" />
              <span className="text-sm text-bg-primary">{item}</span>
            </div>
          ),
        )}
      </div>
    </div>
  );

  const QuoteBox = () => (
    <div
      className="w-full lg:w-1/2 relative bg-white border border-bg-primary/20 rounded-xl p-8"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <span
        className={`absolute top-4 text-5xl text-bg-primary/10 ${isRTL ? "left-6" : "right-6"}`}
      >
        {isRTL ? "”" : "“"}
      </span>

      <p className="text-bg-primary text-lg leading-relaxed mb-6">
        {t("trust.quote")}
      </p>

      <div
        className={
          isRTL
            ? "border-r-4 pr-4 border-brand-primary"
            : "border-l-4 pl-4 border-brand-primary"
        }
      >
        <p className="font-semibold text-bg-primary">{t("trust.author")}</p>
        <p className="text-sm text-bg-primary/60">{t("trust.position")}</p>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center rtl:lg:flex-row-reverse">
          <>
            <QuoteBox />
            <TextContent />
          </>
        </div>
      </div>
    </section>
  );
}
