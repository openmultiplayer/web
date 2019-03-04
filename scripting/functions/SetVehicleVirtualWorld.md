---
title: SetVehicleVirtualWorld
description: Sets the 'virtual world' of a vehicle.
tags: ["vehicle"]
---

# SetVehicleVirtualWorld

<TagLinks />

## Description

Sets the 'virtual world' of a vehicle. Players will only be able to see vehicles in their own virtual world.

| Name      | Description                                        |
| --------- | -------------------------------------------------- |
| vehicleid | The ID of vehicle to set the virtual world of.     |
| worldid   | The ID of the virtual world to put the vehicle in. |

## Returns

This function does not return any specific values.

## Examples

```c
SetVehicleVirtualWorld(GetPlayerVehicleID(playerid), 10);
SetPlayerVirtualWorld(playerid, 10);
```

## Related Functions

- GetVehicleVirtualWorld: Check what virtual world a vehicle is in.
- SetPlayerVirtualWorld: Set the virtual world of a player.
