import { About } from "@/components/about";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { MotionBackground } from "@/components/motion-background";
import { Navbar } from "@/components/navbar";
import { SkillsSection } from "@/components/skills-section";
import { ThemeProvider } from "@/components/theme-provider";
import { WorkSection } from "@/components/work-section";

export function PortfolioPage() {
  return (
    <ThemeProvider>
      <MotionBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <ExperienceSection />
        <WorkSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
