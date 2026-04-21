---
layout: page
title: Case Options
permalink: /cases
description: "ErgoDonk Zero case options: acrylic sandwich, FDM 3D-printed, or bare PCB with keyplate."
nav_order: 6
has_children: true
image: /images/acrylic_case/acrylic_tilted_hero-1200w.webp
---

{% assign img1 = site.data.image_manifest["images/acrylic_case/acrylic_tilted_hero.jpeg"] %}
{% assign img2 = site.data.image_manifest["images/fdm_case/fdm_donk_cases_hero.jpeg"] %}
{% assign img3 = site.data.image_manifest["images/mvp_case/mvp_case_both.JPG"] %}

# ErgoDonk Zero Cases

<p class="image-grid-3">
{% include slider_img_srcset.html src="images/acrylic_case/acrylic_tilted_hero.jpeg" alt="Acrylic ErgoDonk Zero case" manifest=img1 eager=true fetchpriority="high" %} 
{% include slider_img_srcset.html src="images/fdm_case/fdm_donk_cases_hero.jpeg" alt="Ergodonk zero 3d printed case" manifest=img2 eager=true fetchpriority="low" %}
{% include slider_img_srcset.html src="images/mvp_case/mvp_case_both.JPG" alt="ErgoDonk with a naked minimalist case" manifest=img3 eager=true fetchpriority="low" %}
</p>
 - Key plates are strongly recommended, but not technically required. If you use 3 pin MX keys, the thumb keys tend to fall out if you don't use a key plate.
 - Plates can be made from acrylic, or 3d printed.
 - The 3d printed or acrylic key plates combined with a backplate make a nice 'sandwich' case. 
 - You can cover up the sandwich case with the 3d printed 'monobody' cover.
 - Spacers are intended to pass through the main pcb and screw onto the bottom plates, top plates, and MCU & Solenoid plates. 
 - Having a standoff kit is helpful when assembling the keyplates. [M2 Brass Standoff Kit](https://www.amazon.com/gp/product/B07B9X1KY6)
 - Acrylic key plates should only be used for MX switches. (The choc switches retention nubs only allow 1.5mm or 1.6mm plates, which aren't recommended with acrylic).
