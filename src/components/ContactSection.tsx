import { MapPin, Phone, Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - Contact info */}
          <div>
            <p className="font-body text-sm uppercase tracking-[0.2em] text-accent mb-4">
              Kontakt
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-6">
              Sprechen wir über
              <br />
              Ihr Projekt
            </h2>
            <p className="font-body text-primary-foreground/80 leading-relaxed mb-12">
              Für Anfragen, Angebote oder Fragen zu meinen Leistungen 
              stehe ich Ihnen gerne zur Verfügung.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary-foreground/10 rounded-sm">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-semibold mb-1">Adresse</h4>
                  <p className="font-body text-sm text-primary-foreground/70">
                    Friedmanngasse 22/22
                    <br />
                    A-1160 Wien
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary-foreground/10 rounded-sm">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-semibold mb-1">Telefon</h4>
                  <a
                    href="tel:+436803211373"
                    className="font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    +43 680 32 11 373
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary-foreground/10 rounded-sm">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-semibold mb-1">E-Mail</h4>
                  <a
                    href="mailto:architexte@gmail.com"
                    className="font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    architexte@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-primary-foreground/5 p-8 rounded-sm">
            <h3 className="font-heading text-xl font-semibold mb-6">
              Nachricht senden
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block font-body text-sm text-primary-foreground/70 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm font-body text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Ihr Name"
                />
              </div>
              <div>
                <label className="block font-body text-sm text-primary-foreground/70 mb-2">
                  E-Mail
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm font-body text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent transition-colors"
                  placeholder="ihre@email.com"
                />
              </div>
              <div>
                <label className="block font-body text-sm text-primary-foreground/70 mb-2">
                  Nachricht
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm font-body text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Ihre Nachricht..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-accent text-accent-foreground font-medium text-sm tracking-wide hover:bg-accent/90 transition-all rounded-sm"
              >
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
