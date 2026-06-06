"use client";

import { useLang } from "@/lib/i18n";
import { features } from "@/lib/content";
import Reveal from "./ui/Reveal";

export default function Features() {
  const { t } = useLang();

  return (
    <section className="bg-travertine py-[clamp(64px,9vw,120px)]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <Reveal>
          <p className="label mb-12 flex items-center justify-center gap-3 text-bronze">
            <span className="h-px w-9 bg-bronze/50" />
            {t({ en: "Why Kayan Avenue", ar: "لماذا كيان أفينيو" })}
            <span className="h-px w-9 bg-bronze/50" />
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title.en} delay={(i % 4) * 0.08} className="h-full">
                <article className="group flex h-full flex-col rounded-[18px] border border-hair bg-alabaster p-8 transition-all duration-500 hover:-translate-y-2 hover:border-bronze/40 hover:shadow-[0_36px_70px_-44px_rgba(34,29,21,0.5)]">
                  <span className="label mb-5 text-bronze/70">{String(i + 1).padStart(2, "0")}</span>
                  <span className="mb-6 grid h-14 w-14 place-items-center rounded-full border border-bronze/25 bg-[rgba(154,115,48,0.07)] text-bronze transition-colors group-hover:bg-bronze group-hover:text-alabaster">
                    <Icon className="h-6 w-6" strokeWidth={1.4} />
                  </span>
                  <h3 className="mb-2 font-display text-2xl font-semibold text-espresso">{t(f.title)}</h3>
                  <p className="text-[0.92rem] text-espresso-dim">{t(f.desc)}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
