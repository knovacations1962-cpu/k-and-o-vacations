-- K & O Vacations — Supabase PostgreSQL Schema & Row Level Security
-- Run this script in your Supabase Project SQL Editor.

-- Enable UUID generation extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1. Booking Requests Table
CREATE TABLE IF NOT EXISTS public.booking_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reference_code TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL CHECK (char_length(trim(full_name)) BETWEEN 2 AND 120),
  email TEXT NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  whatsapp_number TEXT NOT NULL CHECK (char_length(trim(whatsapp_number)) BETWEEN 7 AND 30),
  country TEXT NOT NULL CHECK (char_length(trim(country)) BETWEEN 2 AND 80),
  destination TEXT NOT NULL CHECK (char_length(trim(destination)) BETWEEN 2 AND 160),
  travel_date DATE NOT NULL,
  adults INTEGER NOT NULL CHECK (adults >= 1 AND adults <= 50),
  children INTEGER NOT NULL DEFAULT 0 CHECK (children >= 0 AND children <= 50),
  duration_days INTEGER NOT NULL CHECK (duration_days >= 1 AND duration_days <= 60),
  special_requirements TEXT DEFAULT '',
  additional_notes TEXT DEFAULT '',
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'confirmed', 'cancelled')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now())
);

-- Indexes for booking_requests
CREATE INDEX IF NOT EXISTS idx_booking_requests_created_at ON public.booking_requests (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_booking_requests_status ON public.booking_requests (status);
CREATE INDEX IF NOT EXISTS idx_booking_requests_reference ON public.booking_requests (reference_code);

-- Enable Row Level Security (RLS)
ALTER TABLE public.booking_requests ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous website visitors to submit a new booking request
-- Status is strictly forced to 'pending' on public inserts to prevent privilege escalation.
DROP POLICY IF EXISTS "Public can submit booking requests" ON public.booking_requests;
CREATE POLICY "Public can submit booking requests"
  ON public.booking_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    status = 'pending'
    AND adults >= 1
    AND children >= 0
    AND duration_days >= 1
  );

-- Policy: Only authenticated K & O Vacations administrators can view, update, or delete booking requests
DROP POLICY IF EXISTS "Authenticated staff can view bookings" ON public.booking_requests;
CREATE POLICY "Authenticated staff can view bookings"
  ON public.booking_requests
  FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "Authenticated staff can update bookings" ON public.booking_requests;
CREATE POLICY "Authenticated staff can update bookings"
  ON public.booking_requests
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (status IN ('pending', 'reviewed', 'confirmed', 'cancelled'));

-- 2. Contact Inquiries Table
CREATE TABLE IF NOT EXISTS public.contact_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL CHECK (char_length(trim(full_name)) BETWEEN 2 AND 120),
  email TEXT NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  whatsapp_number TEXT NOT NULL CHECK (char_length(trim(whatsapp_number)) BETWEEN 7 AND 30),
  subject TEXT NOT NULL CHECK (char_length(trim(subject)) BETWEEN 2 AND 160),
  message TEXT NOT NULL CHECK (char_length(trim(message)) BETWEEN 5 AND 3000),
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'responded', 'archived')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now())
);

CREATE INDEX IF NOT EXISTS idx_contact_inquiries_created_at ON public.contact_inquiries (created_at DESC);

ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can submit contact inquiries" ON public.contact_inquiries;
CREATE POLICY "Public can submit contact inquiries"
  ON public.contact_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (status = 'new');

DROP POLICY IF EXISTS "Authenticated staff can read contact inquiries" ON public.contact_inquiries;
CREATE POLICY "Authenticated staff can read contact inquiries"
  ON public.contact_inquiries
  FOR SELECT
  TO authenticated
  USING (true);
