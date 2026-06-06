"use client";

import Image from "next/image";
import { BedDouble, Bath, Maximize, MapPin, ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { properties } from "@/lib/content";
import Reveal from "./ui/Reveal";
import { scrollToId } from "./SmoothScroll";

const heading = {
  en: "Signature <em>residences</em> across Dubai.",
  ar: "إقامات <em>استثنائية</em> في مختلف أنحاء دبي.",
};

export default function Properties() {
  const { t, lang } = useLang();

  return (
    <section id="properties" className="bg-ink py-[clamp(80px,11vw,150px)]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="eyebrow mb-4 flex items-center gap-3 text-gold">
                <span className="h-px w-9 bg-gold/60" />
                {t({ en: "Featured Listings", ar: "عقارات مختارة" })}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="lux-heading font-display text-[clamp(2rem,4.4vw,3.3rem)] font-medium leading-[1.08] tracking-tight text-white"
                dangerouslySetInnerHTML={{ __html: lang === "ar" ? heading.ar : heading.en }}
              />
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <button
              onClick={() => scrollToId("contact")}
              className="hidden rounded-full border border-white/20 px-6 py-3 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-white transition-all hover:-translate-y-0.5 hover:border-gold hover:text-gold sm:inline-block"
            >
              {t({ en: "Request Full Portfolio", ar: "اطلب القائمة الكاملة" })}
            </button>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {properties.map((p, i) => (
            <Reveal key={p.title.en} delay={(i % 4) * 0.08} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-coal transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
                <div className="relative aspect-[3/2.2] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={t(p.title)}
                    fill
                    sizes="(max-width:640px) 90vw, (max-width:1024px) 45vw, 23vw"
                    className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coal/70 to-transparent" />
                  <span className="absolute start-3 top-3 rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-deep px-3 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.12em] text-[#241a06]">
                    {t({ en: "For Sale", ar: "للبيع" })}
                  </span>
                  <span className="absolute end-3 top-3 rounded-full bg-noir/70 px-3 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.12em] text-ivory backdrop-blur-sm">
                    {t(p.type)}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-2 flex items-center gap-1.5 text-[0.8rem] text-gold">
                    <MapPin className="h-4 w-4" />
                    {t(p.location)}
                  </p>
                  <h3 className="font-display text-2xl font-semibold leading-tight text-white">{t(p.title)}</h3>

                  <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-b border-white/10 pb-5 text-[0.82rem] text-ivory-dim">
                    <li className="flex items-center gap-1.5"><BedDouble className="h-4 w-4 text-gold" />{p.beds} {t({ en: "Beds", ar: "غرف" })}</li>
                    <li className="flex items-center gap-1.5"><Bath className="h-4 w-4 text-gold" />{p.baths} {t({ en: "Baths", ar: "حمام" })}</li>
                    <li className="flex items-center gap-1.5"><Maximize className="h-4 w-4 text-gold" />{p.area} {t({ en: "sqft", ar: "قدم²" })}</li>
                  </ul>

                  <div className="mt-auto flex items-center justify-between pt-5">
                    <span className="font-display text-xl font-semibold text-white">{p.price}</span>
                    <button
                      onClick={() => scrollToId("contact")}
                      className="flex items-center gap-1 text-[0.72rem] font-medium uppercase tracking-[0.12em] text-gold transition-all hover:gap-2"
                    >
                      {t({ en: "Enquire", ar: "استفسر" })}
                      <ArrowUpRight className="h-4 w-4 rtl:rotate-[-90deg]" />
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-[0.84rem] italic text-ivory-dim">
            {t({
              en: "Sample listings shown for presentation. Contact us for live availability and pricing.",
              ar: "القوائم المعروضة للعرض التوضيحي. تواصل معنا لمعرفة التوفر والأسعار الحالية.",
            })}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
