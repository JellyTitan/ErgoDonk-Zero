---
layout: page
title: Contributing
permalink: /contributing
nav_order: 7
# has_children: true
---

# ErgoDonk Zero is open source - feel free to help out!
**The ErgoDonk Zeros' PCB & schematics have been intentionally designed to make it easy to swap in alternative switch footprints. Modifications and variants are encouraged!**

## License
* Hardware source files are licensed under [MIT license](https://raw.githubusercontent.com/JellyTitan/ErgoDonk-Zero/main/LICENSE).
* The documentation is licensed under [Creative Commons Attribution 4.0 International (CC BY 4.0) license](https://creativecommons.org/licenses/by/4.0/). This includes all photos and images in this repository and on the website.
* Firmware is part of [QMK firmware](https://qmk.fm/) and has the same license (GPL v2)

## Contribution guidelines

When making hardware contributions, please use "[Semantic versioning](https://semver.org/)".

To avoid 'breaking changes' when creating ErgoDonk Zero variants, please keep the following in mind:
- Changing the outline or moving the locations of the PCB, jack, knob, or switches would break compatibility between cases.
- Changing the schematic pinout would require a different QMK & VIA build and _may_ be considered a breaking change. However, there are several unused pins, please use those for adding new stuff. Currently QMK is migrating to a .json based keyboard config, so pinout changes may be easier in the future.
- Please prototype the variant before making a PR.
- Please create a case if the variant is not compatible with existing cases.
- Please include all footprints, symbols, and 3d models in the repo.
- If you use open source work, please attribute.
- Update the README / documentation of your changes as necessary.

## ErgoDonk Zero Future feature wish list
Theres some features that I would like to add if time permits. Open to contributions.
* [ ] Plate mount stabilizers. Currently has PCB mount only, but would like to support both types.
* [ ] Write a PCBA ordering walk through. I pulled images for the process with the ErgoDonk Zero - but never wrote a guide.

## Features to add to future keyboards
* Space 2mm and 4mm case holes evenly around the perimeter for monoblock type cases.
* Consider moving TRS and Zero jack back a bit so they sit flush with the edge of the board. This would make it easier to use 'monoblock' cases.
* Be sure to rotate the thumb cluster keys when building a LED variant.