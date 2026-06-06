import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import About from "@/components/About";
import Features from "@/components/Features";
import Properties from "@/components/Properties";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <About />
        <Features />
        <Properties />
        <Services />
        <WhyChooseUs />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
