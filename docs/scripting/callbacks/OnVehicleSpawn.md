---
title: OnVehicleSpawn
description: This callback is called when a vehicle respawns.
tags: ["vehicle"]
---

:::warning

This callback is called **only** when vehicle **re**spawns! [CreateVehicle](../functions/CreateVehicle) and [AddStaticVehicle](../functions/AddStaticVehicle)([Ex](../functions/AddStaticVehicleEx)) **won't** trigger this callback.

:::

## Description

This callback is called when a vehicle respawns.

| Name      | Description                         |
| --------- | ----------------------------------- |
| vehicleid | The ID of the vehicle that spawned. |

## Returns

0 - Will prevent other filterscripts from receiving this callback.

1 - Indicates that this callback will be passed to the next filterscript.

It is always called first in filterscripts.

## Examples

```c
public OnVehicleSpawn(vehicleid)
{
    printf("Vehicle %i spawned!",vehicleid);
    return 1;
}
```

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 


- [OnVehicleDeath](OnVehicleDeath): This callback is called when a vehicle is destroyed. 
- [OnPlayerSpawn](OnPlayerSpawn): This callback is called when a player spawns. 

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another. 

- [SetVehicleToRespawn](../functions/SetVehicleToRespawn): Respawn a vehicle.
- [CreateVehicle](../functions/CreateVehicle): Create a vehicle.
