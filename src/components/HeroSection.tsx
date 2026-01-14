import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="container mx-auto max-w-5xl text-center">
        {/* Elegant intro */}
        <p className="font-body text-sm uppercase tracking-[0.3em] text-accent mb-8 animate-fade-in">
          Professionelle Übersetzungen seit 1999
        </p>

        {/* Main heading */}
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-[1.1] mb-6 animate-fade-in-up">
          Noe Tessmann
        </h1>

        {/* Subtitle */}
        <p className="font-heading text-2xl md:text-3xl text-muted-foreground italic mb-8 animate-fade-in-up animation-delay-100">
          Übersetzer · Transkreation · Copywriting
        </p>

        {/* Language pairs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up animation-delay-200">
          {["Französisch", "Englisch", "Niederländisch", "Portugiesisch"].map((lang, index) => (
            <span
              key={lang}
              className="inline-flex items-center px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-sm"
            >
              {lang}
              <span className="mx-2 text-accent">→</span>
              Deutsch
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-in-up animation-delay-300">
          Präzise Übersetzungen für Kultur, Politik und Technik – 
          mit über 25 Jahren Erfahrung für Museen, EU-Institutionen und internationale Unternehmen.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-medium text-sm tracking-wide hover:bg-primary/90 transition-all shadow-soft hover:shadow-card"
          >
            Kontakt aufnehmen
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-medium text-sm tracking-wide hover:bg-secondary transition-all"
          >
            Leistungen entdecken
            <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
