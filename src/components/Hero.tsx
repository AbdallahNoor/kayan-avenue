"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
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
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.14]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "-7%"]);

  return (
    <section ref={ref} id="home" className="relative overflow-hidden bg-travertine pb-[clamp(48px,7vw,90px)] pt-[clamp(120px,16vh,180px)]">
      {/* soft warm glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[60%] bg-[radial-gradient(60%_70%_at_50%_0%,rgba(221,186,108,0.18),rgba(216,205,182,0)_70%)]" />

      <div className="relative mx-auto max-w-[1280px] px-5 text-center sm:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } }}
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease }}
            className="label mb-6 inline-flex items-center gap-3 text-bronze"
          >
            <span className="h-px w-8 bg-bronze/50" />
            {t({ en: "Kayan Avenue — Dubai", ar: "كيان أفينيو — دبي" })}
            <span className="h-px w-8 bg-bronze/50" />
          </motion.p>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 1, ease }}
            className="lux-heading mx-auto max-w-6xl font-display text-[clamp(2.7rem,6vw,5rem)] font-semibold leading-[1.04] tracking-[-0.01em] text-espresso"
            dangerouslySetInnerHTML={{ __html: lang === "ar" ? heading.ar : heading.en }}
          />

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.9, ease }}
            className="mx-auto mt-6 max-w-xl text-[clamp(1.02rem,1.3vw,1.18rem)] font-normal text-[#3f3526]"
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
              className="label rounded-full bg-gradient-to-br from-gold-light via-gold to-bronze px-8 py-4 text-[0.74rem] text-[#221d15] shadow-[0_14px_38px_-14px_rgba(154,115,48,0.8)] transition-transform hover:-translate-y-1"
            >
              {t({ en: "Explore Properties", ar: "استكشف العقارات" })}
            </button>
            <button
              onClick={() => scrollToId("contact")}
              className="label rounded-full border border-espresso/25 px-8 py-4 text-[0.74rem] text-espresso transition-all hover:-translate-y-1 hover:border-bronze hover:text-bronze"
            >
              {t({ en: "Contact Us", ar: "تواصل معنا" })}
            </button>
          </motion.div>
        </motion.div>

        {/* arch portal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease, delay: 0.5 }}
          className="arch relative mx-auto mt-14 aspect-[4/3] w-full max-w-6xl border border-[rgba(154,115,48,0.25)] shadow-[0_50px_100px_-50px_rgba(34,29,21,0.6)] sm:aspect-[16/9]"
        >
          <motion.div style={parallax ? { scale: imgScale, y: imgY } : undefined} className="absolute inset-0">
            <Image src="/images/villa-night.jpg" alt="Luxury villa in Dubai at dusk" fill priority sizes="(max-width:1024px) 100vw, 900px" className="object-cover" />
          </motion.div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(34,29,21,0.45)] to-transparent" />
        </motion.div>

        {/* stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label.en} className="text-center">
              <div className="font-display text-[clamp(2rem,3.2vw,2.9rem)] font-semibold leading-none text-gold-grad">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="label mt-2 text-[0.62rem] text-espresso-dim">{t(s.label)}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
