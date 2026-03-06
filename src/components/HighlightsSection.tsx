import { memo } from "react";
import { StaggerContainer, AnimateCard } from "./AnimateOnScroll";
import { Cloud, DollarSign, Activity, MapPin } from "lucide-react";

const highlights = [
  {
    icon: Cloud,
    text: "5+ years in DevOps & Cloud — Finance, Energy & Enterprise",
    color: "docker" as const,
  },
  {
    icon: DollarSign,
    text: "Up to 35–50% cloud cost savings through FinOps governance",
    color: "k8s" as const,
  },
  {
    icon: Activity,
    text: "AWS, Azure, Kubernetes, Terraform, Prometheus/Grafana, CI/CD",
    color: "docker" as const,
  },
  {
    icon: MapPin,
    text: "Auckland, NZ — open to sponsorship, remote & hybrid roles",
    color: "k8s" as const,
  },
];

const HighlightsSection = memo(() => (
  <section className="py-12 px-6" id="highlights">
    <div className="container max-w-4xl">
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {highlights.map((h) => (
          <AnimateCard
            key={h.text}
            className="card-anime px-5 py-4 flex items-start gap-3"
          >
            <div
              className={`p-2 rounded-md shrink-0 ${
                h.color === "docker"
                  ? "bg-docker-blue/10 border border-docker-blue/30"
                  : "bg-k8s-blue/10 border border-k8s-blue/30"
              }`}
            >
              <h.icon
                size={18}
                className={h.color === "docker" ? "text-docker-blue" : "text-k8s-blue"}
              />
            </div>
            <p className="text-sm font-body text-card-foreground leading-relaxed">
              {h.text}
            </p>
          </AnimateCard>
        ))}
      </StaggerContainer>
    </div>
  </section>
));

HighlightsSection.displayName = "HighlightsSection";

export default HighlightsSection;
