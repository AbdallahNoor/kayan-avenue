import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Cinzel, Jost, Tajawal } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cinzel",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-tajawal",
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
      className={`${cormorant.variable} ${cinzel.variable} ${jost.variable} ${tajawal.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
