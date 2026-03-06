import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CyberBackground from "@/components/CyberBackground";
import SectionSkeleton from "@/components/SectionSkeleton";

// Below-the-fold sections — loaded lazily after hero is visible
const SkillsSection = lazy(() => import("@/components/SkillsSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const ExperienceSection = lazy(() => import("@/components/ExperienceSection"));
const CertsSection = lazy(() => import("@/components/CertsSection"));
const FooterSection = lazy(() => import("@/components/FooterSection"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <CyberBackground />
      {/* Critical above-the-fold — always eager */}
      <Navbar />
      <HeroSection />

      {/* Below-the-fold — lazy loaded */}
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
        <CertsSection />
      </Suspense>

      <div className="section-divider mx-auto max-w-4xl" />
      <Suspense fallback={<div className="py-10" />}>
        <FooterSection />
      </Suspense>
    </div>
  );
};

export default Index;
