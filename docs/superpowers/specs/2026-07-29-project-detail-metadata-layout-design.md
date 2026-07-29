# Project Detail Metadata Layout Design

## Scope

Apply one consistent layout to the four existing project detail routes. This is a presentation-only change: project content, project images, routes, navigation, quote flow and data contracts remain unchanged.

## Layout

1. Keep the existing full-width project hero image, project number and address-only page title.
2. Under the hero, replace the current editorial project-overview heading treatment with a single, centred metadata column.
3. Present `Project Type`, `Value`, `Duration` and `Services` vertically. Labels use IAM yellow; values use the existing warm white body style. Services remain a centred list.
4. Present `Overview` as centred, wider readable paragraphs below the metadata.
5. Keep the existing divider and bottom `Discuss a similar project with IAM.` / `Request a Quote` CTA.

## Responsive Behaviour

- The desktop metadata column remains compact and centred.
- On mobile, the same single-column order is preserved with comfortable horizontal padding and readable line lengths.
- The hero retains its existing responsive image cropping and address title.

## Verification

- Update ProjectDetail component tests for metadata order and absence of the removed secondary overview heading.
- Run the focused project-detail test, full test suite and production client build.
- Check one desktop and one 390px mobile detail route for overflow, title readability and CTA placement.
