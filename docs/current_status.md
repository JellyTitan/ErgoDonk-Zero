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
* [ ] A PR has been submit to pid.codes to apply for a unique USB-IF VID:PID combo: https://github.com/pidcodes/pidcodes.github.com/pull/936
* [ ] Update the QMK/VIA with the new VID:PID
* [ ] Create a new logo
* [ ] Use the new logo to generate the Favicon
* [ ] Add a page detailing the differences between ErgoDonk and ErgoDonk Zero
* [ ] Add a more appealing default key layout
* [ ] Document more appealing default key layout.
* [ ] Validate the new and old tenting puck holes are good.
* [ ] consider a key plate variant that has holes to attach a top plate. 
* [ ] Try putting a smaller 3v Solenoid on each hand.
* [ ] Add notes to the build guide, about how the symbols on the key cap should not correspond to the actual key presses., and the default layout is an adaptation of the Ergodox.
* [ ] Add note about how great those magnetic data cables are.
* [ ] Add note in the build guide about the key layout using the ergonomic height of the SA keys and add images demonstrating. 
* [ ] Add a link to make it easy for users to contribute to documentation, like QMK has.
* [ ] Add note about the merits of AliExpress vs other vendors.
* [ ] Consider creating a choc key plate variant with cutouts for the diodes on the front?
* [ ] fix hot swap socket graphic with iconography. (Currently two red arrows - maybe a green check and a red 'no')?
* [ ] Create a tip120 bending jig.
* [ ] Strip GEO metadata from all images.
* [ ] Add diode punch outs for the bending jig
* [ ] Review pitch and tilt angle origion for ergo case. If the origin is the center of the board as opposed to the edge, what does that change?
* [ ] When using PCBA, all the matrix intersections will get a diode. I think this is what's breaking the handedness by matrix intersection setting in QMK. Consider add a jumper for the RH Backspace key, so that even if PCBA is used, the handedness detcetion by matrix intersection will still work.
* [ ] Use the Zero LED as a layer indicator. Example qmk_firmware/keyboards/handwired/alcor_dactyl
* [ ] Update case to include hole above layer indicator LED. 
* [x] Adjust key labels before production. (There are a few under holes)
* [ ] Before submitting QMK PR, update version number in `info.json`
* Add Solenoid installation to the README