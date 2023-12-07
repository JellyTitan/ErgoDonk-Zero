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
* Added keyplate layer with stabalizer cutouts.
* **3.7795** is the keyplate multiplier when creating Fusion 360 imports

## Punch list
* Add rectangular outline around MCU, or some other indicator to make it easy to refer to in the build guide.
* MOVE HOLE H7!
* Add low profile header pins to the bom https://www.aliexpress.us/item/3256805874707460.html
* Tweak diode placement to not interfere with stabalizer footprints
* UPdate Jack routing to support TRS & TRRS?
* Add stabalizers to the BOM
* Adjust key labels before production. (There are a few under holes)
* add holes between the jumpers so a row of header pins can be used.
* Separate the Zero power traces to the right of the footprint. (Too close together)
* Add usb option to the TRRS jack.
* Add mur3xx to the BOM after validating the Solenoid circuit
* Improve the key outlines
* Add a "letter" indicator per key? (Can this be tied to schematic variables?)
* move the knob column up a tiny bit, keep hitting it with my thumb.
* Fix 'pad nub' on main switch footprint

* Add note about jumper jig in build guide.

![pad nub](images/pad_nub.png)