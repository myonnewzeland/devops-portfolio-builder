import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CyberBackground from "@/components/CyberBackground";
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
        <Suspense fallback={<SectionSkeleton />}>
          <SkillsSection />
        </Suspense>

        <div className="section-divider mx-auto max-w-4xl" />
        <Suspense fallback={<SectionSkeleton />}>
          <ProjectsSection />
        </Suspense>

        <div className="section-divider mx-auto max-w-4xl" />
        <Suspense fallback={<SectionSkeleton />}>
          <ExperienceSection />
        </Suspense>

        <div className="section-divider mx-auto max-w-4xl" />
        <Suspense fallback={<SectionSkeleton />}>
          <AboutSection />
        </Suspense>

        <div className="section-divider mx-auto max-w-4xl" />
        <Suspense fallback={<SectionSkeleton />}>
          <CertsSection />
        </Suspense>
      </main>

      <Suspense fallback={<div className="py-10" />}>
        <FooterSection />
      </Suspense>
    </div>
  );
};

export default Index;
