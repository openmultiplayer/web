---
title: "IsPlayerPickupStreamedIn | open.mp"
description: "Checks if a player-pickup is streamed in for the player."
canonical: https://open.mp/docs/scripting/functions/IsPlayerPickupStreamedIn
language: en
---

# IsPlayerPickupStreamedIn

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Checks if a player-pickup is streamed in for the player.

| Name | Description |
| --- | --- |
| playerid | The ID of the player. |
| pickupid | The ID of the player-pickup. |

## Returns

This function returns **true** if the player-pickup is streamed in for the player, or **false** if it is not.

## Examples

```c
new PlayerPickup[MAX_PLAYERS]; // Create a variable to store the player-pickup ID in

public OnPlayerConnect(playerid)
{
    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1242, 2, 2010.0979, 1222.0642, 10.8206, -1);
    // Create an armour pickup and store the ID in 'PlayerPickup[playerid]'
    return 1;
}

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    if (IsPlayerPickupStreamedIn(playerid, PlayerPickup[playerid]))
    {
        // Do something
    }
    return 1;
}
```

## Related Functions

-   [CreatePlayerPickup](https://open.mp/docs/scripting/functions/CreatePlayerPickup): Creates a pickup which will be visible to only one player.
-   [DestroyPlayerPickup](https://open.mp/docs/scripting/functions/DestroyPlayerPickup): Destroy a player-pickup.
-   [IsValidPlayerPickup](https://open.mp/docs/scripting/functions/IsValidPlayerPickup): Checks if a player-pickup is valid.
-   [SetPlayerPickupPos](https://open.mp/docs/scripting/functions/SetPlayerPickupPos): Sets the position of a player-pickup.
-   [GetPlayerPickupPos](https://open.mp/docs/scripting/functions/GetPlayerPickupPos): Gets the coordinates of a player-pickup.
-   [SetPlayerPickupModel](https://open.mp/docs/scripting/functions/SetPlayerPickupModel): Sets the model of a player-pickup.
-   [GetPlayerPickupModel](https://open.mp/docs/scripting/functions/GetPlayerPickupModel): Gets the model ID of a player-pickup.
-   [SetPlayerPickupType](https://open.mp/docs/scripting/functions/SetPlayerPickupType): Sets the type of a player-pickup.
-   [GetPlayerPickupType](https://open.mp/docs/scripting/functions/GetPlayerPickupType): Gets the type of a player-pickup.
-   [SetPlayerPickupVirtualWorld](https://open.mp/docs/scripting/functions/SetPlayerPickupVirtualWorld): Sets the virtual world ID of a player-pickup.
-   [GetPlayerPickupVirtualWorld](https://open.mp/docs/scripting/functions/GetPlayerPickupVirtualWorld): Gets the virtual world ID of a player-pickup.
