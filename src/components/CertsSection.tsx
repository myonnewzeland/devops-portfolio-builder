import { memo } from "react";
import { AnimateSection, StaggerContainer, AnimateCard } from "./AnimateOnScroll";
import { Award, GraduationCap, Languages } from "lucide-react";

const CertsSection = memo(() => {
  return (
    <section className="py-24 px-6" id="certs">
      <div className="container max-w-4xl">
        <AnimateSection>
          <p className="font-display text-xs tracking-[0.25em] text-primary mb-2 uppercase font-semibold">
            ▸ Diploma · Certifications
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white mb-10 tracking-tight">
            Education &amp; Achievements
          </h2>
        </AnimateSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <AnimateCard className="card-anime p-6">
            <div className="p-2 rounded-md bg-docker-blue/10 border border-docker-blue/30 w-fit mb-4">
              <GraduationCap size={20} className="text-docker-blue" />
            </div>
            <h3 className="font-display text-xs tracking-wider text-foreground uppercase mb-3">
              Education
            </h3>
            <p className="text-sm font-body text-card-foreground">B.Sc. Systems Engineering</p>
            <p className="text-xs font-body text-muted-foreground">UVEG, Mexico</p>
            <span className="inline-block mt-3 px-2.5 py-1 text-[10px] font-display tracking-wider uppercase rounded-md border border-docker-blue/30 bg-docker-blue/10 text-docker-blue">
              ✓ Graduated 2024
            </span>
          </AnimateCard>

          <AnimateCard className="card-anime p-6">
            <div className="p-2 rounded-md bg-k8s-blue/10 border border-k8s-blue/30 w-fit mb-4">
              <Award size={20} className="text-k8s-blue" />
            </div>
            <h3 className="font-display text-xs tracking-wider text-foreground uppercase mb-3">
              Certifications
            </h3>
            <ul className="space-y-1.5 text-sm font-body text-card-foreground">
              <li className="flex gap-2">
                <span className="text-docker-blue">✦</span> AWS Cloud Practitioner (Foundational)
              </li>
              <li className="flex gap-2">
                <span className="text-docker-blue">✦</span> Oracle Cloud Foundations
              </li>
              <li className="flex gap-2">
                <span className="text-docker-blue">✦</span> IBM Cloud & DevOps Essentials
              </li>
              <li className="flex gap-2">
                <span className="text-docker-blue">✦</span> Linux Essentials (LPI)
              </li>
              <li className="flex gap-2">
                <span className="text-docker-blue">✦</span> Cisco Cyber Threat Management
              </li>
              <li className="flex gap-2">
                <span className="text-docker-blue">✦</span> SMCE – Scrum Master
              </li>
            </ul>
          </AnimateCard>

          <AnimateCard className="card-anime p-6">
            <div className="p-2 rounded-md bg-docker-blue/10 border border-docker-blue/30 w-fit mb-4">
              <Languages size={20} className="text-docker-blue" />
            </div>
            <h3 className="font-display text-xs tracking-wider text-foreground uppercase mb-3">
              Languages
            </h3>
            <ul className="space-y-1.5 text-sm font-body text-card-foreground">
              <li className="flex gap-2">
                <span className="text-docker-blue">★</span> Spanish – Native
              </li>
              <li className="flex gap-2">
                <span className="text-k8s-blue">★</span> English – Advanced / Professional
              </li>
            </ul>
          </AnimateCard>
        </StaggerContainer>
      </div>
    </section>
  );
});

CertsSection.displayName = "CertsSection";

export default CertsSection;
