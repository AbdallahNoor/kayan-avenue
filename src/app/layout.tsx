import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope, JetBrains_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-jb",
  display: "swap",
});

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex-ar",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kayanavenue.com"),
  title: {
    default: "Kayan Avenue Properties — Luxury Real Estate in Dubai",
    template: "%s · Kayan Avenue Properties",
  },
  description:
    "A modern real estate brokerage specializing in luxury properties across Dubai. Premium villas, apartments, off-plan and investment opportunities with trusted guidance.",
  keywords: [
    "Dubai luxury real estate",
    "Kayan Avenue Properties",
    "Dubai villas",
    "off-plan Dubai",
    "Palm Jumeirah",
    "Downtown Dubai",
    "real estate brokerage Dubai",
  ],
  openGraph: {
    title: "Kayan Avenue Properties — Luxury Real Estate in Dubai",
    description:
      "A modern real estate brokerage specializing in luxury properties across Dubai.",
    url: "https://www.kayanavenue.com",
    siteName: "Kayan Avenue Properties",
    images: [{ url: "/images/villa-night.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  icons: { icon: "/logo-mark.svg" },
};

export const viewport: Viewport = {
  themeColor: "#d8cdb6",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${fraunces.variable} ${manrope.variable} ${jetbrains.variable} ${plexArabic.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
