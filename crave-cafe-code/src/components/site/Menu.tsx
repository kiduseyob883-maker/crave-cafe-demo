import coffee from "@/assets/menu-coffee.jpg";
import burger from "@/assets/menu-burger.jpg";
import pizza from "@/assets/menu-pizza.jpg";
import dessert from "@/assets/menu-dessert.jpg";
import ethiopian from "@/assets/menu-ethiopian.jpg";

type Item = { img: string; cat: string; name: string; desc: string; price: string; popular?: boolean };

const items: Item[] = [
  // Starters / Salads
  { img: ethiopian, cat: "Starters", name: "Crave Special Salad", desc: "Lettuce, feta, fresh tomato, cucumber, avocado, grilled chicken.", price: "Birr 696" },
  { img: ethiopian, cat: "Starters", name: "Chicken Salad", desc: "Lettuce, fresh tomato, cucumber, avocado & chicken.", price: "Birr 696", popular: true },
  { img: ethiopian, cat: "Starters", name: "Tuna Salad", desc: "Lettuce, fresh tomato, cucumber, avocado & tuna.", price: "Birr 657" },
  { img: ethiopian, cat: "Starters", name: "Caprese Salad", desc: "Fresh tomato with mozzarella cheese.", price: "Birr 696" },
  { img: ethiopian, cat: "Starters", name: "Green Salad", desc: "Lettuce, tomato, cucumber, avocado with house dressing.", price: "Birr 558" },

  // Wrap & Pizza
  { img: burger, cat: "Wrap & Pizza", name: "Chicken Wrap", desc: "Chicken wrap with caramelized onion, melted cheese & french fries.", price: "Birr 671", popular: true },
  { img: burger, cat: "Wrap & Pizza", name: "Philly Steak Wrap", desc: "Sliced beef with caramelized onion, melted cheese & french fries.", price: "Birr 671" },
  { img: burger, cat: "Wrap & Pizza", name: "Tuna Wrap", desc: "Tuna chunks with caramelized onion & melted cheese.", price: "Birr 660" },
  { img: burger, cat: "Wrap & Pizza", name: "Vegetable Wrap", desc: "Seasonal vegetables with house spice & french fries.", price: "Birr 499" },
  { img: pizza, cat: "Wrap & Pizza", name: "Pizza Margherita", desc: "Tomato & mixed cheese.", price: "Birr 745" },
  { img: pizza, cat: "Wrap & Pizza", name: "Crave Special Pizza", desc: "Beef & chicken with margarita sauce & mixed cheese.", price: "Birr 835" },
  { img: pizza, cat: "Wrap & Pizza", name: "Chicken Pizza", desc: "Chicken margarita sauce & mixed cheese.", price: "Birr 766" },
  { img: pizza, cat: "Wrap & Pizza", name: "Tuna Pizza w/ Cheese", desc: "Tuna with margarita sauce & mixed cheese.", price: "Birr 766", popular: true },

  // Pasta
  { img: ethiopian, cat: "Pasta", name: "Tagliatelle Chicken Pesto", desc: "Freshly made pasta, chicken & cream sauce.", price: "Birr 846", popular: true },
  { img: ethiopian, cat: "Pasta", name: "Lasagna", desc: "Layers of pasta, beef with cream cheese & meat sauce.", price: "Birr 894" },
  { img: ethiopian, cat: "Pasta", name: "Beef Ravioli", desc: "Heart-shaped pasta stuffed with meat in cream sauce.", price: "Birr 804" },
  { img: ethiopian, cat: "Pasta", name: "Fettuccine Alfredo", desc: "Tagliatelle served with cream, chicken & parmesan.", price: "Birr 820" },
  { img: ethiopian, cat: "Pasta", name: "Spaghetti Bolognese", desc: "Spaghetti or penne with our meat & cream sauce.", price: "Birr 705" },
  { img: ethiopian, cat: "Pasta", name: "Penne Arrabbiata", desc: "Spaghetti or penne with tomato & hot spice sauce.", price: "Birr 646" },

  // Main Dish
  { img: burger, cat: "Main Dish", name: "Pepper Steak", desc: "Pepper steak with cream, potatoes or vegetables.", price: "Birr 981", popular: true },
  { img: burger, cat: "Main Dish", name: "Atlanta Filet Mignonet", desc: "Sliced beef with house gravy, mashed potatoes or veg.", price: "Birr 1,102" },
  { img: burger, cat: "Main Dish", name: "Roasted Lamb", desc: "Three pieces of roasted lamb served with vegetables & rice.", price: "Birr 1,095" },
  { img: burger, cat: "Main Dish", name: "Chicken Kebab", desc: "Cubed chicken marinated with yoghurt & house spices, skewered with veg.", price: "Birr 781" },
  { img: burger, cat: "Main Dish", name: "Beef Kebab", desc: "Cubed beef skewered with vegetables, served with rice & vegetables.", price: "Birr 781" },
  { img: burger, cat: "Main Dish", name: "Grilled Fish", desc: "Baked marinated fish topped with green pepper.", price: "Birr 1,190" },
  { img: burger, cat: "Main Dish", name: "Grilled Chicken w/ Pesto", desc: "Grilled chicken served with spaghetti pesto.", price: "Birr 896" },

  // Breakfast
  { img: dessert, cat: "Breakfast", name: "Chicken & Waffles", desc: "Served with hot syrup.", price: "Birr 799" },
  { img: dessert, cat: "Breakfast", name: "Omelette w/ Cheese", desc: "Classic cheese omelette.", price: "Birr 567" },
  { img: dessert, cat: "Breakfast", name: "Classic French Toast", desc: "Served with hot syrup.", price: "Birr 530" },
  { img: dessert, cat: "Breakfast", name: "Sunny Side Up Steak", desc: "Sunny side eggs with steak.", price: "Birr 725" },
  { img: dessert, cat: "Breakfast", name: "Special Ful Plate", desc: "Traditional ful, generous plate.", price: "Birr 500" },
  { img: dessert, cat: "Breakfast", name: "Mulawha w/ Fresh Honey", desc: "Flaky mulawha served with fresh honey.", price: "Birr 443" },

  // Drinks
  { img: coffee, cat: "Drinks", name: "Macchiato", desc: "Locally roasted espresso topped with velvety steamed milk.", price: "Birr 180", popular: true },
  { img: coffee, cat: "Drinks", name: "Tea / Coffee", desc: "Freshly brewed black tea or single-origin coffee.", price: "Birr 120" },
];

const categories = ["All", "Starters", "Wrap & Pizza", "Pasta", "Main Dish", "Breakfast", "Drinks"];

import { useState } from "react";

export function MenuSection() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <section id="menu" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-caramel font-medium">Featured Menu</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold text-foreground text-balance">
            Crafted with intention,<br /> served with care.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            From the first sip of espresso to the last bite of dessert — every dish is made
            with the finest local ingredients.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === c
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item, i) => (
            <article
              key={item.name + i}
              className="group rounded-2xl overflow-hidden bg-card shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 rounded-full bg-background/85 backdrop-blur px-3 py-1 text-xs font-medium text-foreground">
                  {item.cat}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {item.name}
                    {item.popular && (
                      <span className="ml-2 align-middle inline-block rounded-full bg-gradient-accent text-[10px] uppercase tracking-wider px-2 py-0.5 text-primary-foreground font-semibold">
                        Popular
                      </span>
                    )}
                  </h3>
                  <span className="shrink-0 text-caramel font-semibold">{item.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}