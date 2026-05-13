import { Suspense, lazy } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';

// PERFORMANCE: lazy-load all below-fold sections
// Hero loads eagerly (above fold), everything else deferred
const About        = lazy(() => import('./components/sections/About'));
const Expertise    = lazy(() => import('./components/sections/Expertise'));
const Projects     = lazy(() => import('./components/sections/Projects'));
const Architecture = lazy(() => import('./components/sections/Architecture'));
const Timeline     = lazy(() => import('./components/sections/Timeline'));
const Telephony    = lazy(() => import('./components/sections/Telephony'));
const GitHub       = lazy(() => import('./components/sections/GitHub'));
const Testimonials = lazy(() => import('./components/sections/Testimonials'));
const FAQ          = lazy(() => import('./components/sections/FAQ'));
const Contact      = lazy(() => import('./components/sections/Contact'));

// Minimal fallback — invisible, no layout shift
const SectionFallback = () => <div className="h-32" aria-hidden="true" />;

export default function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
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
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
