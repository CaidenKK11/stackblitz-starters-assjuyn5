# Project memory

## Product intent & audience

- Educational web guide teaching personal computer hardware fundamentals
- Audience: learners/students studying PC internals, assembly, and troubleshooting
- Goal: replace a slide-by-slide image gallery with a structured, readable learning path

## Brand personality & voice

- Informative and instructional; clear, direct language
- Safety-conscious tone (electrical safety / ESD treated as prominent callouts, not footnotes)

## Visual design & UX direction

- Clean, professional learning-guide layout with section navigation
- Responsive layouts for multi-device reading
- Text-heavy slide images converted to readable HTML content; only useful diagrams/hardware illustrations retained as images
- Safety content presented as prominent callout blocks rather than embedded images
- Content ordered as a learning flow: Safety & ESD → Motherboard → CPU → RAM → Storage → Expansion cards → Cables → Peripherals → Power → Cooling
- Avoid title-only graphics and mismatched/placeholder images; every image should match its section context

## Decisions, constraints & rationale

- No build script configured; verification is manual (image-reference checks, layout review)
- Rationale for text conversion: text inside images is inaccessible, non-searchable, and hard to maintain; converting to HTML improves readability and responsiveness
- Rationale for keeping select graphics: labeled diagrams and hardware photos aid visual learning where text alone is insufficient

## Open questions & assumptions

- Assumes source images are available in the project assets and referenced by filename
- Unclear if additional topics beyond the current set will be added later
- No explicit styling framework confirmed; design appears to be custom CSS/HTML