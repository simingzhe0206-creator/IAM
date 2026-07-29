# Project Detail Metadata Layout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reformat all four IAM project detail pages into the approved centred metadata layout while retaining their existing hero image and address-only title.

**Architecture:** Keep project content in `src/content/site.ts` unchanged and update the shared `ProjectDetail` renderer so every project route inherits the same presentation. The component continues to render `ProjectRecord.metadata` and `ProjectRecord.overview`; only the visual hierarchy and test assertions change.

**Tech Stack:** React, TypeScript, React Router, Tailwind utility classes, Vitest, Testing Library, Vite.

## Global Constraints

- Keep the full-width hero image, project number and address-only title for each project route.
- Do not change project copy, project data, routes, navigation, Quote/API/deployment behavior, Header or Footer.
- Render metadata in this exact order: Project Type, Value, Duration, Services, Overview.
- Use existing IAM charcoal, warm white and `#f4e00c` yellow tokens.
- Preserve desktop and 390px mobile readability without horizontal page overflow.

---

### Task 1: Restructure The Shared Project Detail Body

**Files:**
- Modify: `src/pages/ProjectDetail.tsx`
- Test: `src/pages/ProjectDetail.test.tsx`

**Interfaces:**
- Consumes: `ProjectRecord.metadata` with `{ label: string; value: string[] }[]` and `ProjectRecord.overview: string[]`.
- Produces: all `/projects/:projectSlug` detail routes using one centred metadata renderer.

- [ ] **Step 1: Write failing layout assertions**

Add assertions that a valid project route has no `Project overview` or `project.shortTitle` secondary heading, while labels and values still render in sequence.

```tsx
expect(screen.queryByText('Project overview')).not.toBeInTheDocument();
expect(screen.getByText('Project Type')).toBeInTheDocument();
expect(screen.getByText('Services')).toBeInTheDocument();
expect(screen.getByText('Overview')).toBeInTheDocument();
```

- [ ] **Step 2: Run the focused test to verify the old layout fails**

Run: `npm.cmd test -- src/pages/ProjectDetail.test.tsx`

Expected: the old secondary overview heading is found.

- [ ] **Step 3: Replace the secondary overview heading block**

Use one `max-w-4xl` centred content column. Render each metadata label/value as a vertically stacked, centre-aligned section. Render Services as an unbulleted, centre-aligned list. Place an `Overview` label immediately above the mapped overview paragraphs. Keep the lower CTA divider and button.

```tsx
<dl className="mx-auto max-w-3xl text-center">
  {project.metadata.map((detail) => (
    <div key={detail.label} className="py-5">
      <dt className="font-extrabold text-[#f4e00c]">{detail.label}</dt>
      <dd className="mt-1 text-[#fffdf0]">...</dd>
    </div>
  ))}
</dl>
```

- [ ] **Step 4: Run the focused test to verify it passes**

Run: `npm.cmd test -- src/pages/ProjectDetail.test.tsx`

Expected: PASS.

- [ ] **Step 5: Commit the shared detail layout**

```powershell
git add src/pages/ProjectDetail.tsx src/pages/ProjectDetail.test.tsx
git commit -m "style: centre project detail metadata"
```

### Task 2: Verify All Four Routes And Responsive Output

**Files:**
- Modify: `src/pages/ProjectDetail.test.tsx`
- Test: `src/pages/ProjectDetail.test.tsx`

**Interfaces:**
- Consumes: shared renderer from Task 1 and the four populated project records.
- Produces: route coverage for every project address title and its metadata/overview body.

- [ ] **Step 1: Add table-driven route coverage**

Add a test case for all four existing slugs so each route renders its address-only title, `Project Type`, `Services`, `Overview`, and `Discuss a similar project with IAM.` CTA.

```tsx
for (const project of projects) {
  renderProjectRoute(project.slug);
  expect(screen.getByRole('heading', { name: project.detailTitle })).toBeInTheDocument();
  expect(screen.getByText('Overview')).toBeInTheDocument();
}
```

- [ ] **Step 2: Run the focused test**

Run: `npm.cmd test -- src/pages/ProjectDetail.test.tsx`

Expected: PASS for all four routes.

- [ ] **Step 3: Run production validation**

Run: `npm.cmd test -- --reporter=dot` and `npm.cmd run build:client`.

Expected: all tests pass and TypeScript/Vite complete successfully.

- [ ] **Step 4: Browser check desktop and mobile**

At `/projects/strata-plan-help-st-chatswood`, verify the full hero remains, the metadata is centred below it, and `scrollWidth === clientWidth` at 390px. Repeat the address-title check for the other three project routes.

- [ ] **Step 5: Commit verification coverage**

```powershell
git add src/pages/ProjectDetail.test.tsx
git commit -m "test: cover project detail metadata layout"
```
