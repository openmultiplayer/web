---
title: DestroyPlayerPickup
sidebar_label: DestroyPlayerPickup
description: Destroys a player-pickup created with CreatePlayerPickup.
tags: ["player", "pickup", "playerpickup"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Destroys a player-pickup created with [CreatePlayerPickup](CreatePlayerPickup).

| Name     | Description                                                              |
|----------|--------------------------------------------------------------------------|
| playerid | The ID of the player.                                                    |
| pickupid | The ID of the player-pickup to destroy (returned by CreatePlayerPickup). |

## Returns

This function does not return any specific values.

## Examples

```c
new PlayerPickupArmour[MAX_PLAYERS]; // Create a variable to store the player-pickup ID in

public OnPlayerConnect(playerid)
{
    PlayerPickupArmour[playerid] = CreatePlayerPickup(playerid, 1242, 2, 2010.0979, 1222.0642, 10.8206, -1);
    // Create an armour pickup and store the ID in 'PlayerPickupArmour[playerid]'
    return 1;
}

// Some time later...
DestroyPlayerPickup(playerid, PlayerPickupArmour[playerid]);
```

## Related Functions

- [CreatePlayerPickup](CreatePlayerPickup): Creates a pickup which will be visible to only one player.
- [IsValidPlayerPickup](IsValidPlayerPickup): Checks if a player-pickup is valid.

## Related Callbacks

- [OnPlayerPickUpPlayerPickup](../callbacks/OnPlayerPickUpPlayerPickup): Called when a player picks up a player-pickup.
