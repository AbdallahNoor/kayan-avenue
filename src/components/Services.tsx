"use client";

import { useLang } from "@/lib/i18n";
import { services } from "@/lib/content";
import Reveal from "./ui/Reveal";

const heading = {
  en: "Everything you need, <em>end to end.</em>",
  ar: "كل ما تحتاجه، <em>من البداية للنهاية.</em>",
};

export default function Services() {
  const { t, lang } = useLang();

  return (
    <section id="services" className="bg-sand py-[clamp(80px,11vw,150px)] text-espresso">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Reveal>
            <p className="label mb-4 inline-flex items-center gap-3 text-bronze">
              <span className="h-px w-9 bg-bronze/50" />
              {t({ en: "Services", ar: "خدماتنا" })}
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
                en: "From luxury homes to investment strategy, we guide every step of your real estate journey in Dubai.",
                ar: "من المنازل الفاخرة إلى الاستراتيجية الاستثمارية، نرافقك في كل خطوة من رحلتك العقارية في دبي.",
              })}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title.en} delay={(i % 4) * 0.07} className="h-full">
                <article className="group relative h-full overflow-hidden rounded-[18px] border border-hair bg-alabaster p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_36px_70px_-44px_rgba(34,29,21,0.45)]">
                  <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-gold-light via-gold to-bronze transition-transform duration-500 group-hover:scale-x-100 rtl:origin-right" />
                  <span className="label absolute end-5 top-5 text-bronze/40">{String(i + 1).padStart(2, "0")}</span>
                  <span className="mb-6 grid h-14 w-14 place-items-center rounded-full bg-[rgba(154,115,48,0.08)] text-bronze transition-colors group-hover:bg-gradient-to-br group-hover:from-gold-light group-hover:to-bronze group-hover:text-alabaster">
                    <Icon className="h-6 w-6" strokeWidth={1.3} />
                  </span>
                  <h3 className="mb-2 font-display text-xl font-semibold leading-tight">{t(s.title)}</h3>
                  <p className="text-[0.88rem] text-espresso-dim">{t(s.desc)}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
