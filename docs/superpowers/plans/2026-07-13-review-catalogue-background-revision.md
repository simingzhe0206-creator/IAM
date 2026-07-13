# Review, Catalogue And Background Revision Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Restore the previous Reviews and Home Service Catalogue presentation while replacing the light About and Projects bands with approved palette greys.

**Architecture:** This is a page-level visual revision only. Existing routes, content data, responsive video sources, Quote API, SMTP settings and deployment workflows remain unchanged.

**Tech Stack:** React, TypeScript, Tailwind CSS, Vite, Vitest.

## Global Constraints

- Restore `src/pages/Reviews.tsx` from commit `2fb9ba1`.
- Restore only the Service Catalogue section in `src/pages/Home.tsx`; keep the current responsive video implementation.
- Use `#CDCDCD` for the About light sections and `#A9A9A7` for the Projects light section.
- Do not modify Quote, SMTP, company information, routing or deployment configuration.

---

### Task 1: Restore Previous Visual Sections

**Files:**
- Modify: `src/pages/Reviews.tsx`
- Modify: `src/pages/Home.tsx`

- [ ] Restore the Reviews component from `2fb9ba1`.
- [ ] Replace the current flat Service Catalogue directory with the five-card implementation from `2fb9ba1`.
- [ ] Confirm Home still references `heroVideoDesktop` and `heroVideoMobile` and has no `poster` attribute.

### Task 2: Replace White Page Bands

**Files:**
- Modify: `src/pages/About.tsx`
- Modify: `src/pages/Projects.tsx`

- [ ] Replace both About `editorial-section-light` backgrounds with `#CDCDCD` while preserving dark text.
- [ ] Replace the Projects `editorial-section-light` background with `#A9A9A7` while preserving dark text.

### Task 3: Verify And Publish

- [ ] Run `npm test` and expect all test files to pass.
- [ ] Run `npm run build` and expect client and server builds to pass.
- [ ] Run `git diff --check` and confirm no whitespace errors.
- [ ] Commit the scoped revision, fast-forward merge to `main`, and push `origin/main`.
