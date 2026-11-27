---
title: "DestroyPlayerPickup | open.mp"
description: "Destroys a player-pickup created with CreatePlayerPickup."
canonical: https://open.mp/docs/scripting/functions/DestroyPlayerPickup
language: en
---

# DestroyPlayerPickup

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Destroys a player-pickup created with [CreatePlayerPickup](https://open.mp/docs/scripting/functions/CreatePlayerPickup).

| Name | Description |
| --- | --- |
| playerid | The ID of the player. |
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

-   [CreatePlayerPickup](https://open.mp/docs/scripting/functions/CreatePlayerPickup): Creates a pickup which will be visible to only one player.
-   [IsValidPlayerPickup](https://open.mp/docs/scripting/functions/IsValidPlayerPickup): Checks if a player-pickup is valid.

## Related Callbacks

-   [OnPlayerPickUpPlayerPickup](https://open.mp/docs/scripting/callbacks/OnPlayerPickUpPlayerPickup): Called when a player picks up a player-pickup.
