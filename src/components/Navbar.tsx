import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { BRAND } from '../data/brand';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/tours', label: 'Tours' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070708]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="flex shrink-0 items-center gap-3 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
        >
          <img
            src={BRAND.logoSrc}
            alt="K & O Vacations emblem"
            className="h-10 w-10 rounded-md object-cover border border-[#D4AF37]/30"
          />
          <span className="font-display text-xl font-semibold tracking-wide text-[#F6F3EC] sm:text-2xl">
            {BRAND.name}
          </span>
        </Link>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary Navigation">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `shrink-0 whitespace-nowrap border-b pb-0.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37] ${
                  isActive
                    ? 'border-[#D4AF37] text-[#D4AF37]'
                    : 'border-transparent text-[#D6D0C4] hover:border-[#D4AF37]/60 hover:text-[#F6F3EC]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex shrink-0 items-center gap-3">
          <Link
            to="/booking"
            className="hidden shrink-0 whitespace-nowrap rounded-md bg-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-[#09090B] transition-colors duration-200 hover:bg-[#E5C55B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37] sm:inline-flex"
          >
            Book Journey
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 text-[#F6F3EC] transition-colors hover:border-[#D4AF37]/60 hover:text-[#D4AF37] focus-visible:outline-2 focus-visible:outline-[#D4AF37] md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="border-t border-white/10 bg-[#0B0B0D] px-4 pb-5 pt-3 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `flex min-h-[44px] items-center rounded-md px-3 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#D4AF37]/10 text-[#D4AF37]'
                      : 'text-[#E7E2D8] hover:bg-white/5 hover:text-[#F6F3EC]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/booking"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex min-h-[44px] items-center justify-center rounded-md bg-[#D4AF37] px-4 py-2.5 text-sm font-semibold text-[#09090B] transition-colors hover:bg-[#E5C55B]"
            >
              Book Your Journey
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
