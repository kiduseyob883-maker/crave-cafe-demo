import gallery from "@/assets/gallery-1.jpg";
import { Leaf, Heart, Award } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/40">
      <div className="container mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-accent rounded-3xl opacity-30 blur-2xl" />
          <img
            src={gallery}
            alt="Inside Crave Cafe"
            loading="lazy"
            width={900}
            height={1200}
            className="relative rounded-3xl shadow-elegant aspect-[4/5] object-cover w-full"
          />
          <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-elegant max-w-[200px] hidden sm:block">
            <div className="text-3xl font-display font-semibold text-primary" style={{ fontFamily: "var(--font-display)" }}>Since</div>
            <div className="text-4xl font-display font-bold text-caramel" style={{ fontFamily: "var(--font-display)" }}>2019</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Serving Addis</div>
          </div>
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-caramel font-medium">Our Story</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold text-foreground text-balance leading-tight">
            A neighbourhood corner that grew into a craving.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Crave was born from a simple idea — to create a space where coffee is taken seriously,
            food is made from scratch, and time slows down. Tucked along Gabon Street, we blend
            Italian comfort, Ethiopian heritage and the warmth of home.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Every bean is hand-selected, every dough rises slow, and every plate leaves the
            kitchen with intention.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {[
              { icon: Leaf, t: "Local Sourcing", d: "Ethiopian beans & fresh produce" },
              { icon: Heart, t: "Made with Care", d: "Slow food, slow living" },
              { icon: Award, t: "Loved by 185+", d: "4.3 stars on Google" },
            ].map((f) => (
              <div key={f.t}>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-accent shadow-soft">
                  <f.icon className="h-5 w-5 text-espresso" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{f.t}</h3>
                <p className="text-sm text-muted-foreground mt-1">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}