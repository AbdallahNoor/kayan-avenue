"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useLang } from "@/lib/i18n";
import { whyChoose } from "@/lib/content";
import Reveal from "./ui/Reveal";

const heading = {
  en: "The Kayan Avenue <em>difference.</em>",
  ar: "ما <em>يميّز</em> كيان أفينيو.",
};

export default function WhyChooseUs() {
  const { t, lang } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "12%"]);

  return (
    <section id="why" className="relative overflow-hidden bg-noir py-[clamp(80px,11vw,150px)]">
      <div ref={ref} className="mx-auto grid max-w-[1280px] grid-cols-1 gap-[clamp(36px,5vw,72px)] px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr]">
        {/* intro + image */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Reveal>
            <p className="eyebrow mb-4 flex items-center gap-3 text-gold">
              <span className="h-px w-9 bg-gold/60" />
              {t({ en: "Why Choose Us", ar: "لماذا تختارنا" })}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="lux-heading font-display text-[clamp(2rem,4.4vw,3.3rem)] font-medium leading-[1.08] tracking-tight text-white"
              dangerouslySetInnerHTML={{ __html: lang === "ar" ? heading.ar : heading.en }}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-md text-ivory-dim">
              {t({
                en: "Six reasons clients trust us with their most important property decisions in Dubai.",
                ar: "ستة أسباب تجعل عملاءنا يثقون بنا في أهم قراراتهم العقارية في دبي.",
              })}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 overflow-hidden rounded-2xl">
              <motion.div style={{ y }} className="relative aspect-[4/3] scale-110">
                <Image src="/images/dubai-skyline.jpg" alt="Dubai skyline" fill sizes="(max-width:1024px) 90vw, 40vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/50 to-transparent" />
              </motion.div>
            </div>
          </Reveal>
        </div>

        {/* reasons */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {whyChoose.map((w, i) => (
            <Reveal key={w.title.en} delay={(i % 2) * 0.08} className="h-full">
              <article className="flex h-full gap-4 rounded-2xl border border-white/10 bg-coal/60 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/30 hover:bg-coal">
                <span className="font-display text-3xl font-semibold leading-none text-gold-grad">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="mb-1.5 font-display text-xl font-semibold leading-tight text-white">{t(w.title)}</h3>
                  <p className="text-[0.9rem] text-ivory-dim">{t(w.desc)}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
