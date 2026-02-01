"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsPage() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-28">
      <div className="container mx-auto px-6">

        {/* Intro */}
        <div className="text-center max-w-5xl mx-auto mb-28">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-primary mb-6 font-semibold">
            {t("projects.label")}
          </p>

          <h1 className="text-[56px] md:text-[100px] font-extrabold leading-tight text-gray-900">
            {t("projects.title")}
          </h1>

          <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

          <ProjectBlock
            title={t("projects.categories.gates.title")}
            desc={[
              t("projects.categories.gates.desc.0"),
              t("projects.categories.gates.desc.1"),
              t("projects.categories.gates.desc.2")
            ]}
            places={[
              t("projects.categories.gates.places.0"),
              t("projects.categories.gates.places.1"),
              t("projects.categories.gates.places.2")
            ]}
            isRTL={isRTL}
          />

          <ProjectBlock
            title={t("projects.categories.parking.title")}
            desc={[
              t("projects.categories.parking.desc.0"),
              t("projects.categories.parking.desc.1"),
              t("projects.categories.parking.desc.2")
            ]}
            places={[
              t("projects.categories.parking.places.0"),
              t("projects.categories.parking.places.1"),
              t("projects.categories.parking.places.2"),
              t("projects.categories.parking.places.3"),
              t("projects.categories.parking.places.4")
            ]}
            isRTL={isRTL}
          />

          <ProjectBlock
            title={t("projects.categories.hotels.title")}
            desc={[
              t("projects.categories.hotels.desc.0"),
              t("projects.categories.hotels.desc.1")
            ]}
            places={[
              t("projects.categories.hotels.places.0"),
              t("projects.categories.hotels.places.1"),
              t("projects.categories.hotels.places.2")
            ]}
            isRTL={isRTL}
          />

          <ProjectBlock
            title={t("projects.categories.corporates.title")}
            desc={[
              t("projects.categories.corporates.desc.0"),
              t("projects.categories.corporates.desc.1")
            ]}
            places={[
              t("projects.categories.corporates.places.0"),
              t("projects.categories.corporates.places.1"),
              t("projects.categories.corporates.places.2")
            ]}
            isRTL={isRTL}
          />

        </div>
      </div>
    </section>
  );
}

function ProjectBlock({
  title,
  desc,
  places,
  isRTL
}: {
  title: string;
  desc: string[];
  places: string[];
  isRTL: boolean;
}) {
  return (
    <div className="relative rounded-2xl border border-gray-200 bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-300">

      <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-brand-primary" />

      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {title}
      </h2>

      <ul className="space-y-3 text-gray-700 mb-8">
        {desc.map((item, i) => (
          <li key={i} className="flex gap-3">
            <span className="text-brand-primary font-bold">—</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="pt-6 border-t border-gray-100">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">
          {isRTL ? "المواقع الرئيسية" : "Key Locations"}
        </p>

        <div className="space-y-2 text-gray-600">
          {places.map((p, i) => (
            <div key={i} className="flex gap-2">
              <span className="text-brand-primary">•</span>
              <span>{p}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

