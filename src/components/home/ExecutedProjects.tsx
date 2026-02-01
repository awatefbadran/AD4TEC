"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const logos = [
  "/logo1.png",
  "/idg.png",
  "/allseason.png",
  "/district.png",
  "/elrehab.png",
  "/lulu.png",
  "/Picture1.png",
  "/almasa.png",
  "/eastcourt.png",
  "/triuph.png",
  "/openair.png",
  "/madinaty.png",
  "/sanstefano.png",
  "/seoudi.png",
  "/talat.png",
  "/carrefour.png",
  "/hilton.png",
  "/wezara.png"
];

export default function ExecutedProjects() {
  const { t, isRTL } = useLanguage();

  return (
    <section
      className="py-20 bg-white"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-brand-primary mb-3">
            {t("projects.label")}
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("projects.executedTitle")}
          </h2>

        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 "
            >
              <Image
                src={logo}
                alt={`Client ${index + 1}`}
                width={140}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
