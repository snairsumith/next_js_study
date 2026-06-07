# Next.js Project Study

Training repository for **Next.js** — structured documentation for teaching interns topic by topic, mirroring the [react-project-study](https://github.com/snairsumith/react-project-study) pattern.

---

## What is inside

| Folder / file | Purpose |
| ------------- | ------- |
| `docs/NextJs-syllabus.md` | Full 36-topic syllabus (beginner → production) |
| `docs/topics-wise/` | Detailed teaching notes — one file per topic |
| `docs/DailyUpdates.md` | Day-by-day training log template |

---

## Prerequisites

Students should complete **React training** first:

- [react-project-study](https://github.com/snairsumith/react-project-study)
- Topics 1–11 minimum (components, props, state, forms, styling)
- Topics 12–15 recommended (hooks, data fetching, React Router)

---

## How to study (for interns)

1. Read `docs/NextJs-syllabus.md` in order.
2. Open the matching file in `docs/topics-wise/`.
3. Complete exercises at the end of each topic doc.
4. Build the related feature in your Next.js practice project.
5. Log progress in `docs/DailyUpdates.md`.

---

## Create practice project

When ready to code (Topic 3):

```bash
npx create-next-app@latest next-practice --typescript --tailwind --eslint --app --src-dir
cd next-practice
npm run dev
```

---

## Syllabus overview

| Level | Topics | Focus |
| ----- | ------ | ----- |
| Beginner (1–11) | Foundations, App Router, styling, forms | File-based routing, server vs client |
| Intermediate (12–22) | Hooks, data fetching, API routes, middleware | Real app patterns |
| Advanced (23–32) | Server Actions, caching, auth, TypeScript | Scalable full-stack |
| Production (33–36) | Deploy, monitoring, projects, capstone | Ship to production |

---

## Topic file naming

```
docs/topics-wise/
├── 1. Web and JavaScript Prerequisites.md
├── 2. Introduction to Next.js.md
├── 3. Environment Setup.md
├── ...
└── 36. Capstone Project.md
```

---

*Follow the syllabus in order. Each topic builds on the previous one.*
