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

const coreStack = [
  {
    icon: Cloud,
    title: "Cloud Platforms",
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
    icon: DollarSign,
    title: "FinOps",
    skills: ["FOCUS Data Models", "Multi-Cloud Cost Gov.", "Spot / CUDs", "Right-Sizing", "Showback", "Tagging Policy"],
    color: "k8s" as const,
  },
];

const supportingSkills = [
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
    icon: Shield,
    title: "Networking & Security",
    skills: ["VPC Design", "DNS", "Load Balancing", "Tailscale/WireGuard", "Cloudflare", "Firewalls"],
    color: "k8s" as const,
  },
  {
    icon: Server,
    title: "Linux & Sysadmin",
    skills: ["Ubuntu", "Debian", "RHEL", "Performance Tuning", "Log Analysis"],
    color: "docker" as const,
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

const SkillGroup = ({ group }: { group: typeof coreStack[0] }) => (
  <AnimateCard className="card-anime p-6">
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
      <h3 className="font-display text-xs tracking-wider text-foreground uppercase">
        {group.title}
      </h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {group.skills.map((skill) => (
        <span
          key={skill}
          className={`inline-flex items-center gap-1.5 ${
            group.color === "docker" ? "badge-docker" : "badge-k8s"
          }`}
        >
          <TechIcon
            name={skill}
            size={12}
            className={group.color === "docker" ? "text-docker-blue" : "text-k8s-blue"}
          />
          {skill}
        </span>
      ))}
    </div>
  </AnimateCard>
);

const SkillsSection = memo(() => {
  return (
    <section className="py-24 px-6" id="skills">
      <div className="container max-w-6xl">
        <AnimateSection>
          <p className="font-display text-xs tracking-[0.25em] text-primary mb-2 uppercase font-semibold">
            ▸ Course Dashboard · Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white mb-4 tracking-tight">
            Technical Stack
          </h2>
          <p className="text-sm md:text-base font-body text-muted-foreground max-w-2xl mt-6 leading-relaxed">
            My core focus is building <strong className="text-foreground">automated, observable, cost-efficient cloud platforms</strong>.
            I combine IaC, CI/CD, FinOps governance and SRE practices to deliver reliable systems at scale.
          </p>
        </AnimateSection>

        {/* Core Stack */}
        <div className="mt-10 mb-4">
          <p className="font-display text-[10px] tracking-[0.2em] text-docker-blue uppercase mb-4">
            ▸ Core Stack
          </p>
        </div>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreStack.map((group) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </StaggerContainer>

        {/* Supporting Skills */}
        <div className="mt-12 mb-4">
          <p className="font-display text-[10px] tracking-[0.2em] text-muted-foreground uppercase mb-4">
            ▸ Supporting Skills
          </p>
        </div>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportingSkills.map((group) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
});

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;
