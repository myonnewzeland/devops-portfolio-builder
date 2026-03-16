import { memo } from "react";
import { AnimateSection, StaggerContainer, AnimateCard } from "./AnimateOnScroll";
import { ExternalLink, GitBranch, Github, Cloud, Activity, Server, Package, Layout, Globe, Database } from "lucide-react";

const projects = [
  {
    title: "Red Hat OpenShift (ROSA HCP) Terraform Template",
    github: "https://github.com/myonnewzeland/setupopenshift",
    repo: "https://git.luam.us.kg/yamoshi454/setupopenshift",
    description:
      "Reusable Infrastructure as Code (IaC) template to provision a Red Hat OpenShift Service on AWS (ROSA) cluster utilizing the Hosted Control Plane (HCP) architecture.",
    architecture: [
      "AWS VPC Single-AZ (Multi-Subnet) Topology",
      "Public Subnets for Ingress LoadBalancer via IGW",
      "Private Subnets for Worker Nodes via NAT Gateway",
      "OIDC Configuration & Operator Roles",
      "RHCS (Red Hat Cloud Services) Integration",
    ],
    highlights: [
      "Abstracted infrastructure definition via Terraform modules",
      "Automated AWS IAM role creation and trust policies",
      "AWS Marketplace & Red Hat OCM token authentication",
      "Dedicated secure subnets for execution layer",
    ],
    tech: ["Terraform", "AWS", "OpenShift", "ROSA", "IAM"],
    level: "S-RANK",
    icon: Server,
  },
  {
    title: "AWS Ghost CMS — Infrastructure as Code",
    github: "https://github.com/myonnewzeland/terraform-blog",
    repo: "https://git.luam.us.kg/yamoshi454/terraform-blog",
    description:
      "Production-ready infrastructure stack for Ghost CMS on AWS using Terraform and Podman. Includes CDN, WAF, observability and automated backups. These practices come from real production work in banking and energy — now available here so NZ companies don't have to repeat the same expensive mistakes.",
    architecture: [
      "CloudFront + WAF v2 (OWASP Top 10)",
      "EC2 Graviton2 (t4g.small) + Rootless Podman",
      "Encrypted RDS MySQL 8.4",
      "Route 53 + ACM SSL/TLS",
      "Centralized CloudWatch Dashboard",
      "Automated AWS Backup",
    ],
    highlights: [
      "Graviton ARM64 for better price/performance",
      "IMDSv2, WAF, encrypted RDS, secret headers",
      "CSRF fix for Ghost Admin behind CDN",
      "~$51.50/mo with optimization to ~$39/mo",
    ],
    tech: ["Terraform", "AWS", "Podman", "Caddy", "CloudWatch", "Ghost CMS"],
    level: "S-RANK",
    icon: Cloud,
  },
  {
    title: "Te Puke Holiday Park — Website Revamp & Analytics (Pro-Bono)",
    github: "https://github.com/myonnewzeland/te-puke-kiwi-home",
    repo: "https://git.luam.us.kg/yamoshi454/te-puke-kiwi-home",
    description:
      "I redesigned the website for Te Puke Holiday Park as a pro-bono project — because I know how hard it is for small local businesses to understand digital, and I wanted to simply give that knowledge away. I implemented Microsoft Clarity to track real user behaviour (sessions, scroll depth, active time) across key pages like booking, contact and accommodation, so the owners now have clear visibility of their traffic instead of guessing. First data batch: 257 sessions (100% new users), ~65% scroll depth, 21s avg active engagement, majority from mobile. I also hardened the site at the edge and web-server level to filter bots and noisy traffic, absorbing a small DDoS-style spike with zero downtime for real users.",
    architecture: [
      "Cloudflare edge hardening (bot filtering, rate limiting)",
      "Web-server level traffic filtering (DDoS mitigation)",
      "Microsoft Clarity for UX analytics & session recording",
      "Cloudflare Pages deployment with edge rendering",
      "Self-hosted mirror on personal infrastructure",
    ],
    highlights: [
      "Pro-bono gift — community contribution to a local SMB",
      "257 sessions tracked · 100% new users · mobile-first",
      "~65% scroll depth · 21s avg active engagement per session",
      "DDoS spike absorbed — zero downtime, zero user impact",
    ],
    tech: ["Cloudflare Pages", "Microsoft Clarity", "Edge Security", "Web Analytics", "Self-Hosted"],
    level: "A-RANK",
    icon: Globe,
  },
  {
    title: "NZ API Backend — PocketBase as a Service",
    github: "https://github.com/myonnewzeland/myonnewzeland-pb-api-nz",
    repo: "https://git.luam.us.kg/yamoshi454/myonnewzeland-pb-api-nz",
    description:
      "Self-hosted PocketBase backend-as-a-service deployment for NZ-based applications. Provides authentication, database, file storage and real-time APIs with edge-optimized infrastructure.",
    architecture: [
      "PocketBase monolithic backend (Go + SQLite)",
      "Self-hosted on personal infrastructure",
      "S3-compatible storage for file uploads",
      "Edge-optimized with Cloudflare tunneling",
      "Backup & replication to secondary nodes",
    ],
    highlights: [
      "Lightweight alternative to Firebase/Supabase",
      "Self-sovereign data — full control",
      "Real-time subscriptions via WebSocket",
      "Built-in auth with OAuth2 providers",
      "Cost-effective for small-to-medium apps",
    ],
    tech: ["PocketBase", "Go", "SQLite", "S3", "WebSocket", "Edge"],
    level: "A-RANK",
    icon: Database,
  },
  {
    title: "DevOps Portfolio Builder",
    github: "https://github.com/myonnewzeland/devops-portfolio-builder",
    repo: null,
    description:
      "Anime/cyberpunk-themed portfolio site for DevOps & SRE engineers. Built with React, TypeScript and Tailwind CSS — featuring Docker & Kubernetes brand colors, framer-motion scroll animations, lazy-loaded sections and a responsive sticky navbar.",
    architecture: null,
    highlights: [
      "React + TypeScript + Vite for fast builds",
      "Framer Motion scroll animations with staggered cards",
      "Docker Blue & Kubernetes Blue design system",
      "Lazy-loaded sections with Suspense & prefetch on hover",
      "Fully responsive cyberpunk aesthetic",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    level: "A-RANK",
    icon: Layout,
  },
  {
    title: "Loc-OS Linux — Open Source Maintainer",
    github: null,
    repo: null,
    description:
      "Maintainer of Loc-OS Linux, a global lightweight Linux distribution. Manage automated build pipelines, CI/CD and package repositories for the community.",
    architecture: null,
    highlights: [
      "Automated build pipelines for ISO generation",
      "CI/CD for package repositories",
      "Community-driven lightweight distro",
      "Global user base",
    ],
    tech: ["Linux", "Bash", "CI/CD", "Package Management", "Open Source"],
    level: "A-RANK",
    icon: Package,
  },
];

const ProjectsSection = memo(() => {
  return (
    <section className="py-24 px-6" id="projects">
      <div className="container max-w-5xl">
        <AnimateSection>
          <p className="font-display text-xs tracking-[0.3em] text-docker-blue text-glow-docker mb-2 uppercase">
            プロジェクト // Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-14 neon-underline inline-block pb-2">
            PROJECTS
          </h2>
        </AnimateSection>

        <StaggerContainer className="space-y-8 mt-8">
          {projects.map((project) => (
            <AnimateCard
              key={project.title}
              className="card-anime p-6 md:p-8 relative overflow-hidden"
            >

              <div className="flex items-start gap-3 mb-5">
                <div className="p-2 rounded-md bg-docker-blue/10 border border-docker-blue/30 shrink-0 mt-1">
                  <project.icon size={20} className="text-docker-blue" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground tracking-wide">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 mt-1">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-body text-k8s-blue hover:text-docker-blue transition-colors"
                      >
                        <Github size={14} /> GitHub <ExternalLink size={12} />
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-body text-docker-blue hover:text-k8s-blue transition-colors"
                      >
                        <GitBranch size={14} /> Self-hosted <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-sm font-body text-card-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {project.architecture && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-display text-[10px] tracking-[0.2em] text-docker-blue uppercase mb-3 flex items-center gap-2">
                      <Server size={14} /> Architecture
                    </h4>
                    <ul className="space-y-1.5">
                      {project.architecture.map((item, i) => (
                        <li key={i} className="text-sm font-body text-card-foreground flex gap-2">
                          <span className="text-docker-blue shrink-0">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-display text-[10px] tracking-[0.2em] text-k8s-blue uppercase mb-3 flex items-center gap-2">
                      <Activity size={14} /> Highlights
                    </h4>
                    <ul className="space-y-1.5">
                      {project.highlights.map((item, i) => (
                        <li key={i} className="text-sm font-body text-card-foreground flex gap-2">
                          <span className="text-k8s-blue shrink-0">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {!project.architecture && project.highlights && (
                <div className="mb-6">
                  <h4 className="font-display text-[10px] tracking-[0.2em] text-k8s-blue uppercase mb-3 flex items-center gap-2">
                    <Activity size={14} /> Highlights
                  </h4>
                  <ul className="space-y-1.5">
                    {project.highlights.map((item, i) => (
                      <li key={i} className="text-sm font-body text-card-foreground flex gap-2">
                        <span className="text-k8s-blue shrink-0">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="badge-docker">
                    {t}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-docker-blue via-k8s-blue to-docker-blue opacity-30" />
            </AnimateCard>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
});

ProjectsSection.displayName = "ProjectsSection";

export default ProjectsSection;
