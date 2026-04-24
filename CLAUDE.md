# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ErgoDonk Zero is a 6×9+6 keys split ortholinear keyboard with encoder and solenoid support, hotswap sockets for MX or Choc v1 switches, and an RP2040 "Zero" MCU. The repo contains:

- **`docs/`** — Jekyll documentation site published at ergodonk.com (the bulk of active development)
- **`Firmware/`** — QMK firmware, VIA config, and pre-built drag-and-drop UF2 files
- **`PCB/`** — KiCad schematic/PCB files and Gerbers
- **`Cases/`** — 3D printable and acrylic case files

## Docs Site (Jekyll)

The site runs from `docs/` using Jekyll with the [just-the-docs](https://just-the-docs.com/) theme.

### Serve locally

```bash
cd docs
bundle exec jekyll serve
```

### Image pipeline

Images go through a two-step process before appearing in the docs:

**Step 1 — Strip metadata** (run from repo root before adding images):

```bash
python3 mogrify_looper.py
```

**Step 2 — Generate WebP variants and manifest** (run from `docs/`):

```bash
cd docs
node scripts/optimize-images.js
```

This reads source images from `docs/images/`, outputs WebP variants at 150/250/400/800/1200/1600px widths, and writes `docs/_data/image_manifest.json`. Jekyll reads the manifest at build time.

**Step 3 — Swap raw `<img>` tags to optimized includes** (run from `docs/`):

```bash
cd docs
node image_swapper.js
```

This rewrites plain `<a><img></a>` tags in Markdown files to use the appropriate Jekyll include.

### Jekyll includes for images

Three includes exist in `docs/_includes/`:

| Include | Use |
|---|---|
| `slider_img_srcset.html` | Standard image with lightbox link; uses largest variant as href |
| `slider_img_srcset_thumb.html` | Thumbnail-only (lazy, smallest size); used inside HTML tables |
| `img_srcset.html` | Inline image without lightbox anchor |

**Critical constraint:** `site.data` is not accessible inside `_includes` when called from Markdown. The manifest entry must be assigned in the page's frontmatter section and passed as the `manifest` parameter:

```liquid
{% assign img1 = site.data.image_manifest["images/my-photo.jpg"] %}
{% include slider_img_srcset.html src="images/my-photo.jpg" alt="Description" manifest=img1 %}
```

For Lightbox prev/next navigation between adjacent images, wrap them in a `<p>` tag (not `<div>`). Use `<figure class="image-grid-2">` or `<figure class="image-grid-3">` for grid layouts.

**Keep all HTML tags on the same line with no blank lines inside include output** — Kramdown will strip or escape tags if it encounters blank lines.

### Tables in Markdown pages

BOM and other pages with tables use **static HTML instead of Markdown pipe syntax** because kramdown does not process Liquid includes inside Markdown table cells. When a table cell needs an image, use `slider_img_srcset_thumb.html`.

### Jekyll front matter keys

- `schema: build-guide-howto` — injects structured data via `_includes/head_custom.html`; remove the key to disable
- `published: false` — hides a page from the built site
- `parent: Build` — sets the nav hierarchy under the "Build" section

## Firmware

Pre-built UF2 files are in `Firmware/drag_and_drop/`. The keyboard uses QMK's `ee_hands` (EEPROM handedness detection), so the first flash must use the correct left/right file.

```bash
# Build with QMK CLI
qmk flash -kb ergodonk_zero --keymap default -bl uf2-split-left
qmk flash -kb ergodonk_zero --keymap default -bl uf2-split-right
```

QMK source lives in `Firmware/qmk/ergodonk_zero/`. VIA config is at `Firmware/via/ergodonk_zero.json`.

## Key Architecture Notes

- The image manifest (`docs/_data/image_manifest.json`) is the source of truth for which WebP variants exist. Never hand-edit it; always regenerate via `optimize-images.js`.
- `image_swapper.js` seeds its variable counter (`img1`, `img2`, …) by scanning existing `{% assign imgN %}` blocks so it never collides with manually added assignments.
- The site is hosted at `ergodonk.com` via GitHub Pages; the `docs/CNAME` file controls the custom domain.
