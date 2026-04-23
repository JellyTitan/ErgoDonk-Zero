---
layout: page
title: Bill of Materials
description: "Complete bill of materials for the ErgoDonk Zero keyboard. Sourcing notes, quantities, and links for switches, hotswap sockets, diodes, MCU, solenoid, and more."
parent: Build
permalink: build/bom
nav_order: 1

---

# Bill of materials (BOM)
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Required Parts

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
      <td>PCB</td>
      <td>2</td>
      <td>The PCB should be 1.6mm thick. I used JLCPCB's default settings only customizing the PCB color, and selecting 'lead free'.</td>
      <td>Manufacturers such as JLCPCB, PCBWay, and Elecrow. <a href="https://pcbshopper.com/">Price comparison tool</a></td>
      <td><a href="/images/ergodonk_simple_zero_v0.1.png"><img src="/images/ergodonk_simple_zero_v0.1.png" alt="Ergodonk Zero PCB 3d rendering" fetchpriority="high"></a></td>
    </tr>
    <tr>
      <td>Hot-swap Sockets</td>
      <td>101</td>
      <td>The PCB requires sockets. Switches cannot be soldered directly to the board. <br> Either MX or Choc low profile sockets. <br> When shopping for MX sockets, try to avoid the variant that has a metal tab in the center of the socket. This makes it harder to get the soldering iron in there. I've only encountered this tab when buying black MX sockets in bulk (500+) from AliExpress. I've <em>not</em> encountered that problem with Kailh &amp; Durock colored sockets. In the image to the right, the black socket has the troublesome tab.</td>
      <td><a href="https://www.amazon.com/DUROCK-Mechanical-Keyboard-Switches-Hot-Swap/dp/B0B4WCKWLZ/">Amazon MX</a> <br> <a href="https://www.aliexpress.us/item/3256803687338432.html">Aliexpress MX &amp; Choc</a></td>
      <td><a href="/images/bom_switches.png"><img src="/images/bom_switches.png" alt="Choc and MX switches with their respective sockets"></a> <br> <a href="/images/hot_swop_sockets.JPG"><img src="/images/hot_swop_sockets.JPG" alt="troublesome tab on kailh hot swop sockets"></a></td>
    </tr>
    <tr>
      <td>Diodes</td>
      <td>103</td>
      <td>Surface mount SOD-123 1N4148, or through-hole 1N4148 diode. These are common, any old one should do. Through hole is usually easier to solder.</td>
      <td>SMD: <br> <a href="https://www.aliexpress.us/item/2251832663565152.html">AliExpress</a> <br> <a href="https://jlcpcb.com/partdetail/3368026-1N4148SOD123/C2972760">JLCPCB</a> <br> Through-hole: <a href="https://www.aliexpress.us/item/2251832473773777.html">AliExpress</a> <br> <a href="https://www.amazon.com/100-Pieces-1N4148-Switching-High-Speed/dp/B079KJ91JZ">Amazon</a></td>
      <td><a href="/images/diodes.png"><img src="/images/diodes.png" alt="through hole diodes"></a></td>
    </tr>
    <tr>
      <td>Raspberry Pi Zero</td>
      <td>2</td>
      <td>There's tons of clones available. Getting the version with the header pins pre-soldered saves you some time, but the pins are long so you'll have to nip off the excess and the pins may bend during shipping. Consider getting the versions without the soldered pins, and using <a href="#optional---low-profile-header-pins">low profile header pins</a> instead of the header pins it comes with.</td>
      <td><a href="https://www.amazon.com/RP2040-Zero-High-Performance-Microcontroller-Castellated-Boards-2pcs/dp/B0B2Z3YWB9/">Amazon</a> <br> <a href="https://www.aliexpress.us/item/3256805808673201.html">AliExpress</a></td>
      <td><a href="/images/rp2040.png"><img src="/images/rp2040.png" alt="RP2040 Zero Micro controller"></a></td>
    </tr>
    <tr>
      <td>TRRS Jacks</td>
      <td>2</td>
      <td>PJ-320A</td>
      <td><a href="https://www.aliexpress.us/item/2255800474897706.html">AliExpress</a></td>
      <td><a href="/images/trrs.png"><img src="/images/trrs.png" alt="TRRS jacks"></a></td>
    </tr>
    <tr>
      <td>TRRS or TRS (3.5mm "Headphone" Cable)</td>
      <td>1</td>
      <td>Either TRRS "4 pole" or TRS "3 pole" will work. These are often referred to as 3.5mm audio cables, or 'aux' cables.</td>
      <td><a href="https://www.aliexpress.us/item/3256804197001011.html">Aliexpress</a> <br> <a href="https://www.amazon.com/gp/product/B072TYSV61">Amazon</a></td>
      <td><a href="/images/trs_cable.png"><img src="/images/trs_cable.png" alt="Tip ring sleeve (TRS) cable"></a></td>
    </tr>
    <tr>
      <td>MX Style Switches or Choc V1 low profile switches.</td>
      <td>101</td>
      <td>For MX switches, 3-pin or 5-pin will work. For the Choc low profile switches, only V1 is supported.</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Key Caps</td>
      <td>101</td>
      <td>Look for keycap sets for "<a href="https://thegamingsetup.com/wp-content/uploads/Keyboard-Size-Guide-The-Gaming-Setup-scaled.webp">100% full size</a>" keyboards. <br><br> <strong>Choc V1 Switches</strong>: Choc Switches don't have many keycap options available. <br><br> <strong>MX switches</strong>: The ErgoDonk Zero was designed with the SA <a href="https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Fkld2wynulsq51.png">keycap profile</a> in mind. The default switch layout on the PCB makes use of the different SA row heights. If you intend to move the keys about, XDA profile is recommended.</td>
      <td><a href="https://www.aliexpress.us/item/2251832794671800.html">Choc V1 AliExpress</a> <br> <a href="https://www.aliexpress.us/item/3256805853319024.html">MX 'SA' AliExpress</a> <br> <a href="https://www.amazon.com/Ducky-Doubleshot-Keyboards-Compatible-Standard/dp/B08WXBVQ4W/?th=1">MX SA Amazon</a> <br> <a href="https://www.aliexpress.us/w/wholesale-xda-keycaps.html">MX XDA AliExpress</a></td>
      <td></td>
    </tr>
    <tr>
      <td>Rotary Encoders and Caps</td>
      <td>2</td>
      <td>EC-11 Rotary Encoder. 20mm stem is the most common, and a 6mm shaft is standard. Either "D" shaft or round shaft will work. If you're partial to fancy knobs, you should pick a shaft that matches your knob. 6mm shafts are used for guitar knobs, so you've got plenty of options. SA Profile keycaps can be quite tall, so you may want to use tall knobs as well. Some EC11's include a washer and nut, but you won't be using either the washer or nut.</td>
      <td><a href="https://www.amazon.com/gp/product/B07D3DF8TK">Amazon</a> <br> <a href="https://www.aliexpress.us/item/3256802171959870.html">AliExpress 20mm</a></td>
      <td><a href="/images/ec11.png"><img src="/images/ec11.png" alt="ec11 rotary encoder"></a> <br> <a href="/images/ec11_knob.png"><img src="/images/ec11_knob.png" alt="ec11 rotary encoder knob"></a></td>
    </tr>
    <tr>
      <td>M2 8mm FF spacers @todo - these heights &amp; qty are outdated.</td>
      <td>12</td>
      <td>Connects the bottom plate to the key plate, running through the PCB</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>M2 12mm FF spacers</td>
      <td>6</td>
      <td>Connects the bottom plate to the OLED plate, running through the PCB and the keyplate. @todo - is it really 12mm?</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>M2x5mm screws</td>
      <td>52</td>
      <td>M2 screws.</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Case</td>
      <td>1 Left Set, 1 Right Set</td>
      <td>Case files are located in the <a href="https://github.com/JellyTitan/ErgoDonk-Zero/tree/main/Case">github repo case folder</a>.</td>
      <td>@todo - regenerate after next prototype validated</td>
      <td></td>
    </tr>
    <tr>
      <td>USB-C Cable</td>
      <td>1</td>
      <td>USB cable for connecting the keyboard to your computer.</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

<hr>

## Optional parts

### Optional - PCB screw in Stabilizers 
Supports up to 8 PCB mounted screw in stabilizers that are 2u in length. Stabilizers often come in sets based on keyboard sizes. A full size 104 key set will usually have 7 2u bars. Note, "PCB mount stabilizers" are not the same as "plate mount stabilizers". Stabilizers can rattle. [There's plenty of mods to 'tune' the stabilizers](https://www.youtube.com/watch?v=4XCErBcn5lc) - but I've given up fighting the rattle and just skip them. YMMV. 

<hr>

### Optional - Solenoid
The solenoid attaches to the PCB below the left palm. It's lovely and loud. Will only work on the left hand.
Based on this [diagram by Adafruit](https://cdn-shop.adafruit.com/product-files/412/solenoid_driver.pdf). 
[QMK Docs for solenoid.](https://docs.qmk.fm/#/feature_haptic_feedback?id=solenoids) 

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Count</th>
      <th>Remarks</th>
      <th>Potential Storefront</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Solenoid</td>
      <td>1</td>
      <td>4.5v Solenoid - the Amazon Uxcell solenoid is the most reliable one I've found.<br>Some <a href="https://www.aliexpress.us/item/3256802092636163.html">3V Solenoids</a> from AliExpress will work - but the 'thunk' is not nearly as satisfying. Go with the 4.5v if you can.</td>
      <td><a href="https://www.amazon.com/dp/B013DR655A">Amazon</a><br> <a href="https://www.aliexpress.us/item/3256805711149774.html">AliExpress</a></td>
    </tr>
    <tr>
      <td>1k Resistor</td>
      <td>1</td>
      <td>A 2.2k resistor should work as well, but I've not tried it.</td>
      <td><a href="https://www.amazon.com/gp/product/B08FHPKF9V">Amazon</a><br><a href="https://www.aliexpress.us/item/3256805483572082.html">Aliexpress</a></td>
    </tr>
    <tr>
      <td>1N4001 Diode</td>
      <td>1</td>
      <td></td>
      <td><a href="https://www.amazon.com/gp/product/B079JPMW9H">Amazon</a>, <a href="https://www.aliexpress.us/item/3256802685977811.html">AliExpress</a></td>
    </tr>
    <tr>
      <td>TIP 120</td>
      <td>1</td>
      <td>Heatsinks are available for these, but aren't needed.</td>
      <td><a href="https://www.amazon.com/gp/product/B083TQN12B/">Amazon</a>, <a href="https://www.aliexpress.us/item/3256803429634601.html">Aliexpress</a></td>
    </tr>
    <tr>
      <td>M2 4mm screws</td>
      <td>2</td>
      <td>Attaches the Solenoid to the PCB</td>
      <td>@todo use the same source as case screws in the required section.</td>
    </tr>
  </tbody>
</table>

<hr>

### Optional - Case plates
 - Key plates are strongly recommended with 3-pin MX switches, but not technically required. The thumb keys tend to fall out if you don't use a key plate. If you're using choc switches or 5-pin MX switches, they stay put well enough to skip the key plate entirely. Key plates should be made from PCB or 3d printed. Acrylic is not recommended because the ErgoDonk is so large the acrylic can flex, making it difficult to seat the keys properly. 3d printable keyplates can be found [here](https://www.printables.com/model/738066-ergodonk-zero-open-back-case).
 - Bottom plates pair nicely with key plates and can be connected with M2 standoff posts. These are not strictly necessary, as you could use [adhesive rubber bumpers](https://www.amazon.com/gp/product/B074C2XKXH) on the underside of the pcb instead. Acrylic, PCB or 3d prints are good for these.
 - The MCU's and the Solenoid are taller than the key plate, so they have their own separate taller cover plates. Acrylic, PCB or 3d prints are good for these.
 - The left MCU cover plate is different from the right MCU cover plate, because the left MCU cover plate also hides empty keyholes. 
 {% comment %}
 @todo add images here.
 {% endcomment %}
 - Spacers are intended to pass through the main pcb and screw onto the bottom plates, key plates, and MCU cover plates.

### Optional - 3d printed case
This [3d printable ErgoDonk Zero case](https://www.printables.com/model/738066-ergodonk-zero-open-back-case) includes a key plate and a "monobody" case that covers the front of the board and screws onto the back. The Solenoid acoustics on this case are not great. YMMV.<br>
<a href="/images/ergodonk_zero_3d_printable_case.jpeg"><img src="/images/ergodonk_zero_3d_printable_case.jpeg"  alt="ErgoDonk Zero Monobody case hero shot" width="100%" ></a>
<a href="/images/ergodonk_zero_3d_printable_case_backside.jpeg"><img src="/images/ergodonk_zero_3d_printable_case_backside.jpeg"  alt="ErgoDonk Zero 3d printable monobody case back side" width="32%" ></a> 
<a href="/images/ergodonk_zero_keyplate.jpeg"><img src="/images/ergodonk_zero_keyplate.jpeg"  alt="ErgoDonk Zero 3d printable key plate" width="32%"> <img src="/images/ergodonk_monobody_case.jpeg" alt="ErgoDonk Zero 3d printable monobody case" width="32%" ></a>
<hr>

### Optional - low profile header pins
- The header pins that come with the Zero are usually too long. You can either clip them off after soldering, clip them flush before soldering, or use [8.5mm low profile header pins ](https://www.aliexpress.us/item/3256805874707460.html) instead.

<a href="/images/sofle_pico_luxury_pins.png"><img src="/images/sofle_pico_luxury_pins.png"  alt="low profile header pins" height="100" ></a>
