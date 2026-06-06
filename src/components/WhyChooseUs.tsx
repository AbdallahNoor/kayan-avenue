"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useLang } from "@/lib/i18n";
import { whyChoose } from "@/lib/content";
import { useAllowParallax } from "@/lib/useMediaQuery";
import Reveal from "./ui/Reveal";

const heading = {
  en: "The Kayan Avenue <em>difference.</em>",
  ar: "ما <em>يميّز</em> كيان أفينيو.",
};

export default function WhyChooseUs() {
  const { t, lang } = useLang();
  const parallax = useAllowParallax();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <section id="why" className="bg-travertine py-[clamp(80px,11vw,150px)] text-espresso">
      <div ref={ref} className="mx-auto grid max-w-[1280px] grid-cols-1 gap-[clamp(40px,6vw,80px)] px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Reveal>
            <p className="label mb-4 flex items-center gap-3 text-bronze">
              <span>03</span>
              <span className="h-px w-9 bg-bronze/50" />
              {t({ en: "Why Choose Us", ar: "لماذا تختارنا" })}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="lux-heading font-display text-[clamp(2rem,4.4vw,3.4rem)] font-medium leading-[1.08] tracking-tight"
              dangerouslySetInnerHTML={{ __html: lang === "ar" ? heading.ar : heading.en }}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-md text-espresso-dim">
              {t({
                en: "Six reasons clients trust us with their most important property decisions in Dubai.",
                ar: "ستة أسباب تجعل عملاءنا يثقون بنا في أهم قراراتهم العقارية في دبي.",
              })}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="arch relative mt-9 aspect-[4/5] max-w-sm border border-[rgba(154,115,48,0.25)] shadow-[0_44px_90px_-50px_rgba(34,29,21,0.5)]">
              <motion.div style={parallax ? { y } : undefined} className="absolute inset-[-6%]">
                <Image src="/images/dubai-skyline.jpg" alt="Dubai skyline" fill sizes="(max-width:1024px) 90vw, 36vw" className="object-cover" />
              </motion.div>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {whyChoose.map((w, i) => (
            <Reveal key={w.title.en} delay={(i % 2) * 0.08} className="h-full">
              <article className="flex h-full flex-col rounded-[18px] border border-hair bg-alabaster p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-bronze/40 hover:shadow-[0_30px_60px_-44px_rgba(34,29,21,0.5)]">
                <span className="label mb-4 text-bronze/70">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mb-1.5 font-display text-xl font-semibold leading-tight">{t(w.title)}</h3>
                <p className="text-[0.9rem] text-espresso-dim">{t(w.desc)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
