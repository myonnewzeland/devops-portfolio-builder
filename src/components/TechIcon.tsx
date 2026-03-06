import {
  SiKubernetes,
  SiDocker,
  SiTerraform,
  SiAnsible,
  SiGithubactions,
  SiJenkins,
  SiPrometheus,
  SiGrafana,
  SiDatadog,
  SiPython,
  SiGnubash,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiCloudflare,
  SiLinux,
  SiDebian,
  SiRedhat,
  SiUbuntu,
  SiNodedotjs,
  SiSpringboot,
  SiNvidia,
  SiGooglecloud,
  SiRedhatopenshift,
  SiOpentelemetry,
  SiTailscale,
  
  SiFastly,
  SiBunnydotnet,
  SiCaddy,
  SiGooglebigquery,
} from "react-icons/si";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  // Cloud & Distributed
  GCP: SiGooglecloud,
  Kubernetes: SiKubernetes,
  OpenShift: SiRedhatopenshift,
  Docker: SiDocker,

  // Observability
  Prometheus: SiPrometheus,
  Grafana: SiGrafana,
  Datadog: SiDatadog,
  OpenTelemetry: SiOpentelemetry,

  // IaC & CI/CD
  Terraform: SiTerraform,
  Ansible: SiAnsible,
  "GitHub Actions": SiGithubactions,
  Jenkins: SiJenkins,

  // Networking
  "Tailscale/WireGuard": SiTailscale,
  Cloudflare: SiCloudflare,
  "Bunny CDN": SiBunnydotnet,
  Fastly: SiFastly,

  // Scripting & Dev
  Python: SiPython,
  Bash: SiGnubash,
  "Node.js": SiNodedotjs,
  "Java Spring Boot": SiSpringboot,

  // Databases
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  BigQuery: SiGooglebigquery,
  Redis: SiRedis,

  // Linux & Sysadmin
  Ubuntu: SiUbuntu,
  Debian: SiDebian,
  RHEL: SiRedhat,
  Linux: SiLinux,

  // Edge / IoT
  "NVIDIA Jetson": SiNvidia,
  "Docker on Edge": SiDocker,
  "Caddy + MagicDNS": SiCaddy,
  "Jenkins Edge CI/CD": SiJenkins,
};

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

const TechIcon = ({ name, className = "", size = 12 }: TechIconProps) => {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon size={size} className={className} />;
};

export default TechIcon;
