# Offness

Luxury travel concierge. A private service that designs and manages journeys end to end for a small number of members.

This repository holds the Offness web application: the public site, the curated journeys, and the membership intake.

The service model follows chat-first members' concierges: members simply message a designer on WhatsApp, any hour, and get a reply within minutes. WhatsApp is therefore the primary call to action on every page (a floating button plus in-context buttons with pre-filled messages). The forms remain as a secondary, written route.

Set the real WhatsApp number in `src/lib/site.ts` (`siteConfig.whatsapp`) before launch; the committed value is a reserved placeholder.

## Stack

- Next.js 16 (App Router, Server Actions) with React 19
- TypeScript, strict
- Tailwind CSS 4 with a small set of design tokens in `src/app/globals.css`
- Zod for validation, shared by the web form and the JSON API
- Vitest for unit tests

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command             | What it does                                   |
| ------------------- | ---------------------------------------------- |
| `npm run dev`       | Development server                             |
| `npm run build`     | Production build                               |
| `npm run start`     | Serve the production build                     |
| `npm run lint`      | ESLint                                         |
| `npm run typecheck` | TypeScript, no emit                            |
| `npm run test`      | Vitest unit tests                              |
| `npm run check`     | Lint, typecheck and tests, in that order       |

## Layout

```
src/
  app/
    page.tsx                 Home (split hero, cards, carousels, destinations, enquiry form)
    journeys/                Signature journeys (with region filter) and detail pages
    membership/              Membership tiers, corporate membership and FAQ
    contact/                 Enquiry form and server action
    members/                 Members' area placeholder
    request/                 Concierge intake form, server action, confirmation
    api/requests/route.ts    JSON intake endpoint (POST)
    sitemap.ts, robots.ts    SEO
  components/                Header, footer, cards, form, UI primitives
  lib/
    journeys.ts              Journey content
    membership.ts            Tier content
    requests/schema.ts       Zod schema and parsing helpers
    requests/store.ts        Append-only JSON store (requests and enquiries)
    enquiries/schema.ts      Zod schema for the membership enquiry form
    services.ts, testimonials.ts, destinations.ts   Home page content
    site.ts                  Site-wide config (name, contact, nav)
```

## Concierge requests

The form at `/request` posts to a Server Action, validates with Zod, and stores the request in `data/requests.json` (ignored by git). Each request gets a reference like `OFF-7K3M9Q` that is shown on the confirmation page.

The membership enquiry form on the home page and `/contact` works the same way and stores to `data/enquiries.json`.

The same validation backs `POST /api/requests`, which accepts a JSON body with the same fields and returns `201` with the reference, or `422` with per-field errors.

```bash
curl -X POST http://localhost:3000/api/requests \
  -H 'content-type: application/json' \
  -d '{"fullName":"Ada Lovelace","email":"ada@example.com","contactMethod":"Email","destination":"Kyoto","travelStyle":"Cities and culture","travellers":2,"budget":"£15,000 to £30,000"}'
```

To move storage elsewhere, set `OFFNESS_REQUESTS_FILE`, or replace `saveRequest` and `listRequests` in `src/lib/requests/store.ts` with a database or CRM client.

## Content

Journeys, tiers, copy and contact details live in `src/lib`. Journey artwork is a generated gradient per journey; swap `JourneyArtwork` for `next/image` when photography is ready.
