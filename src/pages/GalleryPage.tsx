import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Expand, Film } from 'lucide-react';
import { GALLERY_PHOTOS, TRAVEL_VIDEOS } from '../data/media';
import type { GalleryCategory, GalleryPhoto } from '../types/travel';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import LightboxModal from '../components/LightboxModal';
import ResilientImage from '../components/ResilientImage';

const GALLERY_FILTERS: GalleryCategory[] = [
  'All',
  'Ancient Temples & Cultural Heritage',
  'Sri Lankan Highlands',
  'Nature & Scenic Landscapes',
  'Historical Attractions',
  'Private Sri Lanka Tours',
  'Wildlife & Safaris',
  'Birds & Peacocks',
  'Northern Sri Lanka',
];

function photoMatchesCategory(photo: GalleryPhoto, category: GalleryCategory): boolean {
  if (category === 'All') return true;
  if (photo.category === category) return true;
  return Boolean(photo.secondaryCategories?.includes(category));
}

export default function GalleryPage() {
  useDocumentMeta({
    title: 'Travel Gallery — K & O Vacations | Sri Lanka Photography & Videos',
    description:
      'Explore authentic Sri Lankan travel photographs across Ancient Temples, Highlands, Nature & Scenic Landscapes, Historical Attractions, Wildlife Safaris, and Travel Videos.',
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const initialParam = searchParams.get('category') as GalleryCategory | null;
  const validInitial =
    initialParam && GALLERY_FILTERS.includes(initialParam) ? initialParam : 'All';

  const [activeCategory, setActiveCategory] = useState<GalleryCategory>(validInitial);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const param = searchParams.get('category') as GalleryCategory | null;
    if (param && GALLERY_FILTERS.includes(param)) {
      setActiveCategory(param);
    }
  }, [searchParams]);

  const categoryCounts = useMemo(() => {
    const counts: Record<GalleryCategory, number> = {
      All: GALLERY_PHOTOS.length,
      'Ancient Temples & Cultural Heritage': 0,
      'Sri Lankan Highlands': 0,
      'Nature & Scenic Landscapes': 0,
      'Historical Attractions': 0,
      'Private Sri Lanka Tours': 0,
      'Wildlife & Safaris': 0,
      'Birds & Peacocks': 0,
      'Northern Sri Lanka': 0,
    };

    for (const category of GALLERY_FILTERS) {
      if (category === 'All') continue;
      counts[category] = GALLERY_PHOTOS.filter((p) => photoMatchesCategory(p, category)).length;
    }

    return counts;
  }, []);

  const filteredPhotos = useMemo(() => {
    return GALLERY_PHOTOS.filter((photo) => photoMatchesCategory(photo, activeCategory));
  }, [activeCategory]);

  const handleSelectCategory = (category: GalleryCategory) => {
    setActiveCategory(category);
    setLightboxIndex(null);
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <>
      {/* Header & Category Filters */}
      <section className="border-b border-white/10 bg-[#0B0B0D] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#D4AF37] uppercase">
                Travel Gallery · Photography &amp; Film
              </p>
              <h1
                className="font-display mt-3 text-4xl font-semibold text-[#F6F3EC] sm:text-6xl"
                style={{ textWrap: 'balance' }}
              >
                Sri Lanka Through Our Lens
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#A9A295]">
                Authentic photographs captured across Sri Lanka’s ancient temples, misty
                highlands, historical fortresses, wildlife reserves, and coastal roads.
              </p>
            </div>

            <a
              href="#videos"
              className="inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-md border border-[#D4AF37]/45 px-4 py-2 text-xs font-semibold text-[#F6F3EC] transition-colors hover:bg-[#D4AF37]/15"
            >
              <Film className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
              Jump to Travel Videos
            </a>
          </div>

          <div
            className="mt-8 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter gallery photographs by travel category"
          >
            {GALLERY_FILTERS.map((category) => {
              const isActive = activeCategory === category;
              const count = categoryCounts[category];
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleSelectCategory(category)}
                  className={`min-h-[40px] shrink-0 whitespace-nowrap rounded-md px-4 py-2 text-xs font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#D4AF37] text-[#09090B]'
                      : 'border border-white/15 bg-[#111114] text-[#D6D0C4] hover:border-[#D4AF37]/50 hover:text-[#F6F3EC]'
                  }`}
                >
                  {category === 'All' ? 'All Photographs' : category}{' '}
                  <span className={`tabular-nums ${isActive ? 'text-[#09090B]/75' : 'text-[#8E877A]'}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modern Responsive Travel Photography Grid */}
      <section className="border-b border-white/10 bg-[#070708] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPhotos.map((photo, index) => {
              const isMarquee =
                activeCategory === 'All' && (index === 0 || index === 7);

              return (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className={`group relative overflow-hidden rounded-xl border border-white/10 bg-[#111114] text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37]/55 focus-visible:outline-2 focus-visible:outline-[#D4AF37] ${
                    isMarquee
                      ? 'aspect-[4/3] sm:col-span-2 lg:aspect-[16/9]'
                      : 'aspect-[4/3]'
                  }`}
                >
                  <ResilientImage
                    src={photo.src}
                    alt={photo.alt}
                    loading={index < 6 ? 'eager' : 'lazy'}
                    fetchPriority={index < 3 ? 'high' : 'auto'}
                    fallbackTitle={photo.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-[#070708]/95 via-[#070708]/20 to-transparent p-5">
                    <div className="flex justify-end">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/65 text-[#F6F3EC] opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
                        <Expand className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                    <div>
                      <p className="text-xs text-[#D4AF37]">
                        {photo.category} <span aria-hidden="true">·</span>{' '}
                        <span className="text-[#D6D0C4]">{photo.location}</span>
                      </p>
                      <h2 className="font-display mt-0.5 text-xl font-semibold text-[#F6F3EC] sm:text-2xl">
                        {photo.title}
                      </h2>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Travel Video Showcase */}
      <section id="videos" className="bg-[#0B0B0D] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#D4AF37] uppercase">
              Motion Field Archive
            </p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-[#F6F3EC] sm:text-5xl">
              Sri Lanka Travel Videos
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#A9A295]">
              Press play on our field recordings from Sri Lankan safaris and island highlights.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {TRAVEL_VIDEOS.map((video) => (
              <article
                key={video.id}
                className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#111114]"
              >
                <div className="aspect-[9/14] max-h-[440px] w-full bg-black">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster={video.poster}
                    className="h-full w-full bg-black object-contain"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support HTML5 video playback.
                  </video>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#D4AF37]">
                    <span className="tabular-nums">{video.durationLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#A9A295]">{video.location}</span>
                  </div>
                  <h3 className="font-display mt-2 text-2xl font-semibold text-[#F6F3EC]">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#D6D0C4]">
                    {video.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LightboxModal
        photos={filteredPhotos}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </>
  );
}
