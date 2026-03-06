import { Award, GraduationCap, Languages } from "lucide-react";

const CertsSection = () => {
  return (
    <section className="py-20 px-6" id="certs">
      <div className="container max-w-4xl">
        <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-2">
          <span className="text-muted-foreground">$</span> ls certifications/
        </h2>
        <h3 className="text-3xl font-bold text-foreground mb-12">Educación & Certificaciones</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg border border-border bg-card card-hover">
            <GraduationCap size={20} className="text-primary mb-3" />
            <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Educación</h4>
            <p className="text-sm text-card-foreground">B.Sc. Ingeniería en Sistemas</p>
            <p className="text-xs text-muted-foreground">UVEG, México (2024)</p>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card card-hover">
            <Award size={20} className="text-primary mb-3" />
            <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Certificaciones</h4>
            <ul className="space-y-1 text-sm text-card-foreground">
              <li>Oracle Cloud Foundations</li>
              <li>IBM Cloud & DevOps Essentials</li>
              <li>Linux Essentials (LPI)</li>
              <li>SMCE – Scrum Master</li>
            </ul>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card card-hover">
            <Languages size={20} className="text-primary mb-3" />
            <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Idiomas</h4>
            <ul className="space-y-1 text-sm text-card-foreground">
              <li>Español – Nativo</li>
              <li>Inglés – Avanzado / Profesional</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertsSection;
