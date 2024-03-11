---
layout: page
title: Current Project Status
permalink: /status
nav_order: 2
# has_children: true
---

# Current Project status

While the current hardware iteration is stable and functional, (v.2) there are some supporting tasks still in progress. Specifically, QMK & VIA commits, documenting case variants, and finalizing the PID/VID.

## Punch list

### Hardware
* [ ] Create a new logo
* [ ] consider a key plate variant that has holes to attach a top plate. 
* [ ] Consider creating a choc key plate variant with cutouts for the diodes on the front?
* [ ] Validate the new and old tenting puck holes are good.
* [ ] Try putting a smaller 3v Solenoid on each hand.
* [ ] Create a tip120 bending jig.
* [ ] Review pitch and tilt angle origion for ergo case. If the origin is the center of the board as opposed to the edge, what does that change?
* [ ] When using PCBA, all the matrix intersections will get a diode. I think this is what's breaking the handedness by matrix intersection setting in QMK. Consider add a jumper for the RH Backspace key, so that even if PCBA is used, the handedness detection by matrix intersection will still work.
* [ ] Use the Zero LED as a layer indicator. Example qmk_firmware/keyboards/handwired/alcor_dactyl
* [ ] Update case to include hole above layer indicator LED. 
* [ ] Improve Acrylic keyplates. (Maybe one for each hand)?
* [ ] Adjust key labels before production. (There are a few under holes)

### Documentation
* [ ] Use the new logo to generate the Favicon
* [ ] Add a page detailing the differences between ErgoDonk and ErgoDonk Zero
* [ ] Document more appealing default key layout.
* [ ] Add notes to the build guide, about how the symbols on the key cap should not correspond to the actual key presses., and the default layout is an adaptation of the Ergodox.
* [ ] Add note about how great those magnetic data cables are.
* [ ] Add note in the build guide about the key layout using the ergonomic height of the SA keys and add images demonstrating. 
* [ ] Add note about the merits of AliExpress vs other vendors.
* [ ] fix hot swap socket graphic with iconography. (Currently two red arrows - maybe a green check and a red 'no')?
* [ ] Strip GEO metadata from all images.
* [ ] Add diode punch outs for the bending jig
* Add Solenoid installation to the README

### QMK 
* [ ] A PR has been submit to pid.codes to apply for a unique USB-IF VID:PID combo: https://github.com/pidcodes/pidcodes.github.com/pull/936
* [ ] Update the QMK/VIA with the new VID:PID
* [ ] Add a more appealing default key layout
* [ ] Before submitting QMK PR, update version number in `info.json`

### VIA
* [ ] Update the QMK/VIA with the new VID:PID
* [ ] PR is ready, blocked by QMK merge.

