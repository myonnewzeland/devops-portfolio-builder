import { memo } from "react";
import { AnimateSection, StaggerContainer, AnimateCard } from "./AnimateOnScroll";
import { Award, GraduationCap, Languages, ArrowRight } from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    subtitle: "B.Sc. Systems Engineering",
    body: "UVEG, Mexico — Graduated 2024.",
    link: { href: "#about", label: "About me" },
  },
  {
    icon: Award,
    title: "Certifications",
    subtitle: "Cloud, DevOps & Security",
    body: "AWS Cloud Practitioner · Oracle Cloud Foundations · IBM Cloud & DevOps Essentials · Linux Essentials (LPI) · Cisco Cyber Threat Management · SMCE Scrum Master.",
    link: { href: "#experience", label: "See applied work" },
  },
  {
    icon: Languages,
    title: "Languages",
    subtitle: "Spanish & English",
    body: "Spanish — Native. English — Advanced / Professional working proficiency.",
    link: { href: "mailto:yamoshi454@gmail.com", label: "Talk to me" },
  },
];

const CertsSection = memo(() => {
  return (
    <section className="py-20 px-6" id="certs">
      <div className="max-w-[1152px] mx-auto">
        <AnimateSection>
          <h2 className="text-2xl md:text-[28px] font-bold text-center tracking-tight">
            <span className="text-primary">Verified credentials</span>{" "}
            <span className="text-white">backing the work:</span>
          </h2>
        </AnimateSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {cards.map((c) => (
            <AnimateCard key={c.title} className="card-anime p-6 flex flex-col">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ background: "hsl(var(--primary) / 0.12)" }}
              >
                <c.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-white">{c.title}</h3>
              <p className="text-sm text-primary mt-1">{c.subtitle}</p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">
                {c.body}
              </p>
              <a
                href={c.link.href}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                {c.link.label} <ArrowRight size={14} />
              </a>
            </AnimateCard>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
});

CertsSection.displayName = "CertsSection";
export default CertsSection;
