import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Selam T.",
    role: "Local Guide",
    text: "The macchiato is some of the best I've had in Addis. Cozy atmosphere and the staff actually remember your order.",
    rating: 5,
  },
  {
    name: "Daniel M.",
    role: "Regular",
    text: "Their wood-fired pizza is unreal. We come almost every weekend — feels like a little escape from the city.",
    rating: 5,
  },
  {
    name: "Hanna A.",
    role: "Visitor",
    text: "Loved the Ethiopian platter and the molten chocolate cake. Beautiful interior, perfect for working or catching up.",
    rating: 4,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-espresso text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, var(--caramel), transparent 40%), radial-gradient(circle at 80% 80%, var(--mocha), transparent 50%)" }} />
      <div className="container mx-auto px-6 lg:px-10 relative">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-caramel font-medium">Loved by guests</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold text-cream text-balance">
            Stories from our regulars.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="relative rounded-2xl border border-cream/10 bg-cream/[0.03] backdrop-blur p-8 hover:bg-cream/[0.06] transition-colors"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-caramel/40" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < r.rating ? "fill-caramel text-caramel" : "text-cream/20"}`}
                  />
                ))}
              </div>
              <p className="text-cream/85 leading-relaxed">"{r.text}"</p>
              <div className="mt-6 pt-6 border-t border-cream/10">
                <div className="font-semibold text-cream">{r.name}</div>
                <div className="text-xs uppercase tracking-wider text-cream/50 mt-1">{r.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}