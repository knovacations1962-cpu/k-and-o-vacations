import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, MessageCircle } from 'lucide-react';
import { buildTourWhatsAppMessage, buildWhatsAppUrl } from '../data/brand';
import { TOUR_PACKAGES } from '../data/tours';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import type { GalleryPhoto } from '../types/travel';
import LightboxModal from '../components/LightboxModal';
import ResilientImage from '../components/ResilientImage';
import TourCard from '../components/TourCard';

export default function TourDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const tour = TOUR_PACKAGES.find((item) => item.slug === slug);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useDocumentMeta({
    title: tour
      ? `${tour.title} — K & O Vacations`
      : 'Tour Details — K & O Vacations',
    description: tour
      ? tour.summary
      : 'Explore bespoke Sri Lankan tour itineraries with K & O Vacations.',
  });

  if (!tour) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-28 text-center sm:px-6">
        <h1 className="font-display text-4xl font-semibold text-[#F6F3EC]">
          Tour Itinerary Not Found
        </h1>
        <p className="mt-3 text-sm text-[#A9A295]">
          The requested journey could not be located. Browse our complete Sri Lanka tour collection
          below.
        </p>
        <Link
          to="/tours"
          className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-md bg-[#D4AF37] px-6 py-2.5 text-sm font-semibold text-[#09090B]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Return to Tours
        </Link>
      </section>
    );
  }

  const relatedTours = TOUR_PACKAGES.filter((item) => item.id !== tour.id).slice(0, 2);
  const tourPhotos: GalleryPhoto[] = tour.galleryImages.map((src, idx) => ({
    id: `${tour.id}-img-${idx}`,
    src,
    alt: `${tour.title} — View ${idx + 1}`,
    title: tour.title,
    location: tour.region,
    category: 'Private Sri Lanka Tours',
  }));

  const whatsappHref = buildWhatsAppUrl(
    buildTourWhatsAppMessage(tour.title, tour.durationDays),
  );

  return (
    <>
      {/* Hero Banner */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#070708]">
        <div className="relative h-[52vh] min-h-[380px] w-full">
          <ResilientImage
            src={tour.heroImage}
            alt={tour.heroAlt}
            loading="eager"
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#070708] via-[#070708]/55 to-[#070708]/40"
            aria-hidden="true"
          />
        </div>

        <div className="relative mx-auto -mt-36 max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
          <Link
            to="/tours"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:text-[#E5C55B]"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            All Tours &amp; Destinations
          </Link>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-medium text-[#D4AF37]">
            <span>{tour.category}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{tour.durationDays} Days</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#D6D0C4]">{tour.region}</span>
          </div>

          <h1
            className="font-display mt-2 max-w-4xl text-4xl font-semibold text-[#F6F3EC] sm:text-6xl"
            style={{ textWrap: 'balance' }}
          >
            {tour.title}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-[#D6D0C4]">{tour.subtitle}</p>
        </div>
      </section>

      {/* Main Content + Booking Sidebar */}
      <section className="border-b border-white/10 bg-[#0B0B0D] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Itinerary & Details */}
            <div className="space-y-12 lg:col-span-8">
              <div>
                <h2 className="font-display text-3xl font-semibold text-[#F6F3EC]">
                  Journey Overview
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#D6D0C4]">{tour.summary}</p>
              </div>

              <div className="grid grid-cols-1 gap-8 border-y border-white/10 py-8 sm:grid-cols-2">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-[#F6F3EC]">
                    Key Highlights
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm text-[#D6D0C4]">
                    {tour.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-semibold text-[#F6F3EC]">
                    Included Services
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm text-[#D6D0C4]">
                    {tour.included.map((inc) => (
                      <li key={inc} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" aria-hidden="true" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Day-by-Day Itinerary */}
              <div>
                <h2 className="font-display text-3xl font-semibold text-[#F6F3EC]">
                  Day-by-Day Itinerary
                </h2>
                <div className="mt-6 space-y-4">
                  {tour.itinerary.map((step) => (
                    <div
                      key={step.day}
                      className="rounded-xl border border-white/10 bg-[#111114] p-6"
                    >
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#D4AF37]">
                        <span className="tabular-nums font-semibold">Day 0{step.day}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-[#A9A295]">{step.location}</span>
                      </div>
                      <h3 className="font-display mt-1.5 text-2xl font-semibold text-[#F6F3EC]">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#D6D0C4]">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tour Photography Strip */}
              <div>
                <h2 className="font-display text-3xl font-semibold text-[#F6F3EC]">
                  Destination Photography
                </h2>
                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {tourPhotos.map((photo, idx) => (
                    <button
                      key={photo.id}
                      type="button"
                      onClick={() => setLightboxIndex(idx)}
                      className="group aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-[#111114]"
                    >
                      <ResilientImage
                        src={photo.src}
                        alt={photo.alt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Booking Summary Card */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 rounded-xl border border-[#D4AF37]/30 bg-[#111114] p-6 sm:p-7">
                <p className="text-xs font-semibold tracking-wider text-[#D4AF37] uppercase">
                  Reserve This Itinerary
                </p>
                <h2 className="font-display mt-2 text-2xl font-semibold text-[#F6F3EC]">
                  {tour.title}
                </h2>
                <p className="mt-2 text-sm text-[#A9A295]">
                  Tailored private departure with flexible dates, luxury transport, and personalized
                  accommodation options.
                </p>

                <dl className="mt-6 space-y-3 border-y border-white/10 py-5 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#A9A295]">Duration</dt>
                    <dd className="tabular-nums font-semibold text-[#F6F3EC]">
                      {tour.durationDays} Days
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#A9A295]">Category</dt>
                    <dd className="font-semibold text-[#F6F3EC]">{tour.category}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#A9A295]">Travel Style</dt>
                    <dd className="font-semibold text-[#F6F3EC]">{tour.pace}</dd>
                  </div>
                </dl>

                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    to={`/booking?tour=${encodeURIComponent(tour.title)}&days=${tour.durationDays}`}
                    className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-md bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-[#09090B] transition-colors hover:bg-[#E5C55B]"
                  >
                    Book This Tour
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-md border border-[#D4AF37]/45 px-5 py-3 text-sm font-semibold text-[#F6F3EC] transition-colors hover:bg-[#D4AF37]/15"
                  >
                    <MessageCircle className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
                    Inquire via WhatsApp
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Journeys */}
      <section className="bg-[#070708] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-[#F6F3EC]">
            More Sri Lankan Journeys
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {relatedTours.map((item) => (
              <TourCard key={item.id} tour={item} />
            ))}
          </div>
        </div>
      </section>

      <LightboxModal
        photos={tourPhotos}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </>
  );
}
