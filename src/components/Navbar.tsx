import { useState, useEffect, useCallback } from "react";

const navLinks = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certs", label: "Certifications" },
];

// Section IDs map to their lazy-loaded module paths for prefetch
const sectionModules: Record<string, () => Promise<unknown>> = {
  "#skills": () => import("@/components/SkillsSection"),
  "#projects": () => import("@/components/ProjectsSection"),
  "#experience": () => import("@/components/ExperienceSection"),
  "#certs": () => import("@/components/CertsSection"),
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // useCallback prevents re-creating handler on every render
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Prefetch the section's chunk when user hovers a nav link
  const handleMouseEnter = useCallback((href: string) => {
    const prefetch = sectionModules[href];
    if (prefetch) prefetch();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-sm tracking-wider text-docker-blue text-glow-docker">
          LF
        </a>
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onMouseEnter={() => handleMouseEnter(link.href)}
              className="relative font-display text-[10px] tracking-[0.15em] uppercase text-muted-foreground hover:text-docker-blue transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-docker-blue after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
