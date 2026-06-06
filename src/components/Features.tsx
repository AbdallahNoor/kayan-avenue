"use client";

import { useLang } from "@/lib/i18n";
import { features } from "@/lib/content";
import Reveal from "./ui/Reveal";

export default function Features() {
  const { t } = useLang();

  return (
    <section className="bg-ink py-[clamp(64px,8vw,110px)]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-5 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <Reveal key={f.title.en} delay={(i % 4) * 0.08} className="h-full">
              <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-graphite to-coal p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold/40">
                <span className="mb-6 grid h-14 w-14 place-items-center rounded-xl border border-gold/25 bg-gold/5 text-gold transition-colors group-hover:bg-gold group-hover:text-[#241a06]">
                  <Icon className="h-6 w-6" strokeWidth={1.4} />
                </span>
                <h3 className="mb-2 font-display text-2xl font-semibold text-white">{t(f.title)}</h3>
                <p className="text-[0.92rem] text-ivory-dim">{t(f.desc)}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
