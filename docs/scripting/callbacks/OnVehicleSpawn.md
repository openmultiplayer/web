---
id: OnVehicleSpawn
title: OnVehicleSpawn
description: This callback is called when a vehicle respawns.
tags: ["vehicle"]
---

:::warning

This callback is called **only** when vehicle **re**spawns!
CreateVehicle and AddStaticVehicle(Ex) **won't** trigger this callback.

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

## Related Functions

- [SetVehicleToRespawn](../functions/SetVehicleToRespawn.md): Respawn a vehicle.
- [CreateVehicle](../functions/CreateVehicle.md): Create a vehicle.
