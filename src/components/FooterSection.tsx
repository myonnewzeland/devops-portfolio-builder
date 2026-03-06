import { memo } from "react";

const FooterSection = memo(() => {
  return (
    <footer className="py-10 px-6 border-t border-border relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-docker-blue to-transparent" />
      <div className="container max-w-4xl text-center">
        <p className="font-display text-xs tracking-[0.2em] text-k8s-blue">
          Luis Fernando Navarrete Estrada © {new Date().getFullYear()}
        </p>
        <p className="font-body text-xs text-muted-foreground mt-1">
          Built with reliability in mind{" "}
          <span className="text-docker-blue animate-blink">_</span>
        </p>
      </div>
    </footer>
  );
});

FooterSection.displayName = "FooterSection";

export default FooterSection;
