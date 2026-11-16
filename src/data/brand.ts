export const BRAND = {
  name: 'K & O Vacations',
  tagline: 'Unforgettable Journeys. Extraordinary Experiences.',
  heroHeadline: 'Discover the Beauty of Sri Lanka',
  address: '97 Paradise Zone 01, Milenia City, Athurugiriya, Sri Lanka',
  whatsappDisplay: '+94 70 363 6824',
  whatsappDigits: '94703636824',
  whatsappBaseUrl: 'https://wa.me/94703636824',
  logoSrc: '/assets/aistudio/Favicon_71c52bfa.png',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=97+Paradise+Zone+01,+Milenia+City,+Athurugiriya,+Sri+Lanka&output=embed',
  mapsLinkUrl:
    'https://www.google.com/maps/search/?api=1&query=97+Paradise+Zone+01,+Milenia+City,+Athurugiriya,+Sri+Lanka',
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `${BRAND.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

export function buildTourWhatsAppMessage(tourTitle: string, durationDays?: number): string {
  const durationNote = durationDays ? ` (${durationDays} Days)` : '';
  return `Hello K & O Vacations, I would like to inquire about booking "${tourTitle}"${durationNote} in Sri Lanka. Please share availability and customized itinerary options.`;
}
