"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { useLang } from "@/lib/i18n";
import { nav } from "@/lib/content";
import { scrollToId } from "./SmoothScroll";

export default function Header() {
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  // light treatment while transparent over the dark hero; dark once scrolled
  const onLight = scrolled;

  return (
    <>
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-[900] transition-all duration-500",
        scrolled
          ? "border-b border-hair bg-[rgba(242,236,220,0.88)] py-3 backdrop-blur-xl"
          : "border-b border-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-5 sm:px-8">
        <button onClick={() => go("home")} className="flex items-center gap-3" aria-label="Kayan Avenue Properties">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-mark.svg" alt="" className="h-9 w-auto" />
          <span className="flex flex-col leading-none">
            <span className={clsx("font-display text-[1.35rem] font-semibold tracking-[0.04em] transition-colors", onLight ? "text-espresso" : "text-ivory")}>
              Kayan
            </span>
            <span className={clsx("label mt-1 text-[0.5rem] tracking-[0.34em] transition-colors", onLight ? "text-espresso-dim" : "text-ivory/70")}>
              {t({ en: "AVENUE PROPERTIES", ar: "أفينيو العقارية" })}
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className={clsx(
                "group relative text-[0.86rem] font-medium tracking-wide transition-colors",
                onLight ? "text-espresso/80 hover:text-bronze" : "text-ivory/85 hover:text-gold-light"
              )}
            >
              {t(n.label)}
              <span className={clsx("absolute -bottom-1 start-0 h-px w-0 transition-all duration-300 group-hover:w-full", onLight ? "bg-bronze" : "bg-gold-light")} />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className={clsx(
              "label rounded-full border px-3.5 py-2 text-[0.7rem] transition-colors",
              onLight ? "border-hair text-espresso hover:border-bronze hover:text-bronze" : "border-ivory/30 text-ivory hover:border-gold-light hover:text-gold-light"
            )}
            aria-label="Switch language"
          >
            {lang === "en" ? "ع" : "EN"}
          </button>
          <button
            onClick={() => go("contact")}
            className="label hidden rounded-full bg-gradient-to-br from-gold-light via-gold to-bronze px-5 py-2.5 text-[0.66rem] text-[#221d15] shadow-[0_10px_28px_-12px_rgba(154,115,48,0.7)] transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            {t({ en: "Get in Touch", ar: "تواصل معنا" })}
          </button>
          <button onClick={() => setOpen(true)} className={clsx("grid h-10 w-10 place-items-center transition-colors lg:hidden", onLight ? "text-espresso" : "text-ivory")} aria-label="Open menu">
            <Menu className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[950] bg-[#e7ddca] lg:hidden"
          >
            <div className="flex items-center justify-between px-5 py-5 sm:px-8">
              <span className="font-display text-[1.35rem] font-semibold text-espresso">Kayan</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-10 w-10 place-items-center text-espresso">
                <X className="h-6 w-6" strokeWidth={1.5} />
              </button>
            </div>
            <motion.nav
              className="mt-12 flex flex-col items-center gap-7"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
            >
              {nav.map((n, i) => (
                <motion.button
                  key={n.id}
                  onClick={() => go(n.id)}
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                  className="flex items-baseline gap-3 font-display text-4xl text-espresso transition-colors hover:text-bronze"
                >
                  <span className="label text-[0.7rem] text-bronze">{String(i + 1).padStart(2, "0")}</span>
                  {t(n.label)}
                </motion.button>
              ))}
              <motion.button
                onClick={() => go("contact")}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                className="label mt-4 rounded-full bg-gradient-to-br from-gold-light via-gold to-bronze px-7 py-3 text-[0.72rem] text-[#221d15]"
              >
                {t({ en: "Get in Touch", ar: "تواصل معنا" })}
              </motion.button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
