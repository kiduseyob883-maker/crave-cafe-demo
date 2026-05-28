import { Instagram } from "lucide-react";
import logo from "@/assets/crave-logo.png";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M21 8.5a7.5 7.5 0 0 1-4.5-1.5v8.25a6.25 6.25 0 1 1-6.25-6.25c.26 0 .51.02.75.05v3.18a3.13 3.13 0 1 0 2.25 3v-12h3.05A4.5 4.5 0 0 0 21 5.45V8.5z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-espresso text-cream/80 pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-10 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5c842] shadow-elegant overflow-hidden">
              <img src={logo} alt="Crave Cafe & Restaurant" className="h-full w-full object-cover" />
            </span>
            <span className="font-display text-2xl font-semibold text-cream" style={{ fontFamily: "var(--font-display)" }}>Crave</span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
            Coffee, comfort and cuisine on Gabon Street. A modern cafe & restaurant
            built around the people who make it home.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.instagram.com/craveaddis/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Crave on Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 hover:bg-gradient-accent hover:text-espresso hover:border-transparent transition-all"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.tiktok.com/@craveaddiscafe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Crave on TikTok"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 hover:bg-gradient-accent hover:text-espresso hover:border-transparent transition-all"
            >
              <TikTokIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-cream text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {["Home", "Menu", "About", "Gallery", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-caramel transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-cream text-sm uppercase tracking-wider">Visit</h4>
          <ul className="mt-5 space-y-3 text-sm text-cream/70">
            <li>Gabon Street</li>
            <li>Addis Ababa, Ethiopia</li>
            <li>090 536 3336</li>
            <li>Daily · 7 AM – 10 PM</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-10 mt-14 pt-6 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-cream/50">
        <p>© {new Date().getFullYear()} Crave Cafe & Restaurant. All rights reserved.</p>
        <p>developed by kidus</p>
      </div>
    </footer>
  );
}