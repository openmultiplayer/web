---
title: IsValidPlayerPickup
description: Checks if a player-pickup is valid.
tags: ["player", "pickup", "playerpickup"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Checks if a player-pickup is valid.

| Name     | Description                           |
|----------|---------------------------------------|
| playerid | The ID of the player.                 |
| pickupid | The ID of the player-pickup to check. |

## Returns

This function returns **true** if the player-pickup is valid, or **false** if it is not.

## Examples

```c
new PlayerPickup[MAX_PLAYERS]; // Create a variable to store the player-pickup ID in

public OnPlayerConnect(playerid)
{
    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1242, 2, 2010.0979, 1222.0642, 10.8206, -1);
    // Create an armour pickup and store the ID in 'PlayerPickup[playerid]'

    if (IsValidPlayerPickup(playerid, PlayerPickup[playerid]))
    {
        // Do something
    }
    return 1;
}
```

## Related Functions

- [CreatePlayerPickup](CreatePlayerPickup): Creates a pickup which will be visible to only one player.
- [DestroyPlayerPickup](DestroyPlayerPickup): Destroy a player-pickup.
- [IsPlayerPickupStreamedIn](IsPlayerPickupStreamedIn): Checks if a player-pickup is streamed in for the player.
- [SetPlayerPickupPos](SetPlayerPickupPos): Sets the position of a player-pickup.
- [GetPlayerPickupPos](GetPlayerPickupPos): Gets the coordinates of a player-pickup.
- [SetPlayerPickupModel](SetPlayerPickupModel): Sets the model of a player-pickup.
- [GetPlayerPickupModel](GetPlayerPickupModel): Gets the model ID of a player-pickup.
- [SetPlayerPickupType](SetPlayerPickupType): Sets the type of a player-pickup.
- [GetPlayerPickupType](GetPlayerPickupType): Gets the type of a player-pickup.
- [SetPlayerPickupVirtualWorld](SetPlayerPickupVirtualWorld): Sets the virtual world ID of a player-pickup.
- [GetPlayerPickupVirtualWorld](GetPlayerPickupVirtualWorld): Gets the virtual world ID of a player-pickup.
