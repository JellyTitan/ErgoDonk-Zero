---
layout: page
title: Image Optimization Workflow
# parent: Cases
permalink: /image-notes
description: ErgoDonk Zero doc image optimization notes
nav_order: 4
# image: /images/mvp_case/mvp_case_both.JPG
published: false
---
# Image Optimization Workflow

Images are converted from source formats (`.jpg`, `.png`, `.gif`) to `.webp` with multiple srcset
variants using Sharp. A Jekyll include handles the HTML output. Lightbox2 is used for the gallery
slideshow.

## Overview

1. Run the Sharp script to generate `.webp` variants on disk and a manifest file
2. Use the Jekyll include in Markdown to output the correct HTML
3. Wrap multiple images in a `<p>` tag to enable Lightbox prev/next navigation

---

## Step 1 — Generate WebP Variants

Install dependencies:

```bash
npm install sharp glob
```

Run the script:

```bash
node scripts/optimize-images.js
```

The script reads all source images from `images/` and outputs WebP variants at the following
widths, skipping any size larger than the original:

- `my-photo-150w.webp`
- `my-photo-250w.webp`
- `my-photo-400w.webp`
- `my-photo-800w.webp`
- `my-photo-1200w.webp`
- `my-photo-1600w.webp`
- `my-photo.webp` (original size, used as the `src` fallback)

It also writes `_data/image_manifest.json` containing the original dimensions and generated
variants for each image. Jekyll reads this at build time to output only the srcset sizes that
actually exist on disk.

> **Note:** Make sure `package.json` has `"type": "module"` set, as the script uses ES module
> `import` syntax.

### Script Configuration

Key constants at the top of `scripts/optimize-images.js`:

```javascript
const WIDTHS = [150, 250, 400, 800, 1200, 1600];
const QUALITY = 82;
const INPUT_DIR = 'images';
const OUTPUT_DIR = 'images';
const MANIFEST_PATH = '_data/image_manifest.json';
```

---

## Step 2 — The Jekyll Include

File location: `_includes/picture.html`

```liquid
{% assign base = include.src | remove: '.jpg' | remove: '.JPG' | remove: '.jpeg' | remove: '.JPEG' | remove: '.gif' | remove: '.GIF' | remove: '.png' | remove: '.PNG' %}
{% assign manifest_entry = include.manifest %}
{% assign largest = manifest_entry.variants | last %}

<a href="{{ base }}-{{ largest.width }}w.webp"
   data-title="{{ include.alt }}"><img
  src="{{ base }}.webp"
  srcset="{% for v in manifest_entry.variants %}{{ base }}-{{ v.width }}w.webp {{ v.width }}w{% unless forloop.last %}, {% endunless %}{% endfor %}"
  sizes="{{ include.sizes | default: '(max-width: 768px) 100vw, 800px' }}"
  alt="{{ include.alt }}"
  {% if include.eager %}loading="eager"{% else %}loading="lazy"{% endif %}
  {% if include.fetchpriority %}fetchpriority="{{ include.fetchpriority }}"{% endif %}
  {% if include.class %}class="{{ include.class }}"{% endif %}
  width="{{ include.width | default: manifest_entry.width }}"
  height="{{ include.height | default: manifest_entry.height }}"
/></a>
```

> **Important:** Keep all tags on the same line with no blank lines between them. Kramdown will
> strip or escape tags if it finds blank lines inside the include output.

> **Important:** `site.data` is not accessible inside `_includes` when called from a Markdown
> file. The manifest entry must be assigned in the Markdown page and passed in as a parameter.
> See Step 3 below.

### Include Parameters

| Parameter       | Required | Description                                                            |
|-----------------|----------|------------------------------------------------------------------------|
| `src`           | Yes      | Path to the original source image, e.g. `images/my-photo.jpg`         |
| `alt`           | Yes      | Alt text. Also used as the Lightbox caption.                           |
| `manifest`      | Yes      | Pre-assigned manifest entry for this image. See Step 3.                |
| `eager`         | No       | Set to `true` to disable lazy loading for above-the-fold images.       |
| `fetchpriority` | No       | Set to `"high"` on your LCP image.                                     |
| `class`         | No       | CSS class applied to the `<img>` element.                              |
| `sizes`         | No       | Overrides the default `sizes` attribute.                               |
| `width`         | No       | Overrides the intrinsic width from the manifest.                       |
| `height`        | No       | Overrides the intrinsic height from the manifest.                      |

---

## Step 3 — Usage in Markdown

Because `site.data` is not accessible inside includes called from Markdown, assign the manifest
entry to a variable first, then pass it in.

### Single image

```liquid
{% assign my_photo = site.data.image_manifest["images/my-photo.jpg"] %}

{% include picture.html
   src="images/my-photo.jpg"
   alt="My description"
   manifest=my_photo %}
```

### Above-the-fold images

Omit lazy loading and flag the primary LCP image:

```liquid
{% assign hero = site.data.image_manifest["images/hero.jpg"] %}

{% include picture.html
   src="images/hero.jpg"
   alt="Hero image"
   manifest=hero
   eager=true
   fetchpriority="high" %}
```

### Three images in a grid

Assign all manifest entries at the top of the page, then use them in the include calls.

Wrap in a `<p>` tag so Lightbox can find siblings for prev/next navigation. A `<div>` wrapper
breaks Lightbox's sibling detection.

```liquid
{% assign p1 = site.data.image_manifest["images/photo-1.jpg"] %}
{% assign p2 = site.data.image_manifest["images/photo-2.jpg"] %}
{% assign p3 = site.data.image_manifest["images/photo-3.jpg"] %}

<p class="image-grid-3">
{% include picture.html src="images/photo-1.jpg" alt="First" manifest=p1 %}
{% include picture.html src="images/photo-2.jpg" alt="Second" manifest=p2 %}
{% include picture.html src="images/photo-3.jpg" alt="Third" manifest=p3 %}
</p>
```

---

## CSS

Add to `_sass/custom/custom.scss`:

```scss
.image-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  a {
    display: block;
  }
}

// Optional: stack to single column on mobile
@media (max-width: 600px) {
  .image-grid-3 {
    grid-template-columns: 1fr;
  }
}
```

---

## Finding Image Dimensions

The `width` and `height` attributes on the `<img>` element should reflect the **intrinsic
dimensions of the original source image**, not the display size. Their purpose is to let the
browser reserve the correct aspect ratio space before the image loads, preventing Cumulative
Layout Shift (CLS).

The manifest provides these automatically so you no longer need to pass them manually. Override
with `width` and `height` parameters only if needed.

Ways to find dimensions manually if needed:

- **`_data/image_manifest.json`** — generated by the Sharp script
- **macOS Finder** — select the file and press Space for Quick Look
- **Command line** — `identify my-photo.jpg` (ImageMagick) or `exiftool my-photo.jpg`
- **Browser** — open the image directly in a tab; dimensions appear in the tab title

---

## Performance Notes

- **Lazy load** everything below the fold (default behavior of the include)
- **Disable lazy load** (`eager=true`) for any image visible on page load
- **`fetchpriority="high"`** on your LCP image can meaningfully improve Core Web Vitals scores
- **WebP** is universally supported; no `<picture>` fallback to JPEG is needed
- The Lightbox `href` points to the largest generated variant as the full-size view target
- The srcset only includes variants that were actually generated — images smaller than a given
  breakpoint will not have that variant output in the markup
