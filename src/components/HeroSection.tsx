import heroBg from "@/assets/hero-bg.jpg";
import avatar from "@/assets/avatar.png";
import { Mail, Linkedin, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

      <div className="relative z-10 container max-w-5xl px-6 py-20">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Avatar */}
          <div className="shrink-0 animate-fade-up">
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-neon-pink animate-pulse-glow">
                <img src={avatar} alt="Luis Fernando - Anime Avatar" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 anime-badge-pink font-display text-[10px] tracking-wider">
                SRE LVL 99
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="text-center md:text-left">
            <p className="font-display text-xs tracking-[0.3em] text-neon-cyan text-glow-cyan mb-3 animate-fade-up uppercase">
              Site Reliability Engineer
            </p>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-display font-black mb-3 gradient-text animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              LUIS FERNANDO
            </h1>
            <p
              className="text-lg md:text-xl font-body text-muted-foreground max-w-lg mb-8 animate-fade-up leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              5+ years building large-scale distributed systems. 
              Observability, automation and reliability are my jutsu.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <a
                href="mailto:yamoshi454@gmail.com"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg card-anime text-sm font-body text-card-foreground hover:text-neon-pink"
              >
                <Mail size={16} /> Email
              </a>
              <a
                href="https://www.linkedin.com/in/luis-fernando-navarrete-estrada-151878183"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg card-anime text-sm font-body text-card-foreground hover:text-neon-cyan"
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
};

export default HeroSection;
