---
layout: page
title: Flashing QMK Firmware
description: How to flash the ErgoDonk Zero keyboard with QMK firmware. Covers drag-and-drop UF2 flashing, reset procedure, and building custom firmware.
permalink: flashing
nav_order: 3
# has_children: true
# Structured data: renders _includes/structured_data/flashing_howto.html into <head> via _includes/head_custom.html.
# Remove or rename this key to disable.
schema: flashing-howto
---

# Flashing QMK Firmware
{: .no_toc }

{: .warning}
> Earlier versions of the ErgoDonk Zero required flashing each half with unique files. As of May 2026, each hand is flashed with the same file. The left hand is now the primary side. If you want to connect your USB cable to the right side, you'll need to use a specific `.uf2` file listed below.

After the first 'drag and drop' flash, you can tweak your keymaps further using [VIA](https://www.caniusevia.com/). ErgoDonk Zero is not yet merged into the main VIA repo. Until then, you can [use the via config manually](VIA.md).

<hr>

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Drag and drop flashing (the easy way)

The rp2040 supports 'drag and drop' flashing with a UF2 file on Mac or PC. This is the recommended approach if you're not familiar with compiling QMK firmware yourself. After the first 'drag and drop' flash, you can tweak your keymaps further using [VIA](https://www.caniusevia.com/).

These instructions are a summary of the [official explanation found in the QMK docs](https://docs.qmk.fm/#/flashing?id=raspberry-pi-rp2040-uf2).

To flash with 'drag 'n drop':
1. Make sure halves are not connected together with TRS cable.
1. Connect one half to USB.
1. Enter the bootloader using any of the following methods. These are dependent on where your RP2040 Zero came from.
    * Hold down `BOOT` and tap `RESET`.
    * Hold the `BOOT` button while plugging in the USB cable.
    * Double tapping the `RESET` button on the RP2040. ([Double tap reset is enabled by default on the RP2040](https://github.com/qmk/qmk_firmware/blob/master/docs/platformdev_rp2040.md#double-tap-reset-boot-loader-entry-iddouble-tap)).
    * **Bootmagic reset** (works after you have flashed once): Hold down the `d` key when plugging in the left half, or hold `j` when plugging in the right half. This will also clear the EEPROM.
1. Copy the .uf2 file to the new USB disk. The files can be found in the [ErgoDonk Zero repo](https://github.com/JellyTitan/ErgoDonk-Zero/tree/main/Firmware/drag_and_drop). *Each hand will be flashed with the same file.* There are a few different variants you have to choose from when starting out:
    * [`ergodonk_zero_via.uf2`](https://github.com/JellyTitan/ErgoDonk-Zero/blob/main/Firmware/drag_and_drop/ergodonk_zero_via.uf2){:target="_blank"} Default configuration with VIA support included. Choose this if this is your first time.
    * [`ergodonk_zero_default.uf2`](https://github.com/JellyTitan/ErgoDonk-Zero/blob/main/Firmware/drag_and_drop/ergodonk_zero_default.uf2){:target="_blank"} Default configuration, the same as in QMK. No VIA support.
    * [`ergodonk_zero_jellytitan.uf2`](https://github.com/JellyTitan/ErgoDonk-Zero/blob/main/Firmware/drag_and_drop/ergodonk_zero_jellytitan.uf2){:target="_blank"} My personal configuration, has VIA support and some fancy macros.
    * [`ergodonk_zero_via_rh.uf2`](https://github.com/JellyTitan/ErgoDonk-Zero/blob/main/Firmware/drag_and_drop/ergodonk_zero_via_rh.uf2){:target="_blank"} Default QMK configuration with VIA support and right hand set as primary. Solenoid not supported with right hand as primary.
    * On Mac after the file is dropped, the 'Keyboard setup assistant' may be triggered. You can ignore and quit the assistant.
1. Unplug the side you just flashed, and repeat the process with the other side.
1. Disconnect both halves from USB. 
1. Connect both halves together using the TRS cable. 
1. Connect the left half to USB. (If you chose a right hand variant, connect the right half to USB).
1. Test everything using VIA. (Earlier versions of VIA were downloaded and installed. The latest version, VIA 3, is accessed through the web interface).

## Compile QMK for flashing (the hard way)

If you want to build your own firmware, ErgoDonk Zero uses [QMK Firmware][qmk_firmware]. Support is not in the main QMK repository yet. **@todo: Update this url with official PR**. Instead use the [jellytitan/qmk_firmware](https://github.com/JellyTitan/qmk_firmware/tree/ergodonk_zero){:target="_blank"} fork and the `ergodonk_zero` branch.

To flash:
- Clone [https://github.com/jellytitan/qmk_firmware](https://github.com/jellytitan/qmk_firmware){:target="_blank"}
- Switch to the `ergodonk_zero` branch with `git checkout ergodonk_zero`
- Make sure your QMK environment [is set up][qmkintro].
- Make sure halves are _not_ connected together with TRS cable.
- Connect one half to USB, flash the firmware. Always follow the current instructions in the QMK documentation! The command might look something like this: `make ergodonk_zero:default:flash`. Use the reset button to reset the keyboard when you are asked to in console. 
- Connect the second half and flash it in the same way as the previous one.
- Disconnect the USB cable. Connect both halves together with TRS cable.
- Connect USB cable to the **left** side.
- Enjoy!
