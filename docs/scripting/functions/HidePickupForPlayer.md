---
title: "HidePickupForPlayer | open.mp"
description: "Hides a pickup for a specific player."
canonical: https://open.mp/docs/scripting/functions/HidePickupForPlayer
language: en
---

# HidePickupForPlayer

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Hides a pickup for a specific player.

| Name | Description |
| --- | --- |
| playerid | The ID of the player. |
| pickupid | The ID of the pickup to hide for the player. |

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
    HidePickupForPlayer(playerid, g_Pickup);
    return 1;
}
```

## Related Functions

-   [CreatePickup](https://open.mp/docs/scripting/functions/CreatePickup): Create a pickup.
-   [AddStaticPickup](https://open.mp/docs/scripting/functions/AddStaticPickup): Add a static pickup.
-   [DestroyPickup](https://open.mp/docs/scripting/functions/DestroyPickup): Destroy a pickup.
-   [IsValidPickup](https://open.mp/docs/scripting/functions/IsValidPickup): Checks if a pickup is valid.
-   [IsPickupStreamedIn](https://open.mp/docs/scripting/functions/IsPickupStreamedIn): Checks if a pickup is streamed in for a specific player.
-   [IsPickupHiddenForPlayer](https://open.mp/docs/scripting/functions/IsPickupHiddenForPlayer): Checks if a pickup is hidden for a specific player.
-   [SetPickupPos](https://open.mp/docs/scripting/functions/SetPickupPos): Sets the position of a pickup.
-   [GetPickupPos](https://open.mp/docs/scripting/functions/GetPickupPos): Gets the coordinates of a pickup.
-   [SetPickupModel](https://open.mp/docs/scripting/functions/SetPickupModel): Sets the model of a pickup.
-   [GetPickupModel](https://open.mp/docs/scripting/functions/GetPickupModel): Gets the model ID of a pickup.
-   [SetPickupType](https://open.mp/docs/scripting/functions/SetPickupType): Sets the type of a pickup.
-   [GetPickupType](https://open.mp/docs/scripting/functions/GetPickupType): Gets the type of a pickup.
-   [SetPickupVirtualWorld](https://open.mp/docs/scripting/functions/SetPickupVirtualWorld): Sets the virtual world ID of a pickup.
-   [GetPickupVirtualWorld](https://open.mp/docs/scripting/functions/GetPickupVirtualWorld): Gets the virtual world ID of a pickup.
-   [ShowPickupForPlayer](https://open.mp/docs/scripting/functions/ShowPickupForPlayer): Shows a pickup for a specific player.
-   [SetPickupForPlayer](https://open.mp/docs/scripting/functions/SetPickupForPlayer): Adjusts the pickup model, type, and position for a specific player.
