import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CyberBackground from "@/components/CyberBackground";
import DeferredSection from "@/components/DeferredSection";
import SectionSkeleton from "@/components/SectionSkeleton";

const HighlightsSection = lazy(() => import("@/components/HighlightsSection"));
const ClientLogos = lazy(() => import("@/components/ClientLogos"));
const SkillsSection = lazy(() => import("@/components/SkillsSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const ExperienceSection = lazy(() => import("@/components/ExperienceSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const CertsSection = lazy(() => import("@/components/CertsSection"));

const FooterSection = lazy(() => import("@/components/FooterSection"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <CyberBackground />
      <Navbar />

      <main id="main-content">
        <HeroSection />

        <Suspense fallback={<div className="py-4" />}>
          <HighlightsSection />
        </Suspense>

        <Suspense fallback={<div className="py-8" />}>
          <ClientLogos />
        </Suspense>

        <div className="section-divider mx-auto max-w-4xl" />
        <DeferredSection
          id="skills"
          className="py-24 px-6"
          minHeight={960}
          fallback={<SectionSkeleton />}
        >
          <Suspense fallback={<SectionSkeleton />}>
            <SkillsSection />
          </Suspense>
        </DeferredSection>

        <div className="section-divider mx-auto max-w-4xl" />
        <DeferredSection
          id="projects"
          className="py-24 px-6"
          minHeight={1700}
          fallback={<SectionSkeleton />}
        >
          <Suspense fallback={<SectionSkeleton />}>
            <ProjectsSection />
          </Suspense>
        </DeferredSection>

        <div className="section-divider mx-auto max-w-4xl" />
        <DeferredSection
          id="experience"
          className="py-24 px-6 bg-surface-elevated"
          minHeight={1500}
          fallback={<SectionSkeleton />}
        >
          <Suspense fallback={<SectionSkeleton />}>
            <ExperienceSection />
          </Suspense>
        </DeferredSection>

        <div className="section-divider mx-auto max-w-4xl" />
        <DeferredSection
          id="about"
          className="py-24 px-6 bg-surface-elevated"
          minHeight={1100}
          fallback={<SectionSkeleton />}
        >
          <Suspense fallback={<SectionSkeleton />}>
            <AboutSection />
          </Suspense>
        </DeferredSection>

        <div className="section-divider mx-auto max-w-4xl" />
        <DeferredSection
          id="certs"
          className="py-24 px-6"
          minHeight={620}
          fallback={<SectionSkeleton />}
        >
          <Suspense fallback={<SectionSkeleton />}>
            <CertsSection />
          </Suspense>
        </DeferredSection>
      </main>

      <DeferredSection className="py-10" minHeight={220} rootMargin="120px 0px">
        <Suspense fallback={<div className="py-10" />}>
          <FooterSection />
        </Suspense>
      </DeferredSection>
    </div>
  );
};

export default Index;
