import { memo } from "react";
import { AnimateSection, StaggerContainer, AnimateCard } from "./AnimateOnScroll";
import { Check, Cloud, DollarSign, Wrench, MessagesSquare } from "lucide-react";

const offers = [
  {
    icon: Wrench,
    title: "DevOps / SRE Engineer",
    price: "Full-time",
    pricePeriod: "Auckland · NZ visa OK",
    description: "Embed in your team to run reliable cloud platforms day-to-day.",
    features: [
      "On-call & incident response",
      "SLI/SLO design",
      "Kubernetes / OpenShift ops",
      "Runbooks, SOPs, post-mortems",
      "CI/CD & deployment automation",
    ],
    cta: "Hire me full-time",
    href: "mailto:yamoshi454@gmail.com?subject=Full-time%20SRE%20role",
    highlighted: false,
  },
  {
    icon: DollarSign,
    title: "Cloud & FinOps Consulting",
    price: "Project",
    pricePeriod: "Fixed scope · 4–12 weeks",
    description: "Audit, govern and cut your AWS / Azure / GCP bill — without breaking reliability.",
    features: [
      "Multi-cloud cost audit",
      "Tagging & showback policy",
      "Right-sizing automation",
      "Savings Plans / RI / Spot strategy",
      "35–50% sustained savings",
    ],
    cta: "Start a FinOps engagement",
    href: "mailto:yamoshi454@gmail.com?subject=FinOps%20engagement",
    highlighted: true,
    badge: "Most popular",
  },
  {
    icon: Cloud,
    title: "Platform & IaC Automation",
    price: "Project",
    pricePeriod: "Fixed scope · 2–8 weeks",
    description: "Greenfield Terraform/Ansible builds, edge & K8s platforms ready for production.",
    features: [
      "Terraform / Ansible modules",
      "K3s / EKS / OpenShift bootstrap",
      "Cloudflare edge hardening",
      "Observability stack (Prom + Grafana)",
      "GitOps & CI/CD pipelines",
    ],
    cta: "Plan a build",
    href: "mailto:yamoshi454@gmail.com?subject=Platform%20build",
    highlighted: false,
  },
  {
    icon: MessagesSquare,
    title: "Advisory & Collaboration",
    price: "Hourly",
    pricePeriod: "Async + calls",
    description: "Architecture review, hiring panels, mentoring or pro-bono for NZ SMBs and NGOs.",
    features: [
      "Architecture & cost reviews",
      "Hiring panel / tech interviews",
      "Mentoring for SRE/DevOps",
      "Pro-bono for NZ SMBs",
      "Open source collaboration",
    ],
    cta: "Get in touch",
    href: "mailto:yamoshi454@gmail.com?subject=Advisory",
    highlighted: false,
  },
];

const ServicesSection = memo(() => {
  return (
    <section className="py-20 px-6" id="services">
      <div className="max-w-[1152px] mx-auto">
        <AnimateSection>
          <h2 className="text-3xl md:text-[32px] font-bold text-center text-white tracking-tight">
            Choose how we work together
          </h2>
          <p className="text-base md:text-lg text-muted-foreground text-center mt-3 max-w-2xl mx-auto">
            Full-time, project-based or advisory — pick the format that fits
            your team and timeline.
          </p>
        </AnimateSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {offers.map((o) => (
            <AnimateCard
              key={o.title}
              className="rounded-xl p-6 flex flex-col bg-card transition-colors hover:bg-[hsl(0_0%_12%)]"
              style={{
                border: o.highlighted
                  ? "2px solid hsl(var(--primary))"
                  : "1px solid hsl(0 0% 100% / 0.08)",
              }}
            >
              {o.badge && (
                <span className="self-start mb-3 px-2 py-0.5 text-[10px] uppercase tracking-wider rounded-md bg-primary text-primary-foreground font-semibold">
                  {o.badge}
                </span>
              )}

              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ background: "hsl(var(--primary) / 0.12)" }}
              >
                <o.icon size={18} className="text-primary" />
              </div>

              <h3 className="text-lg font-bold text-white">{o.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{o.description}</p>

              <div className="mt-4">
                <div className="text-2xl font-extrabold text-white">{o.price}</div>
                <div className="text-xs text-muted-foreground">{o.pricePeriod}</div>
              </div>

              <ul className="space-y-2 mt-5 flex-1">
                {o.features.map((f) => (
                  <li key={f} className="text-sm text-white/85 flex gap-2">
                    <Check size={14} className="text-primary shrink-0 mt-1" strokeWidth={3} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={o.href}
                className={`mt-6 inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  o.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border bg-transparent text-white hover:bg-white/5"
                }`}
                style={
                  o.highlighted
                    ? undefined
                    : { borderColor: "hsl(0 0% 100% / 0.12)" }
                }
              >
                {o.cta}
              </a>
            </AnimateCard>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
});

ServicesSection.displayName = "ServicesSection";
export default ServicesSection;
