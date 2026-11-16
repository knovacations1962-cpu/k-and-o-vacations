import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  AlertCircle,
  CheckCircle2,
  ClipboardList,
  Loader2,
  MessageCircle,
  Send,
  Trash2,
} from 'lucide-react';
import { BRAND, buildWhatsAppUrl } from '../data/brand';
import { TOUR_PACKAGES } from '../data/tours';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import {
  buildBookingWhatsAppSummary,
  deleteSavedBookingRequest,
  getSavedBookingRequests,
  submitBookingRequest,
  updateSavedBookingStatus,
  validateBookingInput,
} from '../services/bookingService';
import type {
  BookingRequestInput,
  BookingRequestRecord,
  BookingStatus,
} from '../types/travel';

const TOUR_OPTIONS = [
  ...TOUR_PACKAGES.map((t) => t.title),
  'Custom Sri Lanka Multi-Region Itinerary',
];

const EMPTY_FORM: BookingRequestInput = {
  full_name: '',
  email: '',
  whatsapp_number: '',
  country: '',
  destination: TOUR_PACKAGES[0].title,
  travel_date: '',
  adults: 2,
  children: 0,
  duration_days: TOUR_PACKAGES[0].durationDays,
  special_requirements: '',
  additional_notes: '',
};

export default function BookingPage() {
  useDocumentMeta({
    title: 'Book Your Journey — K & O Vacations | Sri Lanka Tour Reservation',
    description:
      'Submit your Sri Lanka tour booking request to K & O Vacations or book directly via WhatsApp (+94 70 363 6824).',
  });

  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<'request' | 'manage'>('request');
  const [form, setForm] = useState<BookingRequestInput>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingRequestInput, string>>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedRecord, setConfirmedRecord] = useState<BookingRequestRecord | null>(null);

  const [savedBookings, setSavedBookings] = useState<BookingRequestRecord[]>([]);
  const [statusFilter, setStatusFilter] = useState<'all' | BookingStatus>('all');

  useEffect(() => {
    setSavedBookings(getSavedBookingRequests());
  }, []);

  useEffect(() => {
    const tourParam = searchParams.get('tour');
    const daysParam = searchParams.get('days');
    if (tourParam || daysParam) {
      setForm((prev) => ({
        ...prev,
        destination: tourParam || prev.destination,
        duration_days: daysParam ? Math.max(1, Number(daysParam) || prev.duration_days) : prev.duration_days,
      }));
    }
  }, [searchParams]);

  const filteredBookings = useMemo(() => {
    if (statusFilter === 'all') return savedBookings;
    return savedBookings.filter((item) => item.status === statusFilter);
  }, [savedBookings, statusFilter]);

  const handleFieldChange = <K extends keyof BookingRequestInput>(
    field: K,
    value: BookingRequestInput[K],
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
    setSubmitError(null);
  };

  const handleDestinationChange = (value: string) => {
    const matchedTour = TOUR_PACKAGES.find((item) => item.title === value);
    setForm((prev) => ({
      ...prev,
      destination: value,
      duration_days: matchedTour ? matchedTour.durationDays : prev.duration_days,
    }));
    if (errors.destination) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.destination;
        return next;
      });
    }
  };

  const processSubmission = async (openWhatsAppAfter: boolean) => {
    const validationErrors = validateBookingInput(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitError('Please review the highlighted fields before submitting your booking request.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const { record } = await submitBookingRequest(form);
      setConfirmedRecord(record);
      setSavedBookings(getSavedBookingRequests());

      if (openWhatsAppAfter) {
        const message = buildBookingWhatsAppSummary(form, record.reference_code);
        const link = document.createElement('a');
        link.href = buildWhatsAppUrl(message);
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.click();
      }
    } catch (err) {
      const msg =
        err instanceof Error
          ? err.message
          : 'An unexpected error occurred while saving your booking request.';
      setSubmitError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await processSubmission(false);
  };

  const handleStatusChange = (id: string, nextStatus: BookingStatus) => {
    const updated = updateSavedBookingStatus(id, nextStatus);
    setSavedBookings(updated);
  };

  const handleDeleteBooking = (id: string) => {
    const updated = deleteSavedBookingRequest(id);
    setSavedBookings(updated);
  };

  const minDate = new Date().toISOString().split('T')[0];

  return (
    <>
      <section className="border-b border-white/10 bg-[#0B0B0D] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#D4AF37] uppercase">
            Reservations &amp; Concierge
          </p>
          <h1
            className="font-display mt-3 text-4xl font-semibold text-[#F6F3EC] sm:text-6xl"
            style={{ textWrap: 'balance' }}
          >
            Book Your Sri Lanka Journey
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#A9A295]">
            Submit your itinerary request below or coordinate directly with our travel desk on
            WhatsApp at <span className="tabular-nums text-[#F6F3EC]">{BRAND.whatsappDisplay}</span>.
          </p>

          {/* Segmented Mode Tabs */}
          <div className="mt-8 inline-flex rounded-lg border border-white/15 bg-[#111114] p-1">
            <button
              type="button"
              onClick={() => setActiveTab('request')}
              className={`min-h-[40px] rounded-md px-5 py-2 text-xs font-semibold transition-colors ${
                activeTab === 'request'
                  ? 'bg-[#D4AF37] text-[#09090B]'
                  : 'text-[#D6D0C4] hover:text-[#F6F3EC]'
              }`}
            >
              New Booking Request
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('manage')}
              className={`inline-flex min-h-[40px] items-center gap-2 rounded-md px-5 py-2 text-xs font-semibold transition-colors ${
                activeTab === 'manage'
                  ? 'bg-[#D4AF37] text-[#09090B]'
                  : 'text-[#D6D0C4] hover:text-[#F6F3EC]'
              }`}
            >
              <ClipboardList className="h-3.5 w-3.5" aria-hidden="true" />
              Manage Requests ({savedBookings.length})
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#070708] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {activeTab === 'request' ? (
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                {confirmedRecord ? (
                  <div className="rounded-xl border border-[#D4AF37]/40 bg-[#111114] p-7 sm:p-9">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[#D4AF37]" aria-hidden="true" />
                      <div>
                        <p className="text-xs font-semibold tracking-wider text-[#D4AF37] uppercase">
                          Booking Request Received
                        </p>
                        <h2 className="font-display mt-1 text-3xl font-semibold text-[#F6F3EC]">
                          Thank You, {confirmedRecord.full_name}
                        </h2>
                        <p className="mt-2 text-sm text-[#D6D0C4]">
                          Your booking request has been recorded under reference{' '}
                          <span className="tabular-nums font-semibold text-[#D4AF37]">
                            {confirmedRecord.reference_code}
                          </span>
                          . Our team will confirm availability and tailor your day-by-day route.
                        </p>
                      </div>
                    </div>

                    <dl className="mt-7 grid grid-cols-1 gap-4 border-y border-white/10 py-6 text-sm sm:grid-cols-2">
                      <div>
                        <dt className="text-xs text-[#A9A295]">Tour / Destination</dt>
                        <dd className="mt-1 font-medium text-[#F6F3EC]">
                          {confirmedRecord.destination}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs text-[#A9A295]">Preferred Travel Date</dt>
                        <dd className="tabular-nums mt-1 font-medium text-[#F6F3EC]">
                          {confirmedRecord.travel_date}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs text-[#A9A295]">Travel Party</dt>
                        <dd className="tabular-nums mt-1 font-medium text-[#F6F3EC]">
                          {confirmedRecord.adults} Adult(s), {confirmedRecord.children} Child(ren)
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs text-[#A9A295]">Duration</dt>
                        <dd className="tabular-nums mt-1 font-medium text-[#F6F3EC]">
                          {confirmedRecord.duration_days} Days
                        </dd>
                      </div>
                    </dl>

                    <div className="mt-7 flex flex-wrap gap-3">
                      <a
                        href={buildWhatsAppUrl(
                          buildBookingWhatsAppSummary(confirmedRecord, confirmedRecord.reference_code),
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] items-center gap-2 rounded-md bg-[#D4AF37] px-6 py-2.5 text-sm font-semibold text-[#09090B] transition-colors hover:bg-[#E5C55B]"
                      >
                        <MessageCircle className="h-4 w-4" aria-hidden="true" />
                        Send Booking on WhatsApp
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setConfirmedRecord(null);
                          setForm(EMPTY_FORM);
                        }}
                        className="inline-flex min-h-[44px] items-center rounded-md border border-white/20 px-5 py-2.5 text-sm font-semibold text-[#F6F3EC] transition-colors hover:border-[#D4AF37]"
                      >
                        Submit Another Request
                      </button>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={handleFormSubmit}
                    noValidate
                    className="rounded-xl border border-white/10 bg-[#111114] p-6 sm:p-8"
                  >
                    <h2 className="font-display text-2xl font-semibold text-[#F6F3EC]">
                      Traveler &amp; Itinerary Details
                    </h2>

                    {submitError && (
                      <div
                        role="alert"
                        className="mt-5 flex items-start gap-3 rounded-lg border border-red-400/40 bg-red-950/35 p-4 text-sm text-red-200"
                      >
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-300" aria-hidden="true" />
                        <span>{submitError}</span>
                      </div>
                    )}

                    <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {/* Full Name */}
                      <div>
                        <label
                          htmlFor="booking-full-name"
                          className="block text-xs font-semibold text-[#E7E2D8]"
                        >
                          Full Name *
                        </label>
                        <input
                          id="booking-full-name"
                          type="text"
                          required
                          value={form.full_name}
                          onChange={(e) => handleFieldChange('full_name', e.target.value)}
                          placeholder="e.g. Daniel Perera"
                          className="mt-1.5 w-full rounded-md border border-white/15 bg-[#070708] px-3.5 py-2.5 text-sm text-[#F6F3EC] placeholder-[#78716C] focus:border-[#D4AF37] focus:outline-none"
                        />
                        {errors.full_name && (
                          <p className="mt-1 text-xs text-red-300">{errors.full_name}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="booking-email"
                          className="block text-xs font-semibold text-[#E7E2D8]"
                        >
                          Email Address *
                        </label>
                        <input
                          id="booking-email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => handleFieldChange('email', e.target.value)}
                          placeholder="you@example.com"
                          className="mt-1.5 w-full rounded-md border border-white/15 bg-[#070708] px-3.5 py-2.5 text-sm text-[#F6F3EC] placeholder-[#78716C] focus:border-[#D4AF37] focus:outline-none"
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-300">{errors.email}</p>
                        )}
                      </div>

                      {/* WhatsApp Number */}
                      <div>
                        <label
                          htmlFor="booking-whatsapp"
                          className="block text-xs font-semibold text-[#E7E2D8]"
                        >
                          WhatsApp Number *
                        </label>
                        <input
                          id="booking-whatsapp"
                          type="tel"
                          required
                          value={form.whatsapp_number}
                          onChange={(e) => handleFieldChange('whatsapp_number', e.target.value)}
                          placeholder="+44 7700 900123"
                          className="mt-1.5 w-full rounded-md border border-white/15 bg-[#070708] px-3.5 py-2.5 text-sm text-[#F6F3EC] placeholder-[#78716C] focus:border-[#D4AF37] focus:outline-none"
                        />
                        {errors.whatsapp_number && (
                          <p className="mt-1 text-xs text-red-300">{errors.whatsapp_number}</p>
                        )}
                      </div>

                      {/* Country */}
                      <div>
                        <label
                          htmlFor="booking-country"
                          className="block text-xs font-semibold text-[#E7E2D8]"
                        >
                          Country *
                        </label>
                        <input
                          id="booking-country"
                          type="text"
                          required
                          value={form.country}
                          onChange={(e) => handleFieldChange('country', e.target.value)}
                          placeholder="e.g. United Kingdom"
                          className="mt-1.5 w-full rounded-md border border-white/15 bg-[#070708] px-3.5 py-2.5 text-sm text-[#F6F3EC] placeholder-[#78716C] focus:border-[#D4AF37] focus:outline-none"
                        />
                        {errors.country && (
                          <p className="mt-1 text-xs text-red-300">{errors.country}</p>
                        )}
                      </div>

                      {/* Tour / Destination */}
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="booking-destination"
                          className="block text-xs font-semibold text-[#E7E2D8]"
                        >
                          Tour / Destination *
                        </label>
                        <select
                          id="booking-destination"
                          value={form.destination}
                          onChange={(e) => handleDestinationChange(e.target.value)}
                          className="mt-1.5 w-full rounded-md border border-white/15 bg-[#070708] px-3.5 py-2.5 text-sm text-[#F6F3EC] focus:border-[#D4AF37] focus:outline-none"
                        >
                          {TOUR_OPTIONS.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        {errors.destination && (
                          <p className="mt-1 text-xs text-red-300">{errors.destination}</p>
                        )}
                      </div>

                      {/* Travel Date */}
                      <div>
                        <label
                          htmlFor="booking-date"
                          className="block text-xs font-semibold text-[#E7E2D8]"
                        >
                          Travel Date *
                        </label>
                        <input
                          id="booking-date"
                          type="date"
                          required
                          min={minDate}
                          value={form.travel_date}
                          onChange={(e) => handleFieldChange('travel_date', e.target.value)}
                          className="tabular-nums mt-1.5 w-full rounded-md border border-white/15 bg-[#070708] px-3.5 py-2.5 text-sm text-[#F6F3EC] focus:border-[#D4AF37] focus:outline-none"
                        />
                        {errors.travel_date && (
                          <p className="mt-1 text-xs text-red-300">{errors.travel_date}</p>
                        )}
                      </div>

                      {/* Number of Days */}
                      <div>
                        <label
                          htmlFor="booking-days"
                          className="block text-xs font-semibold text-[#E7E2D8]"
                        >
                          Number of Days *
                        </label>
                        <input
                          id="booking-days"
                          type="number"
                          min={1}
                          max={60}
                          required
                          value={form.duration_days}
                          onChange={(e) =>
                            handleFieldChange('duration_days', Math.max(1, Number(e.target.value) || 1))
                          }
                          className="tabular-nums mt-1.5 w-full rounded-md border border-white/15 bg-[#070708] px-3.5 py-2.5 text-sm text-[#F6F3EC] focus:border-[#D4AF37] focus:outline-none"
                        />
                        {errors.duration_days && (
                          <p className="mt-1 text-xs text-red-300">{errors.duration_days}</p>
                        )}
                      </div>

                      {/* Number of Adults */}
                      <div>
                        <label
                          htmlFor="booking-adults"
                          className="block text-xs font-semibold text-[#E7E2D8]"
                        >
                          Number of Adults *
                        </label>
                        <input
                          id="booking-adults"
                          type="number"
                          min={1}
                          max={50}
                          required
                          value={form.adults}
                          onChange={(e) =>
                            handleFieldChange('adults', Math.max(1, Number(e.target.value) || 1))
                          }
                          className="tabular-nums mt-1.5 w-full rounded-md border border-white/15 bg-[#070708] px-3.5 py-2.5 text-sm text-[#F6F3EC] focus:border-[#D4AF37] focus:outline-none"
                        />
                        {errors.adults && (
                          <p className="mt-1 text-xs text-red-300">{errors.adults}</p>
                        )}
                      </div>

                      {/* Number of Children */}
                      <div>
                        <label
                          htmlFor="booking-children"
                          className="block text-xs font-semibold text-[#E7E2D8]"
                        >
                          Number of Children
                        </label>
                        <input
                          id="booking-children"
                          type="number"
                          min={0}
                          max={50}
                          value={form.children}
                          onChange={(e) =>
                            handleFieldChange('children', Math.max(0, Number(e.target.value) || 0))
                          }
                          className="tabular-nums mt-1.5 w-full rounded-md border border-white/15 bg-[#070708] px-3.5 py-2.5 text-sm text-[#F6F3EC] focus:border-[#D4AF37] focus:outline-none"
                        />
                        {errors.children && (
                          <p className="mt-1 text-xs text-red-300">{errors.children}</p>
                        )}
                      </div>

                      {/* Special Requirements */}
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="booking-special"
                          className="block text-xs font-semibold text-[#E7E2D8]"
                        >
                          Special Requirements
                        </label>
                        <input
                          id="booking-special"
                          type="text"
                          value={form.special_requirements}
                          onChange={(e) => handleFieldChange('special_requirements', e.target.value)}
                          placeholder="Dietary preferences, photography jeep setup, child seat, hotel tier..."
                          className="mt-1.5 w-full rounded-md border border-white/15 bg-[#070708] px-3.5 py-2.5 text-sm text-[#F6F3EC] placeholder-[#78716C] focus:border-[#D4AF37] focus:outline-none"
                        />
                      </div>

                      {/* Additional Notes */}
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="booking-notes"
                          className="block text-xs font-semibold text-[#E7E2D8]"
                        >
                          Additional Notes
                        </label>
                        <textarea
                          id="booking-notes"
                          rows={4}
                          value={form.additional_notes}
                          onChange={(e) => handleFieldChange('additional_notes', e.target.value)}
                          placeholder="Share flight arrival timing, must-visit places (e.g., Sigiriya, Jaffna, Yala), or pace preferences..."
                          className="mt-1.5 w-full rounded-md border border-white/15 bg-[#070708] px-3.5 py-2.5 text-sm text-[#F6F3EC] placeholder-[#78716C] focus:border-[#D4AF37] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex min-h-[46px] items-center gap-2 rounded-md bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#09090B] transition-colors hover:bg-[#E5C55B] disabled:opacity-60"
                      >
                        {isSubmitting ? (
                          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                        ) : (
                          <Send className="h-4 w-4" aria-hidden="true" />
                        )}
                        Submit Booking Request
                      </button>

                      <button
                        type="button"
                        disabled={isSubmitting}
                        onClick={() => void processSubmission(true)}
                        className="inline-flex min-h-[46px] items-center gap-2 rounded-md border border-[#D4AF37]/50 px-6 py-3 text-sm font-semibold text-[#F6F3EC] transition-colors hover:bg-[#D4AF37]/15 disabled:opacity-60"
                      >
                        <MessageCircle className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
                        Submit &amp; Send via WhatsApp
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Concierge Aside */}
              <aside className="space-y-6 lg:col-span-4">
                <div className="rounded-xl border border-[#D4AF37]/25 bg-[#111114] p-6">
                  <p className="text-xs font-semibold tracking-wider text-[#D4AF37] uppercase">
                    Direct WhatsApp Booking
                  </p>
                  <h3 className="font-display mt-2 text-2xl font-semibold text-[#F6F3EC]">
                    Speak With Our Travel Desk
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#A9A295]">
                    Prefer instant itinerary planning? Message K &amp; O Vacations directly on
                    WhatsApp to customize routes, wildlife drives, and private transfers.
                  </p>
                  <a
                    href={buildWhatsAppUrl(
                      'Hello K & O Vacations, I would like to book a Sri Lanka tour.',
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-md border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-4 py-2.5 text-sm font-semibold text-[#E5C55B] transition-colors hover:bg-[#D4AF37] hover:text-[#09090B]"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    WhatsApp {BRAND.whatsappDisplay}
                  </a>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#111114] p-6">
                  <h3 className="font-display text-xl font-semibold text-[#F6F3EC]">
                    Office Location
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#D6D0C4]">{BRAND.address}</p>
                </div>
              </aside>
            </div>
          ) : (
            /* Manage Submitted Booking Requests */
            <div className="space-y-6">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h2 className="font-display text-3xl font-semibold text-[#F6F3EC]">
                    Your Booking Requests
                  </h2>
                  <p className="mt-1 text-sm text-[#A9A295]">
                    Review submitted itineraries, update status notes, or dispatch details via
                    WhatsApp.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {(['all', 'pending', 'reviewed', 'confirmed', 'cancelled'] as const).map(
                    (status) => (
                      <button
                        key={status}
                        type="button"
                        onClick={() => setStatusFilter(status)}
                        className={`min-h-[38px] rounded-md px-3.5 py-1.5 text-xs font-semibold capitalize transition-colors ${
                          statusFilter === status
                            ? 'bg-[#D4AF37] text-[#09090B]'
                            : 'border border-white/15 bg-[#111114] text-[#D6D0C4] hover:border-[#D4AF37]/50'
                        }`}
                      >
                        {status}
                      </button>
                    ),
                  )}
                </div>
              </div>

              {filteredBookings.length === 0 ? (
                <div className="rounded-xl border border-white/10 bg-[#111114] p-12 text-center">
                  <p className="font-display text-2xl font-semibold text-[#F6F3EC]">
                    No Booking Requests Found
                  </p>
                  <p className="mt-2 text-sm text-[#A9A295]">
                    Submit a booking inquiry from the New Booking Request tab to track and manage it
                    here.
                  </p>
                  <button
                    type="button"
                    onClick={() => setActiveTab('request')}
                    className="mt-5 inline-flex min-h-[44px] items-center rounded-md bg-[#D4AF37] px-6 py-2.5 text-sm font-semibold text-[#09090B]"
                  >
                    Create Booking Request
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {filteredBookings.map((booking) => (
                    <article
                      key={booking.id}
                      className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#111114] p-6"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="tabular-nums text-xs font-semibold text-[#D4AF37]">
                              {booking.reference_code} · <span className="capitalize">{booking.status}</span>
                            </p>
                            <h3 className="font-display mt-1 text-2xl font-semibold text-[#F6F3EC]">
                              {booking.destination}
                            </h3>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleDeleteBooking(booking.id)}
                            aria-label={`Remove request ${booking.reference_code}`}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-[#A9A295] transition-colors hover:border-red-400/50 hover:text-red-300"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>

                        <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-white/10 pt-4 text-xs">
                          <div>
                            <dt className="text-[#A9A295]">Traveler</dt>
                            <dd className="mt-0.5 font-medium text-[#F6F3EC]">
                              {booking.full_name} ({booking.country})
                            </dd>
                          </div>
                          <div>
                            <dt className="text-[#A9A295]">Travel Date</dt>
                            <dd className="tabular-nums mt-0.5 font-medium text-[#F6F3EC]">
                              {booking.travel_date}
                            </dd>
                          </div>
                          <div>
                            <dt className="text-[#A9A295]">Party Size</dt>
                            <dd className="tabular-nums mt-0.5 font-medium text-[#F6F3EC]">
                              {booking.adults} Adults, {booking.children} Children
                            </dd>
                          </div>
                          <div>
                            <dt className="text-[#A9A295]">Duration</dt>
                            <dd className="tabular-nums mt-0.5 font-medium text-[#F6F3EC]">
                              {booking.duration_days} Days
                            </dd>
                          </div>
                        </dl>
                      </div>

                      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
                        <label className="flex items-center gap-2 text-xs text-[#A9A295]">
                          <span>Status:</span>
                          <select
                            value={booking.status}
                            onChange={(e) =>
                              handleStatusChange(booking.id, e.target.value as BookingStatus)
                            }
                            className="rounded border border-white/15 bg-[#070708] px-2.5 py-1.5 text-xs text-[#F6F3EC] focus:border-[#D4AF37] focus:outline-none"
                          >
                            <option value="pending">Pending</option>
                            <option value="reviewed">Reviewed</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </label>

                        <a
                          href={buildWhatsAppUrl(
                            buildBookingWhatsAppSummary(booking, booking.reference_code),
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:text-[#E5C55B]"
                        >
                          <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                          Follow Up on WhatsApp
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
