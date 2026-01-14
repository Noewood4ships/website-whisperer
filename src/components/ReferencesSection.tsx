const references = [
  {
    category: "EU-Institutionen",
    clients: ["Europäische Kommission", "Europäischer Rat", "Europäisches Parlament (Brüssel)"],
  },
  {
    category: "Gewerkschaften",
    clients: ["industriAll Europe", "EGB", "EFFAT", "Europäische Betriebsräte"],
  },
  {
    category: "Kultur & Medien",
    clients: ["Grand Curtius Lüttich", "Opéra Royal de Wallonie", "Tour de France (A.S.O.)"],
  },
  {
    category: "Industrie & NGOs",
    clients: ["Automobilindustrie", "Technische Fachdokumentation", "Umwelt- und Bildungsprojekte"],
  },
];

export const ReferencesSection = () => {
  return (
    <section id="references" className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-accent mb-4">
            Vertrauen
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Referenzen
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Eine Auswahl meiner Auftraggeber aus Kultur, Politik und Wirtschaft
          </p>
        </div>

        {/* References grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {references.map((ref) => (
            <div
              key={ref.category}
              className="p-6 bg-background rounded-sm shadow-soft hover:shadow-card transition-all duration-300"
            >
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4 pb-3 border-b border-border">
                {ref.category}
              </h3>
              <ul className="space-y-2">
                {ref.clients.map((client) => (
                  <li
                    key={client}
                    className="font-body text-sm text-muted-foreground"
                  >
                    {client}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Testimonial or highlight */}
        <div className="mt-16 text-center p-12 bg-background rounded-sm shadow-soft">
          <blockquote className="font-heading text-2xl md:text-3xl text-foreground italic mb-6 max-w-3xl mx-auto">
            "Professionelle Übersetzungen mit kultureller Präzision – 
            für Partner, die Qualität schätzen."
          </blockquote>
          <cite className="font-body text-sm text-muted-foreground not-italic">
            — Architexte, Wien
          </cite>
        </div>
      </div>
    </section>
  );
};
