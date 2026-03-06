import { memo } from "react";
import { AnimateSection, StaggerContainer, AnimateCard } from "./AnimateOnScroll";
import TechIcon from "./TechIcon";
import {
  Server,
  Activity,
  Cloud,
  Terminal,
  Shield,
  GitBranch,
  Database,
  Cpu,
  DollarSign,
  AlertTriangle,
} from "lucide-react";

const MAX_BADGES = 6;

const skillGroups = [
  {
    icon: Cloud,
    title: "Cloud & Distributed",
    skills: ["AWS", "Azure", "GCP", "Kubernetes", "OpenShift", "Docker"],
    color: "docker" as const,
  },
  {
    icon: Activity,
    title: "Observability & SRE",
    skills: ["Prometheus", "Grafana", "Datadog", "CloudWatch", "Loki", "OpenTelemetry"],
    color: "docker" as const,
  },
  {
    icon: GitBranch,
    title: "IaC & CI/CD",
    skills: ["Terraform", "Ansible", "GitHub Actions", "GitOps", "Jenkins", "Harness.io"],
    color: "k8s" as const,
  },
  {
    icon: Shield,
    title: "Networking",
    skills: ["VPC Design", "DNS", "Load Balancing", "Tailscale/WireGuard", "Cloudflare", "Firewalls"],
    color: "k8s" as const,
  },
  {
    icon: Terminal,
    title: "Scripting & Dev",
    skills: ["Python", "Bash", "PowerShell", "SQL", "Java Spring Boot", "Node.js"],
    color: "docker" as const,
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "BigQuery", "Redis", "DragonflyDB", "DynamoDB"],
    color: "k8s" as const,
  },
  {
    icon: Server,
    title: "Linux & Sysadmin",
    skills: ["Ubuntu", "Debian", "RHEL", "Performance Tuning", "Log Analysis"],
    color: "docker" as const,
  },
  {
    icon: DollarSign,
    title: "FinOps",
    skills: ["FOCUS Data Models", "Multi-Cloud Cost Gov.", "Spot / CUDs", "Right-Sizing", "Showback", "Tagging Policy"],
    color: "k8s" as const,
  },
  {
    icon: AlertTriangle,
    title: "SRE Practices",
    skills: ["Incident Management", "On-Call Rotations", "Runbooks/SOPs", "Capacity Planning", "Post-Mortems"],
    color: "k8s" as const,
  },
  {
    icon: Cpu,
    title: "Edge / IoT",
    skills: ["NVIDIA Jetson", "Docker on Edge", "Caddy + MagicDNS", "Device Telemetry", "Jenkins Edge CI/CD"],
    color: "docker" as const,
  },
];

const SkillsSection = memo(() => {
  return (
    <section className="py-24 px-6" id="skills">
      <div className="container max-w-6xl">
        <AnimateSection>
          <p className="font-display text-xs tracking-[0.3em] text-k8s-blue text-glow-k8s mb-2 uppercase">
            スキル // Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-14 neon-underline inline-block pb-2">
            SKILLS
          </h2>
        </AnimateSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {skillGroups.map((group) => (
            <AnimateCard
              key={group.title}
              className="card-anime p-6"
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
                    className={
                      group.color === "docker"
                        ? "text-docker-blue"
                        : "text-k8s-blue"
                    }
                  />
                </div>
                <h4 className="font-display text-xs tracking-wider text-foreground uppercase">
                  {group.title}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.slice(0, MAX_BADGES).map((skill) => (
                  <span
                    key={skill}
                    className={`inline-flex items-center gap-1.5 ${
                      group.color === "docker" ? "badge-docker" : "badge-k8s"
                    }`}
                  >
                    <TechIcon
                      name={skill}
                      size={12}
                      className={
                        group.color === "docker"
                          ? "text-docker-blue"
                          : "text-k8s-blue"
                      }
                    />
                    {skill}
                  </span>
                ))}
              </div>
            </AnimateCard>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
});

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;
