import { Clock, Award, Globe, CheckCircle } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "25 Jahre Erfahrung",
    description: "Verlässlicher Partner in Österreich, Frankreich, Belgien und Brüssel",
  },
  {
    icon: Award,
    title: "Muttersprache Deutsch",
    description: "Höchste Qualität durch Übersetzung in die Zielsprache",
  },
  {
    icon: Globe,
    title: "Kulturelle Präzision",
    description: "Verständnis für institutionelle und sozialpolitische Kontexte",
  },
  {
    icon: CheckCircle,
    title: "Termintreue",
    description: "Verlässlich auch bei komplexen Projekten",
  },
];

export const WhySection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <p className="font-body text-sm uppercase tracking-[0.2em] text-accent mb-4">
              Warum Architexte?
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Präzision trifft
              <br />
              <span className="text-gradient">kulturelles Verständnis</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Als spezialisierter Übersetzer arbeite ich seit 25 Jahren für Museen, 
              EU-Institutionen, Gewerkschaften, NGOs und Industrieunternehmen. 
              Jeder Text verdient eine individuelle Herangehensweise.
            </p>

            {/* Reasons grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-secondary rounded-sm">
                    <reason.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-semibold text-foreground mb-1">
                      {reason.title}
                    </h4>
                    <p className="font-body text-sm text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className="aspect-[4/5] bg-secondary rounded-sm overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="font-heading text-8xl font-bold text-accent/20">25+</span>
                  <p className="font-heading text-xl text-muted-foreground mt-4">
                    Jahre Erfahrung
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-accent/30 rounded-sm" />
          </div>
        </div>
      </div>
    </section>
  );
};
