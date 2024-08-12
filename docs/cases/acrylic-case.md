---
layout: page
title: Acrylic
parent: Cases
permalink: /cases/acrylic-case
description: Acrylic case files and ordering instructions
nav_order: 1
image: /images/build_guide_pico/acrylic_case_hero_shot.jpeg
published: false
---

# Acrylic case
@todo - rewrite the case docs, then turn on publishing.
@todo - validate the standoff and screw count. Done!
@todo - add images.
@todo - update the output folder.

{: .info}
>  Files are in the Github Repo [here](https://github.com/JellyTitan/ErgoDonk-Zero/tree/main/Cases/Acrylic/production_ready).

<hr>

<a href="/images/cases/acrylic_case_hero_shot.jpeg"><img src="/images/cases/acrylic_case_hero_shot.jpeg" alt="Acrylic sofle pico case" width="49%"></a>
<a href="/images/cases/sofle_pico_acrylic_case.jpeg"><img src="/images/cases/sofle_pico_acrylic_case.jpeg" alt="Acrylic sofle pico case" width="49%"></a>

<hr>

## Details

These don't retain the switches as tightly as the 3d printed or the PCB cases, but they look fantastic. You can use rubber bump feet between the front plate and the PCB to improve switch retention. (See note in bom).

Rather than purchase multiple size female-female 2mm standoffs, using an '[assortment box](https://www.amazon.com/gp/product/B07B9X1KY6)' is much easier.

The production ready files for upload can be found in the "production_ready" folder. They are zipped .dxf files. I recommend 3mm thickness. Some online vendors ask you to manually input the dimensions for pricing. Dimensions can be found in the BOM remarks below.

<hr>

## BOM

 | Name | Count | Remarks | Potential Storefront |
|-|-|-|-|
| keyplates   | 2 | Use the same file for both sides: `Ergodonk_Zero_v0.2_keyplate.dxf.zip`<br> Dimensions: `217mm x 157mm` |[Elecrow](https://www.elecrow.com/)|
| backplates  | 2 | Use the same file for both sides: `Ergodonk_Zero_v0.2.1_bottom_plate.dxf.zip`<br> Dimensions: `217mm x 157mm` |[Elecrow](https://www.elecrow.com/)|
| Solenoid cover | 2 | Use the same file for both sides: `Ergodonk_Zero_v0.2_Solenoid_cover.dxf.zip`<br> Dimensions: `55mm x 25mm` |[Elecrow](https://www.elecrow.com/)|
| Left Hand MCU cover | 1 | Left hand only: `Ergodonk_Zero_v0.2_LH_MCU_Cover.dxf.zip`<br> Dimensions: `78mm x 97mm` |[Elecrow](https://www.elecrow.com/)|
|Right Hand MCU cover | 1 | Right hand only: `Ergodonk_Zero_v0.2_RH_MCU_Cover.dxf.zip`<br> Dimensions: `78mm x 40mm` |[Elecrow](https://www.elecrow.com/)|
|M2 5mm screws|56| Any old M2 will do. I prefer 'button head' for aesthetics. 4mm or 6mm works too, but 6mm may bottom out. |[Amazon](https://www.amazon.com/gp/product/B07ZH6GRK2)<br>[AliExpress](https://www.aliexpress.us/item/3256805706765925.html)|
| M2 6mm female-female standoffs | 16 | Connects the front plate to the back plate, runs _through_ the pcb. Aluminum versions are available, but I've found they tend to arrive 'greasy' or oxidized, so I recommend the brass versions.Left hand uses 7, right hand uses 9.|[Amazon](https://www.amazon.com/gp/product/B07B9X1KY6)<br>[AliExpress](https://www.aliexpress.us/item/3256804317893173.html)|
| M2 12mm female-female standoffs | 6 | Connects the MCU cover plate to the back plate, runs _through_ the pcb and the key plate. Left hand uses 4, right hand uses 2.|[Amazon](https://www.amazon.com/gp/product/B07B9X1KY6)<br>[AliExpress](https://www.aliexpress.us/item/3256804317893173.html)|
| M2 16mm female-female standoffs | 3 | Connects the left hand solenoid cover plate to the back plate, runs _through_ the pcb and the key plate.|[Amazon](https://www.amazon.com/gp/product/B07B9X1KY6)<br>[AliExpress](https://www.aliexpress.us/item/3256804317893173.html)|
| M2 9mm female-female standoffs | 3 | Connects the right hand solenoid cover plate to the back plate, runs _through_ the pcb and the key plate. 10mm is fine too.|[Amazon](https://www.amazon.com/gp/product/B07B9X1KY6)<br>[AliExpress](https://www.aliexpress.us/item/3256804317893173.html)|
| 2mm adhesive Rubber bumper feet. | 20 | These improve switch retention, and keep the board from sliding on the desk. Put 5 on the top of each PCB, below the keyplate. Since the acrylic keyplate doesn't nestle into the switch retention nubs, placing these bumps between the plate and the pcb keeps the plate from flexing. Put another 5 on the bottom side of each hand to keep from sliding on the desk. | [Amazon](https://www.amazon.com/ROCHU-Self-Adhesive-Rubber-Bumpons-Furniture/dp/B073SVKFYJ) |

<hr>

## About these plates
This case was created by exporting svg layers directly from KiCad. The Svg's were imported into Fusion360 with a 3.7795% scale. (Not sure why the KiCad exports are so small - but that multiplier seems to get them where they need to go). From Fusion360, the outlines are exported as a .dxf. The .dxf's have been zipped because the only vendor I've tested these with is Elecrow. If you need another file type, you can find the initial svg's in the 'source' folder.

