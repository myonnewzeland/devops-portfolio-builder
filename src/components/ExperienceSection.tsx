const experiences = [
  {
    company: "IBM México",
    role: "Site Reliability Engineer / Senior Cloud & DevOps",
    period: "Ene 2023 – Ene 2026",
    highlights: [
      "Stacks de observabilidad (Prometheus, Grafana, Datadog) para sistemas distribuidos a gran escala",
      "CI/CD con Terraform, Ansible — despliegues canary/blue-green, rollback automático",
      "Liderazgo de incidentes end-to-end: banca y energía, 99.9% uptime",
      "Reducción de ciclos de despliegue 60% y MTTR ~40%",
    ],
    clients: ["Citi", "Banorte", "NextEra Energy"],
    level: "S-RANK",
  },
  {
    company: "MANCII",
    role: "Infrastructure & SRE Consultant (GCP)",
    period: "Mar 2024 – Feb 2025",
    highlights: [
      "Arquitectura de plataformas GCP de alta disponibilidad para IA y datos",
      "Networking, IAM, seguridad y planificación de failover",
    ],
    level: "A-RANK",
  },
  {
    company: "Remotics.io",
    role: "Systems Administrator / SRE",
    period: "Ago 2022 – Ene 2023",
    highlights: [
      "Entornos Linux de producción con disaster recovery automatizado",
      "AWS (RDS, S3, EC2, CloudFront) + monitoreo con Datadog y Grafana",
    ],
    level: "A-RANK",
  },
  {
    company: "Fundación Punto de Vida",
    role: "Technical Lead / Systems Administrator",
    period: "2019 – 2022",
    highlights: [
      "Infraestructura end-to-end: servidores, redes, VPNs, monitoreo",
      "Modernización con Docker — velocidad de entrega +60%",
    ],
    level: "B-RANK",
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-24 px-6 bg-surface-elevated" id="experience">
      <div className="container max-w-4xl">
        <p className="font-display text-xs tracking-[0.3em] text-neon-pink text-glow-pink mb-2 uppercase">
          経験 // Experience
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-14 neon-underline inline-block pb-2">
          MISIONES COMPLETADAS
        </h2>

        <div className="space-y-8 mt-8">
          {experiences.map((exp) => (
            <div key={exp.company} className="card-anime p-6 relative overflow-hidden">
              {/* Rank badge */}
              <div className="absolute top-4 right-4 font-display text-[10px] tracking-widest anime-badge-pink">
                {exp.level}
              </div>

              <div className="mb-3">
                <h4 className="text-xl font-display font-bold text-foreground tracking-wide">{exp.company}</h4>
                <p className="font-body text-sm text-neon-cyan">{exp.role}</p>
                <p className="font-body text-xs text-muted-foreground mt-0.5">{exp.period}</p>
              </div>

              <ul className="space-y-1.5 mb-4">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="text-sm text-card-foreground flex gap-2 font-body">
                    <span className="text-neon-pink mt-0.5 shrink-0">▹</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {exp.clients && (
                <div className="flex flex-wrap gap-2">
                  {exp.clients.map((c) => (
                    <span key={c} className="anime-badge">{c}</span>
                  ))}
                </div>
              )}

              {/* Decorative bottom line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan opacity-30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
