---
layout: page
title: PCB Ordering
# permalink: /pcb-ordering
description: ErgoDonk Zero PCB ordering guide
# parent: Build
nav_order: 4
---
# PCB Ordering Guide.

How to order this board from a PCB vendor - helpful info if it's your first time ordering a PCB.

Most PCB vendors have a similar ordering process. I use [JLCPCB](https://jlcpcb.com/) because they are usually the most cost effective. I've had good luck with [Elecrow](https://www.elecrow.com/) too. [You can find PCB price comparison tools online.](https://pcbshopper.com/) When comparing pricing, be sure to enter the board dimensions, and set the minimum quantity to 5. The ErgoDonk zero is 217mm X 156mm. Usually anything under 100x100mm is really inexpensive - so be sure to use actual dimensions when pricing. Most manufacturers have a 5 board minimum, so this is a safe quantity to start with.

Usually the minimum quantity to order is 5 boards. The ErgoDonk Zero been designed to be double sided, so a batch of 5 boards gets you 2 & 1/2 sets.

The production files are known as "gerbers", and they are usually uploaded as a `.zip` file. (It's essentially a collection of files for each layer of the board, like holes, graphics, traces etc.) 

The Gerbers for the ErgoDonk Zero can be found as a zipped file in the "Releases" section on the right hand side of the [Github repo](https://github.com/JellyTitan/ErgoDonk-Zero). 

@todo add image and name of release

The homepage of JLCPCB has a drag & drop upload. Drag the gerber `.zip` and drop it on the "add gerber file" box.

![JLCPCB Home](docs/images/ordering_guide/JLCPCB_Ordering_1.png)

While the file is uploading, it will take you to an options screen. Once the board size is detected<sup>1</sup>, the price<sup>2</sup> will update accordingly.
Changing the pcb color<sup>3</sup> may impact production time and price.
Shipping estimates<sup>4</sup> can vary widely, so be sure to check those. (You'll see these options again during checkout).

![JLCPCB Home](docs/images/ordering_guide/JLCPCB_Ordering_2.png)

It's worth noting, the default pcb surface finish contains Lead. For boards in cases, this is usually not a problem. If you're going to rock a naked board, consider going with "lead free"<sup>5</sup> for a few bucks more. The more popular colors like green and black tend to cost less for the lead free option.

By default, all JLC boards have a part number printed on them. (Most people won't notice them unless your looking for them). You can pay extra to have them removed. ErgoDonk Zero supports the option to "Specify a location"<sup>6</sup>. (Essentially this is a line of text on the PCB that will JLC will substitute with their part number.) There is no additional charge for specifying the location. 

The remainder of the checkout process is standard e-commerce stuff. After you pay for your order, it will be reviewed before going into production. They will let you know if the file has any issues. 
