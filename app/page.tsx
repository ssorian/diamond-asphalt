import Hero from './components/Hero';
import Services from './components/Services';
import AboutPreview from './components/AboutPreview';
import Projects from './components/Projects';
import Process from './components/Process';
import News from './components/News';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import SectionSeparator from "./components/SectionSeparator";

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionSeparator />
      <Services />
      <SectionSeparator />
      <AboutPreview />
      <SectionSeparator />
      <Projects />
      <SectionSeparator />
      <Process />
      <SectionSeparator />
      <News />
      <SectionSeparator />
      <Reviews />
      <SectionSeparator />
      <Footer />
    </main>
  );
}
