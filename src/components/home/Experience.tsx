"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="w-full py-20 bg-[#f3f6f8]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div dir={isRTL ? "rtl" : "ltr"}>
            <p className="text-sm font-semibold text-amber-600 uppercase mb-3">
              {t("expertiseLabel")}
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-6">
              {t("expertiseTitleLine1")}
              <br />
              {t("expertiseTitleLine2")}
            </h2>

            <p className="text-gray-600 max-w-lg">
              {t("expertiseDescription")}
            </p>
          </div>

          {/* Right Cards */}
          <div className="space-y-6" dir={isRTL ? "rtl" : "ltr"}>

            <div className={`bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-600 ${isRTL ? "border-l-0 border-r-4" : ""}`}>
              <h4 className="font-semibold text-gray-900 mb-1">
                {t("expertiseCard1Title")}
              </h4>
              <p className="text-gray-600 text-sm">
                {t("expertiseCard1Desc")}
              </p>
            </div>

            <div className={`bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-600 ${isRTL ? "border-l-0 border-r-4" : ""}`}>
              <h4 className="font-semibold text-gray-900 mb-1">
                {t("expertiseCard2Title")}
              </h4>
              <p className="text-gray-600 text-sm">
                {t("expertiseCard2Desc")}
              </p>
            </div>

            <div className={`bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-600 ${isRTL ? "border-l-0 border-r-4" : ""}`}>
              <h4 className="font-semibold text-gray-900 mb-1">
                {t("expertiseCard3Title")}
              </h4>
              <p className="text-gray-600 text-sm">
                {t("expertiseCard3Desc")}
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
