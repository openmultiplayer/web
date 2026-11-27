---
title: "OnPlayerPickupStreamIn | open.mp"
description: "This callback is called when a player-pickup enters the visual range of the player."
canonical: https://open.mp/docs/scripting/callbacks/OnPlayerPickupStreamIn
language: en
---

# OnPlayerPickupStreamIn

warning

This callback was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

This callback is called when a player-pickup enters the visual range of the player.

| Name | Description |
| --- | --- |
| pickupid | The ID of the player-pickup, returned by [CreatePlayerPickup](https://open.mp/docs/scripting/functions/CreatePlayerPickup) |
| playerid | The ID of the player that player-pickup enters the visual range. |

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

public OnPlayerPickupStreamIn(pickupid, playerid)
{
    if (pickupid == g_PlayerPickupHealth[playerid])
    {
        printf("g_PlayerPickupHealth is streamed in for player id %d", playerid);
    }
    return 1;
}
```

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

-   [OnPlayerPickUpPlayerPickup](https://open.mp/docs/scripting/callbacks/OnPlayerPickUpPlayerPickup): Called when a player picks up a player-pickup.
-   [OnPlayerPickupStreamOut](https://open.mp/docs/scripting/callbacks/OnPlayerPickupStreamOut): Called when a player-pickup leaves the visual range of the player.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

-   [CreatePlayerPickup](https://open.mp/docs/scripting/functions/CreatePlayerPickup): Creates a pickup which will be visible to only one player.
-   [DestroyPlayerPickup](https://open.mp/docs/scripting/functions/DestroyPlayerPickup): Destroy a player-pickup.
