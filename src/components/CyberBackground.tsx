import { memo } from "react";
import techBg from "@/assets/tech-bg.jpg";

const CyberBackground = memo(() => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Tech background image */}
      <img
        src={techBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40 dark:opacity-60"
        loading="eager"
        aria-hidden="true"
      />
      {/* Animated grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-[0.03]" />

      {/* Radial glow spots */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[hsl(var(--docker-blue)/0.06)] blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[hsl(var(--k8s-blue)/0.05)] blur-[100px] animate-pulse-slow-delayed" />

      {/* Floating particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float-particle"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 2 === 0
              ? "hsl(var(--docker-blue) / 0.5)"
              : "hsl(var(--k8s-blue) / 0.4)",
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${Math.random() * 6 + 6}s`,
          }}
        />
      ))}

      {/* Scan line effect */}
      <div className="absolute inset-0 scan-line opacity-[0.02]" />
    </div>
  );
});

CyberBackground.displayName = "CyberBackground";

export default CyberBackground;
