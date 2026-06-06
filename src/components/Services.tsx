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
    <section id="services" className="bg-bone py-[clamp(80px,11vw,150px)] text-fg">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow mb-4 inline-flex items-center gap-3 text-gold-deep">
              <span className="h-px w-9 bg-gold-deep/60" />
              {t({ en: "Services", ar: "خدماتنا" })}
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
                <article className="group relative h-full overflow-hidden rounded-2xl border border-hair bg-linen p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_36px_70px_-40px_rgba(60,46,15,0.45)]">
                  <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-gold-light via-gold to-gold-deep transition-transform duration-500 group-hover:scale-x-100 rtl:origin-right" />
                  <span className="absolute end-5 top-4 font-display text-4xl font-semibold text-fg/[0.06]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mb-6 grid h-13 w-13 place-items-center rounded-xl bg-cream p-3 text-gold-deep transition-colors group-hover:bg-gradient-to-br group-hover:from-gold-light group-hover:to-gold-deep group-hover:text-[#241a06]">
                    <Icon className="h-6 w-6" strokeWidth={1.3} />
                  </span>
                  <h3 className="mb-2 font-display text-xl font-semibold leading-tight text-fg">{t(s.title)}</h3>
                  <p className="text-[0.88rem] text-fg-dim">{t(s.desc)}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
