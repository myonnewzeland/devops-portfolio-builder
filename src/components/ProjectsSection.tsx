import { ExternalLink, GitBranch, Shield, Cloud, Activity, Server } from "lucide-react";

const projects = [
  {
    title: "AWS Ghost CMS — Infrastructure as Code",
    repo: "https://github.com/myonnewzeland/terraform-blog",
    description:
      "Stack de infraestructura production-ready para Ghost CMS en AWS con Terraform y Podman. Incluye CDN, WAF, observabilidad y backups automatizados.",
    architecture: [
      "CloudFront + WAF v2 (OWASP Top 10)",
      "EC2 Graviton2 (t4g.small) + Rootless Podman",
      "RDS MySQL 8.4 encriptado",
      "Route 53 + ACM SSL/TLS",
      "CloudWatch Dashboard centralizado",
      "AWS Backup automatizado",
    ],
    highlights: [
      "Graviton ARM64 para mejor precio/rendimiento",
      "IMDSv2, WAF, RDS encriptado, secret headers",
      "Fix de CSRF para Ghost Admin detrás de CDN",
      "~$51.50/mes con optimización a ~$39/mes",
    ],
    tech: ["Terraform", "AWS", "Podman", "Caddy", "CloudWatch", "Ghost CMS"],
    level: "S-RANK",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-24 px-6" id="projects">
      <div className="container max-w-5xl">
        <p className="font-display text-xs tracking-[0.3em] text-neon-pink text-glow-pink mb-2 uppercase">
          プロジェクト // Projects
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-14 neon-underline inline-block pb-2">
          PROYECTOS
        </h2>

        <div className="space-y-8 mt-8">
          {projects.map((project) => (
            <div key={project.title} className="card-anime p-6 md:p-8 relative overflow-hidden">
              {/* Rank */}
              <div className="absolute top-4 right-4 font-display text-[10px] tracking-widest anime-badge-pink">
                {project.level}
              </div>

              {/* Header */}
              <div className="flex items-start gap-3 mb-5">
                <div className="p-2 rounded-md bg-neon-cyan/10 border border-neon-cyan/30 shrink-0 mt-1">
                  <Cloud size={20} className="text-neon-cyan" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground tracking-wide">
                    {project.title}
                  </h3>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-body text-neon-cyan hover:text-neon-pink transition-colors mt-1"
                  >
                    <GitBranch size={14} /> Ver repositorio <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              <p className="text-sm font-body text-card-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Architecture & Highlights grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-display text-[10px] tracking-[0.2em] text-neon-cyan uppercase mb-3 flex items-center gap-2">
                    <Server size={14} /> Arquitectura
                  </h4>
                  <ul className="space-y-1.5">
                    {project.architecture.map((item, i) => (
                      <li key={i} className="text-sm font-body text-card-foreground flex gap-2">
                        <span className="text-neon-cyan shrink-0">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-display text-[10px] tracking-[0.2em] text-neon-pink uppercase mb-3 flex items-center gap-2">
                    <Activity size={14} /> Highlights
                  </h4>
                  <ul className="space-y-1.5">
                    {project.highlights.map((item, i) => (
                      <li key={i} className="text-sm font-body text-card-foreground flex gap-2">
                        <span className="text-neon-pink shrink-0">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="anime-badge">{t}</span>
                ))}
              </div>

              {/* Decorative bottom line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan opacity-30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
