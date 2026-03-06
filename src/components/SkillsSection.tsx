import { memo } from "react";
import { Server, Activity, Cloud, Terminal, Shield, GitBranch } from "lucide-react";

const skillGroups = [
  {
    icon: Activity,
    title: "Observability & SRE",
    skills: ["Prometheus", "Grafana", "Datadog", "CloudWatch", "ELK", "OpenTelemetry", "SLI/SLO"],
    color: "docker" as const,
  },
  {
    icon: GitBranch,
    title: "Automation & CI/CD",
    skills: ["Terraform", "Ansible", "GitHub Actions", "Azure DevOps", "GitLab CI", "Harness.io"],
    color: "k8s" as const,
  },
  {
    icon: Cloud,
    title: "Cloud & Distributed",
    skills: ["AWS", "Azure", "GCP", "Kubernetes", "OpenShift", "Docker", "ECS", "Helm"],
    color: "docker" as const,
  },
  {
    icon: Shield,
    title: "Networking",
    skills: ["TCP/IP", "DNS", "VPN", "Firewalls", "L3 Troubleshooting"],
    color: "k8s" as const,
  },
  {
    icon: Terminal,
    title: "Dev & Scripting",
    skills: ["Python", "Bash", "SQL", "BigQuery", "Git", "GitOps"],
    color: "docker" as const,
  },
  {
    icon: Server,
    title: "Linux & Sysadmin",
    skills: ["Ubuntu", "Debian", "RHEL", "Performance Tuning", "Log Analysis"],
    color: "k8s" as const,
  },
];

const SkillsSection = memo(() => {
  return (
    <section className="py-24 px-6" id="skills">
      <div className="container max-w-6xl">
        <p className="font-display text-xs tracking-[0.3em] text-k8s-blue text-glow-k8s mb-2 uppercase">
          スキル // Skills
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-14 neon-underline inline-block pb-2">
          SKILLS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className="card-anime p-6"
              style={{
                animationDelay: `${i * 0.1}s`,
                willChange: "transform, opacity",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-2 rounded-md ${
                    group.color === "docker"
                      ? "bg-docker-blue/10 border border-docker-blue/30"
                      : "bg-k8s-blue/10 border border-k8s-blue/30"
                  }`}
                >
                  <group.icon
                    size={18}
                    className={group.color === "docker" ? "text-docker-blue" : "text-k8s-blue"}
                  />
                </div>
                <h4 className="font-display text-xs tracking-wider text-foreground uppercase">
                  {group.title}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={group.color === "docker" ? "badge-docker" : "badge-k8s"}
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
});

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;
