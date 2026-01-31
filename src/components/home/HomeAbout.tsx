"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function About() {
    const { t, isRTL } = useLanguage();

    return (
        <section className="w-full py-20 bg-[#f9fafb]">
            <div className="container mx-auto px-6">

                {/* Top Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">

                    {/* Left */}
                    <div dir={isRTL ? "rtl" : "ltr"}>
                        <p className="text-sm font-semibold text-gray-500 uppercase mb-3">
                            {t("aboutLabel")}
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                            AD<span className="text-amber-600">4</span>TEC {t("aboutTitleLine1")}
                            <br />
                            {t("aboutTitleLine2")}
                        </h2>

                    </div>

                    {/* Right */}
                    <div dir={isRTL ? "rtl" : "ltr"}>
                        <h3 className="text-xl font-semibold text-amber-600 mb-4">
                            {t("aboutSubtitle")}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            {t("aboutDescription")}
                        </p>
                    </div>
                </div>

                {/* Images */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <img src="/about1.jpg" alt="AD4TEC Work" className="w-full h-64 object-cover rounded-xl" />
                    <img src="/about4.jpg" alt="AD4TEC Team" className="w-full h-64 object-cover rounded-xl" />
                    <img src="/about3.jpg" alt="AD4TEC Projects" className="w-full h-64 object-cover rounded-xl" />
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center" dir={isRTL ? "rtl" : "ltr"}>
                    <div>
                        <h4 className="text-3xl font-bold text-gray-900">10+</h4>
                        <p className="text-gray-500 text-sm">{t("yearsExperience")}</p>
                    </div>

                    <div>
                        <h4 className="text-3xl font-bold text-gray-900">500+</h4>
                        <p className="text-gray-500 text-sm">{t("projectsDelivered")}</p>
                    </div>

                    <div>
                        <h4 className="text-3xl font-bold text-gray-900">100%</h4>
                        <p className="text-gray-500 text-sm">{t("certifiedMaterials")}</p>
                    </div>

                    <div className={isRTL ? "md:text-left" : "md:text-right"}>
                        <a
                            href="/about"
                            className="inline-flex items-center gap-2 text-amber-600 font-medium hover:underline"
                        >
                            {t("readAboutUs")}
                            <span className={isRTL ? "rotate-180" : ""}>→</span>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
