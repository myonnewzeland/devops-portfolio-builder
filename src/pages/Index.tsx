import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DeferredSection from "@/components/DeferredSection";
import SectionSkeleton from "@/components/SectionSkeleton";
import FloatingContactButton from "@/components/FloatingContactButton";

const HighlightsSection = lazy(() => import("@/components/HighlightsSection"));
const ClientLogos = lazy(() => import("@/components/ClientLogos"));
const SkillsSection = lazy(() => import("@/components/SkillsSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const ExperienceSection = lazy(() => import("@/components/ExperienceSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const CertsSection = lazy(() => import("@/components/CertsSection"));
const FooterSection = lazy(() => import("@/components/FooterSection"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main id="main-content">
        <HeroSection />

        <Suspense fallback={<div className="py-4" />}>
          <HighlightsSection />
        </Suspense>

        <Suspense fallback={<div className="py-8" />}>
          <ClientLogos />
        </Suspense>

        <DeferredSection id="skills" minHeight={800} fallback={<SectionSkeleton />}>
          <Suspense fallback={<SectionSkeleton />}>
            <SkillsSection />
          </Suspense>
        </DeferredSection>

        <DeferredSection id="projects" minHeight={1700} fallback={<SectionSkeleton />}>
          <Suspense fallback={<SectionSkeleton />}>
            <ProjectsSection />
          </Suspense>
        </DeferredSection>

        <DeferredSection id="experience" minHeight={1500} fallback={<SectionSkeleton />}>
          <Suspense fallback={<SectionSkeleton />}>
            <ExperienceSection />
          </Suspense>
        </DeferredSection>

        <DeferredSection id="services" minHeight={900} fallback={<SectionSkeleton />}>
          <Suspense fallback={<SectionSkeleton />}>
            <ServicesSection />
          </Suspense>
        </DeferredSection>

        <DeferredSection id="about" minHeight={1100} fallback={<SectionSkeleton />}>
          <Suspense fallback={<SectionSkeleton />}>
            <AboutSection />
          </Suspense>
        </DeferredSection>

        <DeferredSection id="certs" minHeight={620} fallback={<SectionSkeleton />}>
          <Suspense fallback={<SectionSkeleton />}>
            <CertsSection />
          </Suspense>
        </DeferredSection>
      </main>

      <DeferredSection minHeight={300} rootMargin="120px 0px">
        <Suspense fallback={<div className="py-10" />}>
          <FooterSection />
        </Suspense>
      </DeferredSection>

      <FloatingContactButton />
    </div>
  );
};

export default Index;
