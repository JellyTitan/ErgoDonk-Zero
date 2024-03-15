---
layout: page
title: Flashing
description: Instructions for flashing ErgoDonk Zero
permalink: flashing
nav_order: 3
# has_children: true
---

# Firmware and programming
{: .no_toc }

{: .warning}
> The ErgoDonk Zero uses QMK's split keyboard `handedness detection by eeprom` to determine which hand is connected to USB. (Also known as [ee_hands](https://docs.qmk.fm/#/feature_split_keyboard?id=handedness-by-eeprom)). This requires that the first time the keyboard is flashed, each hand uses a different file. When the right hand is connected to USB, the solenoid will not work.

After the first 'drag and drop' flash, you can tweak your keymaps further using [VIA](https://www.caniusevia.com/). ErgoDonk Zero is not yet merged into the main VIA repo. Until then, you can [use the via config manually](VIA.md).

<hr>

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Drag and drop flashing (the easy way)

The rp2040 supports 'drag and drop' flashing with a UF2 file on Mac or PC. This is the recommended approach if you're not familiar with compiling QMK firmware yourself. After the first 'drag and drop' flash, you can tweak your key maps further using [VIA](https://www.caniusevia.com/).

To flash with 'drag 'n drop':
These instructions are a summarization of the [official explanation found in the QMK docs](https://docs.qmk.fm/#/flashing?id=raspberry-pi-rp2040-uf2).
1. Make sure halves are not connected together with TRS cable.
1. Connect one half to USB.
1. Enter the bootloader using any of the following methods. These are dependant on where your RP2040 Zero came from.
    * Hold down `BOOT` and tap `RESET`.
    * Hold the `BOOT` button while plugging in the usb cable.
    * Double tapping the `RESET` button on the RP2040. ([Double tap reset is enabled by default on the RP2040](https://github.com/qmk/qmk_firmware/blob/master/docs/platformdev_rp2040.md#double-tap-reset-boot-loader-entry-iddouble-tap)).
    * **Bootmagic reset** (works after you have flashed once): Hold down the top far corner key while plugging in the keyboard (`~` left half, `-` right half). This will also clear the EEPROM. @todo Add Bootmagic to QMK config.
1. Wait for the OS to detect the device.
1. Copy the .uf2 file to the new USB disk. 
  * The files can be found in the [ErgoDonk Zero repo](https://github.com/JellyTitan/ErgoDonk-Zero/tree/main/Firmware/drag_and_drop).
  * There is a different file for right hand and left hand, as denoted by a `_RH` or `_LH` suffix. (@todo - can we use matrix detection to use a single file for both hands)?
  * On Mac after the file is dropped, the 'Keyboard setup assistant' may be triggered. You can ignore and quit the assistant.(@todo add relative path to UF2 files.) 
1. Unplug the side you just flashed, and repeat the process with the other side.
1. Disconnect both halves from USB.
1. Connect both halves together using the TRS cable. 
1. Connect the left half to USB.
1. Test everything using VIA. (Earlier versions of VIA were downloaded and installed. The latest version, VIA 3, is accessed through the web interface).

## Compile QMK for flashing (the hard way)

If you want to build your own firmware, ErgoDonk Zero uses [QMK Firmware][qmk_firmware]. Support is not in the main QMK repository yet. **@todo: Update this url with official PR**. Instead use the [jellytitan/qmk_firmware](https://github.com/JellyTitan/qmk_firmware/tree/ergodonk_zero) fork and the `ergodonk_zero` branch.
https://docs.qmk.fm/#/flashing?id=raspberry-pi-rp2040-uf2

To flash:
- Clone [https://github.com/jellytitan/qmk_firmware](https://github.com/jellytitan/qmk_firmware)
- Switch to the `ergodonk_zero` branch with `git checkout ergodonk_zero`
- Make sure your QMK environment [is setup][qmkintro].
- Make sure halves are _not_ connected together with TRS cable.
- Connect one half to USB, flash the firmware (always follow the current instructions in the QMK documentation! The command might look something like this: `qmk flash -kb ergodonk_zero --keymap default -bl uf2-split-right` and `qmk flash -kb ergodonk_zero --keymap default -bl uf2-split-left`). Use the reset button to reset the keyboard when you are asked to in console. 
- Connect the second half and flash it in the same way as the previous one.
- Disconnect the USB cable. Connect both halves together with TRRS cable.
- Connect USB cable to the **left** side.
- Enjoy!
