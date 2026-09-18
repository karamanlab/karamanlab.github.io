# Karaman Language & Cognition Lab — website

Static site for the Karaman Language & Cognition Lab, Department of Psychology,
Texas A&M University–Kingsville. Plain HTML and CSS, no build step, no dependencies.

Live at <https://karamanlab.github.io>

## Files

```
index.html          home — hero, what we study, news
research.html       lines of work, current projects, methods
people.html         director, students, collaborators, alumni
publications.html   journal articles and presentations
teaching.html       courses and mentoring
join.html           how to join the lab, how to participate in a study
contact.html        email, address, links
404.html            not-found page
assets/css/klab.css all styling; colours and type live in the :root block at the top
assets/js/klab.js   mobile menu + the hero animation
assets/img/         logo files, favicon, and people photos
.nojekyll           tells GitHub Pages to serve the files as they are
```

## Publishing

1. Push everything to the `karamanlab.github.io` repository on the `main` branch.
2. In the repository, go to **Settings → Pages**, set **Source** to *Deploy from a branch*,
   branch `main`, folder `/ (root)`.
3. The site appears at `https://karamanlab.github.io` within a minute or two.

To preview before pushing, open `index.html` in a browser, or run
`python3 -m http.server` in this folder and visit `http://localhost:8000`.

## Things to fill in

Search the HTML for `TODO` — there are four:

- `people.html` — one sentence describing Julie Cisneros's project, and a photo for her
  and for Laura Carson if they want one.
- `contact.html` — building and room number.
- `join.html` — link to the participant pool (SONA) if you use one.
- students still show initials instead of photos; add photos the same way the director's
  photo is added.

## How to update it

**Add a person.** Open `people.html`, copy one of the `<li class="person">` blocks
in the right section, and change the name, role and description. The circle shows
the person's initials by default. To use a photo, put a square image in
`assets/img/` and replace

```html
<div class="portrait" aria-hidden="true">JC</div>
```

with

```html
<div class="portrait"><img src="assets/img/julie-cisneros.jpg" alt="Julie Cisneros"></div>
```

**Move someone to alumni.** Cut their block from the students section and add a line
to the alumni list in `people.html`; a commented template is already there.

**Add a publication.** In `publications.html`, copy an existing `<li>` inside the right
year, or copy a whole `<p class="year">` + `<ul class="pubs">` pair to start a new year.
Wrap lab members' names in `<strong>`.

**Add news.** In `index.html`, add an `<li>` at the top of the `<ul class="news">` list.
Keep the `datetime` attribute in the ISO format shown (`2026-09`).

**Add a project.** In `research.html`, copy an `<li class="project">` block. The coloured
left edge cycles through three colours automatically. The `<span class="status">` label is
free text — "Data collection", "In design", "Under review", and so on.

**Change the colours or fonts.** Everything is in the `:root` block at the top of
`assets/css/klab.css`. Changing `--signal` alone re-tints the accents across every page.

**Change the navigation.** The `<nav>` block is repeated in each HTML file, so a new page
means adding one `<li>` to all eight files.

## Logo files

All generated from the original KLab logo, with the white background removed:

- `klab-logo.png` — the full logo, for light backgrounds
- `klab-logo-light.png` — the same logo recoloured for dark backgrounds
- `klab-mark.png` / `klab-mark-light.png` — just the speech-bubble mark
- `favicon.png`, `apple-touch-icon.png` — built from the mark

The header and footer use the mark plus the words "KLab" and the full lab name set as
real text rather than as part of the image, so the type stays sharp at every screen
size and on high-density displays. Use `klab-logo.png` where you want the complete
lockup — a poster, a slide, a social preview image.

## Notes

- Fonts are Newsreader (headings), Lato (body text) and JetBrains Mono (the syllable
  stream in the hero), loaded from Google Fonts.
- Colours come from the logo: navy #274375, blue #3A87B9, teal #6EB8BD.
- The hero animation runs once on load and is disabled for visitors who have asked their
  system for reduced motion.
- The site is responsive down to small phones and keyboard-navigable; keep the
  `alt` text and heading order intact when editing.
