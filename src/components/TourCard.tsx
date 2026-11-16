import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import type { TourPackage } from '../types/travel';
import { buildTourWhatsAppMessage, buildWhatsAppUrl } from '../data/brand';
import ResilientImage from './ResilientImage';

interface TourCardProps {
  tour: TourPackage;
}

export default function TourCard({ tour }: TourCardProps) {
  const whatsappUrl = buildWhatsAppUrl(
    buildTourWhatsAppMessage(tour.title, tour.durationDays),
  );

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#111114] transition-colors duration-200 hover:border-[#D4AF37]/45">
      <Link to={`/tours/${tour.slug}`} className="relative aspect-[4/3] overflow-hidden bg-[#0B0B0D]">
        <ResilientImage
          src={tour.heroImage}
          alt={tour.heroAlt}
          fallbackTitle={tour.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070708]/80 via-transparent to-transparent"
          aria-hidden="true"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        {/* Zero-pill clean unboxed metadata */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#D4AF37]">
          <span>{tour.category}</span>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums">{tour.durationDays} Days</span>
          <span aria-hidden="true">·</span>
          <span className="text-[#A9A295]">{tour.pace}</span>
        </div>

        <h3 className="font-display mt-2.5 text-2xl font-semibold leading-snug text-[#F6F3EC]">
          <Link
            to={`/tours/${tour.slug}`}
            className="transition-colors hover:text-[#D4AF37] focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
          >
            {tour.title}
          </Link>
        </h3>

        <p className="mt-1 text-xs font-medium text-[#A9A295]">{tour.region}</p>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-[#D6D0C4]">
          {tour.summary}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
          <Link
            to={`/tours/${tour.slug}`}
            className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-[#D4AF37] transition-colors hover:text-[#E5C55B]"
          >
            View Itinerary
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[40px] items-center gap-1.5 rounded-md border border-[#D4AF37]/35 px-3.5 py-1.5 text-xs font-semibold text-[#F6F3EC] transition-colors hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#09090B]"
          >
            <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
            WhatsApp Book
          </a>
        </div>
      </div>
    </article>
  );
}
