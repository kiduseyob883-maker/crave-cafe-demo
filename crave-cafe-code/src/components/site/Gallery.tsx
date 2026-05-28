import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import hero from "@/assets/hero-cafe.jpg";
import pizza from "@/assets/menu-pizza.jpg";

const images = [
  { src: g2, alt: "Barista pouring espresso", span: "md:col-span-2 md:row-span-1" },
  { src: g1, alt: "Cafe interior with plants", span: "md:row-span-2" },
  { src: pizza, alt: "Wood-fired pizza", span: "" },
  { src: g3, alt: "Coffee and croissants", span: "" },
  { src: hero, alt: "Espresso bar", span: "md:col-span-2" },
  { src: g4, alt: "Chef plating a dish", span: "md:row-span-2" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-caramel font-medium">Gallery</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-semibold text-foreground text-balance">
              A taste of the space.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Step inside Crave — sun-soaked mornings, golden-hour espresso, late-night warmth.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-3 gap-4 md:gap-5 auto-rows-[180px] md:auto-rows-[220px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group shadow-soft ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}