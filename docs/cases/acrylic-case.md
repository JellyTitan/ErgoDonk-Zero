---
layout: page
title: Acrylic
description: Acrylic sandwich case for the ErgoDonk Zero keyboard. Includes BOM with standoff sizes, DXF files for laser cutting, and sourcing notes for Elecrow orders.
parent: Case Options
permalink: /cases/acrylic-case
nav_order: 1
image: /images/acrylic_case/acrylic_tilted_hero-1200w.webp
---

{% assign img1 = site.data.image_manifest["images/acrylic_case/acrylic_tilted_hero.jpeg"] %}
{% assign img2 = site.data.image_manifest["images/acrylic_case/knob_close_up.jpeg"] %}
{% assign img3 = site.data.image_manifest["images/acrylic_case/acrylic_handsome_stack.jpeg"] %}
{% comment %}
  Tables on this page use static HTML instead of markdown pipe syntax because
  kramdown does not process Liquid includes ({% include %}) inside markdown table cells.

  When multiple images appear together in a single <td>, they must be wrapped in a <p>
  tag. The slider lightbox identifies image groups by their shared parent element —
  without the wrapper, left/right navigation between adjacent images will not work.
{% endcomment %}
{% assign img4 = site.data.image_manifest["images/acrylic_case/keyplate.png"] %}
{% assign img5 = site.data.image_manifest["images/acrylic_case/backplate.png"] %}
{% assign img6 = site.data.image_manifest["images/acrylic_case/solenoid_cover_plate_LH.jpeg"] %}
{% assign img7 = site.data.image_manifest["images/acrylic_case/solenoid_blank_cover_plate_RH.jpeg"] %}
{% assign img8 = site.data.image_manifest["images/acrylic_case/solenoid_cover.png"] %}
{% assign img9 = site.data.image_manifest["images/acrylic_case/acrylic_lh_mcu_cover.jpeg"] %}
{% assign img10 = site.data.image_manifest["images/acrylic_case/LH_MCU_cover.png"] %}
{% assign img11 = site.data.image_manifest["images/acrylic_case/acrylic_rh_mcu_cover.jpeg"] %}
{% assign img12 = site.data.image_manifest["images/acrylic_case/RH_MCU_cover.png"] %}
{% assign img13 = site.data.image_manifest["images/acrylic_case/m2_6mm_standoff.JPG"] %}
{% assign img14 = site.data.image_manifest["images/acrylic_case/m2_12mm_standoff.JPG"] %}
{% assign img15 = site.data.image_manifest["images/acrylic_case/m2_16mm_standoff.png"] %}
{% assign img16 = site.data.image_manifest["images/acrylic_case/m2_9mm_standoff.png"] %}
{% assign img17 = site.data.image_manifest["images/acrylic_case/bumper_locations.JPG"] %}

# Acrylic case

{: .info}
>  Files are in the Github Repo [here](https://github.com/JellyTitan/ErgoDonk-Zero/tree/main/Cases/Acrylic/production_ready).

<hr>
<p class="image-grid-3">
{% include slider_img_srcset.html src="images/acrylic_case/acrylic_tilted_hero.jpeg" alt="Acrylic ErgoDonk Zero case" manifest=img1 eager=true fetchpriority="high" %} 
{% include slider_img_srcset.html src="images/acrylic_case/knob_close_up.jpeg" alt="Acrylic ErgoDonk Zero case" manifest=img2 eager=true fetchpriority="low" %} 
{% include slider_img_srcset.html src="images/acrylic_case/acrylic_handsome_stack.jpeg" alt="Acrylic ErgoDonk Zero case" manifest=img3 eager=true fetchpriority="low"  %}   
</p>

<hr>

## Details

These don't retain the switches as tightly as the 3d printed cases, but they look fantastic. 

Rather than purchase multiple size female-female 2mm standoffs, using an '[assortment box](https://www.amazon.com/gp/product/B07B9X1KY6)' is much easier.

The production ready files for upload can be found in the "production_ready" folder. They are zipped .dxf files. I recommend 3mm thickness. Some online vendors ask you to manually input the dimensions for pricing. Dimensions can be found in the BOM remarks below.

<hr>

## BOM

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Count</th>
      <th>Remarks</th>
      <th>Potential Storefront</th>
      <th>Image</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>keyplates</td>
      <td>2</td>
      <td>Use the same file for both sides: <code>Ergodonk_Zero_v0.2_keyplate.dxf.zip</code><br> Dimensions: <code>217mm x 157mm</code></td>
      <td><a href="https://www.elecrow.com/">Elecrow</a></td>
      <td>
        {% include slider_img_srcset_thumb.html
            src="images/acrylic_case/keyplate.png"
            alt="Acrylic ErgoDonk Zero key plate"
            manifest=img4
        %}
      </td>
    </tr>
    <tr>
      <td>backplates</td>
      <td>2</td>
      <td>Use the same file for both sides: <code>Ergodonk_Zero_v0.2.1_bottom_plate.dxf.zip</code><br> Dimensions: <code>217mm x 157mm</code></td>
      <td><a href="https://www.elecrow.com/">Elecrow</a></td>
      <td>
        {% include slider_img_srcset_thumb.html
            src="images/acrylic_case/backplate.png"
            alt="Acrylic ErgoDonk Zero back plate"
            manifest=img5
        %}
      </td>
    </tr>
    <tr>
      <td>Solenoid cover</td>
      <td>2</td>
      <td>Use the same file for both sides: <code>Ergodonk_Zero_v0.2_Solenoid_cover.dxf.zip</code><br> Dimensions: <code>55mm x 25mm</code></td>
      <td><a href="https://www.elecrow.com/">Elecrow</a></td>
      <td>
        <p>
          {% include slider_img_srcset_thumb.html
              src="images/acrylic_case/solenoid_cover_plate_LH.jpeg"
              alt="Acrylic ErgoDonk Zero case solenoid cover"
              manifest=img6
          %}
          {% include slider_img_srcset_thumb.html
              src="images/acrylic_case/solenoid_blank_cover_plate_RH.jpeg"
              alt="Acrylic ErgoDonk Zero case solenoid cover"
              manifest=img7
          %}
          {% include slider_img_srcset_thumb.html
              src="images/acrylic_case/solenoid_cover.png"
              alt="Acrylic ErgoDonk Zero case solenoid cover"
              manifest=img8
          %}
        </p>
      </td>
    </tr>
    <tr>
      <td>Left Hand MCU cover</td>
      <td>1</td>
      <td>Left hand only. Notice this covers empty sockets that are not used on the left hand. If you don't like seeing those, select an opaque acrylic. <br> <code>Ergodonk_Zero_v0.2_LH_MCU_Cover.dxf.zip</code><br> Dimensions: <code>78mm x 97mm</code></td>
      <td><a href="https://www.elecrow.com/">Elecrow</a></td>
      <td>
        <p>
          {% include slider_img_srcset_thumb.html
              src="images/acrylic_case/acrylic_lh_mcu_cover.jpeg"
              alt="Left hand Acrylic ErgoDonk Zero MCU cover plate"
              manifest=img9
          %}
          {% include slider_img_srcset_thumb.html
              src="images/acrylic_case/LH_MCU_cover.png"
              alt="Left hand Acrylic ErgoDonk Zero MCU cover plate"
              manifest=img10
          %}
        </p>
      </td>
    </tr>
    <tr>
      <td>Right Hand MCU cover</td>
      <td>1</td>
      <td>Right hand only: <code>Ergodonk_Zero_v0.2_RH_MCU_Cover.dxf.zip</code><br> Dimensions: <code>78mm x 40mm</code></td>
      <td><a href="https://www.elecrow.com/">Elecrow</a></td>
      <td>
        <p>
          {% include slider_img_srcset_thumb.html
              src="images/acrylic_case/acrylic_rh_mcu_cover.jpeg"
              alt="Right hand Acrylic ErgoDonk Zero MCU cover plate"
              manifest=img11
          %}
          {% include slider_img_srcset_thumb.html
              src="images/acrylic_case/RH_MCU_cover.png"
              alt="Right hand Acrylic ErgoDonk Zero MCU cover plate"
              manifest=img12
          %}
        </p>
      </td>
    </tr>
    <tr>
      <td>M2 5mm screws</td>
      <td>56</td>
      <td>Any old M2 will do. I prefer 'button head' for aesthetics. 4mm or 6mm works too, but 6mm may bottom out.</td>
      <td><a href="https://www.amazon.com/gp/product/B07ZH6GRK2">Amazon</a><br><a href="https://www.aliexpress.us/item/3256805706765925.html">AliExpress</a></td>
      <td>X</td>
    </tr>
    <tr>
      <td>M2 6mm female-female standoffs</td>
      <td>16</td>
      <td>Connects the front plate to the back plate, runs <em>through</em> the pcb. Aluminum versions are available, but I've found they tend to arrive 'greasy' or oxidized, so I recommend the brass versions. Left hand uses 7, right hand uses 9.</td>
      <td><a href="https://www.amazon.com/gp/product/B07B9X1KY6">Amazon</a><br><a href="https://www.aliexpress.us/item/3256804317893173.html">AliExpress</a></td>
      <td>
        {% include slider_img_srcset_thumb.html
            src="images/acrylic_case/m2_6mm_standoff.JPG"
            alt="Acrylic ErgoDonk Zero MCU key plate attached to back plate with 6mm M2 female-female standoffs"
            manifest=img13
        %}
      </td>
    </tr>
    <tr>
      <td>M2 12mm female-female standoffs</td>
      <td>6</td>
      <td>Connects the MCU cover plate to the back plate, runs <em>through</em> the pcb and the key plate. Left hand uses 4, right hand uses 2.</td>
      <td><a href="https://www.amazon.com/gp/product/B07B9X1KY6">Amazon</a><br><a href="https://www.aliexpress.us/item/3256804317893173.html">AliExpress</a></td>
      <td>
        {% include slider_img_srcset_thumb.html
            src="images/acrylic_case/m2_12mm_standoff.JPG"
            alt="Acrylic ErgoDonk Zero MCU cover plate attached with 12mm M2 female-female standoffs"
            manifest=img14
        %}
      </td>
    </tr>
    <tr>
      <td>M2 16mm female-female standoffs</td>
      <td>3</td>
      <td>Connects the left hand solenoid cover plate to the back plate, runs <em>through</em> the pcb and the key plate.</td>
      <td><a href="https://www.amazon.com/gp/product/B07B9X1KY6">Amazon</a><br><a href="https://www.aliexpress.us/item/3256804317893173.html">AliExpress</a></td>
      <td>
        {% include slider_img_srcset_thumb.html
            src="images/acrylic_case/m2_16mm_standoff.png"
            alt="Left hand Acrylic ErgoDonk Zero solenoid cover plate attached with 16mm M2 female-female standoffs"
            manifest=img15
        %}
      </td>
    </tr>
    <tr>
      <td>M2 9mm female-female standoffs</td>
      <td>3</td>
      <td>Connects the right hand solenoid cover plate to the back plate, runs <em>through</em> the pcb and the key plate. 10mm is fine too.</td>
      <td><a href="https://www.amazon.com/gp/product/B07B9X1KY6">Amazon</a><br><a href="https://www.aliexpress.us/item/3256804317893173.html">AliExpress</a></td>
      <td>
        {% include slider_img_srcset_thumb.html
            src="images/acrylic_case/m2_9mm_standoff.png"
            alt="Right hand Acrylic ErgoDonk Zero solenoid cover plate attached with 16mm M2 female-female standoffs"
            manifest=img16
        %}
      </td>
    </tr>
    <tr>
      <td>2mm adhesive Rubber bumper feet.</td>
      <td>10</td>
      <td>These keep the board from sliding on the desk. Put 5 on the bottom side of each hand to keep from sliding on the desk.</td>
      <td><a href="https://www.amazon.com/ROCHU-Self-Adhesive-Rubber-Bumpons-Furniture/dp/B073SVKFYJ">Amazon</a></td>
      <td>
        {% include slider_img_srcset_thumb.html
            src="images/acrylic_case/bumper_locations.JPG"
            alt="Bumper feet locations"
            manifest=img17
        %}
      </td>
    </tr>
  </tbody>
</table>

<hr>

## About these plates
This case was created by exporting svg layers directly from KiCad. The Svg's were imported into Fusion360 with a 3.7795% scale. (Not sure why the KiCad exports are so small - but that multiplier seems to get them where they need to go). From Fusion360, the outlines are exported as a .dxf. The .dxf's have been zipped because the only vendor I've tested these with is Elecrow. If you need another file type, you can find the initial svg's in the 'source' folder.

