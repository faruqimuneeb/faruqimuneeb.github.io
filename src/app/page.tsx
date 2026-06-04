import Hero from "@/components/hero";
import Metrics from "@/components/metrics";
import Toolkit from "@/components/toolkit";
import Timeline from "@/components/timeline";
import CaseStudiesSection from "@/components/case-studies-section";
import ServicesFooter from "@/components/services-footer";
import Interests from "@/components/interests";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Metrics />
      <Toolkit />
      <Timeline />
      <CaseStudiesSection />
      <ServicesFooter />
      <Interests />
      <Footer />
    </main>
  );
}
