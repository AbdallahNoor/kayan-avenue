"use client";

import { motion } from "motion/react";
import { useLang } from "@/lib/i18n";
import { manifesto } from "@/lib/content";

const ease = [0.22, 0.61, 0.36, 1] as const;

export default function Manifesto() {
  const { t } = useLang();

  return (
    <section className="on-dark relative overflow-hidden bg-umber py-[clamp(90px,13vw,170px)] text-ivory">
      {/* faint arch watermark */}
      <div className="pointer-events-none absolute -top-1/3 left-1/2 h-[120%] w-[70%] -translate-x-1/2 rounded-[50%_50%_0_0] border border-[rgba(221,186,108,0.08)]" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="label mb-8 inline-flex items-center gap-3 text-gold-light"
        >
          <span className="h-px w-8 bg-gold-light/50" />
          {t(manifesto.label)}
          <span className="h-px w-8 bg-gold-light/50" />
        </motion.p>

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          variants={{ show: { transition: { staggerChildren: 0.16 } } }}
          className="lux-heading font-display text-[clamp(2rem,5.2vw,4rem)] font-medium leading-[1.12] tracking-tight"
        >
          {manifesto.lines.map((line, i) => (
            <motion.span
              key={i}
              variants={{ hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.9, ease }}
              className="block"
              dangerouslySetInnerHTML={{
                __html:
                  i === 1
                    ? t(line).replace(
                        t({ en: "open doors", ar: "الأبواب" }),
                        `<em>${t({ en: "open doors", ar: "الأبواب" })}</em>`
                      )
                    : t(line),
              }}
            />
          ))}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4, ease }}
          className="mx-auto mt-8 max-w-md text-ivory-dim"
        >
          {t(manifesto.note)}
        </motion.p>
      </div>
    </section>
  );
}
