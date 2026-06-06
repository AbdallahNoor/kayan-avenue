"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useLang } from "@/lib/i18n";
import Reveal from "./ui/Reveal";
import { scrollToId } from "./SmoothScroll";

const heading = {
  en: "A modern brokerage built on <em>trust</em> & market knowledge.",
  ar: "وساطة عقارية عصرية قائمة على <em>الثقة</em> وفهم السوق.",
};

export default function About() {
  const { t, lang } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-6%", "10%"]);

  const paras = [
    {
      en: "Kayan Avenue Properties is a modern real estate brokerage built on professionalism, market knowledge, and long-term client relationships.",
      ar: "كيان أفينيو العقارية هي شركة وساطة عقارية عصرية تقوم على الاحترافية، وفهم السوق، وبناء علاقات طويلة الأمد مع العملاء.",
    },
    {
      en: "We specialize in helping clients buy and sell premium properties across Dubai's most desirable communities, offering a personalized experience tailored to each client's goals and lifestyle.",
      ar: "نساعد عملاءنا في شراء وبيع العقارات المميزة داخل أبرز المجتمعات السكنية في دبي، مع تقديم تجربة شخصية تناسب أهداف كل عميل وأسلوب حياته.",
    },
    {
      en: "Whether you are searching for a luxury residence, a family home, or a strong investment opportunity, our focus is always on delivering value, trust, and a seamless experience.",
      ar: "سواء كنت تبحث عن منزل فاخر، أو سكن عائلي، أو فرصة استثمارية قوية، فإن هدفنا دائمًا هو تقديم قيمة حقيقية وتجربة سلسة قائمة على الثقة.",
    },
  ];

  return (
    <section id="about" className="bg-bone py-[clamp(80px,11vw,150px)] text-fg">
      <div ref={ref} className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-[clamp(40px,6vw,90px)] px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr]">
        {/* media */}
        <div className="relative">
          <motion.div style={{ y: y1 }} className="relative overflow-hidden rounded-2xl shadow-[0_40px_80px_-40px_rgba(0,0,0,0.5)]">
            <div className="relative aspect-[4/3.4]">
              <Image src="/images/reception.jpg" alt="Kayan Avenue Properties reception" fill sizes="(max-width:1024px) 90vw, 45vw" className="object-cover" />
            </div>
          </motion.div>

          <motion.div
            style={{ y: y2 }}
            className="absolute -bottom-10 end-[-6%] hidden w-[44%] overflow-hidden rounded-xl border-4 border-bone shadow-[0_30px_60px_-30px_rgba(0,0,0,0.55)] sm:block"
          >
            <div className="relative aspect-[4/5]">
              <Image src="/images/interior-minimal.jpg" alt="Luxury interior" fill sizes="25vw" className="object-cover" />
            </div>
          </motion.div>

          <div className="absolute -left-4 -top-5 hidden h-24 w-24 rounded-tl-lg border-l-2 border-t-2 border-gold/60 sm:block" />
        </div>

        {/* text */}
        <div>
          <Reveal>
            <p className="eyebrow mb-4 flex items-center gap-3 text-gold-deep">
              <span className="h-px w-9 bg-gold-deep/60" />
              {t({ en: "About Us", ar: "من نحن" })}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="lux-heading font-display text-[clamp(2rem,4.4vw,3.3rem)] font-medium leading-[1.08] tracking-tight text-fg"
              dangerouslySetInnerHTML={{ __html: lang === "ar" ? heading.ar : heading.en }}
            />
          </Reveal>
          {paras.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.05}>
              <p className="mt-5 max-w-xl text-fg-dim">{t(p)}</p>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <button
              onClick={() => scrollToId("contact")}
              className="mt-9 rounded-full bg-fg px-8 py-4 text-[0.76rem] font-medium uppercase tracking-[0.16em] text-bone transition-transform hover:-translate-y-1"
            >
              {t({ en: "Work With Us", ar: "تعاون معنا" })}
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
