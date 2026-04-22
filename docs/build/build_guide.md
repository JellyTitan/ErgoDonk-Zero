---
layout: page
title: Build Guide
description: Step-by-step assembly guide for the ErgoDonk Zero split keyboard. Covers diodes, hotswap sockets, MCU headers, solenoid wiring, encoders, and case assembly.
parent: Build
permalink: build/build-guide
nav_order: 4
---

{% assign img1 = site.data.image_manifest["images/asymmetrical_diode_marking.jpeg"] %}
{% assign img2 = site.data.image_manifest["images/smd_diode_orientation_1.jpeg"] %}
{% assign img3 = site.data.image_manifest["images/smd_diode_orientation_2.jpeg"] %}
{% assign img4 = site.data.image_manifest["images/diode_jig_fold.jpeg"] %}
{% assign img5 = site.data.image_manifest["images/diode_jig_cut.jpeg"] %}
{% assign img6 = site.data.image_manifest["images/carpenter_pencil.JPG"] %}
{% assign img7 = site.data.image_manifest["images/diode_orientation.jpeg"] %}
{% assign img8 = site.data.image_manifest["images/ergodonk_bristling_with_diodes.jpeg"] %}
{% assign img9 = site.data.image_manifest["images/LH_diode_locations.png"] %}
{% assign img10 = site.data.image_manifest["images/RH_diode_locations.png"] %}
{% assign img11 = site.data.image_manifest["images/ergodonk_lh_sockets.jpeg"] %}
{% assign img12 = site.data.image_manifest["images/ergodonk_rh_sockets.jpeg"] %}
{% assign img13 = site.data.image_manifest["images/bending_jigs.png"] %}
{% assign img14 = site.data.image_manifest["images/jumper_bender_use.png"] %}
{% assign img15 = site.data.image_manifest["images/jumpers.png"] %}
{% assign img16 = site.data.image_manifest["images/jumpers_in_place.png"] %}
{% assign img17 = site.data.image_manifest["images/soldered_jumpers.png"] %}
{% assign img18 = site.data.image_manifest["images/clipping_jumpers.JPG"] %}
{% assign img19 = site.data.image_manifest["images/mcu_top_of_board_1.jpeg"] %}
{% assign img20 = site.data.image_manifest["images/mcu_top_of_board_2.jpeg"] %}
{% assign img21 = site.data.image_manifest["images/line_up_the_zero.JPG"] %}
{% assign img22 = site.data.image_manifest["images/solder_remaining_zero_pins.JPG"] %}
{% assign img23 = site.data.image_manifest["images/TRRS_front.JPG"] %}
{% assign img24 = site.data.image_manifest["images/TRRS_back.JPG"] %}
{% assign img25 = site.data.image_manifest["images/tip_tape_trim_1.jpeg"] %}
{% assign img26 = site.data.image_manifest["images/tip_tape_trim_2.jpeg"] %}
{% assign img27 = site.data.image_manifest["images/tip_tape_trim_3.jpeg"] %}
{% assign img28 = site.data.image_manifest["images/tip_120_jig_front.jpeg"] %}
{% assign img29 = site.data.image_manifest["images/tip_120_jig_back.jpeg"] %}
{% assign img30 = site.data.image_manifest["images/tip_120_in place.jpeg"] %}
{% assign img31 = site.data.image_manifest["images/solenoid_circuit_tip120.jpeg"] %}
{% assign img32 = site.data.image_manifest["images/resistor_bending.jpeg"] %}
{% assign img33 = site.data.image_manifest["images/solenoid_circuit_1k_resitor.jpeg"] %}
{% assign img34 = site.data.image_manifest["images/1N4001_diode_bending.jpeg"] %}
{% assign img35 = site.data.image_manifest["images/solenoid_circuit_1N4001_diode.jpeg"] %}
{% assign img36 = site.data.image_manifest["images/solenoid_pin_nipping.jpeg"] %}
{% assign img37 = site.data.image_manifest["images/Solenoid_on_front.jpeg"] %}
{% assign img38 = site.data.image_manifest["images/Solenoid_wiring_on_back.jpeg"] %}
{% assign img39 = site.data.image_manifest["images/solenoid_circuit_solenoid_connection.jpeg"] %}
{% assign img40 = site.data.image_manifest["images/ec11_soldered.jpeg"] %}
{% assign img41 = site.data.image_manifest["images/stabilizer_markings.jpeg"] %}
{% assign img42 = site.data.image_manifest["images/stabilizer_inserted.JPG"] %}
{% assign img43 = site.data.image_manifest["images/thumb_stabs.JPG"] %}
# ErgoDonk Zero build guide
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Tools and materials
- soldering iron and solder
- no-clean flux makes soldering easier
- solder wick or desoldering pump to correct mistakes
- good tweezers
- flush cutters to trim diode legs
- masking, kapton or electrical tape
- isopropyl-alcohol for cleaning
- Optional - magnetic 'third hand' PCB work holding fixture. (I'm partial to the little cones) 
- Optional - multimeter for troubleshooting. 
- Optional - [magnifier headband](https://www.amazon.com/Headband-Magnifier-eSynic-Rechargeable-Detachable/dp/B08W55R47Z).



## Assembly steps
This guide includes all optional components. 


<hr>

### Prepare

Make sure you know which side you are working on, and don't make two left hand sides by mistake. Stick a piece of tape on the front side of both PCBs to help remember.
{% comment %}
- @ todo add image of taped key plates
{% endcomment %}

The assembly order does not matter. This guide is written in the order I like to install components, starting with the components on the back, shortest to tallest:
 - diodes
 - switch sockets

Then install the components on the front:
 - Jumpers
 - RP2040 Zero MCU
 - TRRS connector
 - Solenoid components
 - Rotary encoder

<hr>

### Diodes

Diodes, surface mount or through-hole, should be installed on the back of the board. This allows for easy access after the keyplate is installed, and allows for the use of choc keyplates and stabilizers.

If you are hand soldering, through hole diodes are recommended because they are easier. If you damage a pad on one side, you can install the diode on the opposite side.

If you are using PCBA with surface mount diodes, either the front or the back will technically work, but surface mount diodes on the front will prevent the use of a choc keyplate.

There is one diode per key, and one for the rotary encoder. The right hand has more than the left hand.

When inserting diodes into the backs of the boards, you only need to insert diodes into the footprints that have an accompanying switch socket outline. For example, in this image, we are looking at the backside of the left hand board. The left hand does not have a switch 18, so there is no socket outline, and so no diode would be needed. If you do add a diode where it is not needed, there is no negative impact.<br>

<figure>
    {% include slider_img_srcset.html src="images/asymmetrical_diode_marking.jpeg" alt="Through hole diode orientation" manifest=img1 %}
<figcaption>No diode is needed where there is no socket outline.</figcaption>
</figure>

For surface mount diodes, a common soldering method is to tin one pad, place the diode on, apply the soldering iron to the diode leg until it melts the solder underneath and sinks flush with the PCB. Then come back and solder the other leg. Alternately, you can use a rework station heat gun and solder paste. (I prefer this method for smds).
<figure class="image-grid-2">
{% include slider_img_srcset.html src="images/smd_diode_orientation_1.jpeg" alt="SMD orientation marking example" manifest=img2 %}
{% include slider_img_srcset.html src="images/smd_diode_orientation_2.jpeg" alt="SMD orientation example" manifest=img3 %}
<figcaption>SMD Orientation</figcaption>
</figure>
 

For through-hole diodes, pre bending the legs while they are still on the paper strip makes inserting them much easier. You can use a 3d printed diode [bending jig](https://www.printables.com/model/734696-diode-bending-jig-8mm) to make quick uniform bends.<br>
<figure class="image-grid-2">
{% include slider_img_srcset.html src="images/diode_jig_fold.jpeg" alt="Using a carpenter" manifest=img4 %}
{% include slider_img_srcset.html src="images/diode_jig_cut.jpeg" alt="Using a carpenter" manifest=img5 %}
<figcaption>Diode bending jig in use.</figcaption>
</figure>


Alternately, a carpenter's pencil is roughly the right size. (The diode holes are 8mm apart, wooden pencils are often 7mm - 8mm).<br>

<figure>
{% include slider_img_srcset.html src="images/carpenter_pencil.JPG" alt="Using a carpenter" manifest=img6 %}
<figcaption>Using a carpenters pencil as a diode bending jig.</figcaption>
</figure>


With the PCB elevated via workholding, insert the bent diodes into the holes on the back of the board. 
Diodes _must_ be oriented with the black band in the direction of the "arrow" symbol on the PCB. There is also a black outline around the pad to make it easy to check the diode orientation is correct after the diode has been soldered in place.<br>
<figure>
{% include slider_img_srcset.html src="images/diode_orientation.jpeg" alt="Through hole diode orientation" manifest=img7 %}
<figcaption>Through hole diodes.</figcaption>
</figure>
<figure>
{% include slider_img_srcset.html src="images/ergodonk_bristling_with_diodes.jpeg" alt="Through hole diode orientation" manifest=img8 %}
<figcaption>Workholding jigs make room for diode legs.</figcaption>
</figure>
<figure class="image-grid-2">
    {% include slider_img_srcset.html src="images/LH_diode_locations.png" alt="Left hand diode locations on the back of the ErgoDonk zero keyboar" manifest=img9 %}
    {% include slider_img_srcset.html src="images/RH_diode_locations.png" alt="Right hand diode locations on the back of the ErgoDonk zero keyboard" manifest=img10 %}
<figcaption>Diode placement locations indicated by yellow circles.</figcaption>
</figure>
 

Solder the legs in place.

Flip over the board, and trim the legs.

When you trim off the diode legs, save 12 for use as jumpers.

<hr>

### Switch Sockets
Switch sockets installed on the back of the PCB facing up towards the front of the PCB. Make sure they are flush with the PCB. 

1. Put all the sockets in place. PCB hole tolerance can vary quite a bit, so some sockets may snap in, while others rest in the holes. If you have some that snap in, be sure to check everything is flush before you start soldering. 
1. Solder _one_ side of each socket by heating the metal connector. Apply solder and look for the solder to wick down to the PCB. You want a solid joint since this may take some mechanical strain from switch installation and removal. The 3d printed workholding feet are really handy here. You can reposition the board as you work to get the best angle for soldering those connectors.
1. Give the board a few good taps to make sure there are no loose sockets.
1. Rotate the board 180 degrees and solder the remaining sides.


<figure class="image-grid-2">
{% include slider_img_srcset.html src="images/ergodonk_lh_sockets.jpeg" alt="ErgoDonk left hand backside indicating socket placement" manifest=img11 %}
{% include slider_img_srcset.html src="images/ergodonk_rh_sockets.jpeg" alt="ErgoDonk right hand backside indicating socket placement" manifest=img12 %}
<figcaption>Switch socket locations</figcaption>
</figure>


<hr>

### Jumpers
Because the MCU on both sides shares the same footprint, we need to set jumpers to ensure the power is routed correctly. The set of six jumpers for the right and left hands are marked accordingly. They can be soldered on the front or the back. Soldering on the front is recommended.

You can bridge the jumpers by dragging a blob of solder across the 2 adjacent pads. Modern rosin core solder can make this difficult. As an alternate bridging method, you can bend a diode leg and solder that in place. There is bending jig to make it easy to bend jumpers to the optimal width. The bottom slot on the jig is for the jumpers.


<figure class="image-grid-3">
{% include slider_img_srcset.html src="images/bending_jigs.png" alt="Bending jig location" manifest=img13 %}
{% include slider_img_srcset.html src="images/jumper_bender_use.png" alt="Jumper bending jig in use" manifest=img14 %}
{% include slider_img_srcset.html src="images/jumpers.png" alt="Six bent jumpers made from diode legs" manifest=img15 %}
<figcaption>Jumper bending jig demonstration.</figcaption>
</figure>
<br>
<figure class="image-grid-3">
{% include slider_img_srcset.html src="images/jumpers_in_place.png" alt="Jumpers on the board that have not been soldered." manifest=img16 %}
{% include slider_img_srcset.html src="images/soldered_jumpers.png" alt="Soldered jumpers on the left hand of the ErgoDonk Zero" manifest=img17 %}
{% include slider_img_srcset.html src="images/clipping_jumpers.JPG" alt="clipping excess jumpers on the left hand of the ErgoDonk Zero" manifest=img18 %}
<figcaption>Jumpers from left to right, unsoldered, soldered, trimming.</figcaption>
</figure>


<hr>

### RP2040 Zero MCU
The Zero is installed on the top of the board, buttons facing up.

<figure class="image-grid-2">
{% include slider_img_srcset.html src="images/mcu_top_of_board_1.jpeg" alt="RP2040 Zero installed on the top of the left hand board of the ErgoDonk Zero keyboard" manifest=img19 %}
{% include slider_img_srcset.html src="images/mcu_top_of_board_2.jpeg" alt="RP2040 Zero installed on the top of both sides of the ErgoDonk Zero keyboard" manifest=img20 %}
<figcaption>Raspberry Pi Zero installed on ErgoDonk Zero</figcaption>
</figure>
 

* Top of the board: this is the side of the PCB opposite the diodes and switch sockets
* Marked holes: Insert the Zero into the holes with the rectangular outline on the top of the board. 

Install the Zero using the male-male headers that came with the Zero. (Or the low-profile headers, if you're feeling fancy)!
<ol>
<li>Insert the headers into the board and the Zero both before soldering. The header pin rows can tilt a little if it's not inserted into both the board and the Zero. The header pins that come with the zero have one longer side. Install the longer side on the PCB because you'll need to trim these, and the trimmed pins look better on the underside of the board. Use a piece of kapton tape to attach the Zero to the PCB while soldering.
If you are using a Zero with pre-soldered headers, you'll likely have to bend the headers a bit to get everything to line up perfectly. Once you get it in, the friction will keep it in place, and you can skip the tape.</li>
<li>Flip the board over. Solder 1 of the outermost pins on each pin header on the PCB. Hold the board up to make sure the pin header is sitting flush with the pcb. If it's not, you can reheat that joint until it is flush.
<figure>
{% include slider_img_srcset.html src="images/line_up_the_zero.JPG" alt="first pin line up of the MCU" manifest=img21 %}
<figcaption>Ensure the MCU is flush now to avoid re-soldering later.</figcaption>
</figure></li>
<li>Solder the remaining pcb/pin header joints on the back.</li>
<li>Flip the board over. With the Zero, repeat the process of soldering & checking 1 pin with the pin header and the Zero.</li>
<li>Solder all the remaining Zero/pin header pins.
<figure>
{% include slider_img_srcset.html src="images/solder_remaining_zero_pins.JPG" alt="RP2040 Zero MCU all pins soldered" manifest=img22 %}
<figcaption>MCU soldered nicely.</figcaption>
</figure></li>
</ol>

<hr>

### TRRS Jacks
Insert the jack into the outline on the front of the board. Some brands of jack will snap into the board, holding them in place. Others may need to be taped down. Then flip the board over and solder on the backside. Solder 1 pin first to check that everything is flush. Adjust as needed. Solder remaining pins.<br>

<figure class="image-grid-2">
{% include slider_img_srcset.html src="images/TRRS_front.JPG" alt="TRRS jack from the front" manifest=img23 %}
{% include slider_img_srcset.html src="images/TRRS_back.JPG" alt="TRRS jack from the back" manifest=img24 %}
<figcaption>TRRS jacks seen from top and bottom.</figcaption>
</figure>
 

<hr>

### Solenoid
The Solenoid is installed on the left hand front of the board _only_. Right hand installation is not supported. *Some of the build guide images show `IN4004` diode label on the board. You can use either `IN4001` or `IN4004`, they will both work.*

<ol>
<li>Put a piece of electrical tape on the backside of the tip120 and trim it to the outline. In some applications these get really hot so a heat sink _could_ be attached. Our application will never need that heat sink, but we don’t want that exposed metal against our board. Alternately, you can slap a sticker on there if you’re feeling fancy.
<figure class="image-grid-3">
{% include slider_img_srcset.html src="images/tip_tape_trim_1.jpeg" alt="tip120 with untrimmed tape insulation" manifest=img25 %}
{% include slider_img_srcset.html src="images/tip_tape_trim_2.jpeg" alt="tip120 with trimmed tape insulation" manifest=img26 %}
{% include slider_img_srcset.html src="images/tip_tape_trim_3.jpeg" alt="tip120 with sticker insulation" manifest=img27 %}
<figcaption>Tip120 insulation installation. Puffy cat sticker not required, but recommended.</figcaption>
</figure></li>
<li>Use the tip120 bending jig to get a 90 degree bend just below the fat part of the pins.
<figure class="image-grid-2">
{% include slider_img_srcset.html src="images/tip_120_jig_front.jpeg" alt="diode bending jig front" manifest=img28 %}
{% include slider_img_srcset.html src="images/tip_120_jig_back.jpeg" alt="diode bending jig back" manifest=img29 %}
<figcaption>Tip120 bending jig demonstration.</figcaption>
</figure></li>
<li>Insert the tip120 into the holes on the front of the board. Solder 1 pin, verify the tip120 is straight before soldering the remaining pins.
<figure class="image-grid-2">
{% include slider_img_srcset.html src="images/tip_120_in place.jpeg" alt="tip120 render showing the 90 degree bend" manifest=img30 %}
{% include slider_img_srcset.html src="images/solenoid_circuit_tip120.jpeg" alt="tip120 render showing the 90 degree bend" manifest=img31 %}
<figcaption>Tip120 placement and soldering.</figcaption>
</figure></li>
<li>Bend the legs of the 1k resistor using the bending jig on the left of the board.
<figure>
{% include slider_img_srcset.html src="images/resistor_bending.jpeg" alt="render demonstrating resistor bending jig" manifest=img32 %}
<figcaption>Diode bending jig demonstration.</figcaption>
</figure></li>
<li>Insert the 1k resistor into the holes on the front of the board. Orientation of the resistor does not matter. Solder in place.
<figure>
{% include slider_img_srcset.html src="images/solenoid_circuit_1k_resitor.jpeg" alt="1k resistor placement indicated" manifest=img33 %}
<figcaption>Solenoid resistor placement.</figcaption>
</figure></li>
<li>Bend the legs of the 1N4001 Schottky diode using the bending jig on the left of the board.
<figure>
{% include slider_img_srcset.html src="images/1N4001_diode_bending.jpeg" alt="render demonstrating resistor bending jig" manifest=img34 %}
<figcaption>Schottky diode bending jig.</figcaption>
</figure></li>
<li>Insert the 1N4001 Schottky diode into the holes on the front of the board. Be sure to orient the diode with the strip towards the top of the board. Solder in place.
<figure>
{% include slider_img_srcset.html src="images/solenoid_circuit_1N4001_diode.jpeg" alt="Schottky diode placement indicated" manifest=img35 %}
<figcaption>1N4001 Schottky diode placement.</figcaption>
</figure></li>
<li>Flip the board and trim the pins sticking out for the components you just installed.
<figure>
{% include slider_img_srcset.html src="images/solenoid_pin_nipping.jpeg" alt="trimming pins on the backside" manifest=img36 %}
<figcaption>Flush-cutting diode legs.</figcaption>
</figure></li>
<li>Using M2 screws, attach the solenoid to the top of the board. Run the wires through the big hole in the PCB. Tape the wires down with kapton tape. Solder onto the holes marked ‘solenoid’. Polarity does not matter, so either wire can go in either hole. Versions after 0.2.1 have an additional solenoid footprint connection point closer to the solenoid itself. This is to accommodate shorter wires. Either connection point will work.
<figure class="image-grid-3">
{% include slider_img_srcset.html src="images/Solenoid_on_front.jpeg" alt="Solenoid attached to the front of the left hand board by 2 M2 screws" manifest=img37 %}
{% include slider_img_srcset.html src="images/Solenoid_wiring_on_back.jpeg" alt="Solenoid wiring routed along the back of the board" manifest=img38 %}
{% include slider_img_srcset.html src="images/solenoid_circuit_solenoid_connection.jpeg" alt="Solenoid connection point indicated" manifest=img39 %}
<figcaption>Solenoid attachement.</figcaption>
</figure></li>
</ol>
 

<hr>

### Rotary encoders
Saved these for last because they are tallest. Insert into the top of the board, and solder on the backside. Some EC11's have metal tabs on opposite sides that add mechanical stability - no need to solder those tabs.
<br>
<figure>
{% include slider_img_srcset.html src="images/ec11_soldered.jpeg" alt="rotary encoder soldered to the PCB" manifest=img40 %}
<figcaption>Rotary encoder installation.</figcaption>
</figure>


<hr>

### Final assembly
Installing the stabilizers, keys and case.

<ol>
  <li>Install stabilizers. (Optional) The stabilizers are inserted into the front of the board, and screws are inserted on the back of the board. There are an abundance of holes around the pinky keys, so the stabilizer insertion holes have been marked with an arrow on the front of the board. Lay down the stabilizer stickers starting with the arrow side.
  <figure class="image-grid-2">
  {% include slider_img_srcset.html src="images/stabilizer_markings.jpeg" alt="stabilizer markings" manifest=img41 %}
  {% include slider_img_srcset.html src="images/stabilizer_inserted.JPG" alt="stabilizer installed on left hand shift key" manifest=img42 %}
  <figcaption>Stabilizer installation.</figcaption>
  </figure>
  <figure>
  {% include slider_img_srcset.html src="images/thumb_stabs.JPG" alt="thumb stabilizers installed" manifest=img43 %}
  <figcaption>Notice the thumb clusters stabilizers are back-to-back.</figcaption>
  </figure></li>
  <li>Snap switches into the corners of the key plate.</li>
  <li>Place the PCB on a flat surface. This will save some strain on the solder joints in the next step (though they should be able handle it).</li>
  <li>Carefully lower the top plate with switches on the main PCB and push into sockets. Ensure pins are aligned.</li>
  <li>Snap the remaining switches into the top plate pressing into the sockets.</li>
  <li>Place the encoder knob on the shaft. Tighten the set screw with a hex key. A small screwdriver for glasses may do in a pinch.</li>
  <li>@todo - update: Slide the four 8mm standoffs through the PCB and align to the holes on the key plate. Attach the standoffs to the keyplate using M2 screws.</li>
  <li>Attach the bottom plate to the four standoffs installed in the previous step.</li>
  <li>Use M2 screws to attach the three 12mm standoffs to the OLED cover plate.</li>
  <li>Slide the three standoff on the OLED plate through the PCB. Attach those standoffs to the backplate using M2 screws.</li>
  <li>Put at least 4 adhesive rubber feet in the corners so the keyboard is not moving when you type.</li>
</ol>

<hr> 

## Warnings and disclaimers
- Don't connect or disconnect the TRRS cable when the keyboard is powered. It may short out. Always disconnect the USB cable first.
- Be gentle with USB-C ports on your micro controllers. They are easy to break.
- Keep in mind that this is a DIY keyboard. It’s not a polished product.
- If you find any errors or omissions in this build guide, please feel free to contribute. [See contributing page for more details.](../contributing)
