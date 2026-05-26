import CtaSection from "./components/CtaSection";
import DemoPlayerSection from "./components/DemoPlayerSection";
import Hero from "./components/Hero";
import IndustriesSection from "./components/IndustriesSection";
import PersonalizationSection from "./components/PersonalizationSection";
import PricingSection from "./components/PricingSection";
import ProcessSection from "./components/ProcessSection";
import ProductPreview from "./components/ProductPreview";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col font-sans">
      <main className="flex-1">
        <Hero />
        <ProductPreview />
        <ProcessSection />
        <PersonalizationSection />
        <DemoPlayerSection />
        <IndustriesSection />
        <TestimonialsSection />
        <PricingSection />
        <CtaSection />
      </main>
    </div>
  );
}
