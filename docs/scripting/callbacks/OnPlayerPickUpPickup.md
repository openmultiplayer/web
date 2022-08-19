---
title: OnPlayerPickUpPickup
description: This callback is called when a player picks up a pickup created with CreatePickup.
tags: ["player"]
---

## Description

This callback is called when a player picks up a pickup created with [CreatePickup](../functions/CreatePickup).

| Name     | Description                                     |
| -------- | ----------------------------------------------- |
| playerid | The ID of the player that picked up the pickup. |
| pickupid | The ID of the pickup, returned by [CreatePickup](../functions/CreatePickup)|

## Returns

It is always called first in gamemode.

## Examples

```c
new pickup_Cash;
new pickup_Health;

public OnGameModeInit()
{
    pickup_Cash = CreatePickup(1274, 2, 0.0, 0.0, 9.0);
    pickup_Health = CreatePickup(1240, 2, 0.0, 0.0, 9.0);
    return 1;
}

public OnPlayerPickUpPickup(playerid, pickupid)
{
    if (pickupid == pickup_Cash)
    {
        GivePlayerMoney(playerid, 1000);
    }
    else if (pickupid == pickup_Health)
    {
        SetPlayerHealth(playerid, 100.0);
    }
    return 1;
}
```

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another. 

- [CreatePickup](../functions/CreatePickup): Create a pickup.
- [DestroyPickup](../functions/DestroyPickup): Destroy a pickup.
