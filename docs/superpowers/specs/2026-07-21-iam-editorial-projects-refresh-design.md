# IAM Editorial Projects Refresh Design

## Design Read

IAM Surveyors is a professional B2B surveying practice serving architects, builders, developers, consultants and property owners. This update keeps the established charcoal, warm-white and yellow identity while introducing a more editorial layout, stronger project presentation and fewer generic card patterns.

Design dials: variance 7, motion 5, density 4. Motion is limited to text and interface reveals; project, process and hero images remain visually stable.

## Home

### How We Work

Replace the horizontal timeline with a vertically composed four-step process on a light warm background (`#F7F5E9`, derived from `#F0EEDC`). Each step uses a large `01`-`04` numeral filled or masked with the corresponding image from `D:\1sbmweb\更新材料\HOW WE WORK`. The number and copy alternate alignment to create an editorial rhythm without turning the section into floating cards.

Copy:

1. **Tell Us About Your Project** - Email us at office@iamsurveyor.com.au with your project address, project type and survey requirements.
2. **Assessment & Quote** - We'll review your requirements, recommend the most suitable surveying service and provide a detailed quotation.
3. **Survey & Documentation** - Our surveyors complete the field survey and prepare all required plans and deliverables.
4. **Project Support** - We continue to support your project with council, certifier, Architect and registration documentation where required.

The existing reveal timing remains, with staggered text and numeral entrance. Images do not translate or scale during scroll.

### Featured Projects

Replace the text directory under `Project types IAM supports` with four vertical image panels. The panels use the confirmed project assets in `PROJECT\01-04` and map in order to the four approved project titles. Panels are darkened at rest, become brighter on hover/focus, and show vertical project labels and two-digit numbering. Each panel links to its own project detail route.

## About

- Change both grey/light sections to `#F7F5E9`.
- Remove the complete `Mission and values / Reliable information. Practical support.` split-image section.
- Keep the existing company, capabilities, statistics and delivery information.
- Rebuild People as a long editorial band: copy on the left and an overlapping monochrome portrait-collage placeholder on the right.
- The collage contains multiple empty portrait frames with varied offsets, rotations and proportions. It must not imply real staff names or roles before approved portraits are supplied.

## Services

- Remove the Services overview introduction containing `Service directory`, `Five coordinated areas of practice.` and its supporting paragraph.
- Keep all five service category sections and their links.
- Change the Infrastructure & Utility Surveys image to `pexels-serjosoza-30117031.jpg`.
- Keep the category-detail navigation column sticky within the service detail content area.
- Remove the `Additional capabilities / Supporting survey services` block from every service category detail page.
- Do not remove the underlying service labels from navigation unless they no longer resolve to visible content; non-detailed labels should link back to the category top instead of a deleted section.

## Projects

### Page Structure

- Replace the Projects hero image with `BK IMAGE.png`.
- Replace the current grey experience list and the existing alternating project-type articles with a new project introduction and four-cover directory.
- Use the approved summary copy:

  `From residential developments and commercial buildings to subdivision, infrastructure and construction projects, IAM Surveyors provides accurate surveying services that support planning, design, approvals and construction across Sydney and NSW.`

  `With experience across projects of every scale, we work closely with architects, builders, developers, consultants and government authorities to deliver reliable survey information, practical solutions and successful project outcomes.`

- The introduction may sit in a dark editorial panel over or directly following the BK image, with generous white space and no rounded floating container.

### Four Projects

Asset and title mapping:

1. `PROJECT\01.webp` - `STRATA PLAN - 3-5 Help St Chatswood`
2. `PROJECT\02.png` - `BIM MODELLING - 529 KENT STREET SYDNEY`
3. `PROJECT\03.jpg` - `CONSTRUCTION SURVEY - M7-M12 Integration project`
4. `PROJECT\04.png` - `DEPOSIT PLAN - 33-35 Hynds, Box Hill, NSW 2765`

The Projects page presents the four covers in a compact image directory similar to the Home featured-project panels. Each project has an independent simple detail page containing a wide cover image, the approved title and a restrained five-item project-information framework. Since final project details have not been supplied, the framework uses neutral labels and an explicit `Project information to be supplied` value rather than invented facts.

### Google Reviews

Remove Reviews from desktop and mobile primary navigation. Route `/reviews` redirects to `/projects#reviews` so existing links remain useful. The standalone placeholder review presentation is not shown.

Add a horizontal reviews strip below the four Projects. Only content that can be matched to the IAM Surveyors Google Business Profile by name, address, phone or linked website may be shown. Display the verified aggregate rating, review count, short public excerpts, public reviewer display names and a `View on Google` link. If exact review text cannot be independently verified, show the verified aggregate rating and Google link without fabricating excerpts.

Remove the old review signals (`Accuracy`, `Clear communication`, `Reliable documentation`, `Practical project support`) and `Discuss a Project` CTA.

## Routing And Data

- Add four data-driven project records and four routes under `/projects/:slug`.
- Home and Projects consume the same records so titles, images and links cannot drift.
- `/reviews` redirects to `/projects#reviews`.
- Existing service, quote, contact and API routes are unchanged.
- Route navigation continues to return to the page top, while service anchor navigation and the Projects reviews redirect preserve their target anchors.

## Responsive And Accessibility

- On desktop, process rows and project covers use the editorial compositions shown in the references.
- On mobile, process steps stack in reading order and project covers become a horizontal snap scroller or a single-column list without horizontal page overflow.
- Hover-only reveals are duplicated for keyboard focus and touch layouts.
- All overlaid copy maintains readable contrast; images have descriptive alternative text where they communicate project identity.
- Reduced-motion users receive the final visible state without staged transitions.

## Verification

- Add component/page tests for process copy, project links, removed Services content, Reviews redirect and project detail routing.
- Confirm the Infrastructure image and BK hero asset use base-aware URLs for GitHub Pages.
- Run the full Vitest suite, client build, server build and `/IAM/` GitHub Pages build.
- Visually check Home, About, Services, a service category, Projects and all four project pages at desktop and 390px mobile widths.
- Confirm no horizontal overflow and no missing images locally or under the `/IAM/` base path.

