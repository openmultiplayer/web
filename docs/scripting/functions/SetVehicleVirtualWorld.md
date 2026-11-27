---
title: "SetVehicleVirtualWorld | open.mp"
description: "Sets the 'virtual world' of a vehicle."
canonical: https://open.mp/docs/scripting/functions/SetVehicleVirtualWorld
language: en
---

# SetVehicleVirtualWorld

## Description

Sets the 'virtual world' of a vehicle. Players will only be able to see vehicles in their own virtual world.

| Name | Description |
| --- | --- |
| vehicleid | The ID of vehicle to set the virtual world of. |
| virtualWorld | The ID of the virtual world to put the vehicle in. |

## Returns

This function does not return any specific values.

## Examples

```c
SetVehicleVirtualWorld(GetPlayerVehicleID(playerid), 10);
SetPlayerVirtualWorld(playerid, 10);
```

## Related Functions

-   [GetVehicleVirtualWorld](https://open.mp/docs/scripting/functions/GetVehicleVirtualWorld): Check what virtual world a vehicle is in.
-   [SetPlayerVirtualWorld](https://open.mp/docs/scripting/functions/SetPlayerVirtualWorld): Set the virtual world of a player.
