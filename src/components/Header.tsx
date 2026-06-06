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

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-[900] transition-all duration-500",
        scrolled
          ? "border-b border-white/10 bg-ink/80 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-5 sm:px-8">
        {/* brand */}
        <button onClick={() => go("home")} className="flex items-center gap-3" aria-label="Kayan Avenue Properties">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-mark.svg" alt="" className="h-9 w-auto" />
          <span className="flex flex-col leading-none">
            <span className="font-roman text-[1.2rem] font-semibold tracking-[0.18em] text-gold-grad">KAYAN</span>
            <span className="mt-[3px] text-[0.5rem] tracking-[0.4em] text-ivory-dim">
              {t({ en: "AVENUE PROPERTIES", ar: "أفينيو العقارية" })}
            </span>
          </span>
        </button>

        {/* desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className="group relative text-[0.84rem] tracking-wide text-ivory/85 transition-colors hover:text-gold"
            >
              {t(n.label)}
              <span className="absolute -bottom-1 start-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="rounded-full border border-white/15 px-3.5 py-2 text-[0.74rem] tracking-wide text-ivory/90 transition-colors hover:border-gold hover:text-gold"
            aria-label="Switch language"
          >
            {lang === "en" ? "العربية" : "EN"}
          </button>
          <button
            onClick={() => go("contact")}
            className="hidden rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-deep px-5 py-2.5 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[#241a06] shadow-[0_10px_30px_-12px_rgba(194,162,92,0.7)] transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            {t({ en: "Get in Touch", ar: "تواصل معنا" })}
          </button>
          <button
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 place-items-center text-ivory lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[950] bg-noir/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between px-5 py-5 sm:px-8">
              <span className="font-roman text-[1.2rem] font-semibold tracking-[0.18em] text-gold-grad">KAYAN</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-10 w-10 place-items-center text-ivory">
                <X className="h-6 w-6" />
              </button>
            </div>
            <motion.nav
              className="mt-10 flex flex-col items-center gap-7"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
            >
              {nav.map((n) => (
                <motion.button
                  key={n.id}
                  onClick={() => go(n.id)}
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                  className="font-display text-3xl text-ivory transition-colors hover:text-gold"
                >
                  {t(n.label)}
                </motion.button>
              ))}
              <motion.button
                onClick={() => go("contact")}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                className="mt-4 rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-deep px-7 py-3 text-[0.74rem] font-medium uppercase tracking-[0.14em] text-[#241a06]"
              >
                {t({ en: "Get in Touch", ar: "تواصل معنا" })}
              </motion.button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
