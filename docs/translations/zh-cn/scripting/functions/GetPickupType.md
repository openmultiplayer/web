---
title: GetPickupType
description: Gets the type of a pickup.
tags: ["pickup"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the type of a pickup.

| Name     | Description                              |
|----------|------------------------------------------|
| pickupid | The ID of the pickup to get the type of. |

## Returns

Returns the type of the pickup.

**-1** if the pickup is not valid.

## Examples

```c
new g_Pickup;

public OnGameModeInit()
{
    g_Pickup = CreatePickup(1239, 1, 1686.6160, 1455.4277, 10.7705, -1);

    new type = GetPickupType(g_Pickup);
    // type = 1
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
- [GetPickupPos](GetPickupPos): Gets the coordinates of a pickup.
- [SetPickupModel](SetPickupModel): Sets the model of a pickup.
- [GetPickupModel](GetPickupModel): Gets the model ID of a pickup.
- [SetPickupType](SetPickupType): Sets the type of a pickup.
- [SetPickupVirtualWorld](SetPickupVirtualWorld): Sets the virtual world ID of a pickup.
- [GetPickupVirtualWorld](GetPickupVirtualWorld): Gets the virtual world ID of a pickup.
- [ShowPickupForPlayer](ShowPickupForPlayer): Shows a pickup for a specific player.
- [HidePickupForPlayer](HidePickupForPlayer): Hides a pickup for a specific player.
- [SetPickupForPlayer](SetPickupForPlayer): Adjusts the pickup model, type, and position for a specific player.
