import { memo } from "react";
import { Award, GraduationCap, Languages } from "lucide-react";

const CertsSection = memo(() => {
  return (
    <section className="py-24 px-6" id="certs">
      <div className="container max-w-4xl">
        <p className="font-display text-xs tracking-[0.3em] text-k8s-blue text-glow-k8s mb-2 uppercase">
          資格 // Certifications
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-14 neon-underline inline-block pb-2">
          ACHIEVEMENTS UNLOCKED
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="card-anime p-6" style={{ willChange: "transform, opacity" }}>
            <div className="p-2 rounded-md bg-docker-blue/10 border border-docker-blue/30 w-fit mb-4">
              <GraduationCap size={20} className="text-docker-blue" />
            </div>
            <h4 className="font-display text-xs tracking-wider text-foreground uppercase mb-3">
              Education
            </h4>
            <p className="text-sm font-body text-card-foreground">B.Sc. Systems Engineering</p>
            <p className="text-xs font-body text-muted-foreground">UVEG, Mexico (2024)</p>
          </div>

          <div className="card-anime p-6" style={{ willChange: "transform, opacity" }}>
            <div className="p-2 rounded-md bg-k8s-blue/10 border border-k8s-blue/30 w-fit mb-4">
              <Award size={20} className="text-k8s-blue" />
            </div>
            <h4 className="font-display text-xs tracking-wider text-foreground uppercase mb-3">
              Certifications
            </h4>
            <ul className="space-y-1.5 text-sm font-body text-card-foreground">
              <li className="flex gap-2">
                <span className="text-docker-blue">✦</span> Oracle Cloud Foundations
              </li>
              <li className="flex gap-2">
                <span className="text-docker-blue">✦</span> IBM Cloud & DevOps Essentials
              </li>
              <li className="flex gap-2">
                <span className="text-docker-blue">✦</span> Linux Essentials (LPI)
              </li>
              <li className="flex gap-2">
                <span className="text-docker-blue">✦</span> Cisco Cyber Threat Management
              </li>
              <li className="flex gap-2">
                <span className="text-docker-blue">✦</span> SMCE – Scrum Master
              </li>
            </ul>
          </div>

          <div className="card-anime p-6" style={{ willChange: "transform, opacity" }}>
            <div className="p-2 rounded-md bg-docker-blue/10 border border-docker-blue/30 w-fit mb-4">
              <Languages size={20} className="text-docker-blue" />
            </div>
            <h4 className="font-display text-xs tracking-wider text-foreground uppercase mb-3">
              Languages
            </h4>
            <ul className="space-y-1.5 text-sm font-body text-card-foreground">
              <li className="flex gap-2">
                <span className="text-docker-blue">★</span> Spanish – Native
              </li>
              <li className="flex gap-2">
                <span className="text-k8s-blue">★</span> English – Advanced / Professional
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
});

CertsSection.displayName = "CertsSection";

export default CertsSection;
