import heroBg from "@/assets/hero-bg.jpg";
import { Mail, Linkedin, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

      <div className="relative z-10 container max-w-4xl text-center px-6 py-20">
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4 animate-fade-up">
          <span className="text-muted-foreground">$</span> whoami
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-body mb-4 text-glow animate-fade-up text-primary" style={{ animationDelay: "0.1s" }}>
          Luis Fernando
        </h1>
        <h2 className="text-xl md:text-2xl font-mono text-secondary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Site Reliability Engineer
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up leading-relaxed" style={{ animationDelay: "0.3s" }}>
          5+ años construyendo y operando sistemas distribuidos a gran escala para banca, energía y FMCG.
          Enfocado en observabilidad, automatización e ingeniería de confiabilidad.
        </p>

        <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a href="mailto:yamoshi454@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-md border border-border bg-card card-hover text-sm font-mono text-card-foreground hover:text-primary">
            <Mail size={16} /> Email
          </a>
          <a href="https://www.linkedin.com/in/luis-fernando-navarrete-estrada-151878183" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-md border border-border bg-card card-hover text-sm font-mono text-card-foreground hover:text-primary">
            <Linkedin size={16} /> LinkedIn
          </a>
          <span className="flex items-center gap-2 px-4 py-2 rounded-md border border-border bg-card text-sm font-mono text-muted-foreground">
            <MapPin size={16} /> Auckland, NZ
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
