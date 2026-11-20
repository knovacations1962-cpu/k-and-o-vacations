import { useState } from 'react';
import { Compass } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  fallbackTitle?: string;
}

export default function ResilientImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fetchPriority = 'auto',
  fallbackTitle,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#141418] via-[#0B0B0D] to-[#1A1610] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Compass className="mb-2 h-7 w-7 text-[#D4AF37]/70" aria-hidden="true" />
        <span className="font-display text-base font-medium text-[#F6F3EC]/80">
          {fallbackTitle || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      referrerPolicy="no-referrer"
      onLoad={() => setIsLoaded(true)}
      onError={() => setHasError(true)}
      className={`${className} transition-opacity duration-300 ${
        isLoaded ? 'opacity-100' : 'opacity-90'
      }`}
    />
  );
}
