---
title: SetPlayerPickupVirtualWorld
description: Sets the virtual world ID of a player-pickup.
tags: ["player", "pickup", "playerpickup"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Sets the virtual world ID of a player-pickup.

| Name         | Description                  |
|--------------|------------------------------|
| playerid     | The ID of the player.        |
| pickupid     | The ID of the player-pickup. |
| virtualWorld | The virtual world ID to set. |

## Returns

This function always returns **true**.

## Examples

```c
new PlayerPickup[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1242, 1, 2010.0979, 1222.0642, 10.8206, 20);
    
    SetPlayerPickupVirtualWorld(playerid, PlayerPickup[playerid], 10);
    return 1;
}
```

## Related Functions

- [CreatePlayerPickup](CreatePlayerPickup): Creates a pickup which will be visible to only one player.
- [DestroyPlayerPickup](DestroyPlayerPickup): Destroy a player-pickup.
- [IsValidPlayerPickup](IsValidPlayerPickup): Checks if a player-pickup is valid.
- [IsPlayerPickupStreamedIn](IsPlayerPickupStreamedIn): Checks if a player-pickup is streamed in for the player.
- [SetPlayerPickupPos](SetPlayerPickupPos): Sets the position of a player-pickup.
- [GetPlayerPickupPos](GetPlayerPickupPos): Gets the coordinates of a player-pickup.
- [SetPlayerPickupModel](SetPlayerPickupModel): Sets the model of a player-pickup.
- [GetPlayerPickupModel](GetPlayerPickupModel): Gets the model ID of a player-pickup.
- [SetPlayerPickupType](SetPlayerPickupType): Sets the type of a player-pickup.
- [GetPlayerPickupType](GetPlayerPickupType): Gets the type of a player-pickup.
- [GetPlayerPickupVirtualWorld](GetPlayerPickupVirtualWorld): Gets the virtual world ID of a player-pickup.
