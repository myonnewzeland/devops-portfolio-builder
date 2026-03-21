import { memo } from "react";

const iconMap: Record<string, string> = {
  GCP: "GC",
  Kubernetes: "K8",
  OpenShift: "OS",
  Docker: "DK",
  Prometheus: "PM",
  Grafana: "GF",
  Datadog: "DD",
  OpenTelemetry: "OT",
  Terraform: "TF",
  Ansible: "AN",
  "GitHub Actions": "GH",
  Jenkins: "JK",
  "Tailscale/WireGuard": "TS",
  Cloudflare: "CF",
  "Bunny CDN": "BN",
  Fastly: "FY",
  Python: "PY",
  Bash: "SH",
  "Node.js": "JS",
  "Java Spring Boot": "JB",
  PostgreSQL: "PG",
  MySQL: "MY",
  BigQuery: "BQ",
  Redis: "RD",
  Ubuntu: "UB",
  Debian: "DB",
  RHEL: "RH",
  Linux: "LX",
  "NVIDIA Jetson": "NV",
  "Docker on Edge": "DK",
  "Caddy + MagicDNS": "CD",
  "Jenkins Edge CI/CD": "JK",
};

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

const TechIcon = memo(({ name, className = "", size = 12 }: TechIconProps) => {
  const label = iconMap[name] ?? name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2).toUpperCase();

  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-center justify-center rounded-full border border-current/25 bg-current/10 font-mono text-[9px] font-bold leading-none ${className}`}
      style={{ width: size + 8, height: size + 8 }}
    >
      {label}
    </span>
  );
});

TechIcon.displayName = "TechIcon";

export default TechIcon;
