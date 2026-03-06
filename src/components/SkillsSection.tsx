import { Server, Activity, Cloud, Terminal, Shield, GitBranch } from "lucide-react";

const skillGroups = [
  {
    icon: Activity,
    title: "Observabilidad & SRE",
    skills: ["Prometheus", "Grafana", "Datadog", "CloudWatch", "ELK", "OpenTelemetry", "SLI/SLO"],
  },
  {
    icon: GitBranch,
    title: "Automatización & CI/CD",
    skills: ["Terraform", "Ansible", "GitHub Actions", "Azure DevOps", "GitLab CI", "Harness.io", "Canary/Blue-Green"],
  },
  {
    icon: Cloud,
    title: "Cloud & Sistemas Distribuidos",
    skills: ["AWS", "Azure", "GCP", "Kubernetes", "OpenShift", "Docker", "ECS", "Helm"],
  },
  {
    icon: Shield,
    title: "Networking",
    skills: ["TCP/IP", "DNS", "VPN", "Firewalls", "L3 Troubleshooting", "Latency Analysis"],
  },
  {
    icon: Terminal,
    title: "Desarrollo & Scripting",
    skills: ["Python", "Bash", "SQL", "BigQuery", "Git", "GitOps"],
  },
  {
    icon: Server,
    title: "Sistemas Operativos",
    skills: ["Linux (Ubuntu, Debian, RHEL)", "Sysadmin", "Performance Tuning"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-20 px-6" id="skills">
      <div className="container max-w-6xl">
        <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-2">
          <span className="text-muted-foreground">$</span> cat skills.yml
        </h2>
        <h3 className="text-3xl font-bold text-foreground mb-12">Habilidades Técnicas</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="p-6 rounded-lg border border-border bg-card card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <group.icon size={20} className="text-primary" />
                <h4 className="font-mono text-sm font-semibold text-foreground">{group.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs font-mono rounded bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
