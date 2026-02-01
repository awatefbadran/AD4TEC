"use client";

import { createContext, useContext, useEffect, useState } from "react";
import en from "@/i18n/en.json";
import ar from "@/i18n/ar.json";

type Lang = "en" | "ar";

const translations = { en, ar };

interface LanguageContextType {
  lang: Lang;
  t: (key: string) => any;
  toggleLang: () => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

// helper to read nested keys like "nav.home"
function getNestedValue(obj: any, path: string) {
  return path
    .split(".")
    .reduce((acc, key) => acc?.[key], obj) ?? path;
}

export function LanguageProvider({
  children
}: {
  children: React.ReactNode;
}) {
const [lang, setLang] = useState<Lang>("ar");


  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang;
    if (saved) setLang(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = (key: string) =>
    getNestedValue(translations[lang], key);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        toggleLang,
        t,
        isRTL: lang === "ar"
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return ctx;
};
