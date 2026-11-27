---
title: "SetPlayerPickupPos | open.mp"
description: "Sets the position of a player-pickup."
canonical: https://open.mp/docs/scripting/functions/SetPlayerPickupPos
language: en
---

# SetPlayerPickupPos

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Sets the position of a player-pickup.

| Name | Description |
| --- | --- |
| playerid | The ID of the player. |
| pickupid | The ID of the player-pickup. |
| Float:x | The x coordinate to set the pickup at. |
| Float:y | The y coordinate to set the pickup at. |
| Float:z | The z coordinate to set the pickup at. |
| bool:update = true | Update pickup for player. (true/false) |

## Returns

This function always returns **true**.

## Examples

```c
new PlayerPickup[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1242, 2, 2010.0979, 1222.0642, 10.8206, -1);

    SetPlayerPickupPos(playerid, PlayerPickup[playerid], 1958.5488, 1344.9137, 15.3613);
    return 1;
}
```

## Related Functions

-   [CreatePlayerPickup](https://open.mp/docs/scripting/functions/CreatePlayerPickup): Creates a pickup which will be visible to only one player.
-   [DestroyPlayerPickup](https://open.mp/docs/scripting/functions/DestroyPlayerPickup): Destroy a player-pickup.
-   [IsValidPlayerPickup](https://open.mp/docs/scripting/functions/IsValidPlayerPickup): Checks if a player-pickup is valid.
-   [IsPlayerPickupStreamedIn](https://open.mp/docs/scripting/functions/IsPlayerPickupStreamedIn): Checks if a player-pickup is streamed in for the player.
-   [GetPlayerPickupPos](https://open.mp/docs/scripting/functions/GetPlayerPickupPos): Gets the coordinates of a player-pickup.
-   [SetPlayerPickupModel](https://open.mp/docs/scripting/functions/SetPlayerPickupModel): Sets the model of a player-pickup.
-   [GetPlayerPickupModel](https://open.mp/docs/scripting/functions/GetPlayerPickupModel): Gets the model ID of a player-pickup.
-   [SetPlayerPickupType](https://open.mp/docs/scripting/functions/SetPlayerPickupType): Sets the type of a player-pickup.
-   [GetPlayerPickupType](https://open.mp/docs/scripting/functions/GetPlayerPickupType): Gets the type of a player-pickup.
-   [SetPlayerPickupVirtualWorld](https://open.mp/docs/scripting/functions/SetPlayerPickupVirtualWorld): Sets the virtual world ID of a player-pickup.
-   [GetPlayerPickupVirtualWorld](https://open.mp/docs/scripting/functions/GetPlayerPickupVirtualWorld): Gets the virtual world ID of a player-pickup.
