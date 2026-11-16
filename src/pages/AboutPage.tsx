import { Link } from 'react-router-dom';
import { ArrowRight, Compass, MapPin, MessageCircle, ShieldCheck } from 'lucide-react';
import { BRAND, buildWhatsAppUrl } from '../data/brand';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import ResilientImage from '../components/ResilientImage';

const COMMITMENTS = [
  {
    number: '01',
    title: 'Island-Wide Local Knowledge',
    description:
      'From the ancient capitals of Sigiriya and Polonnaruwa to Jaffna in the far north and Yala in the deep south, every route is planned by Sri Lankans who know every turn.',
  },
  {
    number: '02',
    title: 'Private Chauffeur-Guided Comfort',
    description:
      'Travel unhurriedly in modern, air-conditioned private vehicles with seasoned English-speaking chauffeur-guides dedicated to your safety and flexibility.',
  },
  {
    number: '03',
    title: 'Ethical Wildlife & Cultural Respect',
    description:
      'We partner with conscientious safari trackers and local communities—prioritizing respectful wildlife distances and genuine cultural exchange.',
  },
  {
    number: '04',
    title: 'Direct Concierge Accountability',
    description:
      'Based in Athurugiriya, Sri Lanka, our team remains directly reachable on WhatsApp before your flight lands and throughout every day of your stay.',
  },
];

export default function AboutPage() {
  useDocumentMeta({
    title: 'About Us — K & O Vacations | Sri Lanka Travel Specialists',
    description:
      'Learn about K & O Vacations in Athurugiriya, Sri Lanka—curating private wildlife safaris, cultural heritage circuits, and island-wide luxury journeys.',
  });

  return (
    <>
      {/* Page Header */}
      <section className="border-b border-white/10 bg-[#0B0B0D] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#D4AF37] uppercase">
            About {BRAND.name}
          </p>
          <h1
            className="font-display mt-3 max-w-3xl text-4xl font-semibold text-[#F6F3EC] sm:text-6xl"
            style={{ textWrap: 'balance' }}
          >
            Sri Lankan Hospitality Crafted With Care
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#D6D0C4] sm:text-lg">
            Rooted in Athurugiriya, Sri Lanka, K &amp; O Vacations designs private, unhurried
            journeys that reveal the island’s ancient kingdoms, wild sanctuaries, misty highlands,
            and vibrant northern culture.
          </p>
        </div>
      </section>

      {/* Balanced 2-Column Editorial Story */}
      <section className="border-b border-white/10 bg-[#070708] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111114] lg:col-span-6">
              <ResilientImage
                src="/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.07.44_bd8c7501.jpeg"
                alt="Guests enjoying a traditional village bullock cart journey with K & O Vacations"
                className="h-full min-h-[340px] w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center lg:col-span-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37]">
                <Compass className="h-4 w-4" aria-hidden="true" />
                <span>Our Philosophy</span>
              </div>
              <h2 className="font-display mt-3 text-3xl font-semibold text-[#F6F3EC] sm:text-4xl">
                Beyond Standard Tourist Circuits
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#D6D0C4]">
                Sri Lanka is an island of remarkable contrasts packed within compact horizons. In a
                single week, you can watch a wild leopard step across coastal sand at dawn, walk the
                fifth-century terraces of Sigiriya, stroll beneath giant fig canopies in Peradeniya,
                and hear evening temple bells in Jaffna.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#A9A295]">
                At K &amp; O Vacations, we believe luxury travel means effortless pacing, honest
                local insight, and genuine human connection. Whether you are a solo photographer, a
                couple seeking serene retreats, or a family exploring Sri Lanka together, we build
                your itinerary directly around your interests.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 border-t border-white/10 pt-6 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-[#F6F3EC]">Home Base</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#A9A295]">
                      {BRAND.address}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-[#F6F3EC]">Direct WhatsApp Desk</p>
                    <p className="mt-0.5 tabular-nums text-xs text-[#A9A295]">
                      {BRAND.whatsappDisplay}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Commitments Grid */}
      <section className="border-b border-white/10 bg-[#0B0B0D] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#D4AF37] uppercase">
              How We Work
            </p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-[#F6F3EC] sm:text-4xl">
              The K &amp; O Standard
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {COMMITMENTS.map((item) => (
              <div
                key={item.number}
                className="rounded-xl border border-white/10 bg-[#111114] p-7"
              >
                <span className="tabular-nums text-xs font-semibold text-[#D4AF37]">
                  {item.number}.
                </span>
                <h3 className="font-display mt-2 text-2xl font-semibold text-[#F6F3EC]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#A9A295]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#070708] py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-semibold text-[#F6F3EC]">
              Ready to plan your Sri Lanka route?
            </h2>
            <p className="mt-2 text-sm text-[#A9A295]">
              Explore our curated itineraries or message our travel specialists directly.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/tours"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-md bg-[#D4AF37] px-6 py-2.5 text-sm font-semibold text-[#09090B] transition-colors hover:bg-[#E5C55B]"
            >
              Browse Tours
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={buildWhatsAppUrl('Hello K & O Vacations, I would like to discuss a trip to Sri Lanka.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-[#D4AF37]/50 px-6 py-2.5 text-sm font-semibold text-[#F6F3EC] transition-colors hover:bg-[#D4AF37]/15"
            >
              <MessageCircle className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
              WhatsApp Concierge
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
