import { useMemo, useState } from 'react';
import { Expand, Film } from 'lucide-react';
import { GALLERY_PHOTOS, TRAVEL_VIDEOS } from '../data/media';
import type { GalleryCategory } from '../types/travel';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import LightboxModal from '../components/LightboxModal';
import ResilientImage from '../components/ResilientImage';

const GALLERY_FILTERS: GalleryCategory[] = [
  'All',
  'Wildlife',
  'Heritage & Temples',
  'Northern Sri Lanka',
  'Birds & Peacocks',
  'Nature & Coast',
];

export default function GalleryPage() {
  useDocumentMeta({
    title: 'Travel Gallery — K & O Vacations | Sri Lanka Photography & Videos',
    description:
      'View original Sri Lankan wildlife photography, leopards, elephants, peacocks, ancient heritage monuments, northern temples, and safari travel videos from K & O Vacations.',
  });

  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'All') return GALLERY_PHOTOS;
    return GALLERY_PHOTOS.filter((photo) => photo.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      {/* Header & Category Filters */}
      <section className="border-b border-white/10 bg-[#0B0B0D] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#D4AF37] uppercase">
                Photography &amp; Film
              </p>
              <h1
                className="font-display mt-3 text-4xl font-semibold text-[#F6F3EC] sm:text-6xl"
                style={{ textWrap: 'balance' }}
              >
                Sri Lanka Through Our Eyes
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#A9A295]">
                Original moments captured across Sri Lanka’s national parks, ancient citadels,
                northern kovils, highland peaks, and southern shores.
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
            aria-label="Filter gallery photographs by category"
          >
            {GALLERY_FILTERS.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveCategory(category);
                    setLightboxIndex(null);
                  }}
                  className={`min-h-[40px] shrink-0 whitespace-nowrap rounded-md px-4 py-2 text-xs font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#D4AF37] text-[#09090B]'
                      : 'border border-white/15 bg-[#111114] text-[#D6D0C4] hover:border-[#D4AF37]/50 hover:text-[#F6F3EC]'
                  }`}
                >
                  {category === 'All' ? `All Photographs (${GALLERY_PHOTOS.length})` : category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Responsive Photo Grid */}
      <section className="border-b border-white/10 bg-[#070708] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPhotos.map((photo, index) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-[#111114] text-left transition-colors duration-200 hover:border-[#D4AF37]/50 focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
              >
                <ResilientImage
                  src={photo.src}
                  alt={photo.alt}
                  fallbackTitle={photo.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-[#070708]/95 via-[#070708]/15 to-transparent p-5">
                  <div className="flex justify-end">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-[#F6F3EC] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <Expand className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-[#D4AF37]">
                      {photo.category} <span aria-hidden="true">·</span>{' '}
                      <span className="text-[#D6D0C4]">{photo.location}</span>
                    </p>
                    <h2 className="font-display mt-0.5 text-xl font-semibold text-[#F6F3EC]">
                      {photo.title}
                    </h2>
                  </div>
                </div>
              </button>
            ))}
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
                    className="h-full w-full object-contain bg-black"
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
