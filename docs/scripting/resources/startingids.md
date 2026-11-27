---
title: "Starting IDs | open.mp"
description: "Everything like objects, players or vehicles use IDs."
canonical: https://open.mp/docs/scripting/resources/startingids
language: en
---

# Starting IDs

This page contains all of the starting IDs for numerous entities.  
Everything like objects, players or vehicles use IDs. Some IDs start with 0, others start with 1.

| Type | Starting ID |
| --- | --- |
| [3D Text Label](https://open.mp/docs/scripting/functions/Create3DTextLabel) | 0 |
| [Actor](https://open.mp/docs/scripting/functions/CreateActor) | 0 |
| [File](https://open.mp/docs/scripting/functions/fopen) | 0 |
| [GangZone](https://open.mp/docs/scripting/functions/GangZoneCreate) | 0 |
| [Object](https://open.mp/docs/scripting/functions/CreateObject) | 1 |
| [Pickup](https://open.mp/docs/scripting/functions/CreatePickup) | 0 |
| Player | 0 |
| [Player Class](https://open.mp/docs/scripting/functions/AddPlayerClass) | 0 |
| [TextDraw](https://open.mp/docs/scripting/functions/TextDrawCreate) / [PlayerTextDraw](https://open.mp/docs/scripting/functions/CreatePlayerTextDraw) | 0 |
| [Timer](https://open.mp/docs/scripting/functions/SetTimer) | 1 |
| [Vehicle](https://open.mp/docs/scripting/functions/CreateVehicle) | 1 |

You see, vehicles and objects start using 1, not 0! So if you plan to use an array to hold all IDs you have to use the ID from CreateObject/CreateVehicle/... and subtract 1 to get the array element ID.
