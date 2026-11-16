import { useState, type FormEvent } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  Loader2,
  MapPin,
  MessageCircle,
  Send,
} from 'lucide-react';
import { BRAND, buildWhatsAppUrl } from '../data/brand';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { submitContactInquiry, validateContactInput } from '../services/bookingService';
import type { ContactInquiryInput } from '../types/travel';

const EMPTY_CONTACT: ContactInquiryInput = {
  full_name: '',
  email: '',
  whatsapp_number: '',
  subject: '',
  message: '',
};

export default function ContactPage() {
  useDocumentMeta({
    title: 'Contact Us — K & O Vacations | Athurugiriya, Sri Lanka',
    description:
      'Contact K & O Vacations at 97 Paradise Zone 01, Milenia City, Athurugiriya, Sri Lanka or via WhatsApp at +94 70 363 6824.',
  });

  const [form, setForm] = useState<ContactInquiryInput>(EMPTY_CONTACT);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactInquiryInput, string>>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = <K extends keyof ContactInquiryInput>(
    field: K,
    value: ContactInquiryInput[K],
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateContactInput(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitError('Please review the highlighted fields before sending your inquiry.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await submitContactInquiry(form);
      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : 'Unable to send your message right now.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsAppInquiryUrl = buildWhatsAppUrl(
    form.full_name
      ? `Hello K & O Vacations,\nName: ${form.full_name}\nTopic: ${form.subject || 'Sri Lanka Travel Inquiry'}\nMessage: ${form.message}`
      : 'Hello K & O Vacations, I have a Sri Lanka travel inquiry.',
  );

  return (
    <>
      <section className="border-b border-white/10 bg-[#0B0B0D] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#D4AF37] uppercase">
            Contact {BRAND.name}
          </p>
          <h1
            className="font-display mt-3 max-w-3xl text-4xl font-semibold text-[#F6F3EC] sm:text-6xl"
            style={{ textWrap: 'balance' }}
          >
            Connect With Our Travel Team
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#D6D0C4]">
            Based in Athurugiriya, Sri Lanka, {BRAND.name} curates private island journeys tailored
            around your travel dates, wildlife interests, and comfort preferences.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#070708] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Left Column: Verified Business Details + Map */}
            <div className="space-y-6 lg:col-span-5">
              <div className="rounded-xl border border-white/10 bg-[#111114] p-6 sm:p-7">
                <h2 className="font-display text-2xl font-semibold text-[#F6F3EC]">
                  Direct Contact Details
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#A9A295]">
                  Reach us directly at our Athurugiriya office address or connect with our travel
                  concierge on WhatsApp.
                </p>

                <div className="mt-6 space-y-5 border-t border-white/10 pt-5 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-semibold text-[#D4AF37] uppercase">Address</p>
                      <address className="mt-1 not-italic leading-relaxed text-[#F6F3EC]">
                        {BRAND.address}
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageCircle
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs font-semibold text-[#D4AF37] uppercase">WhatsApp</p>
                      <a
                        href={BRAND.whatsappBaseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tabular-nums mt-1 inline-block font-semibold text-[#F6F3EC] transition-colors hover:text-[#D4AF37]"
                      >
                        {BRAND.whatsappDisplay}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={buildWhatsAppUrl('Hello K & O Vacations, I have a travel inquiry.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-md bg-[#D4AF37] px-5 py-2.5 text-xs font-semibold text-[#09090B] transition-colors hover:bg-[#E5C55B]"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Message on WhatsApp
                  </a>
                  <a
                    href={BRAND.mapsLinkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-white/15 px-4 py-2.5 text-xs font-semibold text-[#F6F3EC] transition-colors hover:border-[#D4AF37]"
                  >
                    Open in Google Maps
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111114]">
                <iframe
                  title="K & O Vacations — Athurugiriya, Sri Lanka Location Map"
                  src={BRAND.mapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-72 w-full border-0"
                />
              </div>
            </div>

            {/* Right Column: Travel Inquiry Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="rounded-xl border border-[#D4AF37]/40 bg-[#111114] p-7 sm:p-9">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[#D4AF37]" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-semibold tracking-wider text-[#D4AF37] uppercase">
                        Inquiry Sent
                      </p>
                      <h2 className="font-display mt-1 text-3xl font-semibold text-[#F6F3EC]">
                        Thank You for Reaching Out
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-[#D6D0C4]">
                        Your travel inquiry has been received by {BRAND.name}. If you would like an
                        immediate response, you can also send your message directly via WhatsApp.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={whatsAppInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-md bg-[#D4AF37] px-6 py-2.5 text-sm font-semibold text-[#09090B] transition-colors hover:bg-[#E5C55B]"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      Continue on WhatsApp
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setForm(EMPTY_CONTACT);
                      }}
                      className="inline-flex min-h-[44px] items-center rounded-md border border-white/20 px-5 py-2.5 text-sm font-semibold text-[#F6F3EC] hover:border-[#D4AF37]"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="rounded-xl border border-white/10 bg-[#111114] p-6 sm:p-8"
                >
                  <p className="text-xs font-semibold tracking-wider text-[#D4AF37] uppercase">
                    Travel Inquiry
                  </p>
                  <h2 className="font-display mt-1 text-3xl font-semibold text-[#F6F3EC]">
                    Send Us a Message
                  </h2>
                  <p className="mt-2 text-sm text-[#A9A295]">
                    Ask about destinations, wildlife seasons, private vehicles, or custom multi-day
                    Sri Lanka circuits.
                  </p>

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
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-[#E7E2D8]"
                      >
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={form.full_name}
                        onChange={(e) => handleChange('full_name', e.target.value)}
                        placeholder="Your full name"
                        className="mt-1.5 w-full rounded-md border border-white/15 bg-[#070708] px-3.5 py-2.5 text-sm text-[#F6F3EC] placeholder-[#78716C] focus:border-[#D4AF37] focus:outline-none"
                      />
                      {errors.full_name && (
                        <p className="mt-1 text-xs text-red-300">{errors.full_name}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-[#E7E2D8]"
                      >
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="you@example.com"
                        className="mt-1.5 w-full rounded-md border border-white/15 bg-[#070708] px-3.5 py-2.5 text-sm text-[#F6F3EC] placeholder-[#78716C] focus:border-[#D4AF37] focus:outline-none"
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-300">{errors.email}</p>}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-whatsapp"
                        className="block text-xs font-semibold text-[#E7E2D8]"
                      >
                        WhatsApp Number *
                      </label>
                      <input
                        id="contact-whatsapp"
                        type="tel"
                        required
                        value={form.whatsapp_number}
                        onChange={(e) => handleChange('whatsapp_number', e.target.value)}
                        placeholder="+94 7X XXX XXXX"
                        className="mt-1.5 w-full rounded-md border border-white/15 bg-[#070708] px-3.5 py-2.5 text-sm text-[#F6F3EC] placeholder-[#78716C] focus:border-[#D4AF37] focus:outline-none"
                      />
                      {errors.whatsapp_number && (
                        <p className="mt-1 text-xs text-red-300">{errors.whatsapp_number}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-xs font-semibold text-[#E7E2D8]"
                      >
                        Travel Topic / Subject *
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        required
                        value={form.subject}
                        onChange={(e) => handleChange('subject', e.target.value)}
                        placeholder="e.g. 7-Day Safari & Cultural Tour"
                        className="mt-1.5 w-full rounded-md border border-white/15 bg-[#070708] px-3.5 py-2.5 text-sm text-[#F6F3EC] placeholder-[#78716C] focus:border-[#D4AF37] focus:outline-none"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-xs text-red-300">{errors.subject}</p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-semibold text-[#E7E2D8]"
                      >
                        Your Message *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        required
                        value={form.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="Tell us about your travel dates, group size, and places you wish to visit in Sri Lanka..."
                        className="mt-1.5 w-full rounded-md border border-white/15 bg-[#070708] px-3.5 py-2.5 text-sm text-[#F6F3EC] placeholder-[#78716C] focus:border-[#D4AF37] focus:outline-none"
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-300">{errors.message}</p>
                      )}
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
                      Submit Inquiry
                    </button>

                    <a
                      href={whatsAppInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[46px] items-center gap-2 rounded-md border border-[#D4AF37]/45 px-6 py-3 text-sm font-semibold text-[#F6F3EC] transition-colors hover:bg-[#D4AF37]/15"
                    >
                      <MessageCircle className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
                      Send via WhatsApp
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
