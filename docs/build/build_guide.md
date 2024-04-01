---
layout: page
title: Build Guide
description: ErgoDonk Zero keyboard build guide.
parent: Build
permalink: build/build-guide
nav_order: 4
---
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

@todo Update image.
![Sofle V3](/images/sofle_Zero_tape.png)

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
<a href="/images/asymetrical_diode_marking.jpeg"><img src="/images/asymetrical_diode_marking.jpeg" alt="Through hole diode orientation" width="100%" /></a><br>

For surface mount diodes, a common soldering method method is to tin one pad, place the diode on, apply the soldering iron to the diode leg until it melts the solder underneath and sinks flush with the PCB. Then come back and solder the other leg. Alternately, you can use a rework station heat gun and solder paste. (I prefer this method for smds).
<br>SMD Orientation:<br>
<a href="/images/smd_diode_orientation_1.jpeg"><img src="/images/smd_diode_orientation_1.jpeg" width="49%" alt="SMD orientation marking example" /></a> 
<a href="/images/smd_diode_orientation_2.jpeg"><img src="/images/smd_diode_orientation_2.jpeg" width="49%" alt="SMD orientation example" /></a> 

For through-hole diodes, pre bending the legs while they are still on the paper strip makes inserting them much easier. You can use a 3d printed diode [bending jig](https://www.printables.com/model/734696-diode-bending-jig-8mm) to make quick uniform bends.<br><a href="/images/diode_jig_fold.jpeg"><img src="/images/diode_jig_fold.jpeg" width="49%" alt="Using a carpenters pencil as a bending jig"/></a> <a href="/images/diode_jig_cut.jpeg"><img src="/images/diode_jig_cut.jpeg" width="49%" alt="Using a carpenters pencil as a bending jig" /></a>

Alternately, a carpenters pencil is roughly the right size. (The diode holes are 8mm apart, wooden pencils are often 7mm - 8mm).<br>
<a href="/images/carpenter_pencil.JPG"><img src="/images/carpenter_pencil.JPG" width="49%" alt="Using a carpenters pencil as a bending jig"/></a>

With the PCB eleveated via workholding, insert the bent diodes into the holes on the back of the board. 
Diodes _must_ be oriented with the black band in the direction of the "arrow" symbol on the PCB. There is also a black outline around the pad to make it easy to check the diode orientation is correct after the diode has been soldered in place.<br><a href="/images/diode_orientation.jpeg"><img src="/images/diode_orientation.jpeg" alt="Through hole diode orientation" width="100%" /></a> 

<a href="/images/ergodonk_bristling_with_diodes.jpeg"><img src="/images/ergodonk_bristling_with_diodes.jpeg" alt="Through hole diode orientation" width="100%" /></a> 
<a href="/images/LH_diode_locations.png"><img src="/images/LH_diode_locations.png" alt="Left hand diode locations on the back of the ErgoDonk zero keyboar" width="49%" /></a> <a href="/images/RH_diode_locations.png"><img src="/images/RH_diode_locations.png" alt="Right hand diode locations on the back of the ErgoDonk zero keyboard" width="49%" /></a> 

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

<a href="/images/ergodonk_lh_sockets.jpeg"><img src="/images/ergodonk_lh_sockets.jpeg" alt="ErgoDonk left hand backside indicating socket placement" width="49%" /></a> <a href="/images/ergodonk_rh_sockets.jpeg"><img src="/images/ergodonk_rh_sockets.jpeg" alt="ErgoDonk right hand backside indicating socket placement" width="49%" /></a>

<hr>

### Jumpers
Because the MCU on both sides shares the same footprint, we need to set jumpers to ensure the power is routed correctly. The set of six jumpers for the right and left hands are marked accordingly. They can be soldered on the front or the back. Soldering on the front is recommended.

You can bridge the jumpers by dragging a blob of solder across the 2 adjacent pads. Modern rosin core solder can make this difficult. As an alternate bridging method, you can bend a diode leg and solder that in place. There is bending jig to make it easy to bend jumpers to the optimal width. The bottom slot on the jig is for the jumpers.

<a href="/images/bending_jigs.png"><img src="/images/bending_jigs.png" alt="Bending jig location" width="32%" /></a> <a href="/images/jumper_bender_use.png"><img src="/images/jumper_bender_use.png" width="32%" alt="Jumper bending jig in use" /></a> <a href="/images/jumpers.png"><img src="/images/jumpers.png" width="32%" alt="Six bent jumpers made from diode legs"/></a> <a href="/images/jumpers_in_place.png"> <img src="/images/jumpers_in_place.png" width="32%" alt="Jumpers on the board that have not been soldered." /></a><a href="/images/soldered_jumpers.png">  <img src="/images/soldered_jumpers.png" width="32%" alt="Soldered jumpers on the left hand of the ErgoDonk Zero" /></a> <a href="/images/clipping_jumpers.JPG"><img src="/images/clipping_jumpers.JPG" width="32%" alt="clipping excess jumpers on the left hand of the ErgoDonk Zero" /></a>

<hr>

### RP2040 Zero MCU
The Zero is installed on the top of the board, buttons facing up.

<a href="/images/mcu_top_of_board_1.jpeg"><img src="/images/mcu_top_of_board_1.jpeg" title="let me see those buttons baby!" width="49%" alt="RP2040 Zero installed on the top of the left hand board of the ErgoDonk Zero keyboard" /></a> 
<a href="/images/mcu_top_of_board_2.jpeg"><img src="/images/mcu_top_of_board_2.jpeg" title="Notice the MCU's installed on the top in the outer corners." width="49%" alt="RP2040 Zero installed on the top of both sides of the ErgoDonk Zero keyboard" /></a> 

* Top of the board: this is the side of the PCB opposite the diodes and switch sockets
* Marked holes: Insert the Zero into the holes with the rectangular outline on the top of the board. 

Install the Zero using the male-male headers that came with the Zero. (Or the low-profile headers, if your feeling fancy)!
1. Insert the headers into the board and the Zero both before soldering. The header pin rows can tilt a little if it's not inserted into both the board and the Zero. The header pins that come with the zero have one longer side. Install the longer side on the PCB because you'll need to trim these, and the trimmed pins look better on the underside of the board. Use a piece of kapton tape to attach the Zero to the PCB while soldering.
If you are using a Zero with pre-soldered headers, you'll likely have to bend the headers a bit to get everything to line up perfectly. Once you get it in, the friction will keep it in place, and you can skip the tape.

1. Flip the board over. Solder 1 of the outermost pins on each pin header on the PCB. Hold the board up to make sure the pin header is sitting flush with the pcb. If it's not, you can reheat that joint until it is flush.<br> <a href="/images/line_up_the_zero.JPG"><img src="/images/line_up_the_zero.JPG"  width="50%" alt="first pin line up of the MCU" /></a>
1. Solder the remaining pcb/pin header joints on the back.
1. Flip the board over. With the Zero, repeat the process of soldering & checking 1 pin with the pin header and the Zero. 
1. Solder all the remaining Zero/pin header pins.<br><a href="/images/solder_remaining_zero_pins.JPG"><img src="/images/solder_remaining_zero_pins.JPG" width="50%" alt="RP2040 Zero MCU all pins soldered" /></a> 

<hr>

### TRRS Jacks
Insert the jack into the outline on the front of the board. Some brands of jack will snap into the board, holding them in place. Others may need to be taped down. Then flip the board over and solder on the backside. Solder 1 pin first to check that everything is flush. Adjust as needed. Solder remaining pins.<br>
<a href="/images/TRRS_front.JPG"><img src="/images/TRRS_front.JPG" width="49%" alt="TRRS jack from the front" /></a>  <a href="/images/TRRS_back.JPG"><img src="/images/TRRS_back.JPG"  width="49%" alt="TRRS jack from the back" /></a> 

<hr>

### Solenoid
The Solenoid is installed on the left hand front of the board _only_. Right hand installation is not supported.

1. Put a piece of electrical tape on the backside of the tip120 and trim it to the outline. In some applications these get really hot so a heat sink _could_ be attached. Our application will never need that heat sink, but we don’t want that exposed metal against our board. Alternately, You can slap a sticker on there if you’re feeling fancy.<br><a href="/images/tip_tape_trim_1.jpeg"><img src="/images/tip_tape_trim_1.jpeg" width="32%" alt="tip120 with untrimmed tape insulation" /></a> <a href="/images/tip_tape_trim_2.jpeg"><img src="/images/tip_tape_trim_2.jpeg" width="32%" alt="tip120 with trimmed tape insulation" /></a> <a href="/images/tip_tape_trim_3.jpeg"><img src="/images/tip_tape_trim_3.jpeg" width="32%" alt="tip120 with sticker insulation" /></a>
1. Use the tip120 bending jig to get a 90 degree bend just below the fat part of the pins.
<br> <a href="/images/tip_120_jig_front.jpeg"><img src="/images/tip_120_jig_front.jpeg" width="49%" alt="diode bending jig front"/></a> <a href="/images/tip_120_jig_back.jpeg"><img src="/images/tip_120_jig_back.jpeg" width="49%" alt="diode bending jig back" /></a> 
1. Insert the tip120 into the holes on the front of the board. Solder 1 pin, verify the tip120 is straight before soldering the remaining pins.<br><a href="/images/tip_120_in place.jpeg"><img src="/images/tip_120_in place.jpeg" width="49%" alt="tip120 render showing the 90 degree bend" /></a> <a href="/images/solenoid_circuit_tip120.jpeg"><img src="/images/solenoid_circuit_tip120.jpeg" width="49%" alt="tip120 render showing the 90 degree bend" /></a> 
1. Bend the legs of the 1k resistor using the bending jig on the left of the board.<br><a href="/images/resistor_bending.jpeg"><img src="/images/resistor_bending.jpeg" width="49%" alt="render demonstrating resistor bending jig" /></a> 
1. Insert the 1k resistor into the holes on the front of the board. Orientation of the resistor does not matter. Solder in place.<br><a href="/images/solenoid_circuit_1k_resitor.jpeg"><img src="/images/solenoid_circuit_1k_resitor.jpeg" width="49%" alt="1k resistor placement indicated"/></a>  
1. Bend the legs of the 1N4004 Shottky diode using the bending jig on the left of the board.<br><a href="/images/1N4001_diode_bending.jpeg"><img src="/images/1N4001_diode_bending.jpeg" width="49%" alt="render demonstrating resistor bending jig" /></a> 
1. Insert the 1N4004 Shottky diode into the holes on the front of the board. Be sure to orient the diode with the strip towards the top of the board. Solder in place.<br><a href="/images/solenoid_circuit_1N4004_diode.jpeg"><img src="/images/solenoid_circuit_1N4004_diode.jpeg" width="49%" alt="1k resistor placement indicated" /></a> 
1. Flip the board and trim the pins sticking out for the components you just installed. <br><a href="/images/solenoid_pin_nipping.jpeg"><img src="/images/solenoid_pin_nipping.jpeg"  width="49%" alt="trimming pins on the backside" /></a>
1. Using M2 screws, attach the solenoid to the top of the board. Run the wires through the big hole in the PCB. Tape the wires down with kapton tape. Solder onto the holes marked 'solenoid'. Polarity does not matter, so either wire can go in either hole. Versions after 0.2.1 have an additional solenoid footprint connetion point closer to the solenoid itself. This is to accomodate shorter wires. Either connection point will work. <br><a href="/images/Solenoid_on_front.jpeg"><img src="/images/Solenoid_on_front.jpeg" width="32%" alt="Solenoid attached to the front of the left hand board by 2 M2 screws" /></a> <a href="/images/Solenoid_wiring_on_back.jpeg"><img src="/images/Solenoid_wiring_on_back.jpeg" width="32%" alt="Solenoid wiring routed along the back of the board" /></a> <a href="/images/solenoid_circuit_solenoid_connection.jpeg"><img src="/images/solenoid_circuit_solenoid_connection.jpeg" width="32%" alt="Solenoid connection point indicated" /></a> 

<hr>

### Rotary encoders
Saved these for last because they are tallest. Insert into the top of the board, and solder on the backside. Some EC11's have metal tabs on opposite sides that add mechanical stability - no need to solder those tabs.
<br><a href="/images/ec11_soldered.jpeg"><img src="/images/ec11_soldered.jpeg" width="49%" alt="rotary encoder soldered to the PCB"/></a>

<hr>

### Final assembly
Installing the stabilizers, keys and case.

1. Install stabilizers. (Optional) The stabilizers are inserted into the front of the board, and screws are inserted on the back of the board. There are an abundance of holes around the pinky keys, so the stabilizer insertion holes have been marked with an arrow on the front of the board. Lay down the stabilizer stickers starting with the arrow side. <br> <a href="/images/stabalizer_markings.jpeg"><img src="/images/stabalizer_markings.jpeg" width="49%" alt="stabilizer markings" /></a> <a href="/images/stabilizer_inserted.JPG"><img src="/images/stabilizer_inserted.JPG" width="49%" alt="stabilizer installed on left hand shift key" /></a> <br>Notice the thumb clusters stabilizers are 'back-to-back': <br><a href="/images/thumb_stabs.JPG"><img src="/images/thumb_stabs.JPG"  width="49%" alt="thumb stabilizers installed" /></a> 
1. Snap switches into the corners of the key plate.
1. Place the PCB on a flat surface. This will save some strain on the solder joints in the next step (though they should be able handle it).
1. Carefully lower the top plate with switches on the main PCB and push into sockets. Ensure pins are aligned.
1. Snap the remaining switches into the top plate pressing into the sockets.
1. Place the encoder knob on the shaft. Tighten the set screw with a hex key. A small screwdriver for glasses may do in a pinch.
1. @todo - update: Slide the four 8mm standoffs through the PCB and align to the holes on the key plate. Attach the standoffs to the keyplate using M2 screws. 
1. Attach the bottom plate to the four standoffs installed in the previous step.
1. Use M2 screws to attach the three 12mm standoffs to the OLED cover plate.
1. Slide the three standoff on the OLED plate through the PCB. Attach those standoffs to the backplate using M2 screws.
1. Put at least 4 adhesive rubber feet in the corners so the keyboard is not moving when you type.

<hr> 

## Warnings and disclaimers
- Don't connect or disconnect the TRRS cable when the keyboard is powered. It may short out. Always disconnect the USB cable first.
- Be gentle with USB-C ports on your micro controllers. They are easy to break.
- Keep in mind that this is a prototype of a DIY keyboard. It’s not a polished product.
