"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Phone, Mail, Globe, MapPin, Check } from "lucide-react";
import { IgIcon, InIcon, WaIcon, YtIcon } from "./ui/SocialIcons";
import { useLang } from "@/lib/i18n";
import { contactInfo } from "@/lib/content";
import Reveal from "./ui/Reveal";

const heading = {
  en: "Let's discuss your next <em>property</em>.",
  ar: "لنتحدث عن <em>عقارك</em> القادم.",
};

export default function Contact() {
  const { t, lang } = useLang();
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<{ name?: boolean; email?: boolean }>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const err = { name: name === "", email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) };
    setErrors(err);
    if (err.name || err.email) return;
    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 6000);
  };

  const info = [
    { icon: Phone, label: { en: "Phone", ar: "الهاتف" }, value: contactInfo.phoneDisplay, href: contactInfo.phoneHref, ltr: true },
    { icon: Mail, label: { en: "Email", ar: "البريد" }, value: contactInfo.email, href: `mailto:${contactInfo.email}`, ltr: true },
    { icon: Globe, label: { en: "Website", ar: "الموقع" }, value: contactInfo.website, href: contactInfo.websiteHref, ltr: true },
    { icon: MapPin, label: { en: "Office", ar: "المكتب" }, value: t(contactInfo.address), href: undefined, ltr: false },
  ];

  const socials = [
    { icon: IgIcon, href: contactInfo.instagram, label: "Instagram" },
    { icon: InIcon, href: contactInfo.linkedin, label: "LinkedIn" },
    { icon: WaIcon, href: contactInfo.whatsapp, label: "WhatsApp" },
    { icon: YtIcon, href: contactInfo.youtube, label: "YouTube" },
  ];

  const fieldCls =
    "w-full rounded-xl border border-[rgba(239,231,213,0.14)] bg-umber-2 px-4 py-3.5 text-[0.95rem] text-ivory placeholder:text-ivory-dim/60 outline-none transition focus:border-gold-light focus:ring-2 focus:ring-[rgba(221,186,108,0.25)]";

  return (
    <section id="contact" className="on-dark bg-umber py-[clamp(80px,11vw,150px)] text-ivory">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-[clamp(40px,6vw,80px)] px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="label mb-4 flex items-center gap-3 text-gold-light">
              <span>04</span>
              <span className="h-px w-9 bg-gold-light/40" />
              {t({ en: "Contact", ar: "تواصل معنا" })}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="lux-heading font-display text-[clamp(2rem,4.4vw,3.4rem)] font-medium leading-[1.08] tracking-tight"
              dangerouslySetInnerHTML={{ __html: lang === "ar" ? heading.ar : heading.en }}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-md text-ivory-dim">
              {t({
                en: "Get in touch with Kayan Avenue Properties for professional real estate guidance and premium property opportunities across Dubai.",
                ar: "تواصل مع كيان أفينيو العقارية للحصول على استشارات عقارية احترافية وفرص مميزة في مختلف مناطق دبي.",
              })}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {info.map((it, i) => {
              const Icon = it.icon;
              const inner = (
                <>
                  <span className="grid h-12 w-12 flex-none place-items-center rounded-xl border border-[rgba(239,231,213,0.14)] bg-umber-2 text-gold-light">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="label text-[0.6rem] text-ivory-dim">{t(it.label)}</span>
                    <span className="truncate text-ivory" dir={it.ltr ? "ltr" : undefined}>{it.value}</span>
                  </span>
                </>
              );
              return (
                <Reveal key={t(it.label)} delay={0.12 + i * 0.05}>
                  {it.href ? (
                    <a href={it.href} target={it.href.startsWith("http") ? "_blank" : undefined} rel="noopener" className="flex items-center gap-3 transition-colors hover:text-gold-light">
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-center gap-3">{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.35}>
            <div className="mt-8 flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener"
                    aria-label={s.label}
                    className="grid h-11 w-11 place-items-center rounded-xl border border-[rgba(239,231,213,0.14)] bg-umber-2 text-ivory transition-all hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-br hover:from-gold-light hover:to-bronze hover:text-[#221d15]"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form onSubmit={onSubmit} noValidate className="rounded-[20px] border border-[rgba(239,231,213,0.12)] bg-umber-2/60 p-[clamp(24px,4vw,44px)]">
            <div className="mb-4">
              <label htmlFor="name" className="label mb-2 block text-[0.62rem] text-ivory-dim">{t({ en: "Full Name", ar: "الاسم الكامل" })}</label>
              <input id="name" name="name" type="text" className={`${fieldCls} ${errors.name ? "border-[#b15440]" : ""}`} placeholder={t({ en: "Your name", ar: "اسمك" })} />
            </div>
            <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="label mb-2 block text-[0.62rem] text-ivory-dim">{t({ en: "Email", ar: "البريد" })}</label>
                <input id="email" name="email" type="email" dir="ltr" className={`${fieldCls} ${errors.email ? "border-[#b15440]" : ""}`} placeholder="you@email.com" />
              </div>
              <div>
                <label htmlFor="phone" className="label mb-2 block text-[0.62rem] text-ivory-dim">{t({ en: "Phone", ar: "الهاتف" })}</label>
                <input id="phone" name="phone" type="tel" dir="ltr" className={fieldCls} placeholder="+971 ..." />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="interest" className="label mb-2 block text-[0.62rem] text-ivory-dim">{t({ en: "I'm interested in", ar: "أنا مهتم بـ" })}</label>
              <select id="interest" name="interest" className={`${fieldCls} cursor-pointer appearance-none`}>
                <option>{t({ en: "Luxury Villas & Apartments", ar: "فلل وشقق فاخرة" })}</option>
                <option>{t({ en: "Off-Plan Opportunities", ar: "مشاريع على الخارطة" })}</option>
                <option>{t({ en: "Investment Consultation", ar: "الاستشارات الاستثمارية" })}</option>
                <option>{t({ en: "Selling a Property", ar: "بيع عقار" })}</option>
                <option>{t({ en: "General Enquiry", ar: "استفسار عام" })}</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="label mb-2 block text-[0.62rem] text-ivory-dim">{t({ en: "Message", ar: "رسالتك" })}</label>
              <textarea id="message" name="message" rows={4} className={`${fieldCls} resize-y`} placeholder={t({ en: "Tell us what you're looking for...", ar: "أخبرنا بما تبحث عنه..." })} />
            </div>
            <button type="submit" className="label w-full rounded-full bg-gradient-to-br from-gold-light via-gold to-bronze px-8 py-4 text-[0.74rem] text-[#221d15] shadow-[0_14px_38px_-16px_rgba(154,115,48,0.8)] transition-transform hover:-translate-y-1">
              {t({ en: "Send Message", ar: "إرسال الرسالة" })}
            </button>
            <AnimatePresence>
              {sent && (
                <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-4 flex items-center justify-center gap-2 text-[0.9rem] text-gold-light">
                  <Check className="h-4 w-4" />
                  {t({ en: "Thank you. We'll be in touch shortly.", ar: "شكرًا لك. سنتواصل معك قريبًا." })}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
