---
title: "GetVehicleVirtualWorld | open.mp"
description: "Get the virtual world of a vehicle."
canonical: https://open.mp/docs/scripting/functions/GetVehicleVirtualWorld
language: en
---

# GetVehicleVirtualWorld

## Description

Get the virtual world of a vehicle.

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle to get the virtual world of. |

## Returns

The virtual world that the vehicle is in.

## Examples

```c
new
	vehicleWorld = GetVehicleVirtualWorld(vehicleid);
SetPlayerVirtualWorld(playerid, vehicleWorld);
```

## Related Functions

-   [SetVehicleVirtualWorld](https://open.mp/docs/scripting/functions/SetVehicleVirtualWorld): Set the virtual world of a vehicle.
-   [GetPlayerVirtualWorld](https://open.mp/docs/scripting/functions/GetPlayerVirtualWorld): Check what virtual world a player is in.
