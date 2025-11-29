import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { ProductsPreview } from "@/components/home/ProductsPreview";
import { SavingsCalculator } from "@/components/home/SavingsCalculator";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <BenefitsSection />
      <ProductsPreview />
      <SavingsCalculator />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
