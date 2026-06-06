"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useLang } from "@/lib/i18n";
import { useAllowParallax } from "@/lib/useMediaQuery";
import Reveal from "./ui/Reveal";
import { scrollToId } from "./SmoothScroll";

const heading = {
  en: "A modern brokerage built on <em>trust</em> & market knowledge.",
  ar: "وساطة عقارية عصرية قائمة على <em>الثقة</em> وفهم السوق.",
};

export default function About() {
  const { t, lang } = useLang();
  const parallax = useAllowParallax();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

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
    <section id="about" className="bg-sand py-[clamp(80px,11vw,150px)] text-espresso">
      <div ref={ref} className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-[clamp(48px,7vw,100px)] px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr]">
        {/* arch media */}
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="arch relative aspect-[3/4] border border-[rgba(154,115,48,0.25)] shadow-[0_44px_90px_-50px_rgba(34,29,21,0.55)]">
            <motion.div style={parallax ? { y } : undefined} className="absolute inset-[-6%]">
              <Image src="/images/reception.jpg" alt="Kayan Avenue Properties reception" fill sizes="(max-width:1024px) 90vw, 40vw" className="object-cover" />
            </motion.div>
          </div>
          <div className="absolute -bottom-6 end-[-6%] hidden w-[42%] overflow-hidden rounded-[10px] border-[6px] border-sand shadow-xl sm:block lg:end-[-12%]">
            <div className="relative aspect-square">
              <Image src="/images/interior-minimal.jpg" alt="Luxury interior" fill sizes="22vw" className="object-cover" />
            </div>
          </div>
        </div>

        {/* text */}
        <div>
          <Reveal>
            <p className="label mb-4 flex items-center gap-3 text-bronze">
              <span>01</span>
              <span className="h-px w-9 bg-bronze/50" />
              {t({ en: "About Us", ar: "من نحن" })}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="lux-heading font-display text-[clamp(2rem,4.4vw,3.4rem)] font-medium leading-[1.08] tracking-tight"
              dangerouslySetInnerHTML={{ __html: lang === "ar" ? heading.ar : heading.en }}
            />
          </Reveal>
          {paras.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.05}>
              <p className="mt-5 max-w-xl text-espresso-dim">{t(p)}</p>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <button
              onClick={() => scrollToId("contact")}
              className="label mt-9 rounded-full bg-espresso px-8 py-4 text-[0.72rem] text-sand transition-transform hover:-translate-y-1"
            >
              {t({ en: "Work With Us", ar: "تعاون معنا" })}
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
