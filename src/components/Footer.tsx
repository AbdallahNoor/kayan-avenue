"use client";

import { ArrowUp } from "lucide-react";
import { IgIcon, InIcon, WaIcon, YtIcon } from "./ui/SocialIcons";
import { useLang } from "@/lib/i18n";
import { nav, contactInfo } from "@/lib/content";
import { scrollToId } from "./SmoothScroll";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  const socials = [
    { icon: IgIcon, href: contactInfo.instagram, label: "Instagram" },
    { icon: InIcon, href: contactInfo.linkedin, label: "LinkedIn" },
    { icon: WaIcon, href: contactInfo.whatsapp, label: "WhatsApp" },
    { icon: YtIcon, href: contactInfo.youtube, label: "YouTube" },
  ];

  return (
    <footer className="on-dark relative bg-[#1b160f] pt-[clamp(56px,7vw,90px)] text-ivory">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-[clamp(32px,5vw,64px)] px-5 pb-12 sm:px-8 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <button onClick={() => scrollToId("home")} className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-mark.svg" alt="" className="h-9 w-auto" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-[1.35rem] font-semibold tracking-[0.04em] text-ivory">Kayan</span>
              <span className="label mt-1 text-[0.5rem] tracking-[0.34em] text-ivory-dim">
                {t({ en: "AVENUE PROPERTIES", ar: "أفينيو العقارية" })}
              </span>
            </span>
          </button>
          <p className="mt-5 max-w-sm text-[0.94rem] text-ivory-dim">
            {t({
              en: "A modern real estate brokerage specializing in luxury properties in Dubai.",
              ar: "شركة وساطة عقارية عصرية متخصصة في العقارات الفاخرة في دبي.",
            })}
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-[rgba(239,231,213,0.14)] bg-[rgba(239,231,213,0.05)] text-ivory/80 transition-all hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-br hover:from-gold-light hover:to-bronze hover:text-[#1b160f]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="label mb-5 text-gold-light">{t({ en: "Explore", ar: "استكشف" })}</h4>
          <ul className="space-y-3">
            {nav.slice(1).map((n) => (
              <li key={n.id}>
                <button onClick={() => scrollToId(n.id)} className="text-[0.94rem] text-ivory-dim transition-colors hover:text-gold-light">
                  {t(n.label)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="label mb-5 text-gold-light">{t({ en: "Contact", ar: "تواصل" })}</h4>
          <ul className="space-y-3 text-[0.94rem] text-ivory-dim">
            <li><a href={contactInfo.phoneHref} dir="ltr" className="transition-colors hover:text-gold-light">{contactInfo.phoneDisplay}</a></li>
            <li><a href={`mailto:${contactInfo.email}`} dir="ltr" className="transition-colors hover:text-gold-light">{contactInfo.email}</a></li>
            <li><a href={contactInfo.websiteHref} target="_blank" rel="noopener" dir="ltr" className="transition-colors hover:text-gold-light">{contactInfo.website}</a></li>
            <li>{t(contactInfo.address)}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[rgba(239,231,213,0.1)] py-6">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-3 px-5 sm:flex-row sm:px-8">
          <p className="text-[0.8rem] text-ivory-dim/70">© {year} Kayan Avenue Properties. {t({ en: "All rights reserved.", ar: "جميع الحقوق محفوظة." })}</p>
          <p className="label text-[0.62rem] text-ivory-dim/70">{t({ en: "Premium Real Estate · Dubai", ar: "عقارات راقية · دبي" })}</p>
        </div>
      </div>

      <button
        onClick={() => scrollToId("home")}
        aria-label="Back to top"
        className="fixed bottom-6 end-6 z-[800] grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-gold-light via-gold to-bronze text-[#221d15] shadow-[0_12px_30px_-10px_rgba(154,115,48,0.7)] transition-transform hover:-translate-y-1"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}
