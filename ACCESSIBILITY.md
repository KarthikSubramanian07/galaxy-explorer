# Accessibility

Conformance target: **WCAG 2.2 Level AA**.

## What was tested

- axe-core (`wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`, `wcag22aa`) on the home view, empty search, type filter, and open galaxy dialog at 1440×900, 390×844, and 320×800.
- Manual keyboard checks: Tab order, visible focus, dialog focus trap, Escape to close, arrow keys for previous/next galaxy, skip link.
- Reduced-motion preference disables decorative transitions.

## Known limitations

- Galaxy photographs remain visual; text alternatives cover the galaxy name, type, and fun-fact description, but not every spatial detail in the image.
- External Hubble/NASA image hosts must respond for images to load; the page remains usable when an image fails, via the text name and type on each card.

## Report a barrier

Open an issue in this repository describing the page, assistive technology, and what went wrong.
