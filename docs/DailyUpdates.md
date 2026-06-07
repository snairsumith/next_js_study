# Daily Training Updates

**Purpose:** Share each day's training details with students. Useful for revision and for upcoming batches.

**Repository:** next_js_study (Next.js training repo)

---

## How to use this doc

- Add **one section per training day**.
- Copy the **Day template** below for each new day.
- Keep entries short and clear so students and future batches can follow.

---

## Reference: Create Next.js + TypeScript project

```bash
npx create-next-app@latest my-app --typescript --tailwind --eslint --app --src-dir
cd my-app
npm run dev
```

Open http://localhost:3000

**Prerequisite:** Complete React training (react-project-study) topics 1–11 first.

---

## Day template (copy for each day)

```markdown
### Day X — DD Mon YYYY

**Topics covered**
- 
- 

**Key points / concepts**
- 
- 

**Code / examples**
- 
- 

**Pages / routes built**
- 
- 

**Homework / practice**
- 
- 

**Notes for next batch**
- 
```

---

## Sample entries

### Day 1 — Web and JavaScript Prerequisites

**Topics covered**
- HTML, CSS, modern JavaScript recap
- async/await, modules, array methods
- React basics recap (components, JSX, props, state)

**Key points**
- Next.js builds on React — complete React foundations first
- Server Components use `async/await` instead of `useEffect` for data

**Homework**
- Complete exercises A, B, C from Topic 1 doc
- Review react-project-study `src/main.tsx` vs Next.js `app/layout.tsx`

---

### Day 2 — Introduction to Next.js + Environment Setup

**Topics covered**
- What Next.js is, SSR/SSG/ISR overview
- `create-next-app` project structure
- `app/page.tsx`, `app/layout.tsx`

**Code / examples**
- Created project with TypeScript and Tailwind
- Ran `npm run dev` and edited home page

---

### Day 3 — App Router + Layouts

**Topics covered**
- `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`
- Nested layouts and route groups

**Pages / routes built**
- `app/about/page.tsx`
- `app/dashboard/layout.tsx`

---

*Add new days below as training progresses.*
