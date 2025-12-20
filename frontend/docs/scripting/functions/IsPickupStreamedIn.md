---
title: IsPickupStreamedIn
sidebar_label: IsPickupStreamedIn
description: Checks if a pickup is streamed in for a specific player.
tags: ["player", "pickup"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Checks if a pickup is streamed in for a specific player.

| Name     | Description           |
| -------- | --------------------- |
| playerid | The ID of the player. |
| pickupid | The ID of the pickup. |

## Returns

This function returns **true** if the pickup is streamed in for the player, or **false** if it is not.

## Examples

```c
new g_Pickup;

public OnGameModeInit()
{
    g_Pickup = CreatePickup(1242, 2, 1503.3359, 1432.3585, 10.1191, -1);
    return 1;
}

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    if (IsPickupStreamedIn(playerid, g_Pickup))
    {
        // Do something
    }
    return 1;
}
```

## Related Functions

- [CreatePickup](CreatePickup): Create a pickup.
- [AddStaticPickup](AddStaticPickup): Add a static pickup.
- [DestroyPickup](DestroyPickup): Destroy a pickup.
- [IsValidPickup](IsValidPickup): Checks if a pickup is valid.
- [IsPickupHiddenForPlayer](IsPickupHiddenForPlayer): Checks if a pickup is hidden for a specific player.
- [SetPickupPos](SetPickupPos): Sets the position of a pickup.
- [GetPickupPos](GetPickupPos): Gets the coordinates of a pickup.
- [SetPickupModel](SetPickupModel): Sets the model of a pickup.
- [GetPickupModel](GetPickupModel): Gets the model ID of a pickup.
- [SetPickupType](SetPickupType): Sets the type of a pickup.
- [GetPickupType](GetPickupType): Gets the type of a pickup.
- [SetPickupVirtualWorld](SetPickupVirtualWorld): Sets the virtual world ID of a pickup.
- [GetPickupVirtualWorld](GetPickupVirtualWorld): Gets the virtual world ID of a pickup.
- [ShowPickupForPlayer](ShowPickupForPlayer): Shows a pickup for a specific player.
- [HidePickupForPlayer](HidePickupForPlayer): Hides a pickup for a specific player.
- [SetPickupForPlayer](SetPickupForPlayer): Adjusts the pickup model, type, and position for a specific player.
