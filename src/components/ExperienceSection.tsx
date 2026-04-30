import { memo } from "react";
import { AnimateSection, StaggerContainer, AnimateCard } from "./AnimateOnScroll";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "IBM México — Global Clients",
    role: "DevOps Engineer / SRE & FinOps",
    period: "Jan 2023 – Jan 2026",
    highlights: [
      "FinOps governance for multi-cloud (AWS, Azure, GCP); 35–50% sustained cost savings via right-sizing, Savings Plans/RI/Spot.",
      "Observability stacks (Prometheus, Grafana, Datadog, CloudWatch, Loki) for large-scale distributed systems; SLI/SLO design and reduced alert fatigue.",
      "Automated ops with Terraform, Ansible and CI/CD (GitHub Actions, Azure DevOps, TeamCity, Harness.io) — zero-touch provisioning across 100+ resources.",
      "Led high-severity incidents end-to-end for banking & energy — runbooks, SOPs, post-mortems — sustained 99.9% uptime.",
      "Hardened microservices on Kubernetes/OpenShift and ECS — canary, blue/green, automated rollbacks — cut deployment cycles 60% and MTTR 40%.",
    ],
    clients: ["Citi", "Banorte", "Campari", "NextEra Energy", "Santander"],
    level: "S-RANK",
    rankClass: "rank-s",
  },
  {
    company: "MANCII",
    role: "DevOps & Cloud Consultant — GCP & FinOps",
    period: "Mar 2024 – Feb 2025",
    highlights: [
      "52% infrastructure cost reduction via BigQuery cost modelling, Spot VM optimisation and automated right-sizing on GCP.",
      "Architected HA GCP platforms for data and AI/ML workloads: networking, IAM, security, backups and failover.",
      "Full platform provisioning with Terraform; monitoring with Prometheus and Grafana.",
      "Deployed GPU infrastructure for self-hosted LLM inference across 15 servers (Ollama, Llama, llama.cpp).",
    ],
    level: "A-RANK",
    rankClass: "rank-a",
  },
  {
    company: "Remotics.io",
    role: "Systems Administrator / Edge & Cloud Ops",
    period: "Aug 2022 – Jan 2023",
    highlights: [
      "Teleoperations platform for Physical AI: NVIDIA Jetson edge boards on Ubuntu, Docker services exposed via Caddy + Tailscale MagicDNS.",
      "Edge observability with Prometheus and Grafana — device telemetry, board temperatures, resource usage; remote diagnostics via mesh VPN.",
      "CI/CD with Jenkins for edge deployments; 24/7 on-call for AWS backend and edge fleet.",
      "Automated DR pipelines on AWS (EC2, RDS, S3, CloudFront, Route 53); monitoring with Datadog and Grafana.",
    ],
    level: "A-RANK",
    rankClass: "rank-a",
  },
  {
    company: "Fundación Punto de Vida",
    role: "Technical Lead",
    period: "2019 – 2022",
    highlights: [
      "Led end-to-end infrastructure: Linux servers (Ubuntu, RHEL), networking, VPNs, backups, monitoring and DR.",
      "Modernised legacy systems with Docker (+60% delivery velocity); CI/CD with GitHub Actions; MySQL and PostgreSQL admin.",
    ],
    level: "B-RANK",
    rankClass: "rank-b",
  },
  {
    company: "Freelance (Upwork & Local Clients)",
    role: "Infrastructure Consultant",
    period: "2017 – 2022",
    highlights: [
      "Deployed and maintained VPS and on-premise servers (Ubuntu/Debian) for SMBs and NGOs.",
      "Managed web infrastructure, DNS, SSL and security hardening.",
    ],
    level: "B-RANK",
    rankClass: "rank-b",
  },
];

const ExperienceSection = memo(() => {
  return (
    <section className="py-20 px-6" id="experience">
      <div className="max-w-[1152px] mx-auto">
        <AnimateSection>
          <h2 className="text-3xl md:text-[32px] font-bold text-white tracking-tight">
            <span className="text-primary">Career path</span>
            <br />
            from freelance Linux to Fortune 500 banking
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mt-4">
            Each role added a layer — sysadmin, automation, observability, FinOps —
            built on real production systems, not slideware.
          </p>
        </AnimateSection>

        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {/* Left rail: visual list of companies */}
          <aside className="lg:col-span-1">
            <ul className="space-y-1">
              {experiences.map((e) => (
                <li key={e.company}>
                  <a
                    href={`#exp-${e.company.replace(/\s+/g, "-")}`}
                    className="flex items-start gap-3 px-3 py-3 rounded-lg text-sm text-white/80 hover:bg-white/5 transition-colors"
                  >
                    <span className="text-primary mt-0.5">▹</span>
                    <span className="flex-1">
                      <span className="block font-medium text-white">{e.company.split(" — ")[0]}</span>
                      <span className="block text-xs text-muted-foreground mt-0.5">{e.period}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Right column: cards */}
          <div className="lg:col-span-2">
            <StaggerContainer className="space-y-5">
              {experiences.map((exp) => (
                <AnimateCard
                  key={exp.company}
                  id={`exp-${exp.company.replace(/\s+/g, "-")}`}
                  className="card-anime p-6"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div
                      className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "hsl(var(--primary) / 0.12)" }}
                    >
                      <Briefcase size={18} className="text-primary" />
                    </div>
                    <span className={exp.rankClass}>{exp.level}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white">{exp.company}</h3>
                  <p className="text-sm text-primary mt-1">{exp.role}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{exp.period}</p>

                  <ul className="space-y-2 mt-4">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="text-sm text-white/85 flex gap-2.5 leading-relaxed">
                        <span className="text-primary mt-0.5 shrink-0">✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.clients && (
                    <div className="flex items-center flex-wrap gap-2 mt-5">
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">
                        Clients:
                      </span>
                      {exp.clients.map((c) => (
                        <span key={c} className="badge-docker">{c}</span>
                      ))}
                    </div>
                  )}
                </AnimateCard>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
});

ExperienceSection.displayName = "ExperienceSection";
export default ExperienceSection;
