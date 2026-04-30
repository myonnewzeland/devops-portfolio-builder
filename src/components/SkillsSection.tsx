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
  ChevronRight,
} from "lucide-react";

const groups = [
  { icon: Cloud, title: "Cloud Platforms", skills: ["AWS", "Azure", "GCP", "Kubernetes", "OpenShift", "Docker"] },
  { icon: Activity, title: "Observability & SRE", skills: ["Prometheus", "Grafana", "Datadog", "CloudWatch", "Loki", "OpenTelemetry"] },
  { icon: GitBranch, title: "IaC & CI/CD", skills: ["Terraform", "Ansible", "GitHub Actions", "GitOps", "Jenkins", "Harness.io"] },
  { icon: DollarSign, title: "FinOps", skills: ["FOCUS Models", "Multi-Cloud Cost Gov.", "Spot / CUDs", "Right-Sizing", "Showback", "Tagging Policy"] },
  { icon: Terminal, title: "Scripting & Dev", skills: ["Python", "Bash", "PowerShell", "SQL", "Java Spring Boot", "Node.js"] },
  { icon: Database, title: "Databases", skills: ["PostgreSQL", "MySQL", "BigQuery", "Redis", "DragonflyDB", "DynamoDB"] },
  { icon: Shield, title: "Networking & Security", skills: ["VPC Design", "DNS", "Load Balancing", "Tailscale/WireGuard", "Cloudflare", "Firewalls"] },
  { icon: Server, title: "Linux & Sysadmin", skills: ["Ubuntu", "Debian", "RHEL", "Performance Tuning", "Log Analysis"] },
  { icon: AlertTriangle, title: "SRE Practices", skills: ["Incident Management", "On-Call Rotations", "Runbooks/SOPs", "Capacity Planning", "Post-Mortems"] },
  { icon: Cpu, title: "Edge / IoT", skills: ["NVIDIA Jetson", "Docker on Edge", "Caddy + MagicDNS", "Device Telemetry", "Jenkins Edge CI/CD"] },
];

const SkillsSection = memo(() => {
  return (
    <section className="py-20 px-6" id="skills">
      <div className="max-w-[1152px] mx-auto">
        <AnimateSection>
          <h2 className="text-3xl md:text-[32px] font-bold text-center text-white tracking-tight">
            Every skill set you need to ship reliable cloud
          </h2>
          <p className="text-base md:text-lg text-muted-foreground text-center mt-3">
            in <span className="text-primary font-semibold">10 specialized areas</span>
          </p>
        </AnimateSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {groups.map((g) => (
            <AnimateCard
              key={g.title}
              className="card-anime p-5 group cursor-default"
              style={{ minHeight: 120 }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "hsl(var(--primary) / 0.12)" }}
                >
                  <g.icon size={20} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-[18px] font-semibold text-white truncate">
                      {g.title}
                    </h3>
                    <ChevronRight
                      size={16}
                      className="text-muted-foreground shrink-0 transition-transform group-hover:translate-x-0.5"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {g.skills.length} learning paths
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {g.skills.slice(0, 4).map((s) => (
                      <span key={s} className="badge-docker">{s}</span>
                    ))}
                    {g.skills.length > 4 && (
                      <span className="badge-docker">+{g.skills.length - 4}</span>
                    )}
                  </div>
                </div>
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
