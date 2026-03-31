import { useState, useEffect, useCallback, useRef } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#about", label: "About", id: "about" },
];

const sectionModules: Record<string, () => Promise<unknown>> = {
  "#skills": () => import("@/components/SkillsSection"),
  "#projects": () => import("@/components/ProjectsSection"),
  "#experience": () => import("@/components/ExperienceSection"),
  "#about": () => import("@/components/AboutSection"),
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);
  const wordmarkRef = useRef<HTMLSpanElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
    const sections = navLinks.map((l) => l.id);
    let current = "";
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) current = id;
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    let frameId = 0;

    const onScroll = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(() => {
        handleScroll();
        frameId = 0;
      });
    };

    handleScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [handleScroll]);

  /* ── Navbar entrance animation ── */
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(logoRef.current, {
          y: -20,
          autoAlpha: 0,
          scale: 0.85,
          duration: 0.55,
          delay: 0.1,
          ease: "back.out(1.8)",
        });

        tl.from(
          wordmarkRef.current,
          { x: -10, autoAlpha: 0, duration: 0.4 },
          "-=0.3"
        );

        if (linksRef.current) {
          const links =
            linksRef.current.querySelectorAll<HTMLElement>("a, button");
          tl.from(
            links,
            {
              y: -14,
              autoAlpha: 0,
              duration: 0.4,
              stagger: { each: 0.07 },
              ease: "power2.out",
              clearProps: "transform",
            },
            "-=0.25"
          );
        }
      });

      return () => mm.revert();
    },
    { scope: navRef }
  );

  /* ── Scroll progress bar (monitoring metric style) ── */
  useGSAP(
    () => {
      gsap.to(progressRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });
    },
    { scope: navRef },
  );

  /* ── Mobile menu open/close with GSAP ── */
  useEffect(() => {
    const el = mobileMenuRef.current;
    if (!el) return;

    if (mobileOpen) {
      // Animate in
      gsap.set(el, { autoAlpha: 1, height: "auto" });
      const items = el.querySelectorAll<HTMLElement>("a");
      gsap.from(el, {
        height: 0,
        duration: 0.25,
        ease: "power2.out",
        clearProps: "height",
      });
      gsap.from(items, {
        y: -10,
        autoAlpha: 0,
        duration: 0.3,
        stagger: { each: 0.06, from: "start" },
        ease: "power2.out",
        clearProps: "transform",
      });
    } else {
      // Animate out
      gsap.to(el, {
        height: 0,
        autoAlpha: 0,
        duration: 0.2,
        ease: "power2.in",
        clearProps: "height",
      });
    }
  }, [mobileOpen]);

  const handleMouseEnter = useCallback((href: string) => {
    const prefetch = sectionModules[href];
    if (prefetch) prefetch();
  }, []);

  /* ── Nav link hover micro-animation ── */
  const { contextSafe } = useGSAP({ scope: navRef });

  const handleLinkMouseEnter = contextSafe(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      gsap.to(e.currentTarget, {
        y: -2,
        scaleX: 1.04,
        duration: 0.18,
        ease: "power2.out",
        overwrite: "auto",
      });
    },
  );
  const handleLinkMouseLeave = contextSafe(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      gsap.to(e.currentTarget, {
        y: 0,
        scaleX: 1,
        duration: 0.2,
        ease: "power2.inOut",
        overwrite: "auto",
      });
    },
  );

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <nav
      ref={navRef}
      aria-label="Primary navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Scroll progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-border/30 overflow-hidden">
        <div
          ref={progressRef}
          className="h-full origin-left"
          style={{
            transform: "scaleX(0)",
            background: "linear-gradient(90deg, hsl(var(--docker-blue)), hsl(var(--k8s-blue)))",
            boxShadow: "0 0 8px hsl(var(--docker-blue) / 0.6), 0 0 20px hsl(var(--k8s-blue) / 0.3)",
          }}
        />
      </div>
      <div className="container max-w-6xl px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          aria-label="Luis Fernando — home"
          className="flex items-center gap-2 group"
        >
          {/* Hexagon monogram */}
          <svg
            ref={logoRef}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:scale-110"
          >
            <polygon
              points="16,2 28,9 28,23 16,30 4,23 4,9"
              fill="none"
              stroke="hsl(210 93% 54%)"
              strokeWidth="1.5"
              className="drop-shadow-[0_0_6px_hsl(210_93%_54%/0.8)]"
            />
            <polygon
              points="16,5 25.5,10.5 25.5,21.5 16,27 6.5,21.5 6.5,10.5"
              fill="hsl(210 93% 54% / 0.08)"
            />
            <path
              d="M12 10.5V21.5H18"
              stroke="hsl(210 93% 54%)"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 21.5V10.5H22"
              stroke="hsl(210 93% 54%)"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 15.5H21"
              stroke="hsl(210 93% 54%)"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          <span
            ref={wordmarkRef}
            className="hidden sm:block font-display text-xs tracking-[0.2em] text-docker-blue text-glow-docker uppercase"
          >
            Luis Fernando
          </span>
        </a>

        {/* Desktop links */}
        <div ref={linksRef} className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onMouseEnter={(e) => {
                handleMouseEnter(link.href);
                handleLinkMouseEnter(e);
              }}
              onMouseLeave={handleLinkMouseLeave}
              onFocus={() => handleMouseEnter(link.href)}
              aria-current={activeSection === link.id ? "true" : undefined}
              style={{ willChange: "transform" }}
              className={`relative font-display text-[10px] tracking-[0.15em] uppercase transition-colors duration-300
                after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-docker-blue after:transition-transform after:duration-300 ${
                  activeSection === link.id
                    ? "text-docker-blue after:scale-x-100 after:origin-left"
                    : "text-muted-foreground hover:text-docker-blue after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left"
                }`}
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="p-2 rounded-md text-muted-foreground hover:text-docker-blue transition-colors focus:outline-none focus:ring-2 focus:ring-[hsl(var(--docker-blue)/0.5)]"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu — always mounted, animated in/out by GSAP */}
      <div
        ref={mobileMenuRef}
        className="md:hidden bg-background/98 backdrop-blur-md border-b border-border px-6 pb-4 space-y-1 overflow-hidden"
        style={{ height: 0, visibility: "hidden" }}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onMouseEnter={() => handleMouseEnter(link.href)}
            onClick={closeMobile}
            className={`block py-3 font-display text-xs tracking-[0.15em] uppercase transition-colors ${
              activeSection === link.id
                ? "text-docker-blue"
                : "text-muted-foreground hover:text-docker-blue"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
