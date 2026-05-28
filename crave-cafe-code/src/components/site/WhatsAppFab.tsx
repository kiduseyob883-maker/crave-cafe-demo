import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/251905363336"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-4 shadow-elegant hover:scale-105 transition-transform animate-float"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline text-sm font-semibold">WhatsApp</span>
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping" />
        <span className="relative h-3 w-3 rounded-full bg-[#25D366] border-2 border-background" />
      </span>
    </a>
  );
}