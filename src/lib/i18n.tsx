"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "ar";
export type Localized = { en: string; ar: string };

type Ctx = {
  lang: Lang;
  dir: "ltr" | "rtl";
  t: (v: Localized) => string;
  toggle: () => void;
  setLang: (l: Lang) => void;
};

const LangContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "kayan-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    let saved: Lang = "en";
    try {
      saved = (localStorage.getItem(STORAGE_KEY) as Lang) || "en";
    } catch {}
    setLangState(saved);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("lang", lang);
    root.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggle = useCallback(
    () => setLangState((p) => (p === "en" ? "ar" : "en")),
    []
  );
  const t = useCallback((v: Localized) => v[lang], [lang]);

  const value = useMemo<Ctx>(
    () => ({ lang, dir: lang === "ar" ? "rtl" : "ltr", t, toggle, setLang }),
    [lang, t, toggle, setLang]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

/* shorthand for bilingual literals */
export const L = (en: string, ar: string): Localized => ({ en, ar });
