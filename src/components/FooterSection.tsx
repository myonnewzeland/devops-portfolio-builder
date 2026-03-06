const FooterSection = () => {
  return (
    <footer className="py-10 px-6 border-t border-border">
      <div className="container max-w-4xl text-center">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-primary">▸</span> Luis Fernando Navarrete Estrada © {new Date().getFullYear()}
        </p>
        <p className="font-mono text-xs text-muted-foreground mt-1">
          Built with reliability in mind <span className="animate-blink">_</span>
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
