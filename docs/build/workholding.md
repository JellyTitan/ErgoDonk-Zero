---
layout: page
title: Soldering & Workholding
description: Suggested work holding and assembly methods 
parent: Build
permalink: /build/workholding
nav_order: 3
image: /images/workholding_jig_solder_from_top-1200w.webp
---

{% assign img1 = site.data.image_manifest["images/diode_bend_top.JPG"] %}
{% assign img2 = site.data.image_manifest["images/diode_bend_under.JPG"] %}
{% assign img3 = site.data.image_manifest["images/kapton_top.JPG"] %}
{% assign img4 = site.data.image_manifest["images/kapton_under.JPG"] %}
{% assign img5 = site.data.image_manifest["images/top_jig.JPG"] %}
{% assign img6 = site.data.image_manifest["images/workholding_jig_solder_from_top.JPG"] %}
{% assign img7 = site.data.image_manifest["images/ErgoDonk_zero_all_feet.JPG"] %}
{% assign img8 = site.data.image_manifest["images/Ergodonk_zero_one_foot.JPG"] %}
{% assign img9 = site.data.image_manifest["images/3d_model_of_work_feet.png"] %}

# Soldering and workholding

There are a few common soldering methods used with through-hole components. In this guide, we'll be using the third method - "work holding". Accordingly, the docs will not reference flipping the PCB over for soldering legs.

## The bendy method
Push the legs through the holes, then bend the legs slightly outward on the bottom side to keep the component in the hole when the PCB is flipped over. Solder on the side of the board opposite from the side the component was inserted.
<div class="image-grid-2">
    {% include slider_img_srcset.html src="images/diode_bend_top.JPG" alt="pcb with diode inserted from the top" manifest=img1 %} 
    {% include slider_img_srcset.html src="images/diode_bend_under.JPG" alt="pcb with bent diode legs" manifest=img2 %}
</div>
<hr>
## The tape method
Push the legs through the holes and put a piece of kapton tape over the component to keep it in place when the board is flipped. Solder on the side of the board opposite from the side the component was inserted.
<div class="image-grid-2"> 
    {% include slider_img_srcset.html src="images/kapton_top.JPG" alt="pcb with diodes held in place by kapton tape" manifest=img3 %} 
    {% include slider_img_srcset.html src="images/kapton_under.JPG" alt="underside of pcb with diodes held in place by kapton tape" manifest=img4 %} 
</div>
<hr>
## Work holding
Use helping hands or work holding jig to keep the PCB lifted off the work surface. Insert components through the holes, _do not_ flip the pcb, and solder on the side the components are inserted. This is the recommended method.

If you have access to a 3d printer, you can print disposable [work holding legs designed specifically for the ErgoDonk Zero PCB](https://www.printables.com/model/733164-ergodonk-zero-pcb-holding-feet).

### [Magnetic work holding thingies](https://www.aliexpress.us/item/2255800735314797.html)
<div class="image-grid-2">
{% include slider_img_srcset.html src="images/top_jig.JPG" alt="pcb in workholding jigs with diodes inserted from the top" manifest=img5 %} 
{% include slider_img_srcset.html src="images/workholding_jig_solder_from_top.JPG" alt="pcb in workholding jigs with diodes protruding" manifest=img6 %}
</div>

### [3d Printable work holding feet](https://www.printables.com/model/733164-ergodonk-zero-pcb-holding-feet)

<div class="image-grid-3">
{% include slider_img_srcset.html src="images/ErgoDonk_zero_all_feet.JPG" alt="Disposable 3d printable work holding legs for the ErgoDonk Zero" manifest=img7 %}
{% include slider_img_srcset.html src="images/Ergodonk_zero_one_foot.JPG" alt="Close up of a disposable 3d printable work holding leg for the ErgoDonk Zero" manifest=img8 %} 
{% include slider_img_srcset.html src="images/3d_model_of_work_feet.png" alt="3d model of a disposable 3d printable work holding leg for the ErgoDonk Zero" manifest=img9 %}
</div>