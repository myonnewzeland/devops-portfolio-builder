import { memo, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

interface DeferredSectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  id?: string;
  className?: string;
  minHeight?: CSSProperties["minHeight"];
  rootMargin?: string;
}

const DeferredSection = memo(
  ({
    children,
    fallback = null,
    id,
    className = "",
    minHeight = 320,
    rootMargin = "280px 0px",
  }: DeferredSectionProps) => {
    const [shouldRender, setShouldRender] = useState(false);
    const placeholderRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
      if (shouldRender) {
        return;
      }

      const element = placeholderRef.current;
      if (!element) {
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) {
            return;
          }

          setShouldRender(true);
          observer.disconnect();
        },
        {
          rootMargin,
          threshold: 0.01,
        },
      );

      observer.observe(element);

      return () => {
        observer.disconnect();
      };
    }, [rootMargin, shouldRender]);

    if (shouldRender) {
      return <>{children}</>;
    }

    return (
      <section
        ref={placeholderRef}
        id={id}
        aria-hidden="true"
        className={className}
        style={{ minHeight }}
      >
        {fallback}
      </section>
    );
  },
);

DeferredSection.displayName = "DeferredSection";

export default DeferredSection;
