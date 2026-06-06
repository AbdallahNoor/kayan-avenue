"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { partners } from "@/lib/content";
import Reveal from "./ui/Reveal";

const heading = {
  en: "Working with Dubai's <em>leading</em> developers.",
  ar: "نتعاون مع <em>أبرز</em> المطورين في دبي.",
};

export default function Partners() {
  const { t, lang } = useLang();

  return (
    <section id="partners" className="bg-linen py-[clamp(80px,11vw,150px)] text-fg">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow mb-4 inline-flex items-center gap-3 text-gold-deep">
              <span className="h-px w-9 bg-gold-deep/60" />
              {t({ en: "Our Channel Partners", ar: "شركاؤنا من المطورين" })}
              <span className="h-px w-9 bg-gold-deep/60" />
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="lux-heading font-display text-[clamp(2rem,4.4vw,3.3rem)] font-medium leading-[1.08] tracking-tight text-fg"
              dangerouslySetInnerHTML={{ __html: lang === "ar" ? heading.ar : heading.en }}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-xl text-fg-dim">
              {t({
                en: "We collaborate with carefully selected developers across Dubai to provide premium properties and valuable opportunities tailored to our clients' needs.",
                ar: "نتعاون مع نخبة من أبرز المطورين العقاريين في دبي لتوفير عقارات مميزة وفرص استثمارية تناسب تطلعات عملائنا.",
              })}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={(i % 5) * 0.06}>
              <div className="group grid h-28 place-items-center rounded-xl border border-hair bg-white p-6 shadow-[0_18px_40px_-30px_rgba(60,46,15,0.4)] transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_30px_60px_-30px_rgba(60,46,15,0.5)]">
                <div className="relative h-12 w-full">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    fill
                    sizes="180px"
                    className="object-contain opacity-60 mix-blend-multiply grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
