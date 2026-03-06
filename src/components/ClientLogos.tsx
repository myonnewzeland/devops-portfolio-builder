import { memo } from "react";
import { AnimateSection, StaggerContainer, AnimateCard } from "./AnimateOnScroll";
import { Building2 } from "lucide-react";

const clients = [
  { name: "IBM" },
  { name: "Citi" },
  { name: "Banorte" },
  { name: "Santander" },
  { name: "Campari" },
  { name: "NextEra Energy" },
];

const ClientLogos = memo(() => (
  <section className="py-16 px-6">
    <div className="container max-w-4xl">
      <AnimateSection>
        <p className="font-display text-xs tracking-[0.3em] text-muted-foreground text-center mb-8 uppercase">
          Trusted by global enterprises
        </p>
      </AnimateSection>
      <StaggerContainer className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {clients.map((client) => (
          <AnimateCard
            key={client.name}
            className="flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300"
          >
            <Building2 size={28} className="text-muted-foreground" />
            <span className="font-display text-[10px] tracking-wider text-muted-foreground uppercase">
              {client.name}
            </span>
          </AnimateCard>
        ))}
      </StaggerContainer>
    </div>
  </section>
));

ClientLogos.displayName = "ClientLogos";

export default ClientLogos;
