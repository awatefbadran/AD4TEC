"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Page() {
  const { t, isRTL } = useLanguage(); // t() لترجمة النصوص و isRTL لتغيير اتجاه النص

  const values = [
    { title: t("quality"), desc: t("qualityDesc") },
    { title: t("professionalism"), desc: t("professionalismDesc") },
    { title: t("commitment"), desc: t("commitmentDesc") },
    { title: t("innovation"), desc: t("innovationDesc") },
    { title: t("customersFirst"), desc: t("customersFirstDesc") },
  ];

  const gallery = ["/about8.jpg", "/about2.jpg", "/about5.jpg"];

  return (
    <>
      {/* Hero */}
      <section
        className="w-full py-24 bg-gray-900"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h5 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {t("about")} AD
              <span style={{ color: "var(--color-brand-primary)" }}>4</span>
              TEC
            </h5>
            <p className="text-gray-300 leading-relaxed">
              {t("aboutDescription")}
            </p>
          </div>

          <img
            src="/about6.jpg"
            alt="AD4TEC Factory"
            className="w-full h-64 object-cover rounded-xl"
          />
        </div>
      </section>

      {/* About Factory */}
      <section className="py-20 bg-white" dir={isRTL ? "rtl" : "ltr"}>
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <img
            src="/about4.jpg"
            alt="Manufacturing"
            className="w-full max-w-2xl mx-auto rounded-xl shadow-md"
          />

          <div>
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "var(--color-brand-primary)" }}
            >
              {t("whoWeAre")}
            </h2>

            <p className="text-gray-700 leading-relaxed">
              {t("whoWeAreDesc")}
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-[#f9fafb]" dir={isRTL ? "rtl" : "ltr"}>
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-amber-600 mb-3">
              {t("ourVision")}
            </h3>
            <p className="text-gray-700">{t("ourVisionDesc")}</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-amber-600 mb-3">
              {t("ourMission")}
            </h3>
            <p className="text-gray-700">{t("ourMissionDesc")}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-24"
        style={{ backgroundColor: "var(--color-bg-light)" }}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-900">
            {t("our")} <span className="text-brand">{t("coreValues")}</span>
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {values.map((item, i) => (
              <div
                key={i}
                className="
                  bg-white
                  p-8
                  rounded-xl
                  shadow-md
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <h4 className="font-semibold text-lg mb-4 text-brand">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-800 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work & Facilities */}
      <section className="py-24 bg-white" dir={isRTL ? "rtl" : "ltr"}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-900">
            {t("our")} <span className="text-brand">{t("workAndFacilities")}</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {gallery.map((img, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-3xl shadow-md"
              >
                <img
                  src={img}
                  alt="AD4TEC Project"
                  className="
                    w-full h-72 object-cover
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-sm tracking-wide">{t("facilities")}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
