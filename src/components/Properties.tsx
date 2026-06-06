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
    <section id="properties" className="on-dark bg-umber py-[clamp(80px,11vw,150px)] text-ivory">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="label mb-4 flex items-center gap-3 text-gold-light">
                <span>02</span>
                <span className="h-px w-9 bg-gold-light/40" />
                {t({ en: "Featured Listings", ar: "عقارات مختارة" })}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="lux-heading max-w-2xl font-display text-[clamp(2rem,4.4vw,3.4rem)] font-medium leading-[1.08] tracking-tight"
                dangerouslySetInnerHTML={{ __html: lang === "ar" ? heading.ar : heading.en }}
              />
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <button
              onClick={() => scrollToId("contact")}
              className="label hidden rounded-full border border-[rgba(239,231,213,0.25)] px-6 py-3 text-[0.68rem] text-ivory transition-all hover:-translate-y-0.5 hover:border-gold-light hover:text-gold-light sm:inline-block"
            >
              {t({ en: "Request Full Portfolio", ar: "اطلب القائمة الكاملة" })}
            </button>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {properties.map((p, i) => (
            <Reveal key={p.title.en} delay={(i % 4) * 0.08}>
              <article className="group">
                <div className="arch-soft relative aspect-[3/4] border border-[rgba(239,231,213,0.12)]">
                  <Image
                    src={p.image}
                    alt={t(p.title)}
                    fill
                    sizes="(max-width:640px) 90vw, (max-width:1024px) 45vw, 23vw"
                    className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(34,29,21,0.45)] to-transparent" />
                </div>

                <div className="px-1 pt-5">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="label rounded-full bg-gradient-to-br from-gold-light to-bronze px-3 py-1 text-[0.56rem] text-[#221d15]">
                      {t({ en: "For Sale", ar: "للبيع" })}
                    </span>
                    <span className="label rounded-full border border-[rgba(239,231,213,0.22)] px-3 py-1 text-[0.56rem] text-ivory-dim">
                      {t(p.type)}
                    </span>
                  </div>
                  <p className="mb-1.5 flex items-center gap-1.5 text-[0.8rem] text-gold-light">
                    <MapPin className="h-4 w-4" /> {t(p.location)}
                  </p>
                  <h3 className="font-display text-2xl font-semibold leading-tight">{t(p.title)}</h3>
                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-[rgba(239,231,213,0.12)] pt-4 text-[0.8rem] text-ivory-dim">
                    <li className="flex items-center gap-1.5"><BedDouble className="h-4 w-4 text-gold-light" />{p.beds}</li>
                    <li className="flex items-center gap-1.5"><Bath className="h-4 w-4 text-gold-light" />{p.baths}</li>
                    <li className="flex items-center gap-1.5"><Maximize className="h-4 w-4 text-gold-light" />{p.area} {t({ en: "sqft", ar: "قدم²" })}</li>
                  </ul>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-display text-xl font-semibold">{p.price}</span>
                    <button onClick={() => scrollToId("contact")} className="label flex items-center gap-1 text-[0.64rem] text-gold-light transition-all hover:gap-2">
                      {t({ en: "Enquire", ar: "استفسر" })}
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-12 text-center text-[0.84rem] italic text-ivory-dim">
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
