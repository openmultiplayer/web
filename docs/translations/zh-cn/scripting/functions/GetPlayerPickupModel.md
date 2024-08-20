---
title: GetPlayerPickupModel
description: Gets the model ID of a player-pickup.
tags: ["player", "pickup", "playerpickup"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the model ID of a player-pickup.

| Name     | Description                                         |
|----------|-----------------------------------------------------|
| playerid | The ID of the player.                               |
| pickupid | The ID of the player-pickup to get the model ID of. |

## Returns

Returns the model ID of the player-pickup.

## Examples

```c
new PlayerPickup[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1239, 1, 2010.0979, 1222.0642, 10.8206, -1);

    new model = GetPlayerPickupModel(playerid, PlayerPickup[playerid]);
    // model = 1239
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
- [SetPlayerPickupType](SetPlayerPickupType): Sets the type of a player-pickup.
- [GetPlayerPickupType](GetPlayerPickupType): Gets the type of a player-pickup.
- [SetPlayerPickupVirtualWorld](SetPlayerPickupVirtualWorld): Sets the virtual world ID of a player-pickup.
- [GetPlayerPickupVirtualWorld](GetPlayerPickupVirtualWorld): Gets the virtual world ID of a player-pickup.
