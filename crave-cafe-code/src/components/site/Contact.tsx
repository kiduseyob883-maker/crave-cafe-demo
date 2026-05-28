import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-caramel font-medium">Visit Us</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold text-foreground text-balance">
            Come find your favourite seat.
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: MapPin, title: "Location", lines: ["Gabon Street", "Addis Ababa, Ethiopia"] },
              { icon: Phone, title: "Phone", lines: ["090 536 3336"] },
              { icon: Clock, title: "Opening Hours", lines: ["Mon–Sun · 7:00 AM – 10:00 PM", "Popular: 10 AM – 6 PM"] },
            ].map((c) => (
              <div key={c.title} className="flex gap-4 rounded-2xl bg-card p-6 shadow-soft border border-border hover:shadow-elegant transition-shadow">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-accent">
                  <c.icon className="h-5 w-5 text-espresso" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">{c.title}</h3>
                  {c.lines.map((l) => (
                    <p key={l} className="text-sm text-muted-foreground mt-1">{l}</p>
                  ))}
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/251905363336"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-accent text-espresso font-semibold px-6 py-4 shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-elegant border border-border min-h-[420px]">
            <iframe
              title="Crave Cafe location"
              src="https://www.google.com/maps?q=Gabon+Street,+Addis+Ababa&output=embed"
              width="100%"
              height="100%"
              style={{ minHeight: 420, border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}