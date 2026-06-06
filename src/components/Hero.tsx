"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { stats } from "@/lib/content";
import { useAllowParallax } from "@/lib/useMediaQuery";
import Counter from "./ui/Counter";
import { scrollToId } from "./SmoothScroll";

const heading = {
  en: 'Find the right property<br class="hidden lg:block" /> for the <em>lifestyle</em> you deserve.',
  ar: "اعثر على العقار المناسب <em>لأسلوب الحياة</em> الذي تستحقه.",
};

const ease = [0.22, 0.61, 0.36, 1] as const;

export default function Hero() {
  const { t, lang } = useLang();
  const parallax = useAllowParallax();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);

  return (
    <section ref={ref} id="home" className="on-dark relative flex min-h-[100svh] items-end overflow-hidden bg-umber">
      {/* full-bleed twilight image */}
      <motion.div style={parallax ? { scale: imgScale } : { transform: "scale(1.05)" }} className="absolute inset-0 z-0">
        <Image src="/images/hero-a.jpg" alt="Luxury villa in Dubai at twilight" fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      {/* warm scrims for legibility */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-48 bg-gradient-to-b from-[rgba(20,16,10,0.7)] to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_top,rgba(18,14,9,0.92)_0%,rgba(18,14,9,0.78)_18%,rgba(18,14,9,0.42)_36%,rgba(18,14,9,0.12)_54%,rgba(18,14,9,0)_70%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 pb-[clamp(56px,9vh,110px)] pt-32 text-center sm:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } }}
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease }}
            className="label mb-6 inline-flex items-center gap-3 text-gold-light"
          >
            <span className="h-px w-8 bg-gold-light/60" />
            {t({ en: "Kayan Avenue — Dubai", ar: "كيان أفينيو — دبي" })}
            <span className="h-px w-8 bg-gold-light/60" />
          </motion.p>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 1, ease }}
            className="lux-heading mx-auto max-w-5xl font-display text-[clamp(2.7rem,6vw,5rem)] font-semibold leading-[1.04] tracking-[-0.01em] text-ivory [text-shadow:0_2px_34px_rgba(18,14,9,0.55)]"
            dangerouslySetInnerHTML={{ __html: lang === "ar" ? heading.ar : heading.en }}
          />

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.9, ease }}
            className="mx-auto mt-6 max-w-xl text-[clamp(1.02rem,1.3vw,1.18rem)] font-normal text-ivory/85"
          >
            {t({
              en: "A refined real estate experience focused on premium properties, trusted guidance, and carefully selected opportunities across Dubai.",
              ar: "تجربة عقارية راقية تجمع بين العقارات المميزة، والاستشارات الموثوقة، والفرص المختارة بعناية في أبرز مناطق دبي.",
            })}
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.9, ease }}
            className="mt-9 flex flex-wrap justify-center gap-4"
          >
            <button
              onClick={() => scrollToId("properties")}
              className="label rounded-full bg-gradient-to-br from-gold-light via-gold to-bronze px-8 py-4 text-[0.74rem] text-[#221d15] shadow-[0_14px_38px_-14px_rgba(0,0,0,0.6)] transition-transform hover:-translate-y-1"
            >
              {t({ en: "Explore Properties", ar: "استكشف العقارات" })}
            </button>
            <button
              onClick={() => scrollToId("contact")}
              className="label rounded-full border border-ivory/35 bg-[rgba(255,255,255,0.06)] px-8 py-4 text-[0.74rem] text-ivory backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-gold-light hover:text-gold-light"
            >
              {t({ en: "Contact Us", ar: "تواصل معنا" })}
            </button>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.9, ease }}
            className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label.en} className="text-center">
                <div className="font-display text-[clamp(2rem,3.2vw,2.9rem)] font-semibold leading-none text-gold-grad">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="label mt-2 text-[0.6rem] text-ivory-dim">{t(s.label)}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollToId("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-ivory/60 transition-colors hover:text-gold-light"
        aria-label="Scroll down"
      >
        <motion.span animate={{ y: [0, 7, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} className="block">
          <ChevronDown className="h-6 w-6" />
        </motion.span>
      </motion.button>
    </section>
  );
}
