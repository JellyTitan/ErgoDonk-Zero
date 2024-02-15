# ergodonk_zero

![ergodonk_zero](imgur.com image replace me!)

*A short description of the keyboard/project*

* Keyboard Maintainer: [Ryan Neff](https://github.com/Ryan Neff)
* Hardware Supported: *The PCBs, controllers supported*
* Hardware Availability: *Links to where you can find this hardware*

Make example for this keyboard (after setting up your build environment):

    `make ergodonk_zero:default`

Flashing example for this keyboard:

```bash
# For flashing the left half...
make ergodonk_zero:default:uf2-split-left
# or the qmk cli equivalent:
qmk flash -kb ergodonk_zero --keymap default -bl uf2-split-left

# For flashing the right half...
make ergodonk_zero:default:uf2-split-right
# or the qmk cli equivalent:
qmk flash -kb ergodonk_zero --keymap default -bl uf2-split-right
```

See the [build environment setup](https://docs.qmk.fm/#/getting_started_build_tools) and the [make instructions](https://docs.qmk.fm/#/getting_started_make_guide) for more information. Brand new to QMK? Start with our [Complete Newbs Guide](https://docs.qmk.fm/#/newbs).

## Bootloader

Enter the bootloader in 3 ways:

* **Bootmagic reset**: Hold down the top left key (Escape) for left hand, or the top right key (Delete) for the right hand, and plug in the keyboard
* **Physical reset button**: Hold down the BOOT button on the Zero while plugging the keyboard.
* **Keycode in layout**: Press the key mapped to `QK_BOOT` if it is available
