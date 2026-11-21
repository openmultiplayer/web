---
title: Starting IDs
sidebar_label: Starting IDs
description: Everything like objects, players or vehicles use IDs.
---

This page contains all of the starting IDs for numerous entities.  
Everything like objects, players or vehicles use IDs. Some IDs start with 0, others start with 1.

| Type                                                                                          | Starting ID |
| --------------------------------------------------------------------------------------------- | ----------- |
| [3D Text Label](../functions/Create3DTextLabel)                                               | 0           |
| [Actor](../functions/CreateActor)                                                             | 0           |
| [File](../functions/fopen)                                                                    | 0           |
| [GangZone](../functions/GangZoneCreate)                                                       | 0           |
| [Object](../functions/CreateObject)                                                           | 1           |
| [Pickup](../functions/CreatePickup)                                                           | 0           |
| Player                                                                                        | 0           |
| [Player Class](../functions/AddPlayerClass)                                                   | 0           |
| [TextDraw](../functions/TextDrawCreate) / [PlayerTextDraw](../functions/CreatePlayerTextDraw) | 0           |
| [Timer](../functions/SetTimer)                                                                | 1           |
| [Vehicle](../functions/CreateVehicle)                                                         | 1           |

You see, vehicles and objects start using 1, not 0! So if you plan to use an array to hold all IDs you have to use the ID from CreateObject/CreateVehicle/... and subtract 1 to get the array element ID.
