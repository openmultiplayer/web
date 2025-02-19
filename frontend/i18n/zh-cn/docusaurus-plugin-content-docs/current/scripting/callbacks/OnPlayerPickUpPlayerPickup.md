---
title: OnPlayerPickUpPlayerPickup
sidebar_label: OnPlayerPickUpPlayerPickup
description: This callback is called when a player picks up a player-pickup created with CreatePlayerPickup.
tags: ["player", "pickup", "playerpickup"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Description

This callback is called when a player picks up a player-pickup created with [CreatePlayerPickup](../functions/CreatePlayerPickup).

| Name     | Description                                                                                    |
|----------|------------------------------------------------------------------------------------------------|
| playerid | The ID of the player that picked up the player-pickup.                                         |
| pickupid | The ID of the player-pickup, returned by [CreatePlayerPickup](../functions/CreatePlayerPickup) |

## Returns

It is always called first in gamemode.

## Examples

```c
new player_pickup_Cash[MAX_PLAYERS];
new player_pickup_Health[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    player_pickup_Cash[playerid] = CreatePlayerPickup(playerid, 1274, 2, 2009.8658, 1220.0293, 10.8206, -1);
    player_pickup_Health[playerid] = CreatePlayerPickup(playerid, 1240, 2, 2009.8474, 1218.0459, 10.8175, -1);
    return 1;
}

public OnPlayerPickUpPlayerPickup(playerid, pickupid)
{
    if (pickupid == player_pickup_Cash[playerid])
    {
        GivePlayerMoney(playerid, 1000);
    }
    else if (pickupid == player_pickup_Health[playerid])
    {
        SetPlayerHealth(playerid, 100.0);
    }
    return 1;
}
```

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnPlayerPickupStreamIn](OnPlayerPickupStreamIn): Called when a player-pickup enters the visual range of the player.
- [OnPlayerPickupStreamOut](OnPlayerPickupStreamOut): Called when a player-pickup leaves the visual range of the player.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another. 

- [CreatePlayerPickup](../functions/CreatePlayerPickup): Creates a pickup which will be visible to only one player.
- [DestroyPlayerPickup](../functions/DestroyPlayerPickup): Destroy a player-pickup.
