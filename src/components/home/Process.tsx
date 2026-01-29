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

export default function Process() {
  const { t, isRTL } = useLanguage();

  const processSteps = [
    {
      number: "01",
      title: t("process.step1.title"),
      description: t("process.step1.desc"),
      icon: <HiOutlineMapPin />,
    },
    {
      number: "02",
      title: t("process.step2.title"),
      description: t("process.step2.desc"),
      icon: <HiOutlinePencilSquare />,
    },
    {
      number: "03",
      title: t("process.step3.title"),
      description: t("process.step3.desc"),
      icon: <HiOutlineBuildingOffice2 />,
    },
    {
      number: "04",
      title: t("process.step4.title"),
      description: t("process.step4.desc"),
      icon: <HiOutlineCheckBadge />,
    },
    {
      number: "05",
      title: t("process.step5.title"),
      description: t("process.step5.desc"),
      icon: <HiOutlineWrenchScrewdriver />,
    },
    {
      number: "06",
      title: t("process.step6.title"),
      description: t("process.step6.desc"),
      icon: <RiCustomerService2Line />,
    },
  ];

  return (
    <section className="py-24 bg-white w-full">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-16 w-full text-left rtl:text-right">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-px w-8 bg-[#F28C28] mr-3 rtl:ml-3 rtl:mr-0"></div>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#F28C28]">
              {t('process.upperTitle')}
            </span>
            <div className="h-px w-8 bg-[#F28C28] ml-3 rtl:mr-3 rtl:ml-0"></div>
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
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="relative border border-bg-primary/30 px-6 py-6 text-bg-primary text-left rtl:text-right rounded-lg group hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col justify-between gap-2"
            >
              {/* Step Number */}
              <div className="absolute top-3 right-3 rtl:left-3 rtl:right-auto text-bg-primary/30 font-semibold text-4xl">
                {step.number}
              </div>
              <div className="flex justify-center items-start gap-4 pt-6">
                <div className="bg-bg-light text-2xl p-2 rounded-full group-hover:text-white group-hover:bg-brand-dark transition-colors duration-300">
                  {step.icon}
                </div>
                <div className="pt- flex flex-col gap-2 items-start w-full">
                  <h3 className="font-semibold text-xl ">{step.title}</h3>

                  <p className="text-bg-primary/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
                <div className="  h-1 w-0 group-hover:w-full bg-linear-to-r from-brand-primary to-brand-light transition-all duration-300 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
