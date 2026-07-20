# IAM Editorial Projects Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver the approved Home process, editorial About/Services cleanup, four-project portfolio, project detail routes and verified Google review presentation without changing Quote or API behavior.

**Architecture:** Extend the existing data-driven `src/content/site.ts` model with project records and review verification metadata. Home and Projects share the project records; a new project detail page resolves records by slug. Existing React Router, Tailwind utilities, Motion reveals and base-aware asset helper remain the implementation foundation.

**Tech Stack:** React 19, React Router, TypeScript, Tailwind CSS 4, Motion, Vitest, Testing Library, Vite.

## Global Constraints

- Preserve the charcoal, warm-white and yellow IAM identity.
- Use `#F7F5E9` for the approved light warm sections.
- Do not invent project facts, staff identities or Google review content.
- Images remain stable during scroll; text/interface reveals may animate.
- Preserve Quote fields, upload behavior, Express API and deployment configuration.
- All public assets must resolve under both `/` and GitHub Pages `/IAM/` base paths.

---

### Task 1: Shared Project Data, Assets And Routes

**Files:**
- Modify: `src/content/site.ts`
- Modify: `src/App.tsx`
- Create: `src/pages/ProjectDetail.tsx`
- Create: `src/content/projects.test.ts`

**Interfaces:**
- Produces: `ProjectRecord`, `projects`, `getProjectBySlug(slug)` and `/projects/:projectSlug`.
- Consumes: existing `assetPath()` and React Router route conventions.

- [ ] **Step 1: Write failing tests**

Assert that the four approved titles, slugs and asset paths are present in the confirmed order, and that unknown slugs do not resolve.

- [ ] **Step 2: Run the focused test and verify RED**

Run: `npm.cmd test -- src/content/projects.test.ts --run`

Expected: failure because `projects` and `getProjectBySlug` do not exist.

- [ ] **Step 3: Import approved assets and implement shared data**

Add base-aware paths for `BK IMAGE`, `PROJECT/01-04` and `pexels-serjosoza-30117031`. Define four records with exact approved titles and neutral detail fields whose value is `Project information to be supplied`.

- [ ] **Step 4: Implement the project route and detail page**

Resolve `projectSlug`, redirect unknown values to `/projects`, render the wide cover, exact title, neutral information framework, Back to Projects and Quote actions.

- [ ] **Step 5: Run focused tests and verify GREEN**

Run: `npm.cmd test -- src/content/projects.test.ts --run`

Expected: pass.

### Task 2: Home Process And Featured Projects

**Files:**
- Modify: `src/pages/Home.test.tsx`
- Modify: `src/pages/Home.tsx`
- Modify: `src/components/ProjectTimeline.tsx`
- Modify: `src/styles.css`

**Interfaces:**
- Consumes: `assets.howWork`, `projects`, `Reveal`, Motion reduced-motion behavior.
- Produces: four vertical process steps and four linked project covers.

- [ ] **Step 1: Write failing Home tests**

Assert the four exact process headings and the four project links. Assert the old prototype disclaimer is absent.

- [ ] **Step 2: Run the focused test and verify RED**

Run: `npm.cmd test -- src/pages/Home.test.tsx --run`

Expected: failure on new copy and project URLs.

- [ ] **Step 3: Rebuild How We Work**

Render alternating editorial rows on `#F7F5E9`, use masked number typography backed by the four approved images, retain staggered Motion entrance and reduced-motion fallback.

- [ ] **Step 4: Rebuild Project Types IAM Supports**

Render four vertical image panels with dark resting overlay, bright hover/focus state, vertical title treatment and links to the four detail routes.

- [ ] **Step 5: Run focused tests and verify GREEN**

Run: `npm.cmd test -- src/pages/Home.test.tsx --run`

Expected: pass.

### Task 3: About And Services Cleanup

**Files:**
- Create: `src/pages/About.test.tsx`
- Create: `src/pages/Services.test.tsx`
- Create: `src/pages/ServiceCategoryDetail.test.tsx`
- Modify: `src/pages/About.tsx`
- Modify: `src/pages/Services.tsx`
- Modify: `src/pages/ServiceCategoryDetail.tsx`
- Modify: `src/content/site.ts`

**Interfaces:**
- Consumes: existing service category and stats data.
- Produces: warm About sections, empty People collage, simplified service pages.

- [ ] **Step 1: Write failing cleanup tests**

Assert About no longer renders Mission and Values and renders People portrait slots. Assert Services omits Service Directory copy. Assert category details omit Supporting Survey Services and use the new infrastructure asset.

- [ ] **Step 2: Run focused tests and verify RED**

Run: `npm.cmd test -- src/pages/About.test.tsx src/pages/Services.test.tsx src/pages/ServiceCategoryDetail.test.tsx --run`

Expected: failures for all removed content.

- [ ] **Step 3: Implement About changes**

Use `#F7F5E9`, remove the complete Mission section and create a wide overlapping portrait-frame collage with accessible empty-state labels.

- [ ] **Step 4: Implement Services changes**

Remove overview copy, additional capabilities block and deleted anchor target. Keep the category aside sticky and route non-detailed items to the category top. Assign the approved infrastructure image.

- [ ] **Step 5: Run focused tests and verify GREEN**

Run the same focused command. Expected: pass.

### Task 4: Projects, Details And Reviews Consolidation

**Files:**
- Create: `src/pages/Projects.test.tsx`
- Modify: `src/pages/Projects.tsx`
- Modify: `src/pages/Reviews.tsx`
- Modify: `src/components/Header.tsx`
- Modify: `src/components/Header.test.tsx`
- Modify: `src/App.tsx`
- Modify: `src/styles.css`

**Interfaces:**
- Consumes: shared `projects`, verified review metadata and `PageHero`.
- Produces: BK hero, approved project summary, four project covers, Projects-hosted review strip and `/reviews` redirect.

- [ ] **Step 1: Write failing page and navigation tests**

Assert Projects renders the approved two-paragraph summary and four detail links. Assert Header has no Reviews item. Assert `/reviews` redirects to `/projects#reviews`.

- [ ] **Step 2: Run focused tests and verify RED**

Run: `npm.cmd test -- src/pages/Projects.test.tsx src/components/Header.test.tsx --run`

Expected: failures for old Projects and Reviews navigation.

- [ ] **Step 3: Rebuild Projects**

Use the BK asset in the full-width hero, replace old experience/type lists with the approved editorial summary and four-cover directory, then place the reviews section before the document CTA.

- [ ] **Step 4: Consolidate Reviews**

Remove the primary nav item, redirect the old route, remove placeholder review cards/signals/CTA and render only verified aggregate Google data plus verified excerpts. If excerpt verification remains incomplete, render rating/count/link only.

- [ ] **Step 5: Run focused tests and verify GREEN**

Run the same focused command. Expected: pass.

### Task 5: Full Verification And Delivery

**Files:**
- Modify: `README.md` only if route/deployment documentation needs the new project paths.

- [ ] **Step 1: Run all tests**

Run: `npm.cmd test -- --run`

Expected: all files and tests pass.

- [ ] **Step 2: Run client and server builds**

Run: `npm.cmd run build`

Expected: TypeScript, Vite and server build pass.

- [ ] **Step 3: Run GitHub Pages build**

Run: `npm.cmd run build:client -- --base=/IAM/`

Expected: client build passes and asset URLs include `/IAM/`.

- [ ] **Step 4: Perform visual QA**

Capture Home, About, Services, one service category, Projects and one project detail at 1440px and 390px. Confirm stable images, visible text, sticky service navigation and no horizontal overflow.

- [ ] **Step 5: Review diff and integrate**

Run `git diff --check`, inspect changed files, commit the implementation, fast-forward `main`, push `origin/main`, and confirm commit identity and clean working tree.

