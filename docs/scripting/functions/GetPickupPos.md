---
title: "GetPickupPos | open.mp"
description: "Gets the coordinates of a pickup."
canonical: https://open.mp/docs/scripting/functions/GetPickupPos
language: en
---

# GetPickupPos

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Gets the coordinates of a pickup.

| Name | Description |
| --- | --- |
| pickupid | The ID of the pickup to get the position of. |
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

-   [CreatePickup](https://open.mp/docs/scripting/functions/CreatePickup): Create a pickup.
-   [AddStaticPickup](https://open.mp/docs/scripting/functions/AddStaticPickup): Add a static pickup.
-   [DestroyPickup](https://open.mp/docs/scripting/functions/DestroyPickup): Destroy a pickup.
-   [IsValidPickup](https://open.mp/docs/scripting/functions/IsValidPickup): Checks if a pickup is valid.
-   [IsPickupStreamedIn](https://open.mp/docs/scripting/functions/IsPickupStreamedIn): Checks if a pickup is streamed in for a specific player.
-   [IsPickupHiddenForPlayer](https://open.mp/docs/scripting/functions/IsPickupHiddenForPlayer): Checks if a pickup is hidden for a specific player.
-   [SetPickupPos](https://open.mp/docs/scripting/functions/SetPickupPos): Sets the position of a pickup.
-   [SetPickupModel](https://open.mp/docs/scripting/functions/SetPickupModel): Sets the model of a pickup.
-   [GetPickupModel](https://open.mp/docs/scripting/functions/GetPickupModel): Gets the model ID of a pickup.
-   [SetPickupType](https://open.mp/docs/scripting/functions/SetPickupType): Sets the type of a pickup.
-   [GetPickupType](https://open.mp/docs/scripting/functions/GetPickupType): Gets the type of a pickup.
-   [SetPickupVirtualWorld](https://open.mp/docs/scripting/functions/SetPickupVirtualWorld): Sets the virtual world ID of a pickup.
-   [GetPickupVirtualWorld](https://open.mp/docs/scripting/functions/GetPickupVirtualWorld): Gets the virtual world ID of a pickup.
-   [ShowPickupForPlayer](https://open.mp/docs/scripting/functions/ShowPickupForPlayer): Shows a pickup for a specific player.
-   [HidePickupForPlayer](https://open.mp/docs/scripting/functions/HidePickupForPlayer): Hides a pickup for a specific player.
-   [SetPickupForPlayer](https://open.mp/docs/scripting/functions/SetPickupForPlayer): Adjusts the pickup model, type, and position for a specific player.
