import {
  Building2,
  KeyRound,
  LayoutGrid,
  Map,
  Handshake,
  LineChart,
  Compass,
  Sparkles,
  Gem,
  TrendingUp,
  ShieldCheck,
  Clock,
  FileCheck2,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";
import { L, type Localized } from "./i18n";

export const nav: { id: string; label: Localized }[] = [
  { id: "home", label: L("Home", "الرئيسية") },
  { id: "about", label: L("About", "من نحن") },
  { id: "properties", label: L("Properties", "العقارات") },
  { id: "services", label: L("Services", "خدماتنا") },
  { id: "why", label: L("Why Us", "لماذا نحن") },
  { id: "contact", label: L("Contact", "تواصل") },
];

export const stats: { value: number; suffix: string; label: Localized }[] = [
  { value: 10, suffix: "+", label: L("Years of Expertise", "سنوات الخبرة") },
  { value: 750, suffix: "+", label: L("Properties Closed", "عقار مُنجز") },
  { value: 500, suffix: "+", label: L("Happy Clients", "عميل سعيد") },
  { value: 15, suffix: "+", label: L("Prime Communities", "منطقة مميزة") },
];

export const trust: { icon: LucideIcon; label: Localized }[] = [
  { icon: ShieldCheck, label: L("Full Transparency", "شفافية كاملة") },
  { icon: Clock, label: L("24/7 Client Support", "دعم على مدار الساعة") },
  { icon: FileCheck2, label: L("Secure Contracts", "عقود آمنة") },
  { icon: BadgeCheck, label: L("RERA-Aligned Practice", "ممارسات وفق ريرا") },
];

export const features: { icon: LucideIcon; title: Localized; desc: Localized }[] = [
  {
    icon: Gem,
    title: L("Premium Properties", "عقارات مميزة"),
    desc: L(
      "Carefully selected residences in Dubai's most sought-after communities.",
      "عقارات مختارة بعناية في أكثر مناطق دبي طلبًا وتميزًا."
    ),
  },
  {
    icon: Compass,
    title: L("Expert Guidance", "خبرة واستشارة"),
    desc: L(
      "Professional real estate guidance tailored precisely to your goals.",
      "استشارات عقارية احترافية تناسب أهدافك وتطلعاتك."
    ),
  },
  {
    icon: Sparkles,
    title: L("Modern Experience", "تجربة عصرية"),
    desc: L(
      "A refined approach focused on quality, trust and attention to detail.",
      "أسلوب حديث يركز على الجودة، والثقة، والاهتمام بالتفاصيل."
    ),
  },
  {
    icon: TrendingUp,
    title: L("Investment Opportunities", "فرص استثمارية"),
    desc: L(
      "Helping clients identify strong real estate opportunities across Dubai.",
      "مساعدتك في اكتشاف فرص عقارية قوية وواعدة في دبي."
    ),
  },
];

export const services: { icon: LucideIcon; title: Localized; desc: Localized }[] = [
  {
    icon: Building2,
    title: L("Luxury Villas & Apartments", "فلل وشقق فاخرة"),
    desc: L("Premium residences in Dubai's finest communities.", "مساكن مميزة في أرقى مجتمعات دبي."),
  },
  {
    icon: KeyRound,
    title: L("Secondary Market", "العقارات الجاهزة"),
    desc: L("Ready properties with proven value and location.", "عقارات جاهزة بقيمة وموقع مثبتين."),
  },
  {
    icon: LayoutGrid,
    title: L("Off-Plan Opportunities", "مشاريع على الخارطة"),
    desc: L("Early access to Dubai's most promising launches.", "وصول مبكر لأبرز المشاريع الواعدة في دبي."),
  },
  {
    icon: Map,
    title: L("Lands & Plots", "أراضٍ وفرص"),
    desc: L("Strategic plots for building and investment.", "أراضٍ استراتيجية للبناء والاستثمار."),
  },
  {
    icon: Handshake,
    title: L("Buying & Selling", "شراء وبيع"),
    desc: L("Seamless transactions handled with full transparency.", "معاملات سلسة تُدار بشفافية كاملة."),
  },
  {
    icon: LineChart,
    title: L("Investment Consultation", "الاستشارات الاستثمارية"),
    desc: L("Data-driven advice to grow your portfolio.", "استشارات مبنية على البيانات لتنمية محفظتك."),
  },
  {
    icon: Compass,
    title: L("Real Estate Advisory", "استشارات عقارية"),
    desc: L("Clear direction at every stage of ownership.", "توجيه واضح في كل مرحلة من مراحل التملك."),
  },
  {
    icon: Sparkles,
    title: L("Exclusive Opportunities", "فرص حصرية"),
    desc: L("Off-market listings reserved for our clients.", "عروض حصرية غير معلنة مخصصة لعملائنا."),
  },
];

export type Property = {
  image: string;
  type: Localized;
  location: Localized;
  title: Localized;
  beds: number;
  baths: number;
  area: string;
  price: string;
};

export const properties: Property[] = [
  {
    image: "/images/dubai-marina.jpg",
    type: L("Apartment", "شقة"),
    location: L("Dubai Marina", "مرسى دبي"),
    title: L("Marina Vista Residence", "ريزيدنس مارينا فيستا"),
    beds: 2,
    baths: 2,
    area: "1,250",
    price: "AED 2,400,000",
  },
  {
    image: "/images/villa-pool-day.jpg",
    type: L("Villa", "فيلا"),
    location: L("Palm Jumeirah", "نخلة جميرا"),
    title: L("Palm Signature Villa", "فيلا بالم سيجنتشر"),
    beds: 5,
    baths: 6,
    area: "7,800",
    price: "AED 24,500,000",
  },
  {
    image: "/images/penthouse-terrace.jpg",
    type: L("Penthouse", "بنتهاوس"),
    location: L("Downtown Dubai", "وسط مدينة دبي"),
    title: L("Burj Vista Penthouse", "بنتهاوس برج فيستا"),
    beds: 3,
    baths: 4,
    area: "3,400",
    price: "AED 9,750,000",
  },
  {
    image: "/images/villa-modern.jpg",
    type: L("Mansion", "قصر"),
    location: L("Emirates Hills", "إعمار هيلز"),
    title: L("Hills Grove Mansion", "قصر هيلز جروف"),
    beds: 6,
    baths: 7,
    area: "12,000",
    price: "AED 42,000,000",
  },
];

export const whyChoose: { title: Localized; desc: Localized }[] = [
  {
    title: L("Personalized Client Experience", "تجربة شخصية لكل عميل"),
    desc: L("Every journey is tailored to your goals and lifestyle.", "كل تجربة مصممة خصيصًا لأهدافك وأسلوب حياتك."),
  },
  {
    title: L("Professional & Transparent", "احترافية وشفافية"),
    desc: L("Honest guidance with no surprises, at every step.", "إرشاد صادق دون مفاجآت، في كل خطوة."),
  },
  {
    title: L("Carefully Selected Properties", "عقارات مختارة بعناية"),
    desc: L("Only properties that meet our standards reach you.", "لا يصلك سوى العقارات التي تستوفي معاييرنا."),
  },
  {
    title: L("Strong Market Knowledge", "معرفة قوية بالسوق"),
    desc: L("Deep insight into Dubai's evolving real estate market.", "فهم عميق لحركة السوق العقاري المتجددة في دبي."),
  },
  {
    title: L("Premium Marketing Standards", "معايير تسويق احترافية"),
    desc: L("Properties presented to the highest visual standards.", "عرض العقارات وفق أعلى المعايير البصرية."),
  },
  {
    title: L("Long-Term Relationships", "علاقات طويلة الأمد"),
    desc: L("We invest in relationships, not just transactions.", "نستثمر في العلاقات، وليس فقط في الصفقات."),
  },
];

export const partners: { name: string; logo: string; dark?: boolean }[] = [
  { name: "Emaar", logo: "/partners/wiki/emaar.svg" },
  { name: "DAMAC", logo: "/partners/wiki/damac.svg" },
  { name: "Sobha Realty", logo: "/partners/wiki/sobha.svg" },
  { name: "Nakheel", logo: "/partners/wiki/nakheel.svg" },
  { name: "Meraas", logo: "/partners/wiki/meraas.svg" },
  { name: "Binghatti", logo: "/partners/wiki/binghatti.webp" },
  { name: "Omniyat", logo: "/partners/wiki/omniyat.svg", dark: true },
  { name: "Danube Properties", logo: "/partners/wiki/danube.png" },
  { name: "Majid Al Futtaim", logo: "/partners/wiki/majid-al-futtaim.svg" },
];

export const manifesto = {
  label: L("Our Philosophy", "فلسفتنا"),
  lines: [
    L("We don't simply sell", "نحن لا نبيع العقارات فحسب،"),
    L("property — we open doors", "بل نفتح لك الأبواب"),
    L("to a way of living.", "إلى أسلوب حياة استثنائي."),
  ],
  note: L(
    "Every address we represent is chosen for the life it makes possible.",
    "كل عنوان نمثّله مُختار بعناية لما يتيحه من أسلوب حياة."
  ),
};

export const contactInfo = {
  phoneDisplay: "+971 58 586 0581",
  phoneHref: "tel:+971585860581",
  whatsapp: "https://wa.me/971585860581",
  email: "hany@kayanavenue.ae",
  website: "www.kayanavenue.com",
  websiteHref: "https://www.kayanavenue.com",
  instagram: "https://instagram.com/kayanavenue",
  linkedin: "https://www.linkedin.com/company/kayanavenue",
  youtube: "https://youtube.com/@kayanavenue",
  address: L("Business Bay, Dubai, UAE", "الخليج التجاري، دبي، الإمارات"),
};

/* gallery used in the editorial about / parallax strips */
export const galleryImages = [
  "/images/burj-dusk.jpg",
  "/images/interior-living.jpg",
  "/images/dubai-skyline.jpg",
  "/images/interior-minimal.jpg",
];
