import { memo } from "react";
import { AnimatedCounter } from "./AnimateOnScroll";

const stats = [
  { value: 5, suffix: "+", label: "Years experience" },
  { value: 50, suffix: "%", label: "Max cost savings" },
  { value: 99, suffix: "%", label: "Uptime SLA" },
  { value: 3, suffix: "+", label: "Cloud platforms" },
];

const HighlightsSection = memo(() => (
  <section className="py-12 px-6" id="highlights">
    <div className="max-w-[1152px] mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">
              <AnimatedCounter end={s.value} suffix={s.suffix} decimals={0} duration={1.6} />
            </div>
            <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
));

HighlightsSection.displayName = "HighlightsSection";
export default HighlightsSection;
