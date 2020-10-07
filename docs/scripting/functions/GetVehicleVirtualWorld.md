---
id: GetVehicleVirtualWorld
title: GetVehicleVirtualWorld
description: Get the virtual world of a vehicle.
tags: ["vehicle"]
---

## Description

Get the virtual world of a vehicle.

| Name      | Description                                        |
| --------- | -------------------------------------------------- |
| vehicleid | The ID of the vehicle to get the virtual world of. |

## Returns

The virtual world that the vehicle is in.

## Examples

```c
new world = GetVehicleVirtualWorld(vehicleid);
SetPlayerVirtualWorld(playerid, world);
```

## Related Functions

- [SetVehicleVirtualWorld](SetVehicleVirtualWorld.md): Set the virtual world of a vehicle.
- [GetPlayerVirtualWorld](GetPlayerVirtualWorld.md): Check what virtual world a player is in.
