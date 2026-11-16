export type TourCategory =
  | 'Wildlife Safaris'
  | 'Cultural Heritage'
  | 'Northern Sri Lanka'
  | 'Nature & Highlands'
  | 'Bird Watching'
  | 'Coastal & Village';

export interface TourItineraryDay {
  day: number;
  title: string;
  location: string;
  description: string;
}

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: TourCategory;
  region: string;
  durationDays: number;
  pace: string;
  heroImage: string;
  heroAlt: string;
  galleryImages: string[];
  summary: string;
  highlights: string[];
  included: string[];
  itinerary: TourItineraryDay[];
  featured?: boolean;
}

export type GalleryCategory =
  | 'All'
  | 'Wildlife'
  | 'Heritage & Temples'
  | 'Northern Sri Lanka'
  | 'Birds & Peacocks'
  | 'Nature & Coast';

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  title: string;
  location: string;
  category: Exclude<GalleryCategory, 'All'>;
  featured?: boolean;
}

export interface TravelVideo {
  id: string;
  src: string;
  poster: string;
  title: string;
  location: string;
  durationLabel: string;
  description: string;
}

export type BookingStatus = 'pending' | 'reviewed' | 'confirmed' | 'cancelled';

export interface BookingRequestInput {
  full_name: string;
  email: string;
  whatsapp_number: string;
  country: string;
  destination: string;
  travel_date: string;
  adults: number;
  children: number;
  duration_days: number;
  special_requirements: string;
  additional_notes: string;
}

export interface BookingRequestRecord extends BookingRequestInput {
  id: string;
  reference_code: string;
  status: BookingStatus;
  created_at: string;
  storage_mode: 'supabase' | 'local';
}

export interface ContactInquiryInput {
  full_name: string;
  email: string;
  whatsapp_number: string;
  subject: string;
  message: string;
}

export interface ContactInquiryRecord extends ContactInquiryInput {
  id: string;
  status: 'new' | 'responded' | 'archived';
  created_at: string;
  storage_mode: 'supabase' | 'local';
}
