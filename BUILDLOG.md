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

## Punch list
* Decide on diode 
* MOVE HOLE H7!
* Add Solenoid installation to the README
* UPdate Jack routing to support TRS & TRRS?
* Adjust key labels before production. (There are a few under holes)
* Add mur3xx to the BOM after validating the Solenoid circuit
* Move mounting holes under the MCU plate cover. (Left in old postion to help make cases for the v0.1)

![pad nub](images/pad_nub.png)