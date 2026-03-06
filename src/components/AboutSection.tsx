import { memo } from "react";
import { AnimateSection, StaggerContainer, AnimateCard } from "./AnimateOnScroll";
import {
  Wrench,
  ShieldCheck,
  DollarSign,
  Users,
  Zap,
  FileText,
  HeartHandshake,
  MessagesSquare,
} from "lucide-react";

const howIWork = [
  {
    icon: ShieldCheck,
    title: "Incident Management",
    text: "I run structured incident response — SEV classification, war-rooms, root-cause analysis and blameless post-mortems. I write and maintain runbooks so the team can resolve issues faster next time.",
  },
  {
    icon: Wrench,
    title: "Infrastructure as Code",
    text: "Every resource lives in Terraform or Ansible — versioned, reviewed, and deployed through CI/CD. No manual changes, no drift, no surprises.",
  },
  {
    icon: DollarSign,
    title: "FinOps Governance",
    text: "I build cost visibility from day one: tagging policies, showback dashboards, right-sizing automation, and Savings Plans/Spot governance that deliver 35–50% savings.",
  },
  {
    icon: Users,
    title: "Cross-Team Collaboration",
    text: "I embed with dev and security teams — shifting left on security, building golden paths for deployments, and bridging the gap between velocity and reliability.",
  },
];

const whyHireMe = [
  { icon: Zap, text: "Proven impact: up to 50% cloud cost reduction and 99.9%+ uptime for banking & enterprise platforms." },
  { icon: FileText, text: "Strong documentation culture: runbooks, SOPs, architecture decision records and post-mortems." },
  { icon: HeartHandshake, text: "Ownership mindset: I take end-to-end responsibility from design through on-call." },
  { icon: MessagesSquare, text: "Clear communicator: I translate technical decisions into business impact for stakeholders." },
];

const AboutSection = memo(() => (
  <section className="py-24 px-6 bg-surface-elevated" id="about">
    <div className="container max-w-5xl">
      <AnimateSection>
        <p className="font-display text-xs tracking-[0.3em] text-docker-blue text-glow-docker mb-2 uppercase">
          About
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-4 neon-underline inline-block pb-2">
          HOW I WORK
        </h2>
        <p className="text-sm md:text-base font-body text-muted-foreground max-w-2xl mt-6 leading-relaxed">
          I approach infrastructure as a product — with clear SLOs, cost accountability, and continuous improvement.
          Here's what that looks like in practice:
        </p>
      </AnimateSection>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {howIWork.map((item) => (
          <AnimateCard key={item.title} className="card-anime p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-md bg-docker-blue/10 border border-docker-blue/30">
                <item.icon size={18} className="text-docker-blue" />
              </div>
              <h3 className="font-display text-xs tracking-wider text-foreground uppercase">
                {item.title}
              </h3>
            </div>
            <p className="text-sm font-body text-card-foreground leading-relaxed">
              {item.text}
            </p>
          </AnimateCard>
        ))}
      </StaggerContainer>

      {/* Why Hire Me */}
      <div className="mt-16">
        <AnimateSection>
          <h3 className="text-2xl md:text-3xl font-display font-bold gradient-text mb-8 neon-underline inline-block pb-2">
            WHY HIRE ME
          </h3>
        </AnimateSection>
        <StaggerContainer className="space-y-4">
          {whyHireMe.map((item) => (
            <AnimateCard key={item.text} className="card-anime px-6 py-4 flex items-start gap-4">
              <div className="p-2 rounded-md bg-k8s-blue/10 border border-k8s-blue/30 shrink-0">
                <item.icon size={16} className="text-k8s-blue" />
              </div>
              <p className="text-sm font-body text-card-foreground leading-relaxed">
                {item.text}
              </p>
            </AnimateCard>
          ))}
        </StaggerContainer>
      </div>
    </div>
  </section>
));

AboutSection.displayName = "AboutSection";

export default AboutSection;
