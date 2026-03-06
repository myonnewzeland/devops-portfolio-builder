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
} from "react-icons/si";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  Kubernetes: SiKubernetes,
  Docker: SiDocker,
  Terraform: SiTerraform,
  Ansible: SiAnsible,
  "GitHub Actions": SiGithubactions,
  Jenkins: SiJenkins,
  Prometheus: SiPrometheus,
  Grafana: SiGrafana,
  Datadog: SiDatadog,
  Python: SiPython,
  Bash: SiGnubash,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Redis: SiRedis,
  Cloudflare: SiCloudflare,
  Ubuntu: SiUbuntu,
  Debian: SiDebian,
  RHEL: SiRedhat,
  Linux: SiLinux,
  "Node.js": SiNodedotjs,
  "Java Spring Boot": SiSpringboot,
  "NVIDIA Jetson": SiNvidia,
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
