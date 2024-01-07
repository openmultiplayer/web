---
title: DestroyPlayerPickup
description: Destroys a player-pickup created with CreatePlayerPickup.
tags: ["player", "pickup", "playerpickup"]
---

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
new PlayerPickup[MAX_PLAYERS]; // Create a variable to store the player-pickup ID in

public OnPlayerConnect(playerid)
{
    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1242, 2, 2010.0979, 1222.0642, 10.8206, -1);
    // Create an armour pickup and store the ID in 'PlayerPickup[playerid]'
    return 1;
}

//some time later...
DestroyPlayerPickup(playerid, PlayerPickup[playerid]);
```

## Related Functions

- [CreatePlayerPickup](CreatePlayerPickup): Creates a pickup which will be visible to only one player.
- [IsValidPlayerPickup](IsValidPlayerPickup): Checks if a player-pickup is valid.

## Related Callbacks

- [OnPlayerPickUpPlayerPickup](../callbacks/OnPlayerPickUpPlayerPickup): Called when a player picks up a player-pickup.
