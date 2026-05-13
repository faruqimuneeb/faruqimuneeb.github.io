import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Expertise from './components/sections/Expertise';
import Projects from './components/sections/Projects';
import Architecture from './components/sections/Architecture';
import Timeline from './components/sections/Timeline';
import Telephony from './components/sections/Telephony';
import GitHub from './components/sections/GitHub';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Architecture />
        <Timeline />
        <Telephony />
        <GitHub />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
