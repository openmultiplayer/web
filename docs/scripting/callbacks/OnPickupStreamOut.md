---
title: OnPickupStreamOut
description: This callback is called when a pickup leaves the visual range of a player.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

This callback is called when a pickup leaves the visual range of a player.

| Name     | Description                                                                 |
|----------|-----------------------------------------------------------------------------|
| pickupid | The ID of the pickup, returned by [CreatePickup](../functions/CreatePickup) |
| playerid | The ID of the player that pickup leaves the visual range.                   |

## Returns

It is always called first in gamemode.

## Examples

```c
new g_PickupHealth;

public OnGameModeInit()
{
    g_PickupHealth = CreatePickup(1240, 2, 2009.8474, 1218.0459, 10.8175);
    return 1;
}

public OnPickupStreamOut(pickupid, playerid)
{
    if (pickupid == g_PickupHealth)
    {
        printf("g_PickupHealth is streamed out for player id %d", playerid);
    }
    return 1;
}
```

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnPlayerPickUpPickup](OnPlayerPickUpPickup): Called when a player picks up a pickup.
- [OnPickupStreamIn](OnPickupStreamIn): Called when a pickup enters the visual range of a player.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another. 

- [CreatePickup](../functions/CreatePickup): Create a pickup.
- [DestroyPickup](../functions/DestroyPickup): Destroy a pickup.
