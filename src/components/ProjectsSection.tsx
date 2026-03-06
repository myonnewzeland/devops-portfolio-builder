import { memo } from "react";
import { ExternalLink, GitBranch, Cloud, Activity, Server, Package } from "lucide-react";

const projects = [
  {
    title: "AWS Ghost CMS — Infrastructure as Code",
    repo: "https://github.com/myonnewzeland/terraform-blog",
    description:
      "Production-ready infrastructure stack for Ghost CMS on AWS using Terraform and Podman. Includes CDN, WAF, observability and automated backups.",
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
    title: "Loc-OS Linux — Open Source Maintainer",
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
        <p className="font-display text-xs tracking-[0.3em] text-docker-blue text-glow-docker mb-2 uppercase">
          プロジェクト // Projects
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-14 neon-underline inline-block pb-2">
          PROJECTS
        </h2>

        <div className="space-y-8 mt-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="card-anime p-6 md:p-8 relative overflow-hidden"
              style={{ willChange: "transform, opacity" }}
            >
              <div className={`absolute top-4 right-4 font-display text-[10px] tracking-widest ${project.level === "S-RANK" ? "rank-s" : "rank-a"}`}>
                {project.level}
              </div>

              <div className="flex items-start gap-3 mb-5">
                <div className="p-2 rounded-md bg-docker-blue/10 border border-docker-blue/30 shrink-0 mt-1">
                  <project.icon size={20} className="text-docker-blue" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground tracking-wide">
                    {project.title}
                  </h3>
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-body text-k8s-blue hover:text-docker-blue transition-colors mt-1"
                    >
                      <GitBranch size={14} /> View repository <ExternalLink size={12} />
                    </a>
                  )}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

ProjectsSection.displayName = "ProjectsSection";

export default ProjectsSection;
