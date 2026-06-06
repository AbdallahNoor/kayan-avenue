"use client";

import { motion } from "motion/react";
import { useLang } from "@/lib/i18n";

export default function Marquee() {
  const { t, lang } = useLang();
  const words = [
    t({ en: "Luxury Villas", ar: "فلل فاخرة" }),
    t({ en: "Penthouses", ar: "بنتهاوس" }),
    t({ en: "Off-Plan", ar: "على الخارطة" }),
    t({ en: "Waterfront", ar: "واجهة بحرية" }),
    t({ en: "Investment", ar: "استثمار" }),
    t({ en: "Advisory", ar: "استشارات" }),
    t({ en: "Branded Residences", ar: "مساكن فاخرة" }),
  ];
  const sequence = [...words, ...words];

  return (
    <section className="overflow-hidden border-y border-white/10 bg-coal py-6" aria-hidden="true">
      <motion.div
        className="flex w-max items-center gap-10 whitespace-nowrap"
        animate={{ x: lang === "ar" ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 38, ease: "linear", repeat: Infinity }}
      >
        {sequence.map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-2xl italic text-ivory/85 sm:text-3xl">{w}</span>
            <span className="text-gold">✦</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
