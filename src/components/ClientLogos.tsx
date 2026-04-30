import { memo } from "react";

const clients = ["IBM", "Citi", "Banorte", "Santander", "Campari", "NextEra"];

const ClientLogos = memo(() => (
  <section className="py-16 px-6">
    <div className="max-w-[1152px] mx-auto text-center">
      <p className="text-2xl md:text-3xl font-bold text-white">
        <span className="text-primary">5+ years</span> trusted by global enterprises
        across banking, energy and SaaS.
      </p>
      <div className="mt-10 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-50">
        {clients.map((name) => (
          <span
            key={name}
            className="text-sm md:text-base font-bold tracking-widest uppercase text-white grayscale"
          >
            {name}
          </span>
        ))}
      </div>
      <a
        href="mailto:yamoshi454@gmail.com"
        className="mt-10 inline-flex items-center px-8 py-3 rounded-lg border bg-transparent text-primary text-sm font-semibold hover:bg-primary/5 transition-colors"
        style={{ borderColor: "hsl(var(--primary))" }}
      >
        Book a discovery call
      </a>
    </div>
  </section>
));

ClientLogos.displayName = "ClientLogos";
export default ClientLogos;
