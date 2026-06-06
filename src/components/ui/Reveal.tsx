"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "span" | "li" | "article" | "section" | "h2" | "p";
  once?: boolean;
};

const make = (y: number): Variants => ({
  hidden: { opacity: 0, y },
  show: { opacity: 1, y: 0 },
});

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
  once = true,
}: Props) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      variants={make(y)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}
