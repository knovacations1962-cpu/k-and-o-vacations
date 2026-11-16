import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { GalleryPhoto } from '../types/travel';
import ResilientImage from './ResilientImage';

interface LightboxModalProps {
  photos: GalleryPhoto[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function LightboxModal({
  photos,
  activeIndex,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  const isOpen = activeIndex !== null && photos[activeIndex] !== undefined;

  useEffect(() => {
    if (!isOpen || activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNavigate((activeIndex + 1) % photos.length);
      } else if (e.key === 'ArrowLeft') {
        onNavigate((activeIndex - 1 + photos.length) % photos.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, activeIndex, photos.length, onClose, onNavigate]);

  if (!isOpen || activeIndex === null) return null;

  const photo = photos[activeIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={photo.title}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#111114] text-[#F6F3EC] transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
      >
        <X className="h-5 w-5" />
      </button>

      {photos.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((activeIndex - 1 + photos.length) % photos.length);
            }}
            aria-label="Previous photograph"
            className="absolute left-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#111114]/90 text-[#F6F3EC] transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37] sm:left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((activeIndex + 1) % photos.length);
            }}
            aria-label="Next photograph"
            className="absolute right-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#111114]/90 text-[#F6F3EC] transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37] sm:right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      <div
        className="flex max-h-[90vh] w-full max-w-5xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex max-h-[75vh] w-full items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-[#0B0B0D]">
          <ResilientImage
            src={photo.src}
            alt={photo.alt}
            loading="eager"
            className="max-h-[75vh] w-auto max-w-full object-contain"
          />
        </div>

        <div className="mt-4 flex w-full flex-col items-start justify-between gap-2 px-1 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-display text-2xl font-semibold text-[#F6F3EC]">
              {photo.title}
            </h3>
            <p className="text-xs text-[#D4AF37]">
              {photo.category} <span aria-hidden="true">·</span>{' '}
              <span className="text-[#A9A295]">{photo.location}</span>
            </p>
          </div>
          <span className="tabular-nums text-xs text-[#A9A295]">
            {activeIndex + 1} / {photos.length}
          </span>
        </div>
      </div>
    </div>
  );
}
