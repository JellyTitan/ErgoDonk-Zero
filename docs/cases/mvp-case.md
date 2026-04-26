---
layout: page
title: Minimalist Keyplate Case
description: Minimalist ErgoDonk Zero case using only a 3D-printed keyplate. Works with or without a backplate — great for showing off a bare PCB with minimal hardware.
parent: Case Options
permalink: /cases/mvp-case
nav_order: 4
image: /images/mvp_case/mvp_case_both-1200w.webp
# published: false
---

{% assign img1 = site.data.image_manifest["images/acrylic_case/keyplate.png"] %}
{% assign img2 = site.data.image_manifest["images/acrylic_case/bumper_locations.JPG"] %}
{% comment %}
  Local build command: bundle exec jekyll serve 
  Image aspect ratio should be 3:5
  Adds lightbox to links around images:
  https://jekyllcodex.org/without-plugin/lightbox/

   - @todo - need to optimize images - way too big.

  Tables on this page use static HTML instead of markdown pipe syntax because
  kramdown does not process Liquid includes ({% include %}) inside markdown table cells.

  When multiple images appear together in a single <td>, they must be wrapped in a <p>
  tag. The slider lightbox identifies image groups by their shared parent element —
  without the wrapper, left/right navigation between adjacent images will not work.
{% endcomment %}

# Minimalist ErgoDonk Zero case

For those that like the look of a bare pcb with the minimum viable case. Also known as a "naked case".

{: .warning}
>  Beware - this case collects cat hair like it's going out of style. Expect a tear-down cleaning at least yearly. 
<hr>
{% assign p1 = site.data.image_manifest["images/mvp_case/mvp_case_both.JPG"] %}
{% assign p2 = site.data.image_manifest["images/mvp_case/mvp_case_left_closeup.JPG"] %}
{% assign p3 = site.data.image_manifest["images/mvp_case/mvp_case_back.JPG"] %}
<p class="image-grid-3">
{% include slider_img_srcset.html
   src="images/mvp_case/mvp_case_both.JPG"
   alt="ErgoDonk Zero minimalist case, both hands"
   eager=true
   fetchpriority="high" 
   manifest=p1 %}

   {% include slider_img_srcset.html
   src="images/mvp_case/mvp_case_left_closeup.JPG"
   alt="ErgoDonk Zero minimalist case, left hand close-up"
   eager=true
   fetchpriority="low"
   manifest=p2 %}

   {% include slider_img_srcset.html
   src="images/mvp_case/mvp_case_back.JPG"
   alt="Minimal ErgoDonk case with only a keyplate"
   eager=true
   fetchpriority="low"
   manifest=p3 %}
</p>
<hr>

## Details

You can get away with only a 3d printed keyplate. You can add some rubber bumpers on the underside of the pcb if you're feeling fancy. You could even get away without the key plate, but the switches will likely rock in their sockets. This setup has been my daily driver for the last year, and it's been lovely. In the pictures above, the left hand is the 'thickaronie' keyplate, while the right hand is a 3d print of the acrylic keyplate. I didn't bother with bumpers on the underside because I'm on a non-conductive desk. I'm happy to report that no keys popped out, and nothing short circuited.

The 3d printed keyplate is the easiest method. You can find the source files for the keyplates in [this repo](https://github.com/JellyTitan/ErgoDonk-Zero/tree/main/Cases/3d_printable_case) or on [printables](https://www.printables.com/model/738066-ergodonk-zero-case). 

You could also print the source file for the acrylic key plate, and use it as a template to cut a keyplate from cardboard.[8.5x11 & A4 pdf's of the keyplate](https://github.com/JellyTitan/ErgoDonk-Zero/tree/main/Cases/mvp_case) can be found in the github repo. Be sure to print at 100%, and test one key hole before cutting out the whole thing. Many printers default to 96% to offset the printer margins.
<figure>
{% assign p4 = site.data.image_manifest["images/mvp_case/mvp_case_print_settings.png"] %}
{% include img_srcset.html
   src="images/mvp_case/mvp_case_print_settings.png"
   alt="Print dialog with scale percentage highlighted"
   manifest=p4
%}
<figcaption>Don't forget to check print size!</figcaption>
</figure>
Rubber bumpers on the bottom can be subbed out for bumps of hot glue, or omitted entirely if you're using a desk mat that isn't conductive. If you go that route, you might want to clean up your flux and nip your solder joints flat so you don't tear up your desk.

## BOM

<table>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Count</th>
      <th scope="col">Remarks</th>
      <th scope="col">Potential Storefront</th>
      <th scope="col">Image</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Left &amp; right hand keyplates</td>
      <td>1</td>
      <td>Use the 2 <a href="https://www.printables.com/model/738066-ergodonk-zero-case">ErgoDonk Zero keyplate files found on printables</a>.</td>
      <td></td>
      <td>
        {% include slider_img_srcset_thumb.html
            src="images/acrylic_case/keyplate.png"
            alt="Acrylic ErgoDonk Zero key plate"
            manifest=img1
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
            manifest=img2
        %}
      </td>
    </tr>
  </tbody>
</table>
