---
layout: page
title: Minimialist case
parent: Cases
permalink: /cases/mvp-case
description: Minimalist ErgoDonk Zero case using only a key plate and pcb bumpers
nav_order: 4
image: /images/mvp_case/mvp_case_both.JPG
# published: false
---
{% comment %}
  Local build command: bundle exec jekyll serve 
  Image aspect ratio should be 3:5
  Adds lightbox to links around images:
  https://jekyllcodex.org/without-plugin/lightbox/

   - @todo - need to optimize images - way too big. 
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
{% include picture.html
   src="images/mvp_case/mvp_case_both.JPG"
   alt="Acrylic ErgoDonk Zero case"
   eager=true
   fetchpriority="high" 
   manifest=p1 %}

   {% include picture.html
   src="images/mvp_case/mvp_case_left_closeup.JPG"
   alt="Acrylic ErgoDonk Zero case"
   fetchpriority="high"
   manifest=p2 %}

   {% include picture.html
   src="images/mvp_case/mvp_case_back.JPG"
   alt="Minimal ErgoDonk case with only a keyplate"
   fetchpriority="high"
   manifest=p3 %}
</p>
<hr>

## Details

You can get away with only a 3d printed keyplate. You can add some rubber bumpers on the underside of the pcb if your feeling fancy. You could even get away without the key plate, but the switches will likely rock in their sockets. This setup has been my daily driver for the last year, and it's been lovely. In the pictures above, the left hand is the 'thickaronie' keyplate, while the right hand is a 3d print of the acrylic keyplate. I didn't bother with bumpers on the underside because i'm on a non-conductive desk. I'm happy to report that no keys popped out, and nothing short circuited.

The 3d printed keyplate is the easiest method. You can find the source files for the keyplates in [this repo](https://github.com/JellyTitan/ErgoDonk-Zero/tree/main/Cases/3d_printable_case) or on [printables](https://www.printables.com/model/738066-ergodonk-zero-case). 

You could also print the source file for the acrylic key plate, and use it as a template to cut a keyplate from cardboard.[8.5x11 & A4 pdf's of the keyplate](https://github.com/JellyTitan/ErgoDonk-Zero/tree/main/Cases/mvp_case) can be found in the github repo. Be sure to print at 100%, and test one key hole before cutting out the whole thing. Many printers default to 96% to offset the printer margins.
<figure>
{% assign p4 = site.data.image_manifest["images/mvp_case/mvp_case_print_settings.png"] %}
{% include picture.html
   src="images/mvp_case/mvp_case_print_settings.png"
   alt="Print dialog with scale percentage highlighted"
   manifest=p4
%}
<figcaption>Don't forget to check print size!</figcaption>
</figure>
Rubber bumpers on the bottom can be subbed out for bumps of hot glue, or omitted entirely if your using a desk mat that isn't. conductive. If you go that route, you might want to clean up your flux and nip your solder joints flat so you don't tear up your desk.

## BOM

| Name | Count | Remarks | Potential Storefront | Image |
| -----| ----- |---------| -------------------- | ----- |
| Left & right hand keyplates   | 1 | Use the 2 [ErgoDonk Zero keyplate files found on printables](on [printables](https://www.printables.com/model/738066-ergodonk-zero-case)) | <a href="/images/acrylic_case/keyplate.png"><img src="/images/acrylic_case/keyplate.png" alt="Acrylic ErgoDonk Zero key plate" ></a> |
| 2mm adhesive Rubber bumper feet. | 10 | These keep the board from sliding on the desk. Put 5 on the bottom side of each hand to keep from sliding on the desk. | [Amazon](https://www.amazon.com/ROCHU-Self-Adhesive-Rubber-Bumpons-Furniture/dp/B073SVKFYJ) | <a href="/images/acrylic_case/bumper_locations.JPG"><img src="/images/acrylic_case/bumper_locations.JPG" alt="Bumper feet locations" ></a> |
