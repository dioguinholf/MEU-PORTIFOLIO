import Navbar from "@/components/Navbar";
import Spotlight from "@/components/Spotlight";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Spotlight />
      <a className="skip-link" href="#sobre">
        Ir para o conteúdo
      </a>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
