---
title: SetVehicleToRespawn
description: Sets a vehicle back to the position at where it was created.
tags: ["vehicle"]
---

## Description

Sets a vehicle back to the position at where it was created.

| Name      | Description                      |
| --------- | -------------------------------- |
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

- [CreateVehicle](CreateVehicle): Create a vehicle.
- [DestroyVehicle](DestroyVehicle): Destroy a vehicle.
