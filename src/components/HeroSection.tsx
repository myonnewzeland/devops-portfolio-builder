import { memo } from "react";
import { Mail, Linkedin, MapPin, Download, Calendar } from "lucide-react";

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
      {/* Stronger overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />

      <div className="relative z-10 container max-w-5xl px-6 py-20">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Avatar */}
          <div className="shrink-0 animate-fade-up">
            <div className="relative animate-levitate">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-docker-blue avatar-glow-ring">
                <picture>
                  <source srcSet="/assets/avatar.webp" type="image/webp" />
                  <img
                    src="/assets/avatar.png"
                    alt="Luis Fernando — DevOps / SRE Engineer"
                    width={192}
                    height={192}
                    decoding="sync"
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="max-w-2xl">
            <p className="font-display text-xs tracking-[0.3em] text-k8s-blue text-glow-k8s mb-3 animate-fade-up uppercase">
              DevOps / SRE Engineer · Auckland, NZ
            </p>
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-display font-black mb-4 gradient-text animate-fade-up leading-tight"
              style={{ animationDelay: "0.1s" }}
            >
              Cloud, FinOps &amp; Observability
            </h1>
            <p
              className="text-base md:text-lg font-body text-muted-foreground max-w-xl mx-auto mb-3 animate-fade-up leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              5+ years building reliable, cost-optimised cloud platforms for
              Fortune 500 clients. I automate infrastructure, cut cloud spend
              by up to 50%, and keep systems running at 99.9%+ uptime.
            </p>
            <p
              className="text-xs font-body text-muted-foreground mb-6 animate-fade-up flex items-center justify-center gap-1.5"
              style={{ animationDelay: "0.25s" }}
            >
              <MapPin size={14} className="text-docker-blue" />
              Working Holiday Visa — full work rights until Mar 2027 · Open to sponsorship
            </p>

            {/* Primary CTAs */}
            <div
              className="flex flex-wrap justify-center gap-3 animate-fade-up mb-4"
              style={{ animationDelay: "0.3s" }}
            >
              <a
                href="/Luis_Fernando_CV.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-display text-sm tracking-wider uppercase
                  bg-[hsl(var(--docker-blue))] text-white hover:bg-[hsl(var(--docker-blue)/0.85)] transition-colors shadow-lg shadow-[hsl(var(--docker-blue)/0.25)]"
              >
                <Download size={16} /> Download CV
              </a>
              <a
                href="https://calendly.com/yamoshi454/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-display text-sm tracking-wider uppercase
                  border border-[hsl(var(--k8s-blue)/0.5)] bg-[hsl(var(--k8s-blue)/0.1)] text-[hsl(var(--k8s-blue))] hover:bg-[hsl(var(--k8s-blue)/0.2)] transition-colors"
              >
                <Calendar size={16} /> Book a 15-min Call
              </a>
            </div>

            {/* Secondary links */}
            <div
              className="flex flex-wrap justify-center gap-3 animate-fade-up"
              style={{ animationDelay: "0.35s" }}
            >
              <a
                href="mailto:yamoshi454@gmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-lg card-anime text-sm font-body text-card-foreground hover:text-docker-blue"
              >
                <Mail size={16} /> Email
              </a>
              <a
                href="https://www.linkedin.com/in/luis-fernando-navarrete-estrada-151878183"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg card-anime text-sm font-body text-card-foreground hover:text-k8s-blue"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
