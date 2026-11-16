# K & O Vacations — Sri Lanka Luxury Travel Website

Official web application for **K & O Vacations**, a Sri Lankan travel company based at 97 Paradise Zone 01, Milenia City, Athurugiriya, Sri Lanka.

## Tech Stack
- React 19 + TypeScript + Vite
- Tailwind CSS v4
- React Router (`react-router-dom`)
- Supabase (`@supabase/supabase-js`) for `booking_requests` and `contact_inquiries`
- Netlify SPA configuration (`netlify.toml` & `public/_redirects`)

## Local Development
```bash
npm install
npm run dev
```

## Production Build
```bash
npm run build
```

## Supabase Setup
1. Create a new Supabase project.
2. Open the Supabase SQL Editor and run `supabase/schema.sql` to create `booking_requests` and `contact_inquiries` with validation constraints and Row Level Security (RLS) policies.
3. Add your public client environment variables (never use `service_role` in frontend code):
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

## Netlify Deployment
1. Push this repository to GitHub.
2. Connect the repository in Netlify:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in Netlify Site Environment Variables.
