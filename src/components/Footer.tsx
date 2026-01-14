export const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-foreground text-background">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="font-heading text-xl font-semibold">Architexte</span>
            <span className="text-background/40">|</span>
            <span className="font-body text-sm text-background/60">Noe Tessmann</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 font-body text-sm text-background/60">
            <a href="#" className="hover:text-background transition-colors">
              Impressum
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Datenschutz
            </a>
          </div>

          {/* Copyright */}
          <p className="font-body text-sm text-background/40">
            © {new Date().getFullYear()} Architexte
          </p>
        </div>
      </div>
    </footer>
  );
};
