"use client";
import { useLanguage } from "@/context/LanguageContext";
import Logo from "../layout/Logo";

export default function CTASection() {
  const { t, isRTL } = useLanguage();

  const Text = () => (
    <div className="flex-1 text-gray-900">
      <p className="text-sm uppercase tracking-widest text-amber-600 mb-2 font-semibold">
        {t("cta.upperTitle")}
      </p>

      <h3 className="text-2xl md:text-3xl font-bold max-w-xl leading-snug text-white">
        {t("cta.title")} <Logo istext />
      </h3>
    </div>
  );

  const Form = () => (
    <div className="flex w-full lg:w-auto">
      <input
        type="text"
        placeholder={t("cta.placeholder")}
        className={`px-4 py-3 w-full lg:w-64 bg-white text-gray-900 outline-none border border-gray-300 focus:border-amber-500 ${
          isRTL ? "rounded-r-lg" : "rounded-l-lg"
        }`}
      />
      <button
        className={`px-6 py-3 bg-amber-600 text-white font-semibold hover:bg-amber-700 transition ${
          isRTL ? "rounded-l-lg" : "rounded-r-lg"
        }`}
      >
        {t("cta.button")}
      </button>
    </div>
  );

  return (
    <section className="py-16 bg-[#f9fafb]">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          dir={isRTL ? "rtl" : "ltr"}
          className="relative overflow-hidden rounded-2xl 
         bg-bg-primary 
          px-8 py-12 md:px-12 md:py-16
          flex flex-col lg:flex-row gap-6 items-center rtl:lg:flex-row-reverse"
        >
          {/* decorative accents */}
          <span className="absolute top-0 left-0 w-8 h-8 bg-amber-700 opacity-20 rounded-br-2xl" />
          <span className="absolute bottom-0 right-0 w-10 h-10 bg-amber-700 opacity-20 rounded-tl-2xl" />

          {isRTL ? (
            <>
              <Form />
              <Text />
            </>
          ) : (
            <>
              <Text />
              <Form />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
