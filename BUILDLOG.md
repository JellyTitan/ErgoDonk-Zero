## Build log:
### v0.1
* 11-20-2023 Sent out v0.1 to JLC for production
* Split off from the main Ergodonk development repo for easier cleanup/maintenance.

### v0.2
* Confirmed v0.1 works as expected.
* Put a GND plane on both sides, wire VCC directly. (with big fat traces)!
* Added jumper jig to help bend jumper bridges.
* Move all traces from pads to the corners to prevent acid traps.
* Fix jumper bay graphics
* Changing pad connections on Polygons to 'Solid' - might be a bit harder to solder, but leads to better connections.
* Added keycap labels to each key.
* Increased key outlines and solenid component silks for improved legibility.
* Added keyplate layer with stabilizer cutouts.
* **3.7795** is the keyplate multiplier when creating Fusion 360 imports
* Moved rotary encoder column up 2.5mm to avoid hitting encoder with my freakishly long thumbs.
* Added plates for RH/LH MCU Covers
* Moved mounting holes for MCU Covers
* Moved thumb 2u key diodes down to prevent stabilizer interference.
* Added markings to indicate stabilizer holes per side.
* Fixed protruding 'trace nub' on main footprint
* Moved all diodes down a bit to make more room for choc keys
* Considered moving TRRS jack below vol buttons. Decided against it, as i like to keep things between the two halves of the keyboard, so keeping the cables higher up is preferred.
* Converted TRRS jack to TRS. 
* Refactored TRRS jack to remove full duplex. Replaced with serial default. Rerouted accordingly - then rolled it all back. I think it's better to leave the config for Full duplex available, but only implement serial communication. The full duplex config will probably be used in other ergodonk variants, and there is no urgent need for freeing up that extra pin.
* Via support added. It's on branch ergodonk_zero: https://github.com/JellyTitan/keyboards/blob/ergodonk_zero/v3/ergodonk_zero/ergodonk_zero.json
* Hid the case mount holes where possible. Where not possible, made them appear balanced & intentional.
* Ordered v0.2 PCB 1-11-2024.

### v0.3
- [ ] Verify the TRRS/TRS jack works as expected.
- [ ] Convert QMK config to Serial from full duplex.

## Punch list
- [x] Make sure that TX and RX correspond to the correct collapsed pins on TRRS and TRS.
- [x] hide case holes underkeys
- [x] MOVE HOLE H7!
* Adjust key labels before production. (There are a few under holes)
- [x] Move mounting holes under the MCU plate cover. (Left in old postion to help make cases for the v0.1)
* Add Solenoid installation to the README

![pad nub](images/pad_nub.png)