import { Link } from 'react-router-dom';
import { MapPin, MessageCircle } from 'lucide-react';
import { BRAND, buildWhatsAppUrl } from '../data/brand';

export default function Footer() {
  const whatsappHref = buildWhatsAppUrl(
    'Hello K & O Vacations, I would like to plan a luxury trip to Sri Lanka.',
  );

  return (
    <footer className="border-t border-[#D4AF37]/20 bg-[#050506] text-[#D6D0C4]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src={BRAND.logoSrc}
                alt="K & O Vacations logo"
                className="h-12 w-12 rounded-md border border-[#D4AF37]/35 object-cover"
              />
              <div>
                <span className="font-display block text-2xl font-semibold text-[#F6F3EC]">
                  {BRAND.name}
                </span>
                <span className="text-xs tracking-wider text-[#D4AF37]">
                  Sri Lanka Private Travel
                </span>
              </div>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#A9A295]">
              {BRAND.tagline} Tailored Sri Lankan journeys across ancient kingdoms, leopard
              wildernesses, misty central highlands, coastal sanctuaries, and northern heritage.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3">
            <h2 className="font-display text-lg font-semibold text-[#F6F3EC]">Explore</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/" className="transition-colors hover:text-[#D4AF37]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors hover:text-[#D4AF37]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/tours" className="transition-colors hover:text-[#D4AF37]">
                  Tours &amp; Destinations
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="transition-colors hover:text-[#D4AF37]">
                  Travel Gallery
                </Link>
              </li>
              <li>
                <Link to="/booking" className="transition-colors hover:text-[#D4AF37]">
                  Book Your Journey
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-[#D4AF37]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified Contact Column */}
          <div className="md:col-span-4">
            <h2 className="font-display text-lg font-semibold text-[#F6F3EC]">Direct Contact</h2>
            <div className="mt-4 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" aria-hidden="true" />
                <address className="not-italic leading-relaxed text-[#D6D0C4]">
                  {BRAND.address}
                </address>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 shrink-0 text-[#D4AF37]" aria-hidden="true" />
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tabular-nums font-medium text-[#F6F3EC] transition-colors hover:text-[#D4AF37]"
                >
                  WhatsApp: {BRAND.whatsappDisplay}
                </a>
              </div>
              <div className="pt-1">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-2 text-xs font-semibold text-[#E5C55B] transition-colors hover:bg-[#D4AF37] hover:text-[#09090B]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-[#8E877A] sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <p>Athurugiriya · Sri Lanka</p>
        </div>
      </div>
    </footer>
  );
}
