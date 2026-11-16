import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/brand';

export default function FloatingWhatsApp() {
  const href = buildWhatsAppUrl(
    'Hello K & O Vacations, I would like to inquire about planning a tour in Sri Lanka.',
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with K & O Vacations on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 inline-flex h-12 items-center gap-2 rounded-full border border-[#D4AF37]/50 bg-[#111114]/95 px-4 text-sm font-semibold text-[#F6F3EC] shadow-lg shadow-black/50 backdrop-blur-md transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#09090B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
    >
      <MessageCircle className="h-5 w-5 shrink-0 text-[#D4AF37] group-hover:text-[#09090B]" aria-hidden="true" />
      <span className="hidden whitespace-nowrap sm:inline">WhatsApp Us</span>
    </a>
  );
}
