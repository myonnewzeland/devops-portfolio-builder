import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

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
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        handleScroll();
        frameId = 0;
      });
    };

    handleScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [handleScroll]);

  const handleMouseEnter = useCallback((href: string) => {
    const prefetch = sectionModules[href];
    if (prefetch) prefetch();
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <nav
      aria-label="Primary navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="container max-w-6xl px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          aria-label="Luis Fernando — home"
          className="flex items-center gap-2 group"
        >
          {/* Hexagon monogram — Docker-inspired geometry */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:scale-110"
          >
            {/* Hex border with glow */}
            <polygon
              points="16,2 28,9 28,23 16,30 4,23 4,9"
              fill="none"
              stroke="hsl(210 93% 54%)"
              strokeWidth="1.5"
              className="drop-shadow-[0_0_6px_hsl(210_93%_54%/0.8)]"
            />
            {/* Inner hex fill — subtle */}
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
          {/* Wordmark — hidden on very small screens */}
          <span className="hidden sm:block font-display text-xs tracking-[0.2em] text-docker-blue text-glow-docker uppercase">
            Luis Fernando
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onMouseEnter={() => handleMouseEnter(link.href)}
              onFocus={() => handleMouseEnter(link.href)}
              aria-current={activeSection === link.id ? "true" : undefined}
              className={`relative font-display text-[10px] tracking-[0.15em] uppercase transition-colors duration-300
                after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-docker-blue after:transition-transform after:duration-300 ${activeSection === link.id
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-b border-border px-6 pb-4 space-y-1 animate-fade-up">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onMouseEnter={() => handleMouseEnter(link.href)}
              onClick={closeMobile}
              className={`block py-3 font-display text-xs tracking-[0.15em] uppercase transition-colors ${activeSection === link.id
                ? "text-docker-blue"
                : "text-muted-foreground hover:text-docker-blue"
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
