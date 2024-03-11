---
layout: page
title: BOM
description: Bill of Materials and sourcing notes
parent: Build
nav_order: 1
---

# Bill of materials (BOM)
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Required Parts

| Name | Count | Remarks | Potential Storefront | Image |
| ---- | ----- | ------- | -------------------- | ----- |
| PCB | 2 | The PCB should be 1.6mm thick. I used JLCPCB's default settings only customizing the PCB color, and selecting 'lead free'. | Manufacturers such as JLCPCB, PCBWay, and Elecrow. [Price comparison tool](https://pcbshopper.com/) | <img src="/images/ergodonk_simple_zero_v0.1.png" > |
| Hot-swap Sockets | 101 | The PCB requires sockets. Switches cannot be soldered directly to the board. <br> Either MX or Choc low profile sockets.  <br> When shopping for MX sockets, try to avoid the variant that has a metal tab in the center of the socket. This makes it harder to get the soldering iron in there. I've only encountered this tab when buying black MX sockets in bulk (500+) from AliExpress. I've _not_ encountered that problem with Kailh & Durock colored sockets. In the image to the right, the black socket has the troublesome tab. | [Amazon MX]( https://www.amazon.com/DUROCK-Mechanical-Keyboard-Switches-Hot-Swap/dp/B0B4WCKWLZ/ )  <br> [Aliexpress MX & Choc](https://www.aliexpress.us/item/3256803687338432.html) | <img src="/images/bom_switches.png" > <br> <img src="/images/hot_swop_sockets.JPG" alt="troublesome tab on kailh hot swop sockets"> |
| Diodes | 103 | Surface mount SOD-123 1N4148, or through-hole 1N4148 diode. These are common, any old one should do. Through hole is usually easier to solder. | SMD:  <br> [AliExpress](https://www.aliexpress.us/item/2251832663565152.html) <br> [JLCPCB](https://jlcpcb.com/partdetail/3368026-1N4148SOD123/C2972760) <br> Through-hole: [AliExpress](https://www.aliexpress.us/item/2251832473773777.html) <br> [Amazon](https://www.amazon.com/100-Pieces-1N4148-Switching-High-Speed/dp/B079KJ91JZ) | <img src="/images/diodes.png" > |
| Raspberry Pi Zero | 2 | There's tons of clones available. Getting the version with the header pins pre-soldered saves you some time, but the pins are long so you'll have to nip off the excess and the pins may bend during shipping. Consider getting the versions without the soldered pins, and using [low profile header pins](#optional---low-profile-header-pins) instead of the header pins it comes with. | [Amazon](https://www.amazon.com/RP2040-Zero-High-Performance-Microcontroller-Castellated-Boards-2pcs/dp/B0B2Z3YWB9/) <br> [AliExpress](https://www.aliexpress.us/item/3256805808673201.html) |  <img src="/images/rp2040.png" >
| TRRS Jacks | 2 | PJ-320A | [AliExpress](https://www.aliexpress.us/item/2255800474897706.html) |  <img src="/images/trrs.png" > |
| TRRS or TRS (3.5mm "Headphone" Cable) | 1 | Either TRRS "4 pole" or TRS "3 pole" will work. These are often referred to as 3.5mm audio cables, or 'aux' cables.  | [Aliexpress](https://www.aliexpress.us/item/3256804197001011.html) <br> [Amazon](https://www.amazon.com/gp/product/B072TYSV61)|  <img src="/images/trs_cable.png" > | 
| MX Style Switches or Choc V1 low profile switches. | 101 | For MX switches, 3-pin or 5-pin will work. For the Choc low profile switches, only V1 is supported.| |
| Key Caps | 101 | Look for keycap sets for "[100% full size](https://thegamingsetup.com/wp-content/uploads/Keyboard-Size-Guide-The-Gaming-Setup-scaled.webp)" keyboards. <br> <br> **Choc V1 Switches**: Choc Switches don't have many keycap options available. <br> <br> **MX swtiches**: The ErgoDonk Zero was designed with the SA [keycap profile](https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Fkld2wynulsq51.png) in mind. The default switch layout on the PCB makes use of the different SA row heights. If you intend to move the keys about, XDA profile is recommended.  | [Choc V1 AliExpress](https://www.aliexpress.us/item/2251832794671800.html) <br> [MX 'SA' AliExpress](https://www.aliexpress.us/item/3256805853319024.html) <br> [MX SA Amazon](https://www.amazon.com/Ducky-Doubleshot-Keyboards-Compatible-Standard/dp/B08WXBVQ4W/?th=1) <br> [MX XDA AliExpress](https://www.aliexpress.us/w/wholesale-xda-keycaps.html)|
| Rotary Encoders and Caps | 2 | EC-11 Rotary Encoder. 20mm stem is the most common, and a 6mm shaft is standard. Either "D" shaft or round shaft will work. If you're partial to fancy knobs, you should pick a shaft that matches your knob. 6mm shafts are used for guitar knobs, so you've got plenty of options. SA Profile keycaps can be quite tall, so you may want to use tall knobs as well. Some EC11's include a washer and nut, but you won't be using either the washer or nut. | [Amazon](https://www.amazon.com/gp/product/B07D3DF8TK) <br> [AliExpress 20mm](https://www.aliexpress.us/item/3256802171959870.html) | <img src="/images/ec11.png" > <img src="/images/ec11_knob.png" > |
| M2 8mm FF spacers @todo - these heights & qty are outdated. | 12 | Connects the bottom plate to the key plate, running through the PCB | |
| M2 12mm FF spacers | 6 | Connects the bottom plate to the OLED plate, running through the PCB and the keyplate. @todo - is it really 12mm? | |
| M2x5mm screws | 52 | M2 screws. | |
| Case | 1 Left Set, 1 Right Set | Case files are located in the [case folder](./Case). | @todo - regenerate after next prototype validated |
| USB-C Cable | 1 | USB cable for connecting the keyboard to your computer. | | 

<hr>

## Optional parts

### Optional - PCB screw in Stabilizers 
Supports up to 8 PCB mounted screw in stabilizers that are 2u in length. Stabilizers often come in sets based on keyboard sizes. A full size 104 key set will usually have 7 2u bars. Note, "PCB mount stabilizers" are not the same as "plate mount stabilizers". Stabilizers can rattle. [There's plenty of mods to 'tune' the stabilizers](https://www.youtube.com/watch?v=4XCErBcn5lc) - but I've given up fighting the rattle and just skip them. YMMV. 

<hr>

### Optional - Solenoid
The solenoid attaches to the PCB below the left palm. It's lovely and loud. Will only work on the left hand.
Based on this [diagram by Adafruit](https://cdn-shop.adafruit.com/product-files/412/solenoid_driver.pdf). 
[QMK Docs for solenoid.](https://docs.qmk.fm/#/feature_haptic_feedback?id=solenoids) 
| Name | Count | Remarks | Potential Storefront |
| - | - |-|-|
| Solenoid | 1 | 4.5v Solenoid - the Amazon Uxcell solenoid is the most reliable one I've found.<br>Some [3V Solenoids](https://www.aliexpress.us/item/3256802092636163.html) from AliExpress will work - but the 'thunk' is not nearly as satisfying. Go with the 4.5v if you can. | [Amazon](https://www.amazon.com/dp/B013DR655A)<br> [AliExpress](https://www.aliexpress.us/item/3256805711149774.html)
 1k Resistor | 1 |   A 2.2k resistor should work as well, but I've not tried it.| [Amazon](https://www.amazon.com/gp/product/B08FHPKF9V)<br>[Aliexpress](https://www.aliexpress.us/item/3256805483572082.html) |
 1N4001 Diode | 1 |  | [Amazon](https://www.amazon.com/gp/product/B079JPMW9H), [AliExpress](https://www.aliexpress.us/item/3256802685977811.html)|
 TIP 120 | 1 | Heatsinks are available for these, but aren't needed.  | [Amazon](https://www.amazon.com/gp/product/B083TQN12B/), [Aliexpress](https://www.aliexpress.us/item/3256803429634601.html) | 
 | M2 4mm screws | 2 | Attaches the Solenoid to the PCB | @todo use the same source as case screws in teh required section. |

<hr>

### Optional - Case plates
 - Key plates are strongly recommended with 3-pin MX switches, but not technically required. The thumb keys tend to fall out if you don't use a key plate. If you're using choc switches or 5-pin MX switches, they stay put well enough to skip the key plate entirely. Key plates should be made from PCB or 3d printed. Acrylic is not recommended becasue the ErgoDonk is so large the acrylic can flex, making it difficult to seat the keys properly. 3d printable keyplates can be found [here]((https://www.printables.com/model/738066-ergodonk-zero-open-back-case)).
 - Bottom plates pair nicely with key plates and can be connected with M2 standoff posts. These are not strictly necessary, as you could use [adhesive rubber bumpers](https://www.amazon.com/gp/product/B074C2XKXH) on the underside of the pcb instead. Acrylic, PCB or 3d prints are good for these.
 - The MCU's and the Solenoid are taller than the key plate, so they have their own separate taller plataes cover plates. Acrylic, PCB or 3d prints are good for these.
 - The left MCU cover plate is different from the right MCU cover plate, because the left MCU cover plate also hides empty keyholes. 
 @todo add images here.
 - Spacers are intended to pass through the main pcb and screw onto the bottom plates, key plates, and MCU cover plates.

### Optional - 3d printed case
This [3d printable ErgoDonk Zero case](https://www.printables.com/model/738066-ergodonk-zero-open-back-case) includes a key plate and a "monobody" case that covers the front of the board and screws onto the back. The Solenoid acoustics on this case are not great. YMMV.<br>
<img src="/images/ergodonk_zero_3d_printable_case.jpeg" alt="ErgoDonk Zero Monobody case hero shot" width="100%" ><br>
<img src="/images/ergodonk_zero_3d_printable_case_backside.jpeg" alt="ErgoDonk Zero 3d printable monobody case back side" width="32%" > <img src="/images/ergodonk_zero_keyplate.jpeg" alt="ErgoDonk Zero 3d printable key plate" width="32%" > <img src="/images/ergodonk_monobody_case.jpeg" alt="ErgoDonk Zero 3d printable monobody case" width="32%" >
<hr>

### Optional - low profile header pins
- The header pins that come with the Zero are usually too long. You can either clip them off after soldering, or use [8.5mm low profile header pins ](https://www.aliexpress.us/item/3256805874707460.html) instead.

<img src="/images/sofle_pico_luxary_pins.png" alt="low profile header pins" height="100" >
