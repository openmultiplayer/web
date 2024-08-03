---
title: SetPickupForPlayer
description: Adjusts the pickup model, type, and position for a specific player.
tags: ["player", "pickup"]
---

<VersionWarn version='omp v1.1.0.2612' />

:::warning

This function has not yet been implemented.

:::

## Description

Adjusts the pickup model, type, and position for a specific player.

| Name     | Description                                         |
|----------|-----------------------------------------------------|
| playerid | The ID of the player.                               |
| pickupid | The ID of the pickup.                               |
| model    | The [model](../resources/pickupids) to set.         |
| type     | The [pickup type](../resources/pickuptypes) to set. |
| Float:x  | The x coordinate to set the pickup at.              |
| Float:y  | The y coordinate to set the pickup at.              |
| Float:z  | The z coordinate to set the pickup at.              |

## Returns

This function always returns **true**.

## Examples

```c
new g_Pickup;

public OnGameModeInit()
{
    g_Pickup = CreatePickup(1239, 1, 1686.6160, 1455.4277, 10.7705, -1);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    new Float:x, Float:y, Float:z;
    GetPlayerPos(playerid, x, y, z);
    SetPickupForPlayer(playerid, g_Pickup, 1210, 2, x + 2.0, y + 2.0, z);
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
- [GetPickupType](GetPickupType): Gets the type of a pickup.
- [SetPickupVirtualWorld](SetPickupVirtualWorld): Sets the virtual world ID of a pickup.
- [GetPickupVirtualWorld](GetPickupVirtualWorld): Gets the virtual world ID of a pickup.
- [ShowPickupForPlayer](ShowPickupForPlayer): Shows a pickup for a specific player.
- [HidePickupForPlayer](HidePickupForPlayer): Hides a pickup for a specific player.
