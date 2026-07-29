# IAM Projects, People and Lettable Area Survey Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (\`- [ ]\`) syntax for tracking.

**Goal:** Publish the approved four IAM project records, full-bleed project gallery, six-person About grid, Lettable Area Survey service, and refined Home audience row.

**Architecture:** Keep project, service and employee content in \`src/content/site.ts\`. Existing React pages render that typed content using the existing routing, \`Reveal\`, and editorial Tailwind conventions. Each change remains owned by its page; Quote, APIs and deployment stay untouched.

**Tech Stack:** React 19, TypeScript, React Router 7, Tailwind CSS 4, Vite, Vitest, Testing Library, Phosphor icons.

## Global Constraints

- Preserve IAM deep-charcoal, warm-off-white, and \`#f4e00c\` as the single accent palette.
- Use the supplied 529 Kent image, six People images, and Lettable Area Survey image.
- Keep overview card titles and route slugs; project-detail headings show only the approved address text.
- Make only the selected-work image strip full-bleed. Keep headings readable within \`section-shell\`.
- Do not change Quote, API, SMTP, cPanel, GitHub Pages, Header or Footer behaviour.
- Disable or reduce portrait transform motion under \`prefers-reduced-motion\`.

---

## File Structure

- Modify: \`src/content/site.ts\` — project content, employee data, asset paths, Lettable service and category item.
- Modify: \`src/pages/Projects.tsx\`, \`src/pages/ProjectDetail.tsx\` — portfolio gallery and detail template.
- Modify: \`src/pages/About.tsx\`, \`src/styles.css\` — employee grid and accessible hover/focus treatment.
- Modify: \`src/pages/Home.tsx\` — one-row glass audience labels.
- Modify tests: \`src/content/projects.test.ts\`, \`src/pages/Projects.test.tsx\`, \`src/pages/ProjectDetail.test.tsx\`, \`src/pages/About.test.tsx\`, \`src/pages/ServiceCategoryDetail.test.tsx\`, \`src/pages/Home.test.tsx\`.
- Create: \`public/images/iam-update/projects/529-kent-street-sydney.png\`.
- Create: \`public/images/iam-update/people/{marcus-jiang,bennie-ai,rayna-sun,ming-su,jannie-hu,justin-yu}.{jpg,png}\`.
- Create: \`public/images/iam-update/service-lettable-area-survey.jpg\`.

### Task 1: Add approved assets and typed content

**Files:**
- Create: the eight public image files listed above.
- Modify: \`src/content/site.ts\`.
- Test: \`src/content/projects.test.ts\`.

**Interfaces:**
- Produces \`ProjectRecord.detailTitle\`, \`ProjectRecord.metadata\`, \`ProjectRecord.overview\`, an \`employees\` collection, \`assets.projectKentStreet\`, \`assets.serviceLettableArea\`, and service slug \`lettable-area-survey\`.

- [ ] **Step 1: Write failing project-content tests**

\`\`\`ts
expect(projects.map((project) => project.detailTitle)).toEqual([
  '3-5 Help St Chatswood',
  '529 KENT STREET SYDNEY',
  'M7 - M12 Integration project',
  '33-35 Hynds, Box Hill, NSW 2765'
]);
expect(getProjectBySlug('bim-modelling-kent-street-sydney')?.image).toContain('529-kent-street-sydney.png');
expect(getProjectBySlug('construction-survey-m7-m12')?.overview).toHaveLength(2);
\`\`\`

- [ ] **Step 2: Run the focused test to verify it fails**

Run: \`npm.cmd test -- src/content/projects.test.ts\`

Expected: FAIL because these new fields and the Kent asset do not exist.

- [ ] **Step 3: Copy supplied assets to web-safe public paths**

Use exact, literal source paths. Copy the new 529 Kent image, Lettable image and the six People images from \`D:\\1sbmweb\\260727 UPDATE\\260727 UPDATE\` into the listed \`public/images/iam-update\` destinations. Do not modify unrelated public assets.

- [ ] **Step 4: Implement the content contract**

Replace \`details\` and \`pendingProjectDetails()\` with:

\`\`\`ts
type ProjectRecord = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  location: string;
  detailTitle: string;
  image: string;
  imageAlt: string;
  metadata: Array<{
    label: 'Project Type' | 'Value' | 'Duration' | 'Services';
    values: string[];
  }>;
  overview: string[];
};
\`\`\`

Populate every project with the exact approved Project Type, Value, Duration, Services and Overview copy from the design spec. Point project 02 to \`assets.projectKentStreet\`.

Add the confirmed employee data:

\`\`\`ts
export const employees = [
  { name: 'Marcus Jiang', role: 'Director', image: assets.personMarcus },
  { name: 'Bennie Ai', role: 'Project Administration', image: assets.personBennie },
  { name: 'Rayna Sun', role: 'Accountant', image: assets.personRayna },
  { name: 'Ming Su', role: 'Lead Draftman', image: assets.personMing },
  { name: 'Jannie Hu', role: 'Draftman', image: assets.personJannie },
  { name: 'Justin Yu', role: 'Draftman', image: assets.personJustin }
] as const;
\`\`\`

Add the approved \`lettable-area-survey\` record and replace the non-routed \`Lease Area Survey\` category item with \`{ label: 'Lettable Area Survey', slug: 'lettable-area-survey' }\`. It must be fourth in Property & Boundary Surveys.

- [ ] **Step 5: Run data tests and type check**

Run: \`npm.cmd test -- src/content/projects.test.ts\`

Expected: PASS.

Run: \`npm.cmd run build:client\`

Expected: PASS without references to \`details\` or \`pendingProjectDetails\`.

- [ ] **Step 6: Commit**

\`\`\`powershell
git add public/images/iam-update src/content/site.ts src/content/projects.test.ts
git commit -m "feat: add approved project and service content"
\`\`\`

### Task 2: Build full-bleed selected work and project detail pages

**Files:**
- Modify: \`src/pages/Projects.tsx\`, \`src/pages/ProjectDetail.tsx\`.
- Test: \`src/pages/Projects.test.tsx\`, \`src/pages/ProjectDetail.test.tsx\`.

**Interfaces:**
- Consumes populated \`ProjectRecord\`.
- Produces full-width project gallery and shared project detail rendering across the four existing routes.

- [ ] **Step 1: Write failing page tests**

\`\`\`tsx
expect(screen.getByRole('heading', { name: '3-5 Help St Chatswood' })).toBeInTheDocument();
expect(screen.getByText('Mixed Use Development Location Chatswood, NSW Project')).toBeInTheDocument();
expect(screen.getByText(/Located in the heart of Chatswood CBD/)).toBeInTheDocument();
expect(screen.getByRole('link', { name: 'Request a Quote' })).toHaveAttribute('href', '/quote');
expect(screen.queryByText('Project information to be supplied')).not.toBeInTheDocument();
\`\`\`

In \`Projects.test.tsx\`, remove the assertion for “Detailed project information will be added as approved” and assert all four project links still resolve.

- [ ] **Step 2: Run tests to verify failure**

Run: \`npm.cmd test -- src/pages/Projects.test.tsx src/pages/ProjectDetail.test.tsx\`

Expected: FAIL because the page still uses \`project.title\` and placeholder details.

- [ ] **Step 3: Implement the shared detail template**

In \`ProjectDetail.tsx\`:

- Render \`project.detailTitle\` in the hero \`h1\`.
- Replace the old placeholder block with a centered \`max-w-3xl\` brief.
- Render metadata with semantic \`dl\`, yellow \`dt\` labels, and one \`li\` per Service value.
- Render \`project.overview\` as individual readable paragraphs.
- Retain the existing Back to Projects link and Request a Quote CTA.
- Use \`Reveal\` around text-only content, not the hero image.

- [ ] **Step 4: Make only the gallery full width**

In \`Projects.tsx\`, retain selected-work heading copy in \`section-shell\`. Move the gallery outside it into a full-width wrapper with \`grid md:grid-cols-2 lg:grid-cols-4\`, zero outer gutter and \`gap-px\`. Preserve existing Links, keyboard focus states, and dark-to-bright image hover treatment. Replace obsolete “information will be added” copy with a factual summary of the approved project selection.

- [ ] **Step 5: Run page tests and build**

Run: \`npm.cmd test -- src/pages/Projects.test.tsx src/pages/ProjectDetail.test.tsx\`

Expected: PASS.

Run: \`npm.cmd run build:client\`

Expected: PASS.

- [ ] **Step 6: Commit**

\`\`\`powershell
git add src/pages/Projects.tsx src/pages/ProjectDetail.tsx src/pages/Projects.test.tsx src/pages/ProjectDetail.test.tsx
git commit -m "feat: publish project portfolio pages"
\`\`\`

### Task 3: Replace About placeholders with the People grid

**Files:**
- Modify: \`src/pages/About.tsx\`, \`src/styles.css\`.
- Test: \`src/pages/About.test.tsx\`.

**Interfaces:**
- Consumes \`employees\`.
- Produces six labelled portraits with hover/focus enlargement and a non-hover mobile fallback.

- [ ] **Step 1: Write the failing About test**

\`\`\`tsx
expect(screen.getByText('Marcus Jiang')).toBeInTheDocument();
expect(screen.getByText('Director')).toBeInTheDocument();
expect(screen.getByText('Rayna Sun')).toBeInTheDocument();
expect(screen.queryByLabelText('Future IAM team portrait')).not.toBeInTheDocument();
expect(screen.getAllByRole('img', { name: /IAM team member:/i })).toHaveLength(6);
\`\`\`

- [ ] **Step 2: Run the test to verify failure**

Run: \`npm.cmd test -- src/pages/About.test.tsx\`

Expected: FAIL because the page still renders nine empty tiles.

- [ ] **Step 3: Implement the portrait layout**

Replace \`peopleSlots\` with \`employees\`. Each entry renders an \`article\` with image alt text \`IAM team member: {name}\` and a caption containing the name and role. Use a sharp-cornered responsive grid without individual card surfaces.

In \`styles.css\`, use a scoped \`.team-member\` style: pointer hover and keyboard focus reveal a high-contrast caption, lift the active portrait above neighbours and apply at most \`scale(1.04)\`. Under a narrow/touch layout, show captions below every portrait. Under \`prefers-reduced-motion\`, remove transform transition.

- [ ] **Step 4: Run test and build**

Run: \`npm.cmd test -- src/pages/About.test.tsx\`

Expected: PASS with six labelled images.

Run: \`npm.cmd run build:client\`

Expected: PASS.

- [ ] **Step 5: Commit**

\`\`\`powershell
git add src/pages/About.tsx src/pages/About.test.tsx src/styles.css
git commit -m "feat: add IAM team portraits"
\`\`\`

### Task 4: Verify Lettable Area Survey in its category page

**Files:**
- Modify: \`src/pages/ServiceCategoryDetail.test.tsx\`.
- Modify: \`src/pages/ServiceCategoryDetail.tsx\` only if it needs a minimal ordering or display correction.

**Interfaces:**
- Consumes category item \`{ label: 'Lettable Area Survey', slug: 'lettable-area-survey' }\` and its matching service data.
- Produces sticky category link to \`#lettable-area-survey\` and Service 04 content.

- [ ] **Step 1: Add failing category-page assertions**

\`\`\`tsx
expect(screen.getByRole('link', { name: 'Lettable Area Survey' })).toHaveAttribute('href', '#lettable-area-survey');
expect(screen.getByRole('heading', { name: 'Lettable Area Survey' })).toBeInTheDocument();
expect(screen.getByText(/accurately measures the floor area of commercial, office, retail or industrial premises/i)).toBeInTheDocument();
expect(screen.getByText('Lettable area calculation schedule')).toBeInTheDocument();
\`\`\`

- [ ] **Step 2: Run the test to verify failure**

Run: \`npm.cmd test -- src/pages/ServiceCategoryDetail.test.tsx\`

Expected: FAIL because the current Lease Area Survey entry is not routed.

- [ ] **Step 3: Confirm existing category component behaviour**

After Task 1, verify \`detailedServices\` resolves Lettable Area Survey fourth and \`ServiceSection\` renders Service 04, image, included list, deliverables and client list. Keep the redirecting \`ServiceDetail\` route unchanged.

- [ ] **Step 4: Run service tests and build**

Run: \`npm.cmd test -- src/pages/ServiceCategoryDetail.test.tsx src/pages/Services.test.tsx\`

Expected: PASS.

Run: \`npm.cmd run build:client\`

Expected: PASS.

- [ ] **Step 5: Commit**

\`\`\`powershell
git add src/pages/ServiceCategoryDetail.tsx src/pages/ServiceCategoryDetail.test.tsx
git commit -m "test: cover lettable area survey category link"
\`\`\`

### Task 5: Refine the Home We Support row

**Files:**
- Modify: \`src/pages/Home.tsx\`.
- Modify: \`src/pages/Home.test.tsx\`.
- Modify: \`src/styles.css\` only if a reusable transparency fallback is required.

**Interfaces:**
- Consumes unchanged five-item \`audience\` array.
- Produces a single desktop glass row and an internal mobile horizontal scroller.

- [ ] **Step 1: Write failing support-row tests**

\`\`\`tsx
const supportRow = screen.getByTestId('home-support-audiences');
expect(supportRow).toHaveClass('lg:flex-nowrap');
expect(screen.getByText('Government Agencies')).toBeInTheDocument();
expect(screen.getAllByTestId('home-support-audience')).toHaveLength(5);
\`\`\`

- [ ] **Step 2: Run the Home test to verify failure**

Run: \`npm.cmd test -- src/pages/Home.test.tsx\`

Expected: FAIL because the list is currently a responsive grid with no test IDs.

- [ ] **Step 3: Implement the one-row transparent tags**

Replace the grid with \`flex gap-3 overflow-x-auto pb-2 lg:flex-nowrap\`. Give each tag \`shrink-0 whitespace-nowrap\`, a lower-opacity neutral fill, a fine white border and one inset highlight. Avoid a heavy shadow. Keep an adequate solid background fallback under \`prefers-reduced-transparency: reduce\`. Set the long Government tag to a sufficient fixed/minimum width.

- [ ] **Step 4: Run Home test and build**

Run: \`npm.cmd test -- src/pages/Home.test.tsx\`

Expected: PASS.

Run: \`npm.cmd run build:client\`

Expected: PASS.

- [ ] **Step 5: Commit**

\`\`\`powershell
git add src/pages/Home.tsx src/pages/Home.test.tsx src/styles.css
git commit -m "style: refine home support audience row"
\`\`\`

### Task 6: Complete regression and visual verification

**Files:**
- Modify only confirmed layout-fix files if verification finds a defect.

**Interfaces:**
- Consumes completed pages and public assets.
- Produces verified production builds and screenshots for review.

- [ ] **Step 1: Run the complete test suite**

Run: \`npm.cmd test\`

Expected: PASS.

- [ ] **Step 2: Run production builds**

Run: \`npm.cmd run build\`

Expected: PASS for client and server builds.

Run: \`npm.cmd run build:client -- --base=/IAM/\`

Expected: PASS with GitHub Pages-safe published asset paths.

- [ ] **Step 3: Run visual QA**

Start local development server and capture desktop plus 390px screenshots for \`/projects\`, each project detail route, \`/about\`, \`/services/category/property-boundary-surveys#lettable-area-survey\`, and \`/\`.

Verify all of the following:

- The Projects gallery reaches both viewport edges while its heading stays contained.
- Detail headings show only approved addresses, and 529 Kent uses the supplied image.
- Six People images, captions and hover/focus states do not overlap.
- Lettable Area Survey is Service 04 and its category anchor resolves.
- Home audiences are one desktop row with unwrapped Government Agencies text.
- Mobile document \`scrollWidth\` equals \`clientWidth\`; only intended internal rows may scroll.

- [ ] **Step 4: Commit confirmed visual fixes only when needed**

\`\`\`powershell
git status --short
git add src/pages/Projects.tsx src/pages/ProjectDetail.tsx src/pages/About.tsx src/pages/ServiceCategoryDetail.tsx src/pages/Home.tsx src/styles.css src/pages/Projects.test.tsx src/pages/ProjectDetail.test.tsx src/pages/About.test.tsx src/pages/ServiceCategoryDetail.test.tsx src/pages/Home.test.tsx
git commit -m "fix: polish IAM portfolio layouts"
\`\`\`

Do not create an empty commit when no visual fixes are needed.

- [ ] **Step 5: Push branch and merge after user accepts verified result**

Run: \`git push -u origin codex/iam-projects-people-lettable\`

Inspect the remote branch and merge into \`main\` only after user acceptance of the verified implementation.
