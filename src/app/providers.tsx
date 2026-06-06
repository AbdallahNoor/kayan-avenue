"use client";

import { LanguageProvider } from "@/lib/i18n";
import SmoothScroll from "@/components/SmoothScroll";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <SmoothScroll>{children}</SmoothScroll>
    </LanguageProvider>
  );
}
