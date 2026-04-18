---
layout: page
title: VIA
description: Instructions for modifying the ErgoDonk Zero key map using the online VIA configurator
permalink: via
# parent: Flashing
nav_order: 5
image: /images/VIA/via_3.png
---

{% assign img1 = site.data.image_manifest["images/VIA/via_1.png"] %}
{% assign img2 = site.data.image_manifest["images/VIA/via_2.png"] %}
{% assign img3 = site.data.image_manifest["images/VIA/via_3.png"] %}
{% assign img4 = site.data.image_manifest["images/VIA/via_4.png"] %}

# VIA

Until the ErgoDonk Zero layout is merged into the official VIA repo, you'll need to load the VIA definition manually.

{: .warning}

> Editing with VIA will only work after you've flashed the ErgoDonk Zero at least once. See [flashing](flashing.md) for first flash instructions.

<ol markdown="1">
<li markdown="1">
Visit https://usevia.app/
</li>
<li markdown="1">
Open the "Settings" tab by clicking on the gear icon at the top of the page.
</li>
<li markdown="1">
Enable "Show Design tab".
<figure>
{% include img_srcset.html src="images/VIA/via_1.png" alt="VIA show design tab switch" eager=true fetchpriority="high" manifest=img1 %}
</figure>
</li>
<li markdown="1">
Now you should see a paintbrush icon at the top of the screen. Click on that to open the "Design tab".
</li>
<li markdown="1">
Download the ErgoDonk Zero via config file: [ergodonk_zero.json](https://raw.githubusercontent.com/JellyTitan/ErgoDonk-Zero/main/Firmware/via/ergodonk_zero.json). (Right click and 'Save As' to download the .json file).<br>
Once you have the file locally, Click "Load" to upload `ergodonk_zero.json`.<br> (The ErgoDonk Zero PR for VIA can't be submitted until the QMK PR is submitted and approved. That PR is waiting and ready to go: [VIA PR for ErgoDonk Zero](https://github.com/JellyTitan/via-keyboards/tree/ergodonk_zero)).
<figure>
{% include img_srcset.html src="images/VIA/via_2.png" alt="VIA uploading config" eager=true fetchpriority="high" manifest=img2 %}
</figure>
</li>
<li markdown="1">
After the definition is loaded, you may be asked to authorize a connection to your device. If the auth request doesn't pop-up automagically, click on the 'configure' icon at the top of the page, then click on 'Authorize Device +'
<figure>
{% include img_srcset.html src="images/VIA/via_3.png" alt="VIA device authorization" manifest=img3 %}
</figure>
</li>
<li markdown="1">
Clicking on the "Configure" tab will let you modify your layout.
<figure>
{% include img_srcset.html src="images/VIA/via_4.png" alt="VIA Configure tab" manifest=img4 %}
</figure>
</li>
</ol>
