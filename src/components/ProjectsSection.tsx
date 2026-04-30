import { memo } from "react";
import { AnimateSection, StaggerContainer, AnimateCard } from "./AnimateOnScroll";
import { ArrowRight, Github, GitBranch, Server, Cloud, Globe, Database, Layout, Package } from "lucide-react";

const projects = [
  {
    title: "Red Hat OpenShift (ROSA HCP) Terraform Template",
    github: "https://github.com/myonnewzeland/setupopenshift",
    repo: "https://git.luam.us.kg/yamoshi454/setupopenshift",
    description: "Reusable Infrastructure-as-Code template to provision a Red Hat OpenShift Service on AWS (ROSA) cluster with the Hosted Control Plane architecture.",
    highlights: [
      "AWS VPC single-AZ multi-subnet topology",
      "Public subnets for Ingress LB · private for workers via NAT",
      "OIDC + Operator roles with automated IAM trust policies",
      "Marketplace & Red Hat OCM token authentication",
    ],
    tech: ["Terraform", "AWS", "OpenShift", "ROSA", "IAM"],
    level: "S-RANK",
    rankClass: "rank-s",
    icon: Server,
  },
  {
    title: "AWS Ghost CMS — Infrastructure as Code",
    github: "https://github.com/myonnewzeland/terraform-blog",
    repo: "https://git.luam.us.kg/yamoshi454/terraform-blog",
    description: "Production-ready Ghost CMS stack on AWS using Terraform and Podman. CDN, WAF, observability and automated backups — practices distilled from real banking and energy work.",
    highlights: [
      "CloudFront + WAF v2 (OWASP Top 10)",
      "EC2 Graviton2 + rootless Podman",
      "Encrypted RDS MySQL 8.4 · Route 53 + ACM",
      "~$51.50/mo, optimised down to ~$39/mo",
    ],
    tech: ["Terraform", "AWS", "Podman", "Caddy", "CloudWatch", "Ghost"],
    level: "S-RANK",
    rankClass: "rank-s",
    icon: Cloud,
  },
  {
    title: "Te Puke Holiday Park — Pro-Bono Revamp & Analytics",
    github: "https://github.com/myonnewzeland/te-puke-kiwi-home",
    repo: "https://git.luam.us.kg/yamoshi454/te-puke-kiwi-home",
    description: "Pro-bono website rebuild for a local NZ holiday park. Microsoft Clarity for real UX analytics, edge hardening to absorb a small DDoS spike with zero downtime for real users.",
    highlights: [
      "Cloudflare edge bot filtering & rate limiting",
      "257 sessions tracked · 100% new users · mobile-first",
      "~65% scroll depth · 21s avg engagement",
      "DDoS spike absorbed — zero downtime",
    ],
    tech: ["Cloudflare Pages", "Clarity", "Edge Security", "Self-Hosted"],
    level: "A-RANK",
    rankClass: "rank-a",
    icon: Globe,
  },
  {
    title: "NZ API Backend — PocketBase as a Service",
    github: "https://github.com/myonnewzeland/myonnewzeland-pb-api-nz",
    repo: "https://git.luam.us.kg/yamoshi454/myonnewzeland-pb-api-nz",
    description: "Self-hosted PocketBase backend-as-a-service for NZ-based apps: auth, database, file storage and real-time APIs on edge-optimized infrastructure.",
    highlights: [
      "PocketBase monolithic backend (Go + SQLite)",
      "S3-compatible storage for uploads",
      "Edge-optimized via Cloudflare tunneling",
      "Real-time subscriptions via WebSocket",
    ],
    tech: ["PocketBase", "Go", "SQLite", "S3", "WebSocket", "Edge"],
    level: "A-RANK",
    rankClass: "rank-a",
    icon: Database,
  },
  {
    title: "K3s on Hetzner — Lightweight Kubernetes",
    github: "https://github.com/myonnewzeland/k3s-hetzner",
    repo: "https://git.luam.us.kg/yamoshi454/k3s-hetzner",
    description: "Automated K3s cluster on Hetzner Cloud. Cost-effective alternative to managed Kubernetes for dev/staging or small production workloads in NZ/APAC.",
    highlights: [
      "K3s lightweight Kubernetes distribution",
      "ARM64 & x86 Hetzner nodes",
      "Traefik Ingress + Hetzner CSI storage",
      "Fraction of EKS/AKS/GKE cost",
    ],
    tech: ["K3s", "Kubernetes", "Hetzner", "Terraform", "Linux"],
    level: "A-RANK",
    rankClass: "rank-a",
    icon: Server,
  },
  {
    title: "Loc-OS Linux — Open Source Maintainer",
    github: null,
    repo: null,
    description: "Maintainer of Loc-OS Linux, a global lightweight Linux distribution. Manage automated build pipelines, CI/CD and package repositories for the community.",
    highlights: [
      "Automated ISO build pipelines",
      "CI/CD for package repositories",
      "Community-driven lightweight distro",
      "Global user base",
    ],
    tech: ["Linux", "Bash", "CI/CD", "Open Source"],
    level: "A-RANK",
    rankClass: "rank-a",
    icon: Package,
  },
  {
    title: "DevOps Portfolio Builder",
    github: "https://github.com/myonnewzeland/devops-portfolio-builder",
    repo: null,
    description: "Open-source portfolio site template for DevOps & SRE engineers. React + TypeScript + Tailwind, lazy-loaded sections and polished dark UI.",
    highlights: [
      "React + TypeScript + Vite",
      "Lazy-loaded sections with Suspense",
      "Fully responsive dark UI",
      "MIT licensed",
    ],
    tech: ["React", "TypeScript", "Tailwind", "Vite"],
    level: "B-RANK",
    rankClass: "rank-b",
    icon: Layout,
  },
];

const ProjectsSection = memo(() => {
  return (
    <section className="py-20 px-6" id="projects">
      <div className="max-w-[1152px] mx-auto">
        <AnimateSection>
          <h2 className="text-3xl md:text-[32px] font-bold text-center text-white tracking-tight">
            Hands-on projects shipped to production
          </h2>
          <p className="text-base md:text-lg text-muted-foreground text-center mt-3 max-w-2xl mx-auto">
            Open source, self-hosted and battle-tested — each project a real
            problem solved with cloud, IaC and edge infrastructure.
          </p>
        </AnimateSection>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12">
          {projects.map((p) => (
            <AnimateCard
              key={p.title}
              className="card-anime p-6 md:p-7 flex flex-col"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div
                  className="shrink-0 w-11 h-11 rounded-lg flex items-center justify-center"
                  style={{ background: "hsl(var(--primary) / 0.12)" }}
                >
                  <p.icon size={20} className="text-primary" />
                </div>
                <span className={p.rankClass}>{p.level}</span>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight">
                {p.title}
              </h3>

              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                {p.description}
              </p>

              <ul className="space-y-2 mt-5">
                {p.highlights.map((h) => (
                  <li key={h} className="text-sm text-white/85 flex gap-2.5">
                    <span className="text-primary mt-0.5 shrink-0">✓</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mt-5">
                {p.tech.map((t) => (
                  <span key={t} className="badge-docker">{t}</span>
                ))}
              </div>

              <div
                className="flex flex-wrap gap-4 mt-6 pt-5 border-t"
                style={{ borderTopColor: "hsl(0 0% 100% / 0.08)" }}
              >
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline font-medium"
                  >
                    <Github size={14} /> GitHub <ArrowRight size={14} />
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-white hover:text-primary transition-colors font-medium"
                  >
                    <GitBranch size={14} /> Self-hosted <ArrowRight size={14} />
                  </a>
                )}
              </div>
            </AnimateCard>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
});

ProjectsSection.displayName = "ProjectsSection";
export default ProjectsSection;
