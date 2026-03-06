import { memo } from "react";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

const HeroSection = memo(() => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <picture>
        <source srcSet="/assets/hero-bg.webp" type="image/webp" />
        <img
          src="/assets/hero-bg.jpg"
          alt=""
          aria-hidden="true"
          decoding="async"
          fetchPriority="low"
          className="absolute inset-0 w-full h-full object-cover object-center -z-10"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

      <div className="relative z-10 container max-w-5xl px-6 py-20">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="shrink-0 animate-fade-up">
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-docker-blue animate-pulse-glow">
                <picture>
                  <source srcSet="/assets/avatar.webp" type="image/webp" />
                  <img
                    src="/assets/avatar.png"
                    alt="SRE Robot Avatar"
                    width={224}
                    height={224}
                    decoding="sync"
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rank-s font-display text-[10px] tracking-wider">
                SRE LVL 99
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="font-display text-xs tracking-[0.3em] text-k8s-blue text-glow-k8s mb-3 animate-fade-up uppercase">
              DevOps Engineer | FinOps | Cloud Infrastructure
            </p>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-display font-black mb-3 gradient-text animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              LUIS FERNANDO
            </h1>
            <p
              className="text-lg md:text-xl font-body text-muted-foreground max-w-lg mb-2 animate-fade-up leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              DevOps Engineer & FinOps practitioner with 5+ years building
              large-scale distributed systems for Fortune 500 clients.
              Observability, automation, cost governance and reliability are my
              jutsu.
            </p>
            <p
              className="text-xs font-body text-muted-foreground mb-6 animate-fade-up"
              style={{ animationDelay: "0.25s" }}
            >
              Working Holiday Visa — full work rights until March 2027 |
              Available immediately
            </p>

            <div
              className="flex flex-wrap justify-center md:justify-start gap-3 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <a
                href="mailto:yamoshi454@gmail.com"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg card-anime text-sm font-body text-card-foreground hover:text-docker-blue"
              >
                <Mail size={16} /> Email
              </a>
              <a
                href="tel:+64275324147"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg card-anime text-sm font-body text-card-foreground hover:text-docker-blue"
              >
                <Phone size={16} /> +64 27 532 4147
              </a>
              <a
                href="https://www.linkedin.com/in/luis-fernando-navarrete-estrada-151878183"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg card-anime text-sm font-body text-card-foreground hover:text-k8s-blue"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <span className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-card text-sm font-body text-muted-foreground">
                <MapPin size={16} /> Auckland, NZ
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
