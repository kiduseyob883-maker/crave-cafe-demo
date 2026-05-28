import heroImg from "@/assets/hero-cafe.jpg";
import { ArrowRight, UtensilsCrossed } from "lucide-react";
import logo from "@/assets/crave-logo.png";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Warm interior of Crave Cafe & Restaurant"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover scale-105 animate-fade-in-slow"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />

      <div className="relative container mx-auto px-6 lg:px-10 pt-32 pb-20">
        <div className="max-w-3xl animate-fade-up">
          <div className="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-3xl bg-[#f5c842] shadow-elegant ring-1 ring-cream/20 overflow-hidden animate-float">
            <img src={logo} alt="Crave Cafe & Restaurant logo" className="h-full w-full object-cover" />
          </div>
          <br />
          <span className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/10 backdrop-blur px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-cream">
            <span className="h-1.5 w-1.5 rounded-full bg-caramel animate-pulse" />
            Gabon St · Addis Ababa
          </span>
          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold text-cream text-balance leading-[1.05]">
            Welcome to <span className="text-caramel italic">Crave</span> Cafe & Restaurant
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/80 leading-relaxed">
            Specialty coffee, soulful food and a calm, modern atmosphere — crafted for moments
            worth savouring, from sunrise espresso to late-night dessert.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#menu"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-accent px-7 py-3.5 text-sm font-semibold text-espresso shadow-elegant hover:-translate-y-0.5 transition-all"
            >
              <UtensilsCrossed className="h-4 w-4" />
              View Menu
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-cream/40 bg-cream/5 backdrop-blur px-7 py-3.5 text-sm font-semibold text-cream hover:bg-cream hover:text-espresso transition-all"
            >
              Order Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { k: "4.3", l: "Google Rating" },
              { k: "185+", l: "Reviews" },
              { k: "10am–6pm", l: "Popular Hours" },
            ].map((s) => (
              <div key={s.l} className="border-l border-cream/20 pl-4">
                <div className="text-2xl font-display font-semibold text-cream" style={{ fontFamily: "var(--font-display)" }}>{s.k}</div>
                <div className="text-xs uppercase tracking-wider text-cream/60 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 text-xs tracking-[0.3em] uppercase animate-float">
        Scroll
      </div>
    </section>
  );
}