---
layout: page
title: Current Project Status
permalink: /status
nav_order: 2
# has_children: true
---

# Current Project status

While the current hardware iteration is stable and functional, (v.2) there are some supporting tasks still in progress. Specifically, QMK & VIA commits, documenting case variants.

## Punch list

### Hardware
* [ ] Create a new logo 
* [ ] Consider creating a choc key plate variant with cutouts for the diodes on the front?
* [ ] Validate the new and old tenting puck holes are good.
* [ ] Try putting a smaller 3v Solenoid on each hand.
* [ ] ~~Create~~ Validate a tip120 bending jig.
* [ ] When using PCBA, all the matrix intersections will get a diode. I think this is what's breaking the handedness by matrix intersection setting in QMK. Consider add a jumper for the RH Backspace key, so that even if PCBA is used, the handedness detection by matrix intersection will still work.
* [ ] Use the Zero LED as a layer indicator. Example qmk_firmware/keyboards/handwired/alcor_dactyl
* [ ] Update case to include hole above layer indicator LED. 
* [ ] Improve Acrylic keyplates. (Maybe one for each hand)?
* [ ] Adjust key labels before production. (There are a few under holes)
* [ ] Add data label to the TRS/TRRS jack for easier debugging. <br>![alt text](/images/build_guide/labeled_data_jack.png)
* [ ] Add dimensions to Acrylic case file names. (Elecrow doesn't autodetect the dimensions).

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
* [ ] Add gem to open images in modal. (There are hq images that are presented small-ish).
  
### QMK 
* [ ] Before submitting QMK PR, update version number in `info.json`

### VIA
* [ ] Refactor VIA PR to match the new simplified QMK base keymap
* [ ] [Draft PR](https://github.com/the-via/keyboards/pull/2208) created, blocked by QMK merge.
