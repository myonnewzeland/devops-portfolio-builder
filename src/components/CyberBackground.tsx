import { memo, useMemo } from "react";

// Stable particle data — generated once, never re-computed on re-render
const PARTICLE_COUNT = 16;

interface Particle {
  width: number;
  height: number;
  left: number;
  top: number;
  isDocker: boolean;
  delay: number;
  duration: number;
}

// Seeded pseudo-random so values are deterministic between SSR and client
function seededRandom(seed: number): number {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

const PARTICLES: Particle[] = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  width: seededRandom(i * 7) * 2.5 + 1,
  height: seededRandom(i * 7) * 2.5 + 1,
  left: seededRandom(i * 13) * 100,
  top: seededRandom(i * 17) * 100,
  isDocker: i % 2 === 0,
  delay: seededRandom(i * 3) * 8,
  duration: seededRandom(i * 5) * 6 + 6,
}));

const CyberBackground = memo(() => {
  // Memoize the particle elements so they never re-create DOM nodes
  const particles = useMemo(
    () =>
      PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute hidden rounded-full animate-float-particle md:block"
          style={{
            width: `${p.width}px`,
            height: `${p.height}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background: p.isDocker
              ? "hsl(var(--docker-blue) / 0.45)"
              : "hsl(var(--k8s-blue) / 0.35)",
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            // Promote each particle to its own compositor layer
            willChange: "transform, opacity",
          }}
        />
      )),
    []
  );

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
      // Isolate the background from layout/paint of the rest of the page
      style={{ contain: "strict" }}
    >
      {/* Circuit board pattern — opacity driven by --pattern-circuit-opacity CSS var */}
      <div className="absolute inset-0 circuit-pattern" />

      {/* Animated grid — very subtle */}
      <div className="absolute inset-0 cyber-grid opacity-[0.03]" />

      {/* Radial glow blobs — GPU-composited via will-change */}
      <div
        className="absolute top-0 left-1/4 hidden h-[600px] w-[600px] rounded-full animate-pulse-slow md:block"
        style={{
          background: "hsl(var(--docker-blue) / var(--glow-opacity, 0.05))",
          filter: "blur(120px)",
          willChange: "opacity, transform",
        }}
      />
      <div
        className="absolute bottom-1/4 right-0 hidden h-[500px] w-[500px] rounded-full animate-pulse-slow-delayed md:block"
        style={{
          background: "hsl(var(--k8s-blue) / var(--glow-opacity, 0.04))",
          filter: "blur(100px)",
          willChange: "opacity, transform",
        }}
      />
      <div
        className="absolute top-1/2 left-0 hidden h-[400px] w-[400px] rounded-full animate-pulse-slow md:block"
        style={{
          background: "hsl(var(--docker-blue) / var(--glow-opacity, 0.03))",
          filter: "blur(80px)",
          willChange: "opacity, transform",
        }}
      />

      {/* Floating particles — stable references, GPU layer per particle */}
      {particles}

      {/* Scan line — lightest possible touch */}
      <div className="absolute inset-0 scan-line" />
    </div>
  );
});

CyberBackground.displayName = "CyberBackground";

export default CyberBackground;
