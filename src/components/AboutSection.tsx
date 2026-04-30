import { memo } from "react";
import { AnimateSection, StaggerContainer, AnimateCard } from "./AnimateOnScroll";
import { Check } from "lucide-react";

const features = [
  "Structured incident response — SEV classification, war-rooms, blameless post-mortems and runbooks the team can actually use.",
  "Every resource in Terraform or Ansible — versioned, reviewed, deployed via CI/CD. No manual changes, no drift.",
  "FinOps governance from day one: tagging, showback, right-sizing automation, Savings Plans/Spot — 35–50% savings.",
  "I embed with dev and security teams — golden paths, shift-left security, bridging velocity and reliability.",
  "Up to 50% cloud cost reduction and 99.9%+ uptime delivered for banking & enterprise platforms.",
  "Strong documentation culture: runbooks, SOPs, ADRs and post-mortems that survive after I'm gone.",
  "Ownership mindset — end-to-end responsibility from architecture through on-call.",
];

const AboutSection = memo(() => (
  <section className="py-20 px-6" id="about">
    <div className="max-w-[1152px] mx-auto">
      <div className="grid lg:grid-cols-2 lg:gap-16 items-start">
        {/* Left: Authority headline */}
        <AnimateSection>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-primary">I'm the authority</span>
            <br />
            <span className="text-white">
              you want running your cloud platform in NZ
            </span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">
            I learned SRE, FinOps and large-scale cloud by fixing real
            production issues and paying for real cloud bills. It took years and
            a lot of mistakes — and I share that experience here so NZ companies
            can use it from day one.
          </p>

          <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
            Based in Auckland on a valid NZ work visa. Open to long-term roles,
            sponsorship, remote and hybrid.
          </p>
        </AnimateSection>

        {/* Right: feature list with green checks */}
        <StaggerContainer className="mt-10 lg:mt-0 space-y-3">
          {features.map((text) => (
            <AnimateCard
              key={text}
              className="flex items-start gap-3 px-5 py-4 rounded-xl border bg-card hover:bg-[hsl(0_0%_12%)] transition-colors"
              style={{ borderColor: "hsl(0 0% 100% / 0.08)" }}
            >
              <span
                className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                style={{ background: "hsl(var(--primary) / 0.15)" }}
              >
                <Check size={14} className="text-primary" strokeWidth={3} />
              </span>
              <p className="text-sm text-white/90 leading-relaxed">{text}</p>
            </AnimateCard>
          ))}
        </StaggerContainer>
      </div>
    </div>
  </section>
));

AboutSection.displayName = "AboutSection";
export default AboutSection;
