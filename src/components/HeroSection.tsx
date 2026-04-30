import { memo } from "react";
import { Search, Mail, Linkedin } from "lucide-react";

const HeroSection = memo(() => {
  return (
    <section
      className="relative pt-32 pb-32 px-6 overflow-hidden"
      style={{ minHeight: 500 }}
      aria-label="Introduction"
    >
      {/* Radial green glow — Platzi signature */}
      <div className="absolute inset-0 platzi-hero-glow pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-[1152px] mx-auto text-center">
        {/* Avatar — small, centered above headline */}
        <div className="flex justify-center mb-8">
          <div
            className="w-20 h-20 rounded-full overflow-hidden border"
            style={{ borderColor: "hsl(0 0% 100% / 0.08)" }}
          >
            <picture>
              <source
                type="image/avif"
                srcSet="/assets/avatar-96.avif 96w, /assets/avatar-192.avif 192w"
                sizes="80px"
              />
              <source
                type="image/webp"
                srcSet="/assets/avatar-96.webp 96w, /assets/avatar-192.webp 192w"
                sizes="80px"
              />
              <img
                src="/assets/avatar-192.png"
                alt="Luis Fernando — DevOps / SRE Engineer"
                width={80}
                height={80}
                decoding="async"
                loading="eager"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
        </div>

        {/* Headline — Platzi style */}
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight text-white max-w-4xl mx-auto">
          The reliability engineer
          <br />
          <span className="text-primary">your NZ cloud needs</span>
        </h1>

        {/* Supporting paragraph */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed">
          5+ years running reliable, cost-efficient cloud platforms for banks,
          energy and SaaS — now bringing real SRE, FinOps and automation to
          New Zealand teams.
        </p>

        {/* Centered label */}
        <p className="text-base md:text-lg text-white mt-12 mb-4">
          ¿Qué quieres construir?
        </p>

        {/* Big search input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = "#projects";
          }}
          className="max-w-[520px] mx-auto"
          role="search"
        >
          <label className="relative block">
            <span className="sr-only">Explore portfolio</span>
            <input
              type="search"
              placeholder="Cloud, FinOps, Kubernetes, Terraform…"
              className="w-full h-14 pl-5 pr-14 rounded-xl bg-card text-white placeholder:text-muted-foreground border outline-none transition-colors focus:border-primary text-base"
              style={{ borderColor: "hsl(0 0% 100% / 0.08)" }}
            />
            <button
              type="submit"
              aria-label="Search"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg text-muted-foreground hover:text-primary transition-colors"
            >
              <Search size={20} />
            </button>
          </label>
        </form>

        {/* Two underlined links — Platzi style */}
        <div className="mt-6 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm">
          <a
            href="#projects"
            className="text-white underline underline-offset-4 hover:text-primary transition-colors"
          >
            Browse all projects.
          </a>
          <a
            href="#services"
            className="text-white underline underline-offset-4 hover:text-primary transition-colors"
          >
            Or hire me for your team.
          </a>
        </div>

        {/* Secondary CTAs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:yamoshi454@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-semibold transition-colors"
          >
            <Mail size={16} /> Get in touch
          </a>
          <a
            href="https://www.linkedin.com/in/luis-fernando-navarrete-estrada-151878183"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border bg-transparent text-white text-sm font-semibold hover:bg-white/5 transition-colors"
            style={{ borderColor: "hsl(0 0% 100% / 0.08)" }}
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
