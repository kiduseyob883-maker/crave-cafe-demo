import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { MenuSection } from "@/components/site/Menu";
import { About } from "@/components/site/About";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Crave Cafe & Restaurant — Addis Ababa" },
      { name: "description", content: "Specialty coffee, gourmet burgers, wood-fired pizza, desserts and Ethiopian dishes on Gabon St, Addis Ababa." },
      { property: "og:title", content: "Crave Cafe & Restaurant" },
      { property: "og:description", content: "A modern cafe & restaurant on Gabon Street, Addis Ababa." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <About />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
