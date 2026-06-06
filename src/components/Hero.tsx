"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { stats } from "@/lib/content";
import Counter from "./ui/Counter";
import { scrollToId } from "./SmoothScroll";

const heading = {
  en: "Find the right property for the <em>lifestyle</em> you deserve.",
  ar: "اعثر على العقار المناسب <em>لأسلوب الحياة</em> الذي تستحقه.",
};

const ease = [0.22, 0.61, 0.36, 1] as const;

export default function Hero() {
  const { t, lang } = useLang();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* background */}
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0 -z-10">
        <Image
          src="/images/villa-night.jpg"
          alt="Luxury villa overlooking Dubai at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-noir/92 via-noir/65 to-noir/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/10 to-noir/40" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="mx-auto w-full max-w-[1280px] px-5 pt-28 sm:px-8"
      >
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
          className="max-w-3xl"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease }}
            className="eyebrow mb-6 flex items-center gap-3 text-gold"
          >
            <span className="h-px w-9 bg-gold/70" />
            {t({ en: "Kayan Avenue Properties · Dubai", ar: "كيان أفينيو العقارية · دبي" })}
          </motion.p>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 1, ease }}
            className="lux-heading font-display text-[clamp(2.8rem,6.4vw,5.4rem)] font-medium leading-[1.02] tracking-tight text-white"
            dangerouslySetInnerHTML={{ __html: lang === "ar" ? heading.ar : heading.en }}
          />

          <motion.p
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.9, ease }}
            className="mt-7 max-w-xl text-[clamp(1rem,1.3vw,1.18rem)] text-ivory/80"
          >
            {t({
              en: "A refined real estate experience focused on premium properties, trusted guidance, and carefully selected opportunities across Dubai.",
              ar: "تجربة عقارية راقية تجمع بين العقارات المميزة، والاستشارات الموثوقة، والفرص المختارة بعناية في أبرز مناطق دبي.",
            })}
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.9, ease }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollToId("properties")}
              className="rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-deep px-8 py-4 text-[0.78rem] font-medium uppercase tracking-[0.16em] text-[#241a06] shadow-[0_14px_38px_-14px_rgba(194,162,92,0.8)] transition-transform hover:-translate-y-1"
            >
              {t({ en: "Explore Properties", ar: "استكشف العقارات" })}
            </button>
            <button
              onClick={() => scrollToId("contact")}
              className="rounded-full border border-white/25 bg-white/5 px-8 py-4 text-[0.78rem] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-gold hover:text-gold"
            >
              {t({ en: "Contact Us", ar: "تواصل معنا" })}
            </button>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.9, ease }}
            className="mt-14 flex flex-wrap gap-x-10 gap-y-6 border-t border-white/10 pt-8"
          >
            {stats.map((s) => (
              <div key={s.label.en}>
                <div className="font-display text-[clamp(1.9rem,3vw,2.7rem)] font-semibold leading-none text-gold-grad">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-[0.7rem] uppercase tracking-[0.12em] text-ivory-dim">
                  {t(s.label)}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => scrollToId("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-ivory/60 transition-colors hover:text-gold"
        aria-label="Scroll down"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.span>
      </motion.button>
    </section>
  );
}
