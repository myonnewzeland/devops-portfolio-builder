import { memo } from "react";
import { AnimateSection, StaggerContainer, AnimateCard } from "./AnimateOnScroll";
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

const skillGroups = [
  {
    icon: Cloud,
    title: "Cloud & Distributed",
    skills: [
      "AWS (ECS, EC2, Lambda, RDS, S3, DynamoDB, CloudFront, Route 53, IAM, VPC, SQS/SNS)",
      "Azure (AKS, DevOps, Container Apps)",
      "GCP (BigQuery, Compute Engine, Cloud Storage)",
      "Kubernetes",
      "OpenShift",
      "Docker",
      "Helm",
      "ArgoCD",
      "Amazon ECS",
    ],
    color: "docker" as const,
  },
  {
    icon: Activity,
    title: "Observability & SRE",
    skills: [
      "Prometheus",
      "Grafana",
      "Datadog",
      "CloudWatch",
      "Kibana",
      "Loki",
      "OpenTelemetry",
      "SLI/SLO",
    ],
    color: "docker" as const,
  },
  {
    icon: GitBranch,
    title: "IaC & CI/CD",
    skills: [
      "Terraform",
      "Ansible",
      "CloudFormation",
      "ARM Templates",
      "GitOps",
      "GitHub Actions",
      "Azure DevOps",
      "GitLab CI",
      "Jenkins",
      "TeamCity",
      "Harness.io",
    ],
    color: "k8s" as const,
  },
  {
    icon: Shield,
    title: "Networking",
    skills: [
      "VPC Design",
      "DNS",
      "Load Balancing",
      "TCP/IP",
      "VPNs (Tailscale, WireGuard)",
      "Firewalls",
      "Cloudflare",
      "L3 Troubleshooting",
    ],
    color: "k8s" as const,
  },
  {
    icon: Terminal,
    title: "Scripting & Dev",
    skills: [
      "Python",
      "Bash (Advanced)",
      "PowerShell",
      "SQL",
      "Java Spring Boot",
      "Node.js",
      "Git",
    ],
    color: "docker" as const,
  },
  {
    icon: Database,
    title: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "BigQuery",
      "Redis",
      "DragonflyDB",
      "MongoDB",
      "DynamoDB",
    ],
    color: "k8s" as const,
  },
  {
    icon: Server,
    title: "Linux & Sysadmin",
    skills: [
      "Ubuntu",
      "Debian",
      "RHEL",
      "Performance Tuning",
      "Log Analysis",
    ],
    color: "docker" as const,
  },
  {
    icon: AlertTriangle,
    title: "SRE Practices",
    skills: [
      "Incident Management",
      "On-Call Rotations",
      "Runbooks/SOPs",
      "Capacity Planning",
      "Post-Mortems",
    ],
    color: "k8s" as const,
  },
  {
    icon: Cpu,
    title: "Edge / IoT",
    skills: [
      "NVIDIA Jetson",
      "Docker on Edge",
      "Caddy + Tailscale MagicDNS",
      "Prometheus Device Telemetry",
      "Jenkins Edge CI/CD",
    ],
    color: "docker" as const,
  },
  {
    icon: DollarSign,
    title: "FinOps",
    skills: [
      "FOCUS Data Models",
      "Multi-Cloud Cost Governance",
      "BigQuery Billing Pipelines",
      "Spot / CUDs",
      "Right-Sizing",
      "Showback / Chargeback",
      "Tagging Policy",
    ],
    color: "k8s" as const,
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
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={
                      group.color === "docker" ? "badge-docker" : "badge-k8s"
                    }
                  >
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
