"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { partners } from "@/lib/content";
import Reveal from "./ui/Reveal";

const heading = {
  en: "Working with Dubai's <em>leading</em> developers.",
  ar: "نتعاون مع <em>أبرز</em> المطورين في دبي.",
};

function Logo({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="relative mx-[clamp(20px,3vw,52px)] h-16 w-[clamp(120px,14vw,190px)] shrink-0">
      <Image
        src={logo}
        alt={name}
        fill
        sizes="190px"
        className="object-contain opacity-65 mix-blend-multiply grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
      />
    </div>
  );
}

export default function Partners() {
  const { t, lang } = useLang();
  const rowA = [...partners, ...partners];
  const rowB = [...partners.slice().reverse(), ...partners.slice().reverse()];

  return (
    <section id="partners" className="bg-sand py-[clamp(80px,11vw,150px)] text-espresso">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Reveal>
            <p className="label mb-4 inline-flex items-center gap-3 text-bronze">
              <span className="h-px w-9 bg-bronze/50" />
              {t({ en: "Our Channel Partners", ar: "شركاؤنا من المطورين" })}
              <span className="h-px w-9 bg-bronze/50" />
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="lux-heading font-display text-[clamp(2rem,4.4vw,3.4rem)] font-medium leading-[1.08] tracking-tight"
              dangerouslySetInnerHTML={{ __html: lang === "ar" ? heading.ar : heading.en }}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-xl text-espresso-dim">
              {t({
                en: "We collaborate with carefully selected developers across Dubai to provide premium properties and valuable opportunities tailored to our clients' needs.",
                ar: "نتعاون مع نخبة من أبرز المطورين العقاريين في دبي لتوفير عقارات مميزة وفرص استثمارية تناسب تطلعات عملائنا.",
              })}
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal>
        <div className="marquee-mask space-y-6">
          <div className="marquee-track marquee-l">
            {rowA.map((p, i) => (
              <Logo key={`a-${i}`} name={p.name} logo={p.logo} />
            ))}
          </div>
          <div className="marquee-track marquee-r">
            {rowB.map((p, i) => (
              <Logo key={`b-${i}`} name={p.name} logo={p.logo} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
