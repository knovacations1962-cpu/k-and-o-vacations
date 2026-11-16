import { isSupabaseConfigured, supabase } from '../lib/supabase';
import type {
  BookingRequestInput,
  BookingRequestRecord,
  BookingStatus,
  ContactInquiryInput,
  ContactInquiryRecord,
} from '../types/travel';

const LOCAL_BOOKINGS_KEY = 'ko_vacations_booking_requests_v1';
const LOCAL_INQUIRIES_KEY = 'ko_vacations_contact_inquiries_v1';

function generateReferenceCode(): string {
  const randomPart = Math.floor(100000 + Math.random() * 900000);
  return `KO-${randomPart}`;
}

export function validateBookingInput(input: BookingRequestInput): Partial<Record<keyof BookingRequestInput, string>> {
  const errors: Partial<Record<keyof BookingRequestInput, string>> = {};

  if (!input.full_name || input.full_name.trim().length < 2) {
    errors.full_name = 'Please enter your full name (at least 2 characters).';
  }

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!input.email || !emailRegex.test(input.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  const phoneDigits = input.whatsapp_number.replace(/[^\d+]/g, '');
  if (!phoneDigits || phoneDigits.length < 7) {
    errors.whatsapp_number = 'Please enter a valid WhatsApp number with country code.';
  }

  if (!input.country || input.country.trim().length < 2) {
    errors.country = 'Please enter your country of residence.';
  }

  if (!input.destination || input.destination.trim().length < 2) {
    errors.destination = 'Please select or enter a tour or destination.';
  }

  if (!input.travel_date) {
    errors.travel_date = 'Please select your preferred travel date.';
  } else {
    const selected = new Date(input.travel_date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (Number.isNaN(selected.getTime()) || selected < today) {
      errors.travel_date = 'Please choose an upcoming travel date.';
    }
  }

  if (!Number.isFinite(input.adults) || input.adults < 1 || input.adults > 50) {
    errors.adults = 'At least 1 adult traveler is required (max 50).';
  }

  if (!Number.isFinite(input.children) || input.children < 0 || input.children > 50) {
    errors.children = 'Number of children must be between 0 and 50.';
  }

  if (!Number.isFinite(input.duration_days) || input.duration_days < 1 || input.duration_days > 60) {
    errors.duration_days = 'Trip duration must be between 1 and 60 days.';
  }

  return errors;
}

export function validateContactInput(input: ContactInquiryInput): Partial<Record<keyof ContactInquiryInput, string>> {
  const errors: Partial<Record<keyof ContactInquiryInput, string>> = {};

  if (!input.full_name || input.full_name.trim().length < 2) {
    errors.full_name = 'Please enter your full name.';
  }

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!input.email || !emailRegex.test(input.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  const phoneDigits = input.whatsapp_number.replace(/[^\d+]/g, '');
  if (!phoneDigits || phoneDigits.length < 7) {
    errors.whatsapp_number = 'Please provide a valid WhatsApp number.';
  }

  if (!input.subject || input.subject.trim().length < 2) {
    errors.subject = 'Please specify a travel topic or subject.';
  }

  if (!input.message || input.message.trim().length < 5) {
    errors.message = 'Please enter a short message (at least 5 characters).';
  }

  return errors;
}

function readLocalBookings(): BookingRequestRecord[] {
  try {
    const raw = localStorage.getItem(LOCAL_BOOKINGS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeLocalBookings(records: BookingRequestRecord[]): void {
  try {
    localStorage.setItem(LOCAL_BOOKINGS_KEY, JSON.stringify(records));
  } catch {
    // Ignore storage quota errors gracefully
  }
}

export async function submitBookingRequest(
  input: BookingRequestInput,
): Promise<{ record: BookingRequestRecord; persistedToSupabase: boolean }> {
  const referenceCode = generateReferenceCode();
  const payload = {
    reference_code: referenceCode,
    full_name: input.full_name.trim(),
    email: input.email.trim(),
    whatsapp_number: input.whatsapp_number.trim(),
    country: input.country.trim(),
    destination: input.destination.trim(),
    travel_date: input.travel_date,
    adults: Number(input.adults),
    children: Number(input.children),
    duration_days: Number(input.duration_days),
    special_requirements: input.special_requirements.trim(),
    additional_notes: input.additional_notes.trim(),
    status: 'pending' as BookingStatus,
  };

  let persistedToSupabase = false;
  let createdRecord: BookingRequestRecord = {
    ...payload,
    id: crypto.randomUUID ? crypto.randomUUID() : `local-${Date.now()}`,
    created_at: new Date().toISOString(),
    storage_mode: 'local',
  };

  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('booking_requests')
      .insert([payload])
      .select('id, reference_code, status, created_at')
      .single();

    if (error) {
      throw new Error(error.message || 'Unable to save booking request to database.');
    }

    persistedToSupabase = true;
    createdRecord = {
      ...payload,
      id: data?.id || createdRecord.id,
      reference_code: data?.reference_code || referenceCode,
      status: (data?.status as BookingStatus) || 'pending',
      created_at: data?.created_at || createdRecord.created_at,
      storage_mode: 'supabase',
    };
  }

  const existing = readLocalBookings();
  writeLocalBookings([createdRecord, ...existing]);

  return { record: createdRecord, persistedToSupabase };
}

export function getSavedBookingRequests(): BookingRequestRecord[] {
  return readLocalBookings();
}

export function updateSavedBookingStatus(id: string, status: BookingStatus): BookingRequestRecord[] {
  const current = readLocalBookings();
  const updated = current.map((item) => (item.id === id ? { ...item, status } : item));
  writeLocalBookings(updated);
  return updated;
}

export function deleteSavedBookingRequest(id: string): BookingRequestRecord[] {
  const current = readLocalBookings();
  const updated = current.filter((item) => item.id !== id);
  writeLocalBookings(updated);
  return updated;
}

export async function submitContactInquiry(
  input: ContactInquiryInput,
): Promise<{ record: ContactInquiryRecord; persistedToSupabase: boolean }> {
  const payload = {
    full_name: input.full_name.trim(),
    email: input.email.trim(),
    whatsapp_number: input.whatsapp_number.trim(),
    subject: input.subject.trim(),
    message: input.message.trim(),
    status: 'new' as const,
  };

  let persistedToSupabase = false;
  let record: ContactInquiryRecord = {
    ...payload,
    id: crypto.randomUUID ? crypto.randomUUID() : `inq-${Date.now()}`,
    created_at: new Date().toISOString(),
    storage_mode: 'local',
  };

  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('contact_inquiries')
      .insert([payload])
      .select('id, status, created_at')
      .single();

    if (error) {
      throw new Error(error.message || 'Unable to submit your inquiry right now.');
    }

    persistedToSupabase = true;
    record = {
      ...payload,
      id: data?.id || record.id,
      status: (data?.status as ContactInquiryRecord['status']) || 'new',
      created_at: data?.created_at || record.created_at,
      storage_mode: 'supabase',
    };
  }

  try {
    const raw = localStorage.getItem(LOCAL_INQUIRIES_KEY);
    const list: ContactInquiryRecord[] = raw ? JSON.parse(raw) : [];
    localStorage.setItem(LOCAL_INQUIRIES_KEY, JSON.stringify([record, ...list]));
  } catch {
    // Ignore storage error
  }

  return { record, persistedToSupabase };
}

export function buildBookingWhatsAppSummary(input: BookingRequestInput, referenceCode?: string): string {
  const lines = [
    'Hello K & O Vacations, I would like to submit a Sri Lanka tour booking request:',
    referenceCode ? `Reference: ${referenceCode}` : '',
    `Name: ${input.full_name}`,
    `Email: ${input.email}`,
    `WhatsApp: ${input.whatsapp_number}`,
    `Country: ${input.country}`,
    `Tour / Destination: ${input.destination}`,
    `Preferred Travel Date: ${input.travel_date}`,
    `Travelers: ${input.adults} Adult(s), ${input.children} Child(ren)`,
    `Duration: ${input.duration_days} Day(s)`,
    input.special_requirements ? `Special Requirements: ${input.special_requirements}` : '',
    input.additional_notes ? `Additional Notes: ${input.additional_notes}` : '',
  ].filter(Boolean);

  return lines.join('\n');
}
