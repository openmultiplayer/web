---
title: GetPickupPos
description: Gets the coordinates of a pickup.
tags: ["pickup"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the coordinates of a pickup.

| Name     | Description                                                               |
|----------|---------------------------------------------------------------------------|
| pickupid | The ID of the pickup to get the position of.                              |
| &Float:x | A float variable in which to store the x coordinate, passed by reference. |
| &Float:y | A float variable in which to store the y coordinate, passed by reference. |
| &Float:z | A float variable in which to store the z coordinate, passed by reference. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The pickup specified doesn't exist.

## Examples

```c
new g_Pickup;

public OnGameModeInit()
{
    g_Pickup = CreatePickup(1239, 1, 1686.6160, 1455.4277, 10.7705, -1);

    new 
        Float:x,
        Float:y,
        Float:z;

    GetPickupPos(g_Pickup, x, y, z);
    // x = 1686.6160
    // y = 1455.4277
    // z = 10.7705
    return 1;
}
```

## Related Functions

- [CreatePickup](CreatePickup): Create a pickup.
- [AddStaticPickup](AddStaticPickup): Add a static pickup.
- [DestroyPickup](DestroyPickup): Destroy a pickup.
- [IsValidPickup](IsValidPickup): Checks if a pickup is valid.
- [IsPickupStreamedIn](IsPickupStreamedIn): Checks if a pickup is streamed in for a specific player.
- [IsPickupHiddenForPlayer](IsPickupHiddenForPlayer): Checks if a pickup is hidden for a specific player.
- [SetPickupPos](SetPickupPos): Sets the position of a pickup.
- [SetPickupModel](SetPickupModel): Sets the model of a pickup.
- [GetPickupModel](GetPickupModel): Gets the model ID of a pickup.
- [SetPickupType](SetPickupType): Sets the type of a pickup.
- [GetPickupType](GetPickupType): Gets the type of a pickup.
- [SetPickupVirtualWorld](SetPickupVirtualWorld): Sets the virtual world ID of a pickup.
- [GetPickupVirtualWorld](GetPickupVirtualWorld): Gets the virtual world ID of a pickup.
- [ShowPickupForPlayer](ShowPickupForPlayer): Shows a pickup for a specific player.
- [HidePickupForPlayer](HidePickupForPlayer): Hides a pickup for a specific player.
- [SetPickupForPlayer](SetPickupForPlayer): Adjusts the pickup model, type, and position for a specific player.
