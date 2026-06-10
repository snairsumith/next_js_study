# SyllabusHub — Next.js Sample Project

A single Next.js application that demonstrates **all 36 topics** from the [Next.js Syllabus](../docs/NextJs-syllabus.md). Built for interns and training batches.

## Prerequisites

- **Node.js 20.9+** (required by Next.js 16)

## Quick Start

```bash
cd next-syllabus-demo
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Demo login:**
- User: `user@demo.com` / `demo123`
- Admin: `admin@demo.com` / `admin123`

## Topic Coverage Map

| Topic | Feature / Route | Key Files |
| ----- | --------------- | --------- |
| 1. JS Prerequisites | Utility helpers | `src/lib/utils.ts` |
| 2. Introduction | Home page overview | `src/app/page.tsx` |
| 3. Environment Setup | Project scaffold | `package.json`, `.env.example` |
| 4. App Router | Special files | `loading.tsx`, `error.tsx`, `not-found.tsx` |
| 5. Layouts & Templates | Route groups | `(marketing)/`, `(learn)/`, `@modal/` |
| 6. Components | Server vs Client | `/demos/components` |
| 7. Props | Data passing | `/demos/props` |
| 8. Styling | Tailwind + CSS Modules | `/demos/styling` |
| 9. Navigation | Link, active states | `nav-link.tsx`, Header |
| 10. Fetching Basics | Countries list | `/countries` |
| 11. Forms | Contact form | `/contact` |
| 12. Client Hooks | Counter, clock | `/demos/hooks` |
| 13. Server Components | Async server fetch | `fetch-countries.ts` |
| 14. Data Fetching | Parallel/cached fetch | `/demos/caching` |
| 15. Route Handlers | REST API | `/api/health`, `/api/todos` |
| 16. Dynamic Routes | `[topicId]`, `[...slug]` | `/topics/[id]`, `/blog/[...slug]` |
| 17. Search Params | Filters, weather | `/topics?level=`, `/weather?city=` |
| 18. Middleware | Auth redirects | `src/middleware.ts` |
| 19. Env Variables | Public vs server | `src/lib/env.ts`, `.env.example` |
| 20. Error Handling | Boundaries, notFound | `/demos/error`, `error.tsx` |
| 21. Loading & Suspense | Skeletons | `loading.tsx`, Suspense boundaries |
| 22. Metadata & SEO | sitemap, robots | `sitemap.ts`, `robots.ts` |
| 23. Server Actions | Todo CRUD | `/todos`, `todo-actions.ts` |
| 24. Caching | revalidate, tags | `fetch-countries.ts`, `/demos/caching` |
| 25. Auth Basics | Cookie sessions | `session.ts`, middleware |
| 26. Auth.js | NextAuth config | `src/auth.ts`, `/api/auth/[...nextauth]` |
| 27. Architecture | Feature folders | `src/features/`, `src/lib/` |
| 28. TypeScript | Typed props | `src/types/index.ts` |
| 29. Advanced TS | Zod validation | `login-action.ts`, `todo-actions.ts` |
| 30. Security | Headers, validation | `middleware.ts`, Zod schemas |
| 31. Testing | Vitest | `src/__tests__/` |
| 32. Performance | Image, fonts, dynamic | `/demos/performance` |
| 33. Build & Deploy | Docker, standalone | `Dockerfile`, `next.config.ts` |
| 34. Monitoring | Logger utility | `src/lib/logger.ts` |
| 35. Real World | Blog, weather, dashboard | Multiple routes |
| 36. Capstone | Full app integration | Entire project |

## Project Structure

```
src/
├── app/                    # Routes (App Router)
│   ├── (marketing)/        # Route group: about, contact
│   ├── (learn)/            # Route group: topics
│   ├── (dashboard)/        # Protected dashboard
│   ├── @modal/             # Parallel route (intercepting)
│   ├── api/                # Route Handlers
│   └── demos/              # Topic-specific demos
├── components/             # Shared UI
├── features/               # Feature modules
│   ├── auth/
│   ├── todos/
│   ├── blog/
│   ├── countries/
│   └── weather/
├── lib/                    # Utilities
├── types/                  # Shared TypeScript types
└── data/                   # Static data & JSON store
```

## Scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Run production server |
| `npm test` | Run Vitest tests |
| `npm run lint` | ESLint check |

## Study Workflow

1. Read the topic in `docs/topics-wise/`.
2. Find the matching route in the table above.
3. Open the key files and trace the code.
4. Try modifying the feature as an exercise.
5. Log progress in `docs/DailyUpdates.md`.
