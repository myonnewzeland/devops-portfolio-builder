import { useEffect, useRef, type ReactNode } from "react";

/**
 * Intersection Observer hook for scroll-triggered animations
 * Replaces framer-motion to reduce bundle size by ~100KB
 */
function useIntersectionObserver(
  ref: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          // Once visible, stop observing (animation only triggers once)
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "-80px",
      ...options,
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);
}

export function AnimateSection({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useIntersectionObserver(ref);

  return (
    <div ref={ref} className={`animate-on-scroll ${className}`}>
      {children}
    </div>
  );
}

export function StaggerContainer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add is-visible to all children cards
            const cards = entry.target.querySelectorAll(".animate-card");
            cards.forEach((card) => {
              card.classList.add("is-visible");
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-60px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className={`stagger-container ${className}`}>
      {children}
    </div>
  );
}

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
    <div className={`animate-card ${className}`} style={style}>
      {children}
    </div>
  );
}
