---
title: "SetVehicleToRespawn | open.mp"
description: "Sets a vehicle back to the position at where it was created."
canonical: https://open.mp/docs/scripting/functions/SetVehicleToRespawn
language: en
---

# SetVehicleToRespawn

## Description

Sets a vehicle back to the position at where it was created.

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle to respawn |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The vehicle does not exist.

## Examples

```c
// Respawns the all vehicles
for (new i = 1; i < MAX_VEHICLES; i++)
{
    SetVehicleToRespawn(i);
}
```

## Related Functions

-   [CreateVehicle](https://open.mp/docs/scripting/functions/CreateVehicle): Create a vehicle.
-   [DestroyVehicle](https://open.mp/docs/scripting/functions/DestroyVehicle): Destroy a vehicle.
