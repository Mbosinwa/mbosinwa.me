# Schoolwork Section — Design Spec

**Date:** 2026-08-07
**Goal:** Publish semester-2 PGD Computer Science study materials on mbosinwa.dev as a styled, public-facing section.

## Scope

Source: `~/Downloads/schoolwork/semester-2/` (5 courses: CMS 702, 704, 706, 708, 710).

### Included (self-authored only)
- Transcribed lecture notes (markdown → rendered HTML)
- Cheatsheets, practice questions, solved questions, syllabus-gap analyses (markdown → rendered HTML)
- Study Guides, Drill Packs, Note Coverage volumes (existing self-made PDF + HTML pairs, copied as-is)
- Course outlines

### Excluded
- `scans/` — photos of handwritten notes (user decision)
- `source/` — lecturers' slide PDFs and docx (copyright)
- `past-questions/` photos and full verbatim transcriptions of university exam papers (`00-past-questions.md`, `00-past-test-questions.md`) — university copyright
- `assignments/` — may contain personal/grade info
- Exam logistics (dates, venues, invigilators) and lecturer names — private/stale
- `.DS_Store`

## Architecture

Static HTML. The generator `tools/build-schoolwork.mjs` (committed) converts markdown via pandoc and wraps output in a template matching the site's neo-brutalist style. URLs are hierarchical to accommodate future programmes (MSc) and semesters without ever moving existing pages:

```
schoolwork/
├── index.html                     landing: programme cards
├── schoolwork.css
└── <programme>/                   e.g. pgd/, later msc/
    ├── index.html                 programme page: semester cards
    └── <semester>/                e.g. semester-2/
        ├── index.html             semester page: course cards
        └── cms-7XX-<slug>/
            ├── index.html         course landing: blurb + material links
            ├── <pages>.html       rendered markdown, site-styled
            └── CMS-7XX-*.pdf/.html  study guide / drill pack / note coverage
```

All links and asset references are absolute paths (relative paths break when a directory URL is served without a trailing slash on local dev servers). Adding a semester = add metadata + srcDir to `PROGRAMMES` in the generator, run it.

## Site integration
- "Schoolwork" nav link added to `index.html`
- `sitemap.xml` gains entries for the index and 5 course pages
- Canonical URLs under `https://mbosinwa.dev/schoolwork/`

## Error handling / edge cases
- Markdown with raw HTML or tables: pandoc GFM mode
- Internal md links between materials rewritten to their .html equivalents; links to excluded files dropped
- Relative asset paths: pages reference `../../neo-styles.css` style path or embed their own minimal styles

## Testing
- Link check over generated pages (no 404 hrefs to files in repo)
- Visual spot check of index + one course page in browser
- `git status` clean except intended additions; single commit on main, **no push**

## Decisions log
- Styled section over raw file dump (user)
- Own work only; scans also excluded (user)
- Commit only, user pushes after review (user)
