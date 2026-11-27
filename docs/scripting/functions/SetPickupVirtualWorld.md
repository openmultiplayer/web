---
title: "SetPickupVirtualWorld | open.mp"
description: "Sets the virtual world ID of a pickup."
canonical: https://open.mp/docs/scripting/functions/SetPickupVirtualWorld
language: en
---

# SetPickupVirtualWorld

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Sets the virtual world ID of a pickup.

| Name | Description |
| --- | --- |
| pickupid | The ID of the pickup. |
| virtualWorld | The virtual world ID to set. |

## Returns

This function always returns **true**.

## Examples

```c
new g_Pickup;

public OnGameModeInit()
{
    g_Pickup = CreatePickup(1239, 1, 1686.6160, 1455.4277, 10.7705, 20);

    SetPickupVirtualWorld(g_Pickup, 10);
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
-   [GetPickupVirtualWorld](https://open.mp/docs/scripting/functions/GetPickupVirtualWorld): Gets the virtual world ID of a pickup.
-   [ShowPickupForPlayer](https://open.mp/docs/scripting/functions/ShowPickupForPlayer): Shows a pickup for a specific player.
-   [HidePickupForPlayer](https://open.mp/docs/scripting/functions/HidePickupForPlayer): Hides a pickup for a specific player.
-   [SetPickupForPlayer](https://open.mp/docs/scripting/functions/SetPickupForPlayer): Adjusts the pickup model, type, and position for a specific player.
