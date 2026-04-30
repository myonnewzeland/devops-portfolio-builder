import { useState, useEffect, useCallback } from "react";
import { Menu, X, Search } from "lucide-react";

const navLinks = [
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#services", label: "Services", id: "services" },
  { href: "#about", label: "About", id: "about" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    let current = "";
    for (const { id } of navLinks) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 120) current = id;
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        handleScroll();
        raf = 0;
      });
    };
    handleScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [handleScroll]);

  const close = useCallback(() => setMobileOpen(false), []);

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed top-0 left-0 right-0 z-50 bg-background border-b"
      style={{
        height: 64,
        borderBottomColor: "hsl(0 0% 100% / 0.08)",
      }}
    >
      <div className="h-16 max-w-[1152px] mx-auto px-6 flex items-center gap-6">
        {/* Brand */}
        <a href="#" aria-label="Home" className="flex items-center gap-2 shrink-0">
          <span className="platzi-p" aria-hidden="true">L</span>
          <span className="hidden sm:block text-white font-bold text-[20px] tracking-tight">
            Luam
          </span>
        </a>

        {/* Center search */}
        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <label className="relative w-full block">
            <span className="sr-only">Search</span>
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="search"
              placeholder="¿Qué quieres aprender?"
              className="w-full h-10 pl-9 pr-3 rounded-xl bg-card text-sm text-white placeholder:text-muted-foreground border outline-none transition-colors focus:border-primary"
              style={{ borderColor: "hsl(0 0% 100% / 0.08)" }}
            />
          </label>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-5 ml-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={activeSection === link.id ? "true" : undefined}
              className={`text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? "text-primary"
                  : "text-white/90 hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:yamoshi454@gmail.com"
            className="ml-2 inline-flex items-center px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Acceder
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden ml-auto p-2 rounded-md text-white hover:bg-white/5 transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden bg-background border-t px-6 py-4 space-y-1"
          style={{ borderTopColor: "hsl(0 0% 100% / 0.08)" }}
        >
          <label className="relative block mb-3">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              type="search"
              placeholder="¿Qué quieres aprender?"
              className="w-full h-10 pl-9 pr-3 rounded-xl bg-card text-sm text-white placeholder:text-muted-foreground border outline-none focus:border-primary"
              style={{ borderColor: "hsl(0 0% 100% / 0.08)" }}
            />
          </label>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className={`block py-2.5 text-sm font-medium ${
                activeSection === link.id
                  ? "text-primary"
                  : "text-white/90 hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:yamoshi454@gmail.com"
            onClick={close}
            className="mt-2 inline-flex items-center px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold"
          >
            Acceder
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
