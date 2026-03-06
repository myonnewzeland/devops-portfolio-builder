const experiences = [
  {
    company: "IBM México",
    role: "Site Reliability Engineer / Senior Cloud & DevOps",
    period: "Jan 2023 – Jan 2026",
    highlights: [
      "Observability stacks (Prometheus, Grafana, Datadog) for large-scale distributed systems",
      "CI/CD with Terraform, Ansible — canary/blue-green deployments, automated rollback",
      "End-to-end incident leadership: banking & energy, 99.9% uptime",
      "Reduced deployment cycles by 60% and MTTR by ~40%",
    ],
    clients: ["Citi", "Banorte", "NextEra Energy"],
    level: "S-RANK",
    rankClass: "rank-s",
  },
  {
    company: "MANCII",
    role: "Infrastructure & SRE Consultant (GCP)",
    period: "Mar 2024 – Feb 2025",
    highlights: [
      "High-availability GCP platform architecture for AI and data workloads",
      "Networking, IAM, security and failover planning",
    ],
    level: "A-RANK",
    rankClass: "rank-a",
  },
  {
    company: "Remotics.io",
    role: "Systems Administrator / SRE",
    period: "Aug 2022 – Jan 2023",
    highlights: [
      "Production Linux environments with automated disaster recovery",
      "AWS (RDS, S3, EC2, CloudFront) + monitoring with Datadog and Grafana",
    ],
    level: "A-RANK",
    rankClass: "rank-a",
  },
  {
    company: "Fundación Punto de Vida",
    role: "Technical Lead / Systems Administrator",
    period: "2019 – 2022",
    highlights: [
      "End-to-end infrastructure: servers, networks, VPNs, monitoring",
      "Modernization with Docker — delivery speed +60%",
    ],
    level: "B-RANK",
    rankClass: "rank-b",
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-24 px-6 bg-surface-elevated" id="experience">
      <div className="container max-w-4xl">
        <p className="font-display text-xs tracking-[0.3em] text-docker-blue text-glow-docker mb-2 uppercase">
          経験 // Experience
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-14 neon-underline inline-block pb-2">
          COMPLETED MISSIONS
        </h2>

        <div className="space-y-8 mt-8">
          {experiences.map((exp) => (
            <div key={exp.company} className="card-anime p-6 relative overflow-hidden">
              {/* Rank badge */}
              <div className={`absolute top-4 right-4 font-display text-[10px] tracking-widest ${exp.rankClass}`}>
                {exp.level}
              </div>

              <div className="mb-3">
                <h4 className="text-xl font-display font-bold text-foreground tracking-wide">{exp.company}</h4>
                <p className="font-body text-sm text-k8s-blue">{exp.role}</p>
                <p className="font-body text-xs text-muted-foreground mt-0.5">{exp.period}</p>
              </div>

              <ul className="space-y-1.5 mb-4">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="text-sm text-card-foreground flex gap-2 font-body">
                    <span className="text-docker-blue mt-0.5 shrink-0">▹</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {exp.clients && (
                <div className="flex items-center flex-wrap gap-2">
                  <span className="font-display text-[10px] tracking-wider text-muted-foreground uppercase">Clients:</span>
                  {exp.clients.map((c) => (
                    <span key={c} className="badge-k8s">{c}</span>
                  ))}
                </div>
              )}

              {/* Decorative bottom line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-docker-blue via-k8s-blue to-docker-blue opacity-30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
