import { Award, GraduationCap, Languages } from "lucide-react";

const CertsSection = () => {
  return (
    <section className="py-24 px-6" id="certs">
      <div className="container max-w-4xl">
        <p className="font-display text-xs tracking-[0.3em] text-neon-cyan text-glow-cyan mb-2 uppercase">
          資格 // Certifications
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-14 neon-underline inline-block pb-2">
          ACHIEVEMENTS UNLOCKED
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="card-anime p-6">
            <div className="p-2 rounded-md bg-neon-pink/10 border border-neon-pink/30 w-fit mb-4">
              <GraduationCap size={20} className="text-neon-pink" />
            </div>
            <h4 className="font-display text-xs tracking-wider text-foreground uppercase mb-3">Education</h4>
            <p className="text-sm font-body text-card-foreground">B.Sc. Systems Engineering</p>
            <p className="text-xs font-body text-muted-foreground">UVEG, Mexico (2024)</p>
          </div>

          <div className="card-anime p-6">
            <div className="p-2 rounded-md bg-neon-cyan/10 border border-neon-cyan/30 w-fit mb-4">
              <Award size={20} className="text-neon-cyan" />
            </div>
            <h4 className="font-display text-xs tracking-wider text-foreground uppercase mb-3">Certifications</h4>
            <ul className="space-y-1.5 text-sm font-body text-card-foreground">
              <li className="flex gap-2"><span className="text-neon-cyan">✦</span> Oracle Cloud Foundations</li>
              <li className="flex gap-2"><span className="text-neon-cyan">✦</span> IBM Cloud & DevOps</li>
              <li className="flex gap-2"><span className="text-neon-cyan">✦</span> Linux Essentials (LPI)</li>
              <li className="flex gap-2"><span className="text-neon-cyan">✦</span> SMCE – Scrum Master</li>
            </ul>
          </div>

          <div className="card-anime p-6">
            <div className="p-2 rounded-md bg-neon-purple/10 border border-neon-purple/30 w-fit mb-4">
              <Languages size={20} className="text-neon-purple" />
            </div>
            <h4 className="font-display text-xs tracking-wider text-foreground uppercase mb-3">Languages</h4>
            <ul className="space-y-1.5 text-sm font-body text-card-foreground">
              <li className="flex gap-2"><span className="text-neon-pink">★</span> Spanish – Native</li>
              <li className="flex gap-2"><span className="text-neon-cyan">★</span> English – Advanced / Professional</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertsSection;
