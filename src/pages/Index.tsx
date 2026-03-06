import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SectionSkeleton from "@/components/SectionSkeleton";

// Below-the-fold sections — loaded lazily after hero is visible
const SkillsSection = lazy(() => import("@/components/SkillsSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const ExperienceSection = lazy(() => import("@/components/ExperienceSection"));
const CertsSection = lazy(() => import("@/components/CertsSection"));
const FooterSection = lazy(() => import("@/components/FooterSection"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Critical above-the-fold — always eager */}
      <Navbar />
      <HeroSection />

      {/* Below-the-fold — lazy loaded */}
      <Suspense fallback={<SectionSkeleton />}>
        <SkillsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ProjectsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ExperienceSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <CertsSection />
      </Suspense>

      <Suspense fallback={<div className="py-10" />}>
        <FooterSection />
      </Suspense>
    </div>
  );
};

export default Index;
