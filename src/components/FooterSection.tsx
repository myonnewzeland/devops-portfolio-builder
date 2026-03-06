import { memo } from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const FooterSection = memo(() => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-docker-blue to-transparent" />

      <div className="container max-w-4xl">
        {/* Nav links — internal linking for SEO */}
        <nav aria-label="Footer navigation" className="mb-8">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              { href: "#skills", label: "Skills" },
              { href: "#projects", label: "Projects" },
              { href: "#experience", label: "Experience" },
              { href: "#about", label: "About" },
              { href: "#certs", label: "Certifications" },
            ].map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="font-display text-[10px] tracking-[0.15em] uppercase text-muted-foreground hover:text-docker-blue transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social links */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="mailto:yamoshi454@gmail.com"
            aria-label="Email Luis Fernando"
            className="p-2 rounded-md text-muted-foreground hover:text-docker-blue hover:bg-docker-blue/10 transition-all"
          >
            <Mail size={18} aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/luis-fernando-navarrete-estrada-151878183"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Luis Fernando on LinkedIn"
            className="p-2 rounded-md text-muted-foreground hover:text-k8s-blue hover:bg-k8s-blue/10 transition-all"
          >
            <Linkedin size={18} aria-hidden="true" />
          </a>
          <a
            href="https://github.com/myonnewzeland"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Luis Fernando on GitHub"
            className="p-2 rounded-md text-muted-foreground hover:text-docker-blue hover:bg-docker-blue/10 transition-all"
          >
            <Github size={18} aria-hidden="true" />
          </a>
        </div>

        {/* Identity & copyright */}
        <address className="not-italic text-center">
          <p className="font-display text-xs tracking-[0.2em] text-k8s-blue">
            Luis Fernando Navarrete Estrada © {year}
          </p>
          <p className="font-body text-xs text-muted-foreground mt-1">
            SRE &amp; DevOps Engineer · Auckland, NZ{" "}
            <span className="text-docker-blue animate-blink">_</span>
          </p>
        </address>
      </div>
    </footer>
  );
});

FooterSection.displayName = "FooterSection";

export default FooterSection;
