"use client";

import { FaCar, FaWalking, FaParking } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t, isRTL } = useLanguage();

  const services = t("services");

  return (
    <section className="w-full py-24 bg-[#fbe7d3]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`flex flex-col lg:flex-row justify-between items-start gap-10 mb-16 rtl:lg:flex-row-reverse`}
        >
          {isRTL ? (
            <>
              <a
                href="/services"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 transition px-6 py-3 rounded-md text-white font-semibold"
              >
                {services.viewAll}
                <span className={isRTL ? "rotate-180" : ""}>→</span>
              </a>
              <div>
                <div className="inline-flex items-center mb-4 gap-3">
                  <div className="h-px w-8 bg-brand-primary" />
                  <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
                    {services.label}
                  </span>
                  <div className="h-px w-8 bg-brand-primary" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl">
                  {services.title}
                </h2>
              </div>
            </>
          ) : (
            <>
              <div>
                <div className="inline-flex items-center mb-4 gap-3">
                  <div className="h-px w-8 bg-brand-primary" />
                  <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
                    {services.label}
                  </span>
                  <div className="h-px w-8 bg-brand-primary" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl">
                  {services.title}
                </h2>
              </div>

              <a
                href="/services"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 transition px-6 py-3 rounded-md text-white font-semibold"
              >
                {services.viewAll}
                <span className={isRTL ? "rotate-180" : ""}>→</span>
              </a>
            </>
          )}
        </div>

        {/* Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          dir={isRTL ? "rtl" : "ltr"}
        >
          {/* Vehicle */}
          <ServiceCard
            icon={<FaCar size={22} />}
            title={services.items.vehicle.title}
            desc={services.items.vehicle.desc}
            link="/services/vehicle-gates"
            readMore={services.readMore}
            isRTL={isRTL}
          />

          {/* Pedestrian */}
          <ServiceCard
            icon={<FaWalking size={22} />}
            title={services.items.pedestrian.title}
            desc={services.items.pedestrian.desc}
            link="/services/pedestrian-gates"
            readMore={services.readMore}
            isRTL={isRTL}
          />

          {/* Parking */}
          <ServiceCard
            icon={<FaParking size={22} />}
            title={services.items.parking.title}
            desc={services.items.parking.desc}
            link="/services/parking-system"
            readMore={services.readMore}
            isRTL={isRTL}
          />
        </div>
      </div>
    </section>
  );
}

/* Reusable Card */
function ServiceCard({
  icon,
  title,
  desc,
  link,
  readMore,
  isRTL,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  link: string;
  readMore: string;
  isRTL: boolean;
}) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-100 mb-6 text-amber-700">
        {icon}
      </div>

      <h4 className="text-lg font-semibold text-gray-900 mb-3">{title}</h4>

      <p className="text-gray-600 mb-4">{desc}</p>

      <a
        href={link}
        className="text-amber-600 font-medium hover:underline inline-flex items-center gap-1"
      >
        {readMore}
        <span className={isRTL ? "rotate-180" : ""}>→</span>
      </a>
    </div>
  );
}
