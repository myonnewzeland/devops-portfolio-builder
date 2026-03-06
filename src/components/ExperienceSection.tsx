const experiences = [
  {
    company: "IBM México",
    role: "Site Reliability Engineer / Senior Cloud & DevOps Engineer",
    period: "Ene 2023 – Ene 2026",
    highlights: [
      "Stacks de observabilidad con Prometheus, Grafana, Datadog, CloudWatch y ELK para sistemas distribuidos a gran escala",
      "CI/CD con Terraform, Ansible, GitHub Actions — despliegues canary/blue-green con rollback automático",
      "Liderazgo de incidentes end-to-end para plataformas bancarias y energéticas con 99.9% uptime",
      "Reducción de ciclos de despliegue en 60% y MTTR en ~40%",
    ],
    clients: ["Citi (Banking)", "Banorte (Banking)", "NextEra Energy / FPL"],
  },
  {
    company: "MANCII",
    role: "Infrastructure & SRE Consultant (GCP)",
    period: "Mar 2024 – Feb 2025",
    highlights: [
      "Arquitectura de plataformas GCP de alta disponibilidad para cargas de datos e IA",
      "Networking, IAM, seguridad, backups y planificación de failover",
    ],
  },
  {
    company: "Remotics.io",
    role: "Systems Administrator / SRE (On-Call)",
    period: "Ago 2022 – Ene 2023",
    highlights: [
      "Entornos Linux de producción con pipelines de disaster recovery automatizados",
      "Gestión de recursos AWS (RDS, S3, EC2, CloudFront, Route 53) con Datadog y Grafana",
    ],
  },
  {
    company: "Fundación Punto de Vida",
    role: "Technical Lead / Systems Administrator",
    period: "2019 – 2022",
    highlights: [
      "Infraestructura y operaciones end-to-end: servidores, redes, VPNs, monitoreo",
      "Modernización con Docker — velocidad de entrega +60%",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-20 px-6 bg-surface-elevated" id="experience">
      <div className="container max-w-4xl">
        <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-2">
          <span className="text-muted-foreground">$</span> history | grep experience
        </h2>
        <h3 className="text-3xl font-bold text-foreground mb-12">Experiencia Profesional</h3>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors duration-300"
            >
              <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary" />
              <div className="mb-2">
                <h4 className="text-lg font-bold text-foreground">{exp.company}</h4>
                <p className="font-mono text-sm text-primary">{exp.role}</p>
                <p className="font-mono text-xs text-muted-foreground">{exp.period}</p>
              </div>
              <ul className="space-y-1 mb-3">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="text-sm text-card-foreground flex gap-2">
                    <span className="text-primary mt-1 shrink-0">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              {exp.clients && (
                <div className="flex flex-wrap gap-2">
                  {exp.clients.map((c) => (
                    <span key={c} className="px-2 py-0.5 text-xs font-mono rounded border border-border text-muted-foreground">
                      {c}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
