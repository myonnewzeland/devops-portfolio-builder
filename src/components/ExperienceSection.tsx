import { memo } from "react";
import { AnimateSection, StaggerContainer, AnimateCard } from "./AnimateOnScroll";

const experiences = [
  {
    company: "IBM México — Global Clients",
    role: "DevOps Engineer / SRE & FinOps",
    period: "Jan 2023 – Jan 2026",
    highlights: [
      "FinOps Governance: Designed end-to-end FinOps operating model for multi-cloud (AWS, Azure, GCP); delivered 35–50% sustained cost savings through automated right-sizing, Savings Plans/RI/Spot governance.",
      "Observability stacks (Prometheus, Grafana, Datadog, CloudWatch, Kibana/Loki) for large-scale distributed systems; designed SLI/SLOs and reduced alert fatigue.",
      "Automated ops with Terraform, Ansible and CI/CD (GitHub Actions, Azure DevOps, TeamCity, Harness.io) — golden configs, zero-touch provisioning across 100+ cloud resources.",
      "Led high-severity incidents end-to-end for banking & energy platforms — runbooks, SOPs, post-mortems — sustained 99.9% uptime.",
      "Hardened microservices on Kubernetes/OpenShift and AWS ECS — canary, blue/green, automated rollbacks — cut deployment cycles by 60% and MTTR by 40%.",
      "Campari: Deployed frontend on Cloudflare Pages with Microsoft Clarity and Google Analytics, supported by a headless WordPress backend on OpenShift.",
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
      "Achieved 52% infrastructure cost reduction through BigQuery cost modelling, Spot VM optimisation and automated right-sizing on GCP.",
      "Architected HA GCP platforms for data and AI/ML workloads: networking, IAM, security, backups and failover.",
      "Automated full platform provisioning with Terraform; built monitoring with Prometheus and Grafana.",
      "Deployed GPU infrastructure for self-hosted LLM inference across 15 servers (Ollama, Llama, llama.cpp).",
      "Deployed frontend on Cloudflare Pages with Microsoft Clarity and Google Analytics, supported by a headless WordPress backend on OpenShift.",
    ],
    level: "A-RANK",
    rankClass: "rank-a",
  },
  {
    company: "Remotics.io",
    role: "Systems Administrator / Edge & Cloud Ops",
    period: "Aug 2022 – Jan 2023",
    highlights: [
      "Supported teleoperations platform for Physical AI: managed NVIDIA Jetson edge boards running Ubuntu, containerised services with Docker, exposed via Caddy + Tailscale MagicDNS.",
      "Built edge observability with Prometheus and Grafana — device telemetry, board temperatures, resource usage; remote diagnostics via Tailscale mesh VPN.",
      "Managed CI/CD with Jenkins for edge device deployments; 24/7 on-call for cloud backend (AWS) and edge infrastructure.",
      "Automated disaster-recovery pipelines on AWS (EC2, RDS, S3, CloudFront, Route 53); monitoring with Datadog and Grafana.",
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
      "Modernised legacy systems with Docker (+60% delivery velocity); built CI/CD with GitHub Actions; administered MySQL and PostgreSQL.",
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
    <section className="py-24 px-6 bg-surface-elevated" id="experience">
      <div className="container max-w-4xl">
        <AnimateSection>
          <p className="font-display text-xs tracking-[0.3em] text-docker-blue text-glow-docker mb-2 uppercase">
            経験 // Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-14 neon-underline inline-block pb-2">
            COMPLETED MISSIONS
          </h2>
        </AnimateSection>

        <StaggerContainer className="space-y-8 mt-8">
          {experiences.map((exp) => (
            <AnimateCard
              key={exp.company}
              className="card-anime p-6 relative overflow-hidden border-l-2 border-l-docker-blue"
            >
              <div
                className={`absolute top-4 right-4 font-display text-[10px] tracking-widest ${exp.rankClass}`}
              >
                {exp.level}
              </div>

              <div className="mb-3">
                <h3 className="text-xl font-display font-bold text-foreground tracking-wide">
                  {exp.company}
                </h3>
                <p className="font-body text-sm text-k8s-blue">{exp.role}</p>
                <p className="font-body text-xs text-muted-foreground mt-0.5">
                  {exp.period}
                </p>
              </div>

              <ul className="space-y-1.5 mb-4">
                {exp.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="text-sm text-card-foreground flex gap-2 font-body"
                  >
                    <span className="text-docker-blue mt-0.5 shrink-0">▹</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {exp.clients && (
                <div className="flex items-center flex-wrap gap-2">
                  <span className="font-display text-[10px] tracking-wider text-muted-foreground uppercase">
                    Clients:
                  </span>
                  {exp.clients.map((c) => (
                    <span key={c} className="badge-k8s">
                      {c}
                    </span>
                  ))}
                </div>
              )}

              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-docker-blue via-k8s-blue to-docker-blue opacity-30" />
            </AnimateCard>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
});

ExperienceSection.displayName = "ExperienceSection";

export default ExperienceSection;
