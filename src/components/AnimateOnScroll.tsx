import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * GSAP-powered scroll-triggered animations
 */

/** Fade + slide up when entering viewport — used for section headings */
export function AnimateSection({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (ctx) => {
          const { reduceMotion } = ctx.conditions as { reduceMotion: boolean };

          gsap.from(ref.current, {
            y: reduceMotion ? 0 : 36,
            autoAlpha: reduceMotion ? 1 : 0,
            duration: reduceMotion ? 0 : 0.75,
            ease: "power3.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 88%",
              toggleActions: "play none none none",
              once: true,
            },
          });
        }
      );

      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}

/**
 * Animated heading — splits text by words and staggers each word in
 * Wraps each word in a span; use on h1/h2/h3 text nodes
 */
export function AnimateHeading({
  children,
  as: Tag = "div",
  className = "",
}: {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "div" | "p";
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        { reduceMotion: "(prefers-reduced-motion: reduce)" },
        (ctx) => {
          const { reduceMotion } = ctx.conditions as { reduceMotion: boolean };
          if (!ref.current) return;
          const words = ref.current.querySelectorAll<HTMLElement>(".gsap-word");
          if (words.length === 0 || reduceMotion) return;

          gsap.from(words, {
            y: 24,
            autoAlpha: 0,
            duration: 0.5,
            ease: "power3.out",
            stagger: { each: 0.07, from: "start" },
            clearProps: "transform,opacity,visibility",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 90%",
              once: true,
            },
          });
        }
      );
      return () => mm.revert();
    },
    { scope: ref }
  );

  const words = children.split(" ");

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="gsap-word inline-block"
          style={{ willChange: "transform" }}
        >
          {word}
          {i < words.length - 1 ? "\u00a0" : ""}
        </span>
      ))}
    </Tag>
  );
}

/**
 * Stagger-batch container — animates children cards as a group
 * when the container enters the viewport, using ScrollTrigger.batch
 */
export function StaggerContainer({
  children,
  className = "",
  from = "start",
}: {
  children: ReactNode;
  className?: string;
  from?: "start" | "center" | "end" | "random";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (ctx) => {
          const { reduceMotion } = ctx.conditions as { reduceMotion: boolean };
          if (!ref.current) return;

          const cards = ref.current.querySelectorAll<HTMLElement>(".gsap-card");
          if (cards.length === 0) return;

          gsap.set(cards, { autoAlpha: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 32 });

          ScrollTrigger.batch(cards, {
            onEnter: (batch) => {
              gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                duration: reduceMotion ? 0 : 0.65,
                ease: "power3.out",
                stagger: { each: 0.1, from },
                overwrite: true,
                clearProps: "transform",
              });
            },
            start: "top 90%",
            once: true,
          });
        }
      );

      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/**
 * Individual card wrapper — must be a direct child of StaggerContainer
 */
export function AnimateCard({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`gsap-card ${className}`}
      style={{ willChange: "transform, opacity", ...style }}
    >
      {children}
    </div>
  );
}

export function AnimatedCounter({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
  className = "",
  decimals = 0,
}: {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  const format = (v: number) =>
    `${prefix}${decimals > 0 ? v.toFixed(decimals) : Math.round(v)}${suffix}`;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        { reduceMotion: "(prefers-reduced-motion: reduce)" },
        (ctx) => {
          const { reduceMotion } = ctx.conditions as { reduceMotion: boolean };
          if (!ref.current) return;

          gsap.set(ref.current, { textContent: format(0) });

          const obj = { val: 0 };
          gsap.to(obj, {
            val: end,
            duration: reduceMotion ? 0 : duration,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 90%",
              once: true,
            },
            onUpdate: () => {
              if (ref.current) ref.current.textContent = format(obj.val);
            },
            onComplete: () => {
              if (ref.current) ref.current.textContent = format(end);
            },
          });
        },
      );
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <span ref={ref} className={className}>
      {format(end)}
    </span>
  );
}

export function TextRevealMask({
  children,
  as: Tag = "div",
  className = "",
}: {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "div" | "p";
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        { reduceMotion: "(prefers-reduced-motion: reduce)" },
        (ctx) => {
          const { reduceMotion } = ctx.conditions as { reduceMotion: boolean };
          if (!ref.current || reduceMotion) return;

          gsap.from(ref.current, {
            clipPath: "inset(0 100% 0 0)",
            duration: 0.9,
            ease: "power3.inOut",
            clearProps: "clipPath",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 88%",
              once: true,
            },
          });
        },
      );
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
    >
      {children}
    </Tag>
  );
}
