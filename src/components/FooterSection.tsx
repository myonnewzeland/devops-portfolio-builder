import { memo } from "react";
import { Mail, Linkedin, Github, Heart } from "lucide-react";

const columns = [
  {
    title: "Skills",
    links: [
      { href: "#skills", label: "Cloud Platforms" },
      { href: "#skills", label: "Observability & SRE" },
      { href: "#skills", label: "IaC & CI/CD" },
      { href: "#skills", label: "FinOps" },
      { href: "#skills", label: "Networking & Security" },
    ],
  },
  {
    title: "Work",
    links: [
      { href: "#projects", label: "Projects" },
      { href: "#experience", label: "Experience" },
      { href: "#services", label: "Services" },
      { href: "#certs", label: "Credentials" },
    ],
  },
  {
    title: "Connect",
    links: [
      { href: "mailto:yamoshi454@gmail.com", label: "Email" },
      {
        href: "https://www.linkedin.com/in/luis-fernando-navarrete-estrada-151878183",
        label: "LinkedIn",
      },
      { href: "https://github.com/myonnewzeland", label: "GitHub" },
      { href: "https://git.luam.us.kg/yamoshi454", label: "Self-hosted Git" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#about", label: "About" },
      { href: "#about", label: "NZ Visa Status" },
      { href: "mailto:yamoshi454@gmail.com", label: "Contact" },
    ],
  },
];

const FooterSection = memo(() => {
  const year = new Date().getFullYear();
  return (
    <footer
      className="px-6 pt-16 pb-8"
      style={{ background: "hsl(0 0% 6%)" }}
    >
      <div className="max-w-[1152px] mx-auto">
        {/* Top: brand + columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="inline-flex items-center gap-2">
              <span className="platzi-p" aria-hidden="true">L</span>
              <span className="text-white font-bold text-lg">Luam</span>
            </a>
            <p className="text-sm text-muted-foreground mt-4 max-w-[220px]">
              SRE & DevOps engineer based in Auckland, New Zealand.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold text-sm mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted-foreground hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="my-10 h-px"
          style={{ background: "hsl(0 0% 100% / 0.08)" }}
        />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground inline-flex items-center gap-1.5">
            From <span className="text-white">Auckland</span> with{" "}
            <Heart size={14} className="text-primary fill-primary" /> for the world.
          </p>

          <p className="text-xs text-muted-foreground">
            © {year} Luis Fernando Navarrete Estrada
          </p>

          <div className="flex items-center gap-2">
            <a
              href="mailto:yamoshi454@gmail.com"
              aria-label="Email"
              className="p-2 rounded-md text-muted-foreground hover:text-white hover:bg-white/5 transition-all"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/luis-fernando-navarrete-estrada-151878183"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-md text-muted-foreground hover:text-white hover:bg-white/5 transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/myonnewzeland"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-md text-muted-foreground hover:text-white hover:bg-white/5 transition-all"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});

FooterSection.displayName = "FooterSection";
export default FooterSection;
