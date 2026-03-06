import { memo } from "react";
import { AnimateSection, StaggerContainer, AnimateCard } from "./AnimateOnScroll";
import { Landmark, Server } from "lucide-react";

const clients = [
  { name: "IBM", icon: Server },
  { name: "Citi", icon: Landmark },
  { name: "Banorte", icon: Landmark },
  { name: "Santander", icon: Landmark },
];

const ClientLogos = memo(() => (
  <section className="py-16 px-6">
    <div className="container max-w-4xl">
      <AnimateSection>
        <p className="font-display text-xs tracking-[0.3em] text-muted-foreground text-center mb-8 uppercase">
          Trusted by global enterprises
        </p>
      </AnimateSection>
      <StaggerContainer className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
        {clients.map((client) => (
          <AnimateCard
            key={client.name}
            className="flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            <client.icon size={32} className="text-muted-foreground" />
            <span className="font-display text-[11px] font-bold tracking-widest text-muted-foreground uppercase">
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
