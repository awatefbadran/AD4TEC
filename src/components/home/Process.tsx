"use client";

import { useLanguage } from "@/context/LanguageContext";
import {
  HiOutlineMapPin,
  HiOutlinePencilSquare,
  HiOutlineBuildingOffice2,
  HiOutlineCheckBadge,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";
import { RiCustomerService2Line } from "react-icons/ri";

const icons = [
  <HiOutlineMapPin />,
  <HiOutlinePencilSquare />,
  <HiOutlineBuildingOffice2 />,
  <HiOutlineCheckBadge />,
  <HiOutlineWrenchScrewdriver />,
  <RiCustomerService2Line />,
];

export default function Process() {
  const { t, isRTL } = useLanguage();

  const steps = t("process.steps");

  return (
    <section className="py-24 bg-white w-full">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-16 w-full text-left rtl:text-right">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-px w-8 bg-brand-primary mr-3 rtl:ml-3 rtl:mr-0"></div>

            <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
              {t("process.upperTitle")}
            </span>

            <div className="h-px w-8 bg-brand-primary ml-3 rtl:mr-3 rtl:ml-0"></div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-bg-primary">
            {t("process.title")}
          </h2>

          <p className="text-lg md:text-xl text-bg-primary/80 max-w-3xl">
            {t("process.description")}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map(
            (
              step: { title: string; desc: string },
              index: number
            ) => (
              <div
                key={index}
                className="relative border border-bg-primary/30 px-6 py-6 text-bg-primary text-left rtl:text-right rounded-lg group hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col justify-between gap-2"
              >
                {/* Step Number */}
                <div className="absolute top-3 right-3 rtl:left-3 rtl:right-auto text-bg-primary/30 font-semibold text-4xl">
                  {(index + 1).toString().padStart(2, "0")}
                </div>

                <div className="flex justify-center items-start gap-4 pt-6">
                  <div className="bg-bg-light text-2xl p-2 rounded-full group-hover:text-white group-hover:bg-brand-dark transition-colors duration-300">
                    {icons[index]}
                  </div>

                  <div className="flex flex-col gap-2 items-start w-full">
                    <h3 className="font-semibold text-xl">
                      {step.title}
                    </h3>

                    <p className="text-bg-primary/70 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                <div className="h-1 w-0 group-hover:w-full bg-linear-to-r from-brand-primary to-brand-light transition-all duration-300 rounded-full"></div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
