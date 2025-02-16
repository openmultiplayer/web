---
title: OnPlayerPickupStreamOut
description: This callback is called when a player-pickup leaves the visual range of the player.
tags: ["player", "pickup", "playerpickup"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Description

This callback is called when a player-pickup leaves the visual range of the player.

| Name     | Description                                                                                    |
|----------|------------------------------------------------------------------------------------------------|
| pickupid | The ID of the player-pickup, returned by [CreatePlayerPickup](../functions/CreatePlayerPickup) |
| playerid | The ID of the player that player-pickup leaves the visual range.                               |

## Returns

It is always called first in gamemode.

## Examples

```c
new g_PlayerPickupHealth[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    g_PlayerPickupHealth[playerid] = CreatePlayerPickup(playerid, 1240, 2, 2009.8474, 1218.0459, 10.8175);
    return 1;
}

public OnPlayerPickupStreamOut(pickupid, playerid)
{
    if (pickupid == g_PlayerPickupHealth[playerid])
    {
        printf("g_PlayerPickupHealth is streamed out for player id %d", playerid);
    }
    return 1;
}
```

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnPlayerPickUpPlayerPickup](OnPlayerPickUpPlayerPickup): Called when a player picks up a player-pickup.
- [OnPlayerPickupStreamIn](OnPlayerPickupStreamIn): Called when a player-pickup enters the visual range of the player.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another. 

- [CreatePlayerPickup](../functions/CreatePlayerPickup): Creates a pickup which will be visible to only one player.
- [DestroyPlayerPickup](../functions/DestroyPlayerPickup): Destroy a player-pickup.
