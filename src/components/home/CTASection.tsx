"use client";
import { useLanguage } from "@/context/LanguageContext";
import Logo from "../layout/Logo";
export default function CTASection() {
  const { t, isRTL } = useLanguage();
  const Text = () => (
    <div className="flex-1 text-white">
      <p className="text-sm uppercase tracking-widest opacity-80 mb-2">
        {t("cta.upperTitle")}
      </p>
      <h3 className="text-2xl md:text-3xl font-bold max-w-xl">
        {t("cta.title")}
        <Logo istext={true}></Logo>
      </h3>
    </div>
  );
  const Form = () => (
    <div className="flex w-full lg:w-auto">
      <input
        type="text"
        placeholder={t("cta.placeholder")}
        className={`px-4 py-3 w-full lg:w-64 text-bg-primary outline-0 border border-brand-dark ${isRTL ? "rounded-r-lg" : "rounded-l-lg"}`}
      />
      <button
        className={`px-6 py-3 bg-brand-primary text-white font-semibold hover:bg-brand-dark transition cursor-pointer ${isRTL ? "rounded-l-lg" : "rounded-r-lg"}`}
      >
        {t("cta.button")}
      </button>
    </div>
  );
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          dir={isRTL ? "rtl" : "ltr"}
          className="relative overflow-hidden rounded-2xl bg-linear-to-r from-[#6B6EF9] to-[#5A5EF7] px-8 py-12 md:px-12 md:py-16 flex flex-col lg:flex-row gap-6 items-center rtl:lg:flex-row-reverse "
        >
          <span className="absolute top-0 left-0 w-6 h-6 bg-brand-primary opacity-60" />
          <span className="absolute bottom-0 right-0 w-6 h-6 bg-brand-light opacity-60" />
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
