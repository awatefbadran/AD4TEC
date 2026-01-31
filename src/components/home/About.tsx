"use client";

import { useLanguage } from "@/context/LanguageContext";
import Logo from "../layout/Logo";
export default function About() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="w-full py-20 bg-[#f9fafb]">
      <div className="container mx-auto px-6">
        {/* Top Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">
          {/* Left */}
          <div>
            <div className="inline-flex items-center mb-4 gap-3">
              <div className="h-px w-8 bg-brand-primary" />
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
                {t("about.label")}
              </span>
              <div className="h-px w-8 bg-brand-primary" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              {t("about.title.line1")} <Logo istext={true} /> <br />
              {t("about.title.line2")}
            </h2>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-xl font-semibold text-amber-600 mb-4">
              {t("about.subtitle")}
            </h3>

            <p className="text-gray-700 leading-relaxed">
              {t("about.description")}
            </p>
          </div>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <img
            src="/about1.jpg"
            alt="AD4TEC Work"
            className="w-full h-64 object-cover rounded-xl"
          />
          <img
            src="/about4.jpg"
            alt="AD4TEC Team"
            className="w-full h-64 object-cover rounded-xl"
          />
          <img
            src="/about3.jpg"
            alt="AD4TEC Projects"
            className="w-full h-64 object-cover rounded-xl"
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <div>
            <h4 className="text-3xl font-bold text-gray-900">10+</h4>
            <p className="text-gray-500 text-sm">
              {t("about.stats.yearsExperience")}
            </p>
          </div>

          <div>
            <h4 className="text-3xl font-bold text-gray-900">500+</h4>
            <p className="text-gray-500 text-sm">
              {t("about.stats.projectsDelivered")}
            </p>
          </div>

          <div>
            <h4 className="text-3xl font-bold text-gray-900">100%</h4>
            <p className="text-gray-500 text-sm">
              {t("about.stats.certifiedMaterials")}
            </p>
          </div>

          <div className={isRTL ? "md:text-left" : "md:text-right"}>
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-amber-600 font-medium hover:underline"
            >
              {t("about.readMore")}
              <span className={isRTL ? "rotate-180" : ""}>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
