# Next JS Syllabus — Beginner to Advanced

A single, ordered syllabus for Next.js training. Each topic builds on previous modules. Useful for students, daily updates, and upcoming batches.

**Prerequisite:** Students should complete React fundamentals (components, props, state, hooks) before or alongside early Next.js modules.

---

# Beginner Level — Next.js Foundations

## 1. Web and JavaScript Prerequisites

- HTML structure and semantic tags.
- CSS basics, flexbox, grid, and responsive design.
- Modern JavaScript: `let`, `const`, arrow functions, arrays, objects.
- ES modules: `import` and `export`.
- Array methods: `.map()`, `.filter()`, `.find()`, `.reduce()`.
- Async JavaScript: promises, `async/await`, and `try/catch`.
- React basics recap: components, JSX, props, state (recommended).

---

## 2. Introduction to Next.js

- What Next.js is.
- Next.js vs plain React (Vite/CRA).
- Why companies use Next.js.
- Full-stack React framework overview.
- SSR, SSG, ISR, and CSR explained simply.
- App Router vs Pages Router (focus on App Router).
- When to choose Next.js vs other frameworks.
- Next.js architecture: file-based routing and React Server Components.

---

## 3. Environment Setup

- Install Node.js and npm.
- Check versions with `node -v` and `npm -v`.
- Create a new Next.js project with `create-next-app`.
- Understand project folders: `app`, `public`, `components`, config files.
- Understand `package.json` and npm scripts.
- Run the dev server and open the app in the browser.
- ESLint and TypeScript setup in Next.js.

---

## 4. App Router Fundamentals

- The `app` directory structure.
- `page.tsx` — route UI.
- `layout.tsx` — shared UI wrapper.
- `loading.tsx` — loading UI.
- `error.tsx` — error UI.
- `not-found.tsx` — 404 UI.
- Nested routes and folder conventions.
- Colocation of route files.

---

## 5. Pages, Layouts, and Templates

- Root layout and HTML shell.
- Nested layouts with `children`.
- Layout persistence across navigation.
- Templates vs layouts.
- Route groups with `(folder)`.
- Parallel routes overview.
- Intercepting routes overview.

---

## 6. Components in Next.js

- Server Components by default.
- Client Components with `'use client'`.
- When to use server vs client components.
- Composing server and client components.
- File structure: one component per file.
- Named exports vs default exports.
- Component naming conventions.

---

## 7. Props and Data Passing

- Passing props from server to client components.
- Passing props between server components.
- Serializable props rule.
- Passing `children` for composition.
- Passing event handlers (client only).
- Props are read-only.
- Common prop-passing mistakes across server/client boundary.

---

## 8. Styling in Next.js

- Global CSS in `app/globals.css`.
- CSS Modules in components.
- Tailwind CSS setup with Next.js.
- Conditional class names.
- Responsive design with Tailwind.
- CSS-in-JS considerations with Server Components.
- Dark mode basics.

---

## 9. Navigation and Routing

- `Link` component for client-side navigation.
- `useRouter` and `usePathname` (client).
- `redirect()` and `permanentRedirect()` (server).
- Active link styling.
- Programmatic navigation.
- Back and forward behavior.
- Prefetching with `Link`.

---

## 10. Fetching Data Basics

- Fetching in Server Components.
- `async` page components.
- Displaying fetched data in UI.
- Loading states with `loading.tsx`.
- Error handling for fetch failures.
- External API vs local data.
- Avoiding fetch in client when server can handle it.

---

## 11. Forms and User Input

- Client-side forms with controlled inputs.
- Form `action` attribute basics.
- Server Actions introduction.
- Form validation on client.
- Handling submit states.
- Revalidation after form submit.
- Progressive enhancement mindset.

---

# Intermediate Level — Real App Skills

## 12. Client Components and Hooks

- `'use client'` directive.
- `useState` and `useEffect` in Next.js.
- `useRef`, `useContext`, `useMemo`, `useCallback`.
- Rules of Hooks in client components.
- When client components are necessary.
- Minimizing client bundle size.
- Interactive UI patterns.

---

## 13. Server Components Deep Dive

- Server Components run only on the server.
- No hooks or browser APIs in server components.
- Direct database and file system access.
- Async server components.
- Streaming and Suspense boundaries.
- Splitting server/client at the right boundary.
- Performance benefits of Server Components.

---

## 14. Data Fetching Patterns

- Fetch in Server Components vs client `useEffect`.
- Parallel data fetching.
- Sequential data fetching when needed.
- Fetch caching in Next.js.
- `cache: 'no-store'` and dynamic fetching.
- Revalidation strategies overview.
- TanStack Query with Next.js (client-side).

---

## 15. Route Handlers (API Routes)

- Creating `route.ts` in the `app` directory.
- GET, POST, PUT, PATCH, DELETE handlers.
- Reading request body and query params.
- Returning JSON responses.
- When to use Route Handlers vs Server Actions.
- Connecting to Express or external APIs.
- Error responses and status codes.

---

## 16. Dynamic Routes and Params

- Dynamic segments: `[id]`, `[slug]`.
- Catch-all routes: `[...slug]`.
- Optional catch-all: `[[...slug]]`.
- `params` in page components.
- `generateStaticParams` for static generation.
- Dynamic vs static route decisions.
- Not found handling for invalid params.

---

## 17. Search Params and URL State

- `searchParams` in page components.
- Reading query strings on the server.
- `useSearchParams` on the client.
- Filtering and sorting via URL.
- Pagination with search params.
- `nuqs` for URL state management.
- Sharable and bookmarkable UI state.

---

## 18. Middleware

- What Next.js middleware is.
- `middleware.ts` at project root.
- Matching routes with `config.matcher`.
- Redirects and rewrites in middleware.
- Reading cookies and headers.
- Auth checks before page load.
- Middleware limitations and edge runtime.

---

## 19. Environment Variables

- `.env.local` and `.env` files.
- `NEXT_PUBLIC_` prefix for client exposure.
- Server-only environment variables.
- `process.env` in Server Components and Route Handlers.
- Never expose secrets to the client.
- `.env.example` for team onboarding.
- Environment config per deployment target.

---

## 20. Error Handling

- `error.tsx` error boundaries per route.
- `global-error.tsx` for root errors.
- `not-found.tsx` for missing resources.
- `notFound()` function.
- Try/catch in Server Components and actions.
- User-friendly error messages.
- Logging errors without leaking secrets.

---

## 21. Loading States and Suspense

- `loading.tsx` automatic loading UI.
- React `Suspense` boundaries.
- Streaming HTML to the client.
- Skeleton UI patterns.
- Loading states for slow data.
- Avoiding layout shift.
- Nested Suspense boundaries.

---

## 22. Metadata and SEO

- Static metadata export.
- `generateMetadata` for dynamic pages.
- Title, description, Open Graph tags.
- Favicon and app icons.
- `robots.txt` and `sitemap.ts`.
- Canonical URLs.
- SEO best practices for Next.js apps.

---

# Advanced Level — Scalable Next.js

## 23. Server Actions

- `'use server'` directive.
- Defining actions in separate files.
- Form actions without client JavaScript.
- Validating input on the server.
- Revalidating paths and tags.
- Redirect after action.
- Server Action security considerations.

---

## 24. Caching and Revalidation

- Request memoization.
- Data Cache and Full Route Cache.
- `revalidate` option in fetch.
- `revalidatePath` and `revalidateTag`.
- Time-based revalidation (ISR).
- On-demand revalidation.
- Opting out of caching when needed.

---

## 25. Authentication Basics

- Auth in Next.js overview.
- Session vs JWT approaches.
- Protecting routes with middleware.
- Protecting Server Actions.
- Cookie-based sessions overview.
- Login and logout flows.
- Never trust client-only auth checks.

---

## 26. Authentication with Auth.js

- Auth.js (NextAuth) setup.
- Providers: credentials, Google, GitHub.
- Session management.
- `getServerSession` in Server Components.
- Protected API routes and pages.
- Role-based access.
- Callbacks and custom logic.

---

## 27. Next.js Project Architecture

- Folder structure best practices.
- Feature-based organization.
- `components/`, `lib/`, `hooks/`, `types/`.
- Separating server and client components.
- API service layer.
- Constants and utility helpers.
- Barrel exports and when to avoid them.

---

## 28. TypeScript with Next.js

- TypeScript setup in create-next-app.
- Typing page props: `params`, `searchParams`.
- Typing Server Actions.
- Typing Route Handlers.
- Typing metadata and layouts.
- Shared types between client and server.
- Avoiding `any`.

---

## 29. Advanced TypeScript with Next.js

- Generic components.
- Utility types for API responses.
- Discriminated unions for UI states.
- Type-safe Server Actions with Zod.
- Type-safe Route Handlers.
- Typing `useSearchParams` and forms.
- End-to-end type safety patterns.

---

## 30. Security Best Practices

- Server-only secrets.
- CSRF considerations with Server Actions.
- Input validation on the server.
- Avoiding XSS with proper escaping.
- Content Security Policy headers.
- Rate limiting overview.
- Safe error messages for users.

---

## 31. Testing

- Testing tools: Vitest or Jest.
- React Testing Library for components.
- Testing Server Actions.
- Testing Route Handlers.
- Mocking fetch and database.
- E2E testing overview.
- What to test vs what to skip.

---

## 32. Image, Font, and Performance Optimization

- `next/image` component.
- Image sizing, lazy loading, and formats.
- `next/font` for font optimization.
- Understanding re-renders in client components.
- Code splitting with dynamic imports.
- `React.lazy` and `Suspense`.
- Core Web Vitals and Lighthouse.

---

# Production Level — Real World Delivery

## 33. Build and Deployment

- Production build with `npm run build`.
- Understanding build output.
- Preview with `npm start`.
- Deploy on Vercel.
- Deploy on Netlify, AWS, or Docker.
- Environment variables on hosting platforms.
- CI/CD basics for Next.js.

---

## 34. Monitoring and Maintenance

- Runtime error monitoring.
- Logging strategy for server and client.
- Performance monitoring.
- Analytics integration.
- Versioning and release notes.
- Dependency updates and security checks.
- Incident response basics.

---

## 35. Real World Project Practice

- Blog with MDX or CMS.
- E-commerce storefront.
- Dashboard with auth.
- Todo app with Server Actions.
- Weather app with external API.
- Admin panel with role-based access.
- Authentication-based mini app.
- Full-stack CRUD application.

---

## 36. Capstone Project

- Choose one real-world problem.
- Plan routes, layouts, and components.
- Implement server and client components correctly.
- Add data fetching, caching, and revalidation.
- Add authentication if needed.
- Add loading, empty, and error states.
- Add tests for important flows.
- Build and deploy the final app.

---

*Use this syllabus in order. Beginner topics build the base, intermediate topics build real app skills, advanced topics prepare students for scalable full-stack work, and production topics prepare them to ship applications.*
