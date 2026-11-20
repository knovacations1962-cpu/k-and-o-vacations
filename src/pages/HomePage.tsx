import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Expand, MapPin, MessageCircle, Play, Quote } from 'lucide-react';
import { BRAND, buildWhatsAppUrl } from '../data/brand';
import { GALLERY_PHOTOS, TRAVEL_VIDEOS } from '../data/media';
import { EXPERIENCE_PILLARS, TOUR_PACKAGES } from '../data/tours';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import LightboxModal from '../components/LightboxModal';
import ResilientImage from '../components/ResilientImage';
import TourCard from '../components/TourCard';

const TESTIMONIALS = [
  {
    name: 'Charlotte & David Henderson',
    origin: 'United Kingdom · 10-Day Heritage & Safari Circuit',
    quote:
      'From our dawn climb up Sigiriya to watching wild elephants beside the river and riding the train over Nine Arch Bridge, K & O Vacations arranged every detail with quiet warmth and deep local knowledge.',
  },
  {
    name: 'Markus Lindqvist',
    origin: 'Sweden · Wildlife & Photography Expedition',
    quote:
      'Our tracker knew the exact dry-zone trails in Yala and Wilpattu. We photographed a leopard striding across white sand, a sloth bear foraging, and painted storks along the lagoons.',
  },
  {
    name: 'Priya & Arjun Subramanian',
    origin: 'Singapore · Northern Sri Lanka & Highlands',
    quote:
      'Traveling up to Jaffna for Nallur Kandaswamy Kovil and then down to Kandy’s Sacred Tooth Temple, Galle Fort, and the tea hills felt seamless. Our chauffeur was punctual and attentive.',
  },
];

const GALLERY_CATEGORY_LINKS = [
  'Ancient Temples & Cultural Heritage',
  'Sri Lankan Highlands',
  'Nature & Scenic Landscapes',
  'Historical Attractions',
  'Private Sri Lanka Tours',
] as const;

export default function HomePage() {
  useDocumentMeta({
    title: 'K & O Vacations — Discover the Beauty of Sri Lanka',
    description:
      'Unforgettable Journeys. Extraordinary Experiences. Bespoke Sri Lankan wildlife safaris, ancient heritage tours, highland retreats, and northern journeys.',
  });

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const featuredTours = TOUR_PACKAGES.filter((tour) => tour.featured).slice(0, 4);
  const previewPhotos = GALLERY_PHOTOS.filter((photo) => photo.featured).slice(0, 9);
  const heroVideo = TRAVEL_VIDEOS[0];

  return (
    <>
      {/* 1. Full-Screen Cinematic Hero */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden border-b border-white/10 bg-[#070708]">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroVideo.poster}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-65"
        >
          <source src={heroVideo.src} type="video/mp4" />
        </video>

        {/* Measured multi-stop scrim for guaranteed WCAG AA legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#070708]/80 via-[#070708]/45 to-[#070708]/90"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.22em] text-[#D4AF37] uppercase">
              {BRAND.name} · Private Sri Lanka Journeys
            </p>
            <h1
              className="font-display mt-4 font-semibold tracking-tight text-[#F6F3EC]"
              style={{
                fontSize: 'clamp(2.5rem, 5.2vw, 4.75rem)',
                lineHeight: 1.05,
                textWrap: 'balance',
              }}
            >
              {BRAND.heroHeadline}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#E7E2D8] sm:text-xl">
              {BRAND.tagline} Private chauffeur-guided expeditions across ancient royal citadels,
              leopard-roamed wildernesses, northern kovils, and emerald highlands.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/tours"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-md bg-[#D4AF37] px-7 py-3 text-sm font-semibold text-[#09090B] transition-colors duration-200 hover:bg-[#E5C55B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
              >
                Explore Tours
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/booking"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-md border border-[#D4AF37]/60 bg-[#070708]/70 px-7 py-3 text-sm font-semibold text-[#F6F3EC] backdrop-blur-sm transition-colors duration-200 hover:border-[#D4AF37] hover:bg-[#D4AF37]/15"
              >
                Book Your Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Island Experience Pillars (Placed cleanly below the hero) */}
      <section className="border-b border-white/10 bg-[#0B0B0D] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#D4AF37] uppercase">
                Island Diversity
              </p>
              <h2 className="font-display mt-2 text-3xl font-semibold text-[#F6F3EC] sm:text-4xl">
                Four Realms of Sri Lanka
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#A9A295]">
              Every journey is tailored to your pace—from Cultural Triangle ruins and wildlife
              safaris to misty highland rails and historic coastal forts.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {EXPERIENCE_PILLARS.map((pillar) => (
              <Link
                key={pillar.number}
                to="/tours"
                className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#111114] transition-colors duration-200 hover:border-[#D4AF37]/45"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#070708]">
                  <ResilientImage
                    src={pillar.image}
                    alt={pillar.alt}
                    fallbackTitle={pillar.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="tabular-nums text-xs font-semibold text-[#D4AF37]">
                    {pillar.number}.
                  </span>
                  <h3 className="font-display mt-1 text-xl font-semibold text-[#F6F3EC]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#A9A295]">
                    {pillar.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Destinations & Curated Tours */}
      <section className="border-b border-white/10 bg-[#070708] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#D4AF37] uppercase">
                Signature Itineraries
              </p>
              <h2 className="font-display mt-2 text-3xl font-semibold text-[#F6F3EC] sm:text-5xl">
                Curated Sri Lankan Tours
              </h2>
            </div>
            <Link
              to="/tours"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37] transition-colors hover:text-[#E5C55B]"
            >
              View All Tours &amp; Destinations
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {featuredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Wildlife, Heritage & Highland Asymmetric Showcase */}
      <section className="border-b border-white/10 bg-[#0B0B0D] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#D4AF37] uppercase">
              Wild &amp; Cultural Encounters
            </p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-[#F6F3EC] sm:text-5xl">
              Crafted Around Authentic Island Moments
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Large Highland & Heritage Feature */}
            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#111114] lg:col-span-7">
              <div className="aspect-[16/10] w-full overflow-hidden lg:h-full">
                <ResilientImage
                  src="/assets/aistudio/WhatsApp_Image_2026-11-20_at_19.28.15__2__5c298f5e.jpeg"
                  alt="Blue Sri Lankan highland train crossing Nine Arch Bridge in Ella"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#070708]/95 via-[#070708]/35 to-transparent p-6 sm:p-8">
                <span className="text-xs font-medium text-[#D4AF37]">
                  Sri Lankan Highlands · Ella &amp; Kandy
                </span>
                <h3 className="font-display mt-1 text-2xl font-semibold text-[#F6F3EC] sm:text-3xl">
                  Scenic Mountain Rail, Tea Gardens &amp; Sacred Temples
                </h3>
                <p className="mt-2 max-w-xl text-sm text-[#D6D0C4]">
                  Journey through misty tea ridges over the Nine Arch Bridge, visit Kandy’s Temple
                  of the Sacred Tooth Relic, and stroll sunlit botanical gardens.
                </p>
              </div>
            </div>

            {/* Right Asymmetric Stack */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#111114]">
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <ResilientImage
                    src="/assets/aistudio/WhatsApp_Image_2026-11-20_at_19.28.11_c35a5573.jpeg"
                    alt="Row of gilded Buddha statues inside Dambulla Royal Cave Temple"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#070708]/95 via-[#070708]/35 to-transparent p-6">
                  <span className="text-xs font-medium text-[#D4AF37]">
                    Cultural Triangle · Dambulla &amp; Polonnaruwa
                  </span>
                  <h3 className="font-display mt-1 text-2xl font-semibold text-[#F6F3EC]">
                    Ancient Cave Temples &amp; Royal Ruins
                  </h3>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#111114]">
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <ResilientImage
                    src="/assets/aistudio/WhatsApp_Image_2026-11-20_at_19.28.12__2__8cb26856.jpeg"
                    alt="Galle Dutch Fort stone ramparts overlooking the Indian Ocean"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#070708]/95 via-[#070708]/35 to-transparent p-6">
                  <span className="text-xs font-medium text-[#D4AF37]">
                    Historical Attractions · Galle Dutch Fort
                  </span>
                  <h3 className="font-display mt-1 text-2xl font-semibold text-[#F6F3EC]">
                    Colonial Ramparts &amp; Turquoise Coastlines
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Travel Gallery Showcase Section */}
      <section id="travel-gallery" className="border-b border-white/10 bg-[#070708] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#D4AF37] uppercase">
                Travel Gallery
              </p>
              <h2 className="font-display mt-2 text-3xl font-semibold text-[#F6F3EC] sm:text-5xl">
                Sri Lanka Field Photography
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37] transition-colors hover:text-[#E5C55B]"
            >
              Explore All {GALLERY_PHOTOS.length} Photos &amp; Videos
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Quick Category Shortcuts */}
          <div className="mt-6 flex flex-wrap gap-2">
            {GALLERY_CATEGORY_LINKS.map((cat) => (
              <Link
                key={cat}
                to={`/gallery?category=${encodeURIComponent(cat)}`}
                className="inline-flex min-h-[38px] items-center rounded-md border border-white/15 bg-[#111114] px-3.5 py-1.5 text-xs font-medium text-[#D6D0C4] transition-colors hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
              >
                {cat}
              </Link>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {previewPhotos.map((photo, index) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-[#111114] text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37]/50 focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
              >
                <ResilientImage
                  src={photo.src}
                  alt={photo.alt}
                  fallbackTitle={photo.title}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-[#070708]/95 via-[#070708]/15 to-transparent p-5">
                  <div className="flex justify-end">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/60 text-[#F6F3EC] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <Expand className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-[#D4AF37]">
                      {photo.category} <span aria-hidden="true">·</span>{' '}
                      <span className="text-[#D6D0C4]">{photo.location}</span>
                    </span>
                    <span className="font-display mt-0.5 block text-xl font-semibold text-[#F6F3EC]">
                      {photo.title}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Highlighted Field Video Strip */}
          <div className="mt-10 rounded-xl border border-[#D4AF37]/25 bg-[#111114] p-6 sm:p-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold tracking-wider text-[#D4AF37] uppercase">
                  Field Video Chronicles
                </p>
                <h3 className="font-display mt-1 text-2xl font-semibold text-[#F6F3EC] sm:text-3xl">
                  Watch Wild Elephants &amp; Dry-Zone Leopards in Motion
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#A9A295]">
                  Explore real moments captured on K &amp; O Vacations expeditions—from elephants
                  greeting trunk-to-trunk along forest roads to leopard sightings in national parks.
                </p>
              </div>
              <Link
                to="/gallery#videos"
                className="inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-md bg-[#D4AF37] px-6 py-2.5 text-sm font-semibold text-[#09090B] transition-colors hover:bg-[#E5C55B]"
              >
                <Play className="h-4 w-4" aria-hidden="true" />
                Watch Travel Videos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Guest Testimonials */}
      <section className="border-b border-white/10 bg-[#0B0B0D] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#D4AF37] uppercase">
              Guest Reflections
            </p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-[#F6F3EC] sm:text-4xl">
              Travelers Who Explored With Us
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((item) => (
              <blockquote
                key={item.name}
                className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#111114] p-6"
              >
                <div>
                  <Quote className="h-6 w-6 text-[#D4AF37]/60" aria-hidden="true" />
                  <p className="mt-4 text-sm leading-relaxed text-[#E7E2D8]">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
                <footer className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-display text-lg font-semibold text-[#F6F3EC]">{item.name}</p>
                  <p className="text-xs text-[#A9A295]">{item.origin}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final Booking & WhatsApp Concierge CTA */}
      <section className="bg-[#070708] py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.22em] text-[#D4AF37] uppercase">
            Tailored Sri Lanka Travel
          </p>
          <h2
            className="font-display mx-auto mt-3 max-w-3xl text-3xl font-semibold text-[#F6F3EC] sm:text-5xl"
            style={{ textWrap: 'balance' }}
          >
            Begin Your Custom Sri Lankan Journey
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#A9A295]">
            Share your preferred travel dates, group size, and island interests. Our team in
            Athurugiriya will craft a seamless private itinerary tailored around you.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/booking"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-md bg-[#D4AF37] px-7 py-3 text-sm font-semibold text-[#09090B] transition-colors hover:bg-[#E5C55B]"
            >
              Request a Booking
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={buildWhatsAppUrl(
                'Hello K & O Vacations, I would like to plan a custom tour in Sri Lanka.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-md border border-[#D4AF37]/50 px-7 py-3 text-sm font-semibold text-[#F6F3EC] transition-colors hover:bg-[#D4AF37]/15"
            >
              <MessageCircle className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
              WhatsApp {BRAND.whatsappDisplay}
            </a>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 text-xs text-[#8E877A]">
            <MapPin className="h-3.5 w-3.5 text-[#D4AF37]" aria-hidden="true" />
            {BRAND.address}
          </p>
        </div>
      </section>

      <LightboxModal
        photos={previewPhotos}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </>
  );
}
