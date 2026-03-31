import { memo, useRef } from "react";
import { AnimateCard, StaggerContainer, AnimatedCounter, TextRevealMask } from "./AnimateOnScroll";
import { Cloud, DollarSign, Activity, MapPin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 5, suffix: "+", label: "Years Experience", color: "docker" as const, decimals: 0 },
  { value: 50, suffix: "%", label: "Max Cost Savings", color: "k8s" as const, decimals: 0 },
  { value: 98, suffix: "%", label: "Uptime SLA", color: "docker" as const, decimals: 0 },
  { value: 3, suffix: "+", label: "Cloud Platforms", color: "k8s" as const, decimals: 0 },
];

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

const HighlightsSection = memo(() => {
  const sectionRef = useRef<HTMLElement>(null);

  /* ── Icon pulse when section enters viewport ── */
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const icons = sectionRef.current?.querySelectorAll<HTMLElement>(".highlight-icon");
        if (!icons || icons.length === 0) return;

        ScrollTrigger.batch(icons, {
          onEnter: (batch) => {
            gsap.from(batch, {
              scale: 0,
              autoAlpha: 0,
              rotation: -30,
              duration: 0.5,
              ease: "back.out(2)",
              stagger: { each: 0.1 },
              overwrite: true,
            });
          },
          start: "top 90%",
          once: true,
        });
      });
      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-12 px-6" id="highlights">
      <div className="container max-w-4xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div
                className={`text-3xl md:text-4xl font-display font-black ${
                  s.color === "docker" ? "text-docker-blue" : "text-k8s-blue"
                }`}
              >
                <AnimatedCounter end={s.value} suffix={s.suffix} decimals={s.decimals} duration={1.8} />
              </div>
              <p className="text-[10px] font-body text-muted-foreground mt-1 tracking-wider uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <TextRevealMask as="h2" className="text-lg md:text-xl font-display font-bold gradient-text mb-6 text-center">
          Key Highlights
        </TextRevealMask>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((h) => (
            <AnimateCard
              key={h.text}
              className="card-anime px-5 py-4 flex items-start gap-3"
            >
              <div
                className={`p-2 rounded-md shrink-0 highlight-icon ${
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
  );
});

HighlightsSection.displayName = "HighlightsSection";

export default HighlightsSection;
