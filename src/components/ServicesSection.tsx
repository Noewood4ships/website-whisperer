import { Palette, Users, FileText } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Kulturelle Texte",
    description: "Ausstellungstexte, Kataloge, Vermittlungstexte für Museen und Kulturinstitutionen",
  },
  {
    icon: Users,
    title: "Politische & Soziale Kommunikation",
    description: "EBR-Dokumente, Betriebsratskommunikation, Gewerkschaftsmaterialien, EU-Verwaltungstexte",
  },
  {
    icon: FileText,
    title: "Fachtexte mit Anspruch",
    description: "Technische Dokumentation (Automotive, Maschinenbau), wissenschaftsnahe Publikationen",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-accent mb-4">
            Schwerpunkte
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Meine Leistungen
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Jede Übersetzung entsteht individuell und orientiert sich an Textsorte, Zielpublikum und Kontext.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-background rounded-sm shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-secondary rounded-sm mb-6 group-hover:bg-accent/10 transition-colors">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Language pairs detail */}
        <div className="mt-16 p-8 bg-background rounded-sm shadow-soft">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Hauptarbeitssprachen
              </h3>
              <ul className="space-y-2 font-body text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Französisch → Deutsch
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Englisch → Deutsch
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Weitere Sprachen
              </h3>
              <ul className="space-y-2 font-body text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent/50 rounded-full" />
                  Niederländisch → Deutsch
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent/50 rounded-full" />
                  Portugiesisch → Deutsch
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
