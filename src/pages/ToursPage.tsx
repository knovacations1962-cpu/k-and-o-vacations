import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { buildTourWhatsAppMessage, buildWhatsAppUrl } from '../data/brand';
import { TOUR_PACKAGES } from '../data/tours';
import type { TourCategory } from '../types/travel';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import ResilientImage from '../components/ResilientImage';
import TourCard from '../components/TourCard';

const FILTER_OPTIONS: Array<'All' | TourCategory> = [
  'All',
  'Cultural Heritage',
  'Wildlife Safaris',
  'Northern Sri Lanka',
  'Nature & Highlands',
  'Bird Watching',
  'Coastal & Village',
];

const DESTINATION_EXPERIENCES = [
  {
    title: 'Ancient Cities & Heritage Sites',
    region: 'Sigiriya · Polonnaruwa · Anuradhapura',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.42.25_70c3edbb.jpeg',
    description: 'Walk through royal citadels, brick stupas, and medieval monastic complexes.',
  },
  {
    title: 'Wildlife Safaris',
    region: 'Yala · Wilpattu National Parks',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.10.25_a0828437.jpeg',
    description: 'Track Sri Lankan leopards, sloth bears, and golden jackal packs in 4x4 jeeps.',
  },
  {
    title: 'Elephant Experiences',
    region: 'Pinnawala · Minneriya · Udawalawe',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.15.21_2c60cd62.jpeg',
    description: 'Witness gentle tuskers and wild elephant herds along forest corridors and lakes.',
  },
  {
    title: 'Bird Watching',
    region: 'Bundala · Sinharaja · Wetlands',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.19.17_9dd7b8cb.jpeg',
    description: 'Spot bee-eaters, changeable hawk-eagles, painted storks, peacocks, and junglefowl.',
  },
  {
    title: 'Nature, Gardens & Waterfalls',
    region: 'Peradeniya · Kandy · Hatton',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.42.29_1621b5b5.jpeg',
    description: 'Stroll beneath towering tropical canopies, botanical lawns, and highland cascades.',
  },
  {
    title: 'Cultural Experiences',
    region: 'Habarana · Matale · Cultural Route',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.07.44_bd8c7501.jpeg',
    description: 'Ride traditional village bullock carts and visit vibrant polychrome kovils.',
  },
  {
    title: 'Beaches & Coastal Destinations',
    region: 'Koggala · Weligama · Galle',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.42.26_0dbbae67.jpeg',
    description: 'Experience southern coastal stilt fishing, golden bays, and sunset ocean walks.',
  },
  {
    title: 'Adventure Tours',
    region: "Sri Pada (Adam's Peak) · Ridge Trails",
    image: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.42.28_f5da09a8.jpeg',
    description: 'Ascend misty mountain summits and traverse scenic highland passes at sunrise.',
  },
  {
    title: 'Northern Sri Lanka Travel',
    region: 'Jaffna · Nallur · Chemmani',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_18.39.33_e6f45f92.jpeg',
    description: 'Explore Nallur Kandaswamy Kovil, historic Jaffna Clock Tower, and northern islands.',
  },
  {
    title: 'Scenic Landscapes',
    region: 'Hill Country · Tea Estates · Plains',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.12.08_26838331.jpeg',
    description: 'Take in sweeping views from mist-shrouded tea ridges to tranquil island reservoirs.',
  },
];

export default function ToursPage() {
  useDocumentMeta({
    title: 'Tours & Destinations — K & O Vacations | Sri Lanka Packages',
    description:
      'Explore Sri Lanka tour packages by K & O Vacations: wildlife safaris, Cultural Triangle heritage, Jaffna Northern travel, bird watching, highlands, and coastal retreats.',
  });

  const [selectedCategory, setSelectedCategory] = useState<'All' | TourCategory>('All');

  const filteredTours = useMemo(() => {
    if (selectedCategory === 'All') return TOUR_PACKAGES;
    return TOUR_PACKAGES.filter((tour) => tour.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      {/* Header */}
      <section className="border-b border-white/10 bg-[#0B0B0D] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#D4AF37] uppercase">
            Tours &amp; Destinations
          </p>
          <h1
            className="font-display mt-3 max-w-3xl text-4xl font-semibold text-[#F6F3EC] sm:text-6xl"
            style={{ textWrap: 'balance' }}
          >
            Curated Expeditions Across Sri Lanka
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#A9A295]">
            Choose a signature private itinerary below or combine regions to create your own
            bespoke island journey.
          </p>

          {/* Interactive Filter Controls */}
          <div
            className="mt-8 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter tours by experience category"
          >
            {FILTER_OPTIONS.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(category)}
                  className={`min-h-[40px] shrink-0 whitespace-nowrap rounded-md px-4 py-2 text-xs font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#D4AF37] text-[#09090B]'
                      : 'border border-white/15 bg-[#111114] text-[#D6D0C4] hover:border-[#D4AF37]/50 hover:text-[#F6F3EC]'
                  }`}
                >
                  {category === 'All' ? 'All Journeys' : category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filtered Tour Packages */}
      <section className="border-b border-white/10 bg-[#070708] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* 10 Sri Lankan Travel Experiences Directory */}
      <section className="bg-[#0B0B0D] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#D4AF37] uppercase">
                Island Highlights
              </p>
              <h2 className="font-display mt-2 text-3xl font-semibold text-[#F6F3EC] sm:text-4xl">
                Destinations &amp; Travel Experiences
              </h2>
            </div>
            <Link
              to="/booking"
              className="text-sm font-semibold text-[#D4AF37] transition-colors hover:text-[#E5C55B]"
            >
              Build a Custom Combination &rarr;
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {DESTINATION_EXPERIENCES.map((exp) => (
              <div
                key={exp.title}
                className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#111114]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#070708]">
                  <ResilientImage
                    src={exp.image}
                    alt={exp.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <p className="text-[11px] font-medium text-[#D4AF37]">{exp.region}</p>
                  <h3 className="font-display mt-1 text-lg font-semibold leading-snug text-[#F6F3EC]">
                    {exp.title}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-[#A9A295]">
                    {exp.description}
                  </p>
                  <a
                    href={buildWhatsAppUrl(buildTourWhatsAppMessage(exp.title))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] transition-colors hover:text-[#E5C55B]"
                  >
                    <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    Inquire via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
