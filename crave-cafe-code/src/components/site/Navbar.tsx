import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/crave-logo.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl shadow-soft border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5c842] shadow-soft ring-1 ring-espresso/10 overflow-hidden transition-transform group-hover:scale-105">
            <img src={logo} alt="Crave Cafe & Restaurant" className="h-full w-full object-cover" />
          </span>
          <span className={`font-display text-xl font-semibold tracking-tight hidden sm:inline ${scrolled ? "text-foreground" : "text-cream"}`} style={{ fontFamily: "var(--font-display)" }}>
            Crave
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium tracking-wide transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-caramel after:transition-all hover:after:w-full ${
                  scrolled ? "text-foreground hover:text-caramel" : "text-cream/90 hover:text-caramel"
                }`}
                style={{ color: undefined }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center justify-center rounded-full bg-gradient-accent px-5 py-2.5 text-sm font-medium text-espresso shadow-soft hover:shadow-elegant transition-all hover:-translate-y-0.5"
        >
          Reserve a Table
        </a>

        <button
          className={`md:hidden p-2 rounded-full ${scrolled ? "text-foreground" : "text-cream"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-fade-up">
          <ul className="flex flex-col px-6 py-6 gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-foreground hover:text-caramel transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex w-full justify-center rounded-full bg-gradient-accent px-5 py-3 text-sm font-medium text-espresso"
              >
                Reserve a Table
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}