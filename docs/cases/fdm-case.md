---
layout: page
title: 3D Printable FDM Case
parent: Case Options
permalink: /cases/fdm-case
description: 3D printable FDM case for the ErgoDonk Zero keyboard. STL files for MX switches with keyplate, monobody cover, and optional backplate. Also available on Printables.
nav_order: 3
image: /images/fdm_case/fdm_donk_1.webp
# published: false
---

{% assign img1 = site.data.image_manifest["images/fdm_case/fdm_donk_1.webp"] %}
{% assign img2 = site.data.image_manifest["images/fdm_case/fdm_donk_2.webp"] %}
{% assign img3 = site.data.image_manifest["images/fdm_case/fdm_donk_3.webp"] %}

# 3d printable ErgoDonk Zero case

{: .info}
> Files are in the Github Repo [here](https://github.com/JellyTitan/ErgoDonk-Zero/tree/main/Cases/3d_printable_case).
> This is also posted on [Printables](https://www.printables.com/model/738066-ergodonk-zero-case). You'll find the latest discussion there.

<hr>
<p class="image-grid-3">
{% include slider_img_srcset.html src="images/fdm_case/fdm_donk_1.webp" alt="3d printed ErgoDonk Zero case" manifest=img1 eager=true fetchpriority="high" %}
{% include slider_img_srcset.html src="images/fdm_case/fdm_donk_2.webp" alt="Close up of right hand ErgoDonk Zero 3d printed case" manifest=img2 eager=true fetchpriority="low" %}
{% include slider_img_srcset.html src="images/fdm_case/fdm_donk_3.webp" alt="Back of 3d printed ErgoDonk Zero case without the optional back plate." manifest=img3 eager=true fetchpriority="low" %}
</p>

<hr>

## Details
Designed for use with MX switches. 

Right and Left hand cases are unique and not interchangeable. 

The keyplate is mirrored for the right and left hand. They are split into separate files with a LH/RH suffix to prevent any confusion. They should be printed with the notches up, and the side that shows through the keys is against the build plate. They are oriented that way in the .stl & gcode files.

You can add print helper objects to keep the edges from curling. There is a ‘sacrificial’ support below the bridge that connects the island in the middle of the thumb cluster. Snap that off by hand. (It's highlighted in the image with the yellow arrow).

The backplate of the case is optional.

Use 8mm screws if the backplate is used. If no back plate is used, go with 4mm screws.

The fusion 360 source files for the ErgoDonk-Zero can be found on [printables](https://www.printables.com/model/738066-ergodonk-zero-case/files). 

<hr>

## About these plates
The key plates for this case were created by exporting svg layers directly from KiCad. The Svg's were imported into Fusion360 with a 3.7795% scale. (Not sure why the KiCad exports are so small - but that multiplier seems to get them where they need to go). The svg sketches were fixed up, then extruded to 3mm.
