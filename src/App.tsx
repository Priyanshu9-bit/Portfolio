import Preloader from '@/components/Preloader';
import ScrollProgress from '@/components/ScrollProgress';
import CursorGlow from '@/components/CursorGlow';
import ScrollToTop from '@/components/ScrollToTop';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import GitHubSection from '@/components/GitHubSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="noise-overlay relative min-h-screen bg-ink-950">
      <Preloader />
      <ScrollProgress />
      <CursorGlow />
      <ScrollToTop />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
