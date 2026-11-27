---
title: "IsPickupStreamedIn | open.mp"
description: "Checks if a pickup is streamed in for a specific player."
canonical: https://open.mp/docs/scripting/functions/IsPickupStreamedIn
language: en
---

# IsPickupStreamedIn

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Checks if a pickup is streamed in for a specific player.

| Name | Description |
| --- | --- |
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

-   [CreatePickup](https://open.mp/docs/scripting/functions/CreatePickup): Create a pickup.
-   [AddStaticPickup](https://open.mp/docs/scripting/functions/AddStaticPickup): Add a static pickup.
-   [DestroyPickup](https://open.mp/docs/scripting/functions/DestroyPickup): Destroy a pickup.
-   [IsValidPickup](https://open.mp/docs/scripting/functions/IsValidPickup): Checks if a pickup is valid.
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
-   [HidePickupForPlayer](https://open.mp/docs/scripting/functions/HidePickupForPlayer): Hides a pickup for a specific player.
-   [SetPickupForPlayer](https://open.mp/docs/scripting/functions/SetPickupForPlayer): Adjusts the pickup model, type, and position for a specific player.
