import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { AspirationSection } from "@/components/AspirationSection";
import { QuestionSection } from "@/components/QuestionSection";
import { LearningSection } from "@/components/LearningSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TargetSection } from "@/components/TargetSection";
import { PricingSection } from "@/components/PricingSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { MentorSection } from "@/components/MentorSection";
import { FAQSection } from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <AspirationSection />
      <QuestionSection />
      <LearningSection />
      <BenefitsSection />
      <TargetSection />
      <PricingSection />
      <GuaranteeSection />
      <MentorSection />
      <FAQSection />
    </div>
  );
};

export default Index;