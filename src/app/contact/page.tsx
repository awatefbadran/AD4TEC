"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Page() {
  const { t, isRTL } = useLanguage();

  const contactItems = [
    {
      title: t("contact.email"),
      value: "Info@ad4tec.com",
    },
    {
      title: t("contact.phone"),
      value: "01027249494 / 01000045030",
    },
    {
      title: t("contact.whatsapp"),
      value: t("contact.chatWhatsapp"),
      link: "https://wa.me/201040190064",
    },
    {
      title: t("contact.addresstitle"),
      value: t("contact.address"),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section
        className="w-full py-24 bg-bg-primary"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t("contact.title")} AD
            <span className="text-brand-primary">4</span>
            TEC
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white" dir={isRTL ? "rtl" : "ltr"}>
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactItems.map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h4 className="font-semibold text-lg mb-2 text-brand-primary">
                {item.title}
              </h4>

              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:underline"
                  dir="ltr"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-gray-700">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-20 bg-[#f9fafb]" dir={isRTL ? "rtl" : "ltr"}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            {t("contact.workingHoursTitle.working")}{" "}
            <span className="text-amber-600">
              {t("contact.workingHoursTitle.hours")}
            </span>
          </h2>


          <p className="text-gray-700">
            {t("contact.workingHours")}
          </p>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-[#f9fafb]" dir={isRTL ? "rtl" : "ltr"}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            {t("contact.location")}
          </h2>

          <div className="w-full h-100 rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps?q=6PJQ%2B389,+10th+of+Ramadan+City+1,+Al-Sharqia+Governorate+7067125&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
