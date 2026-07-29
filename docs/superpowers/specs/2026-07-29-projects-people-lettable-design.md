# IAM Projects, People and Lettable Area Survey Design

## Purpose

Refresh the project portfolio, team presentation and Property & Boundary Survey content using the approved material set. The established IAM visual language remains: deep charcoal surfaces, warm off-white typography, and yellow as the single action accent.

## Scope

### Projects overview

- Keep the existing `Selected work` heading and four project records.
- Make the four project cover images a full-bleed four-column gallery on desktop, with no page gutter at either side of the image strip.
- Keep the project titles and existing destination links in the overview.
- Use restrained hover treatment: the image brightens, an existing dark image treatment eases back, and the project label gains contrast. The gallery does not add floating cards or decorative controls.
- On small screens, retain a horizontally scrollable, touch-friendly image gallery with one meaningful card width per item.

### Project detail pages

Each route keeps its existing slug. The hero heading changes to address-only text:

| Route | Detail-page heading |
| --- | --- |
| `strata-plan-help-st-chatswood` | `3-5 Help St Chatswood` |
| `bim-modelling-kent-street-sydney` | `529 KENT STREET SYDNEY` |
| `construction-survey-m7-m12` | `M7 - M12 Integration project` |
| `deposit-plan-hynds-box-hill` | `33-35 Hynds, Box Hill, NSW 2765` |

The overview cards retain their current project titles. Every detail page follows one shared, responsive template:

1. Address-only hero heading and full-width project cover image.
2. A centered project brief with yellow field labels and high-contrast values for Project Type, Value, Duration and Services.
3. An Overview section with readable paragraphs, not a dense text wall.
4. The existing quote CTA, retaining its route and behaviour.

Project content is the approved copy supplied in the 29 July screenshots. The new image from `260727 UPDATE/529 KENT STREET SYDNEY/615a54d1a3beff76b3694adf29e262c4.png` becomes the 529 Kent Street cover. Existing approved cover assets remain in use for the other three projects.

### People

Replace placeholder collage tiles in About with these six supplied portraits:

| Name | Position | Source asset |
| --- | --- | --- |
| Marcus Jiang | Director | `Marcus JIANG.jpg` |
| Bennie Ai | Project Administration | `Bennie AI.png` |
| Rayna Sun | Accountant | `Rayna SUN.png` |
| Ming Su | Lead Draftman | `Ming SU.jpg` |
| Jannie Hu | Draftman | `Jannie HU.png` |
| Justin Yu | Draftman | `Justin YU.jpg` |

Use an editorial six-image grid with direct image framing and no separate card surface. On pointer hover or keyboard focus, the active portrait scales subtly above adjacent portraits and reveals a high-contrast name and role overlay. On touch devices, name and role remain visible below each image so the content is not hidden behind hover.

### Lettable Area Survey

Create an individual `Lettable Area Survey` service record and link it from Property & Boundary Surveys in place of the non-clickable `Lease Area Survey` entry. The page uses the supplied `jose-losada-DyFjxmHt3Es-unsplash.jpg` image and approved copy:

- Intro and `When it is needed` copy from the supplied reference.
- Included: internal tenancy dimensions; walls, columns and structural elements; tenancy and common-area boundaries; relevant inclusions and exclusions; NLA, GLA or GLAR calculations; area schedule for each tenancy or floor.
- Deliverables: PDF survey plan; lettable area calculation schedule; CAD survey file; clearly identified measurement methodology; optional surveyor certification.
- Typical clients: property owners; commercial landlords; property managers; leasing agents; commercial tenants; developers; solicitors and valuers.

The service page retains the existing category navigation and service-detail structure. The new record appears as `Service 04` within the Property & Boundary group according to the current user-approved content reference.

### Home audience tags

Keep the `We Support` label and five audiences. Convert the audience controls into one long desktop row with transparent frosted-glass treatment, enough width for `Government Agencies` to remain on one line, and a single visual bar. The row becomes horizontally scrollable on small screens rather than wrapping into multiple rows. Text contrast and reduced-transparency fallback remain sufficient.

## Technical design

- Extend the existing project content type with a display heading, project metadata and overview paragraphs; keep existing title values for overview cards and route destinations.
- Keep shared rendering in `ProjectDetail` so all four project pages stay visually and semantically consistent.
- Add a dedicated employee data collection in site content, consumed by About, to avoid photo/name/role mappings in JSX.
- Add the new service to the existing service data and Property & Boundary category list; no new API or routing pattern is required.
- Copy supplied images into the existing public image asset hierarchy with web-safe filenames. The 529 Kent image is compressed only if needed for loading performance while retaining visual clarity.
- No quote upload, SMTP, navigation, deployment configuration, or unrelated page copy changes are included.

## Motion and accessibility

- Preserve existing text reveal behaviour.
- Portrait motion is limited to hover/focus and disabled or reduced under `prefers-reduced-motion`.
- Full-bleed project gallery changes image treatment only; no automatic movement, parallax or video behaviour is added.
- Project metadata uses headings and semantic lists so labels remain understandable with assistive technology.
- All interactive gallery and portrait states are keyboard accessible.

## Verification

- Unit tests cover the four populated project records, address-only detail headings, the new service route/category link, and employee data rendering.
- Build the client and production server, including a GitHub Pages base-path build.
- Check desktop and 390px mobile layouts for the full-bleed gallery, project detail pages, People grid, Lettable service page, and Home audience row.
- Confirm no horizontal page overflow; only the intended mobile gallery/audience row may scroll internally.
- Confirm all supplied assets load from their published paths and that text remains legible over imagery.

## Out of scope

- Additional employee portraits beyond the six supplied files.
- New project copy beyond the approved four project records.
- Changes to quote submission behaviour, SMTP settings, cPanel configuration or GitHub Pages configuration.
