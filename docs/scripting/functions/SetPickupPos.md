---
title: SetPickupPos
description: Sets the position of a pickup.
tags: ["pickup"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Sets the position of a pickup.

| Name               | Description                              |
|--------------------|------------------------------------------|
| pickupid           | The ID of the pickup.                    |
| Float:x            | The x coordinate to set the pickup at.   |
| Float:y            | The y coordinate to set the pickup at.   |
| Float:z            | The z coordinate to set the pickup at.   |
| bool:update = true | Update pickup for everyone. (true/false) |

## Returns

This function always returns **true**.

## Examples

```c
new g_Pickup;

public OnGameModeInit()
{
    g_Pickup = CreatePickup(1239, 1, 1686.6160, 1455.4277, 10.7705, -1);

    SetPickupPos(g_Pickup, 1958.5488, 1344.9137, 15.3613);
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
- [GetPickupPos](GetPickupPos): Gets the coordinates of a pickup.
- [SetPickupModel](SetPickupModel): Sets the model of a pickup.
- [GetPickupModel](GetPickupModel): Gets the model ID of a pickup.
- [SetPickupType](SetPickupType): Sets the type of a pickup.
- [GetPickupType](GetPickupType): Gets the type of a pickup.
- [SetPickupVirtualWorld](SetPickupVirtualWorld): Sets the virtual world ID of a pickup.
- [GetPickupVirtualWorld](GetPickupVirtualWorld): Gets the virtual world ID of a pickup.
- [ShowPickupForPlayer](ShowPickupForPlayer): Shows a pickup for a specific player.
- [HidePickupForPlayer](HidePickupForPlayer): Hides a pickup for a specific player.

