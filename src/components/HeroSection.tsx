import { memo } from "react";
import { Mail, Linkedin, MapPin } from "lucide-react";

const HeroSection = memo(() => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <picture>
        <source
          type="image/avif"
          srcSet="/assets/hero-bg-400w.avif 400w, /assets/hero-bg-800w.avif 800w, /assets/hero-bg-1200w.avif 1200w, /assets/hero-bg-1600w.avif 1600w"
          sizes="100vw"
        />
        <source
          type="image/webp"
          srcSet="/assets/hero-bg-400w.webp 400w, /assets/hero-bg-800w.webp 800w, /assets/hero-bg-1200w.webp 1200w, /assets/hero-bg-1600w.webp 1600w"
          sizes="100vw"
        />
        <source
          type="image/jpeg"
          srcSet="/assets/hero-bg-400w.jpg 400w, /assets/hero-bg-800w.jpg 800w, /assets/hero-bg-1200w.jpg 1200w, /assets/hero-bg-1600w.jpg 1600w"
          sizes="100vw"
        />
        <img
          src="/assets/hero-bg-1200w.jpg"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          width="1600"
          height="900"
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
                  <source
                    type="image/avif"
                    srcSet="/assets/avatar-96.avif 96w, /assets/avatar-192.avif 192w, /assets/avatar-384.avif 384w"
                    sizes="(max-width: 768px) 160px, 192px"
                  />
                  <source
                    type="image/webp"
                    srcSet="/assets/avatar-96.webp 96w, /assets/avatar-192.webp 192w, /assets/avatar-384.webp 384w"
                    sizes="(max-width: 768px) 160px, 192px"
                  />
                  <source
                    type="image/png"
                    srcSet="/assets/avatar-96.png 96w, /assets/avatar-192.png 192w, /assets/avatar-384.png 384w"
                    sizes="(max-width: 768px) 160px, 192px"
                  />
                  <img
                    src="/assets/avatar-192.png"
                    alt="Luis Fernando — DevOps / SRE Engineer"
                    width="192"
                    height="192"
                    decoding="async"
                    loading="lazy"
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
              className="text-xs font-body text-muted-foreground mb-6 animate-fade-up"
              style={{ animationDelay: "0.25s" }}
            >
              <span className="inline-flex items-center justify-center gap-1.5">
                <MapPin size={13} className="text-docker-blue shrink-0" aria-hidden="true" />
                Auckland, NZ · Working Holiday Visa (full rights until Mar 2027)
              </span>
              <span className="block mt-0.5 text-center">
                Open to sponsorship
              </span>
            </p>

            {/* Contact links */}

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
