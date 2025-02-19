---
title: CreatePlayerPickup
sidebar_label: CreatePlayerPickup
description: Creates a pickup which will be visible to only one player.
tags: ["player", "pickup", "playerpickup"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Creates a pickup which will be visible to only one player.

| Name                             | Description                                                                       |
|----------------------------------|-----------------------------------------------------------------------------------|
| playerid                         | The ID of the player to create the pickup for.                                    |
| [model](../resources/pickupids)  | The model of the pickup.                                                          |
| [type](../resources/pickuptypes) | The pickup type. Determines how the pickup responds when picked up.               |
| Float:x                          | The X coordinate to create the pickup at.                                         |
| Float:y                          | The Y coordinate to create the pickup at.                                         |
| Float:z                          | The Z coordinate to create the pickup at.                                         |
| virtualWorld                     | The virtual world ID of the pickup. Use -1 to make the pickup show in all worlds. |

## Returns

The ID of the created player-pickup, **-1** on failure (pickup max limit).

## Examples

```c
new PlayerPickupArmour[MAX_PLAYERS]; // Create a variable to store the player-pickup ID in

public OnPlayerConnect(playerid)
{
    PlayerPickupArmour[playerid] = CreatePlayerPickup(playerid, 1242, 2, 2010.0979, 1222.0642, 10.8206, -1);
    // Create an armour pickup and store the ID in 'PlayerPickupArmour[playerid]'
    return 1;
}
```

## Notes

:::tip

- The only type of pickup that can be picked up from inside a vehicle is 14 (except for special pickups such as bribes).
- Pickups are shown to, and can be picked up by all players.
- It is possible that if DestroyPlayerPickup() is used when a pickup is picked up, more than one player can pick up the pickup, due to lag. This can be circumvented through the use of variables.
- Certain pickup types come with 'automatic responses', for example using an M4 model in the pickup will automatically give the player the weapon and some ammo.
- For fully scripted pickups, type 1 should be used.

:::

:::warning

Known Bug(s):

- Pickups that have a X or Y lower than -4096.0 or bigger than 4096.0 won't show up and won't trigger OnPlayerPickUpPlayerPickup either.

:::

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
- [SetPlayerPickupVirtualWorld](SetPlayerPickupVirtualWorld): Sets the virtual world ID of a player-pickup.
- [GetPlayerPickupVirtualWorld](GetPlayerPickupVirtualWorld): Gets the virtual world ID of a player-pickup.

## Related Callbacks

The following callbacks might be useful, as they're related to this function.

- [OnPlayerPickUpPlayerPickup](../callbacks/OnPlayerPickUpPlayerPickup): Called when a player picks up a player-pickup.
- [OnPlayerPickupStreamIn](../callbacks/OnPlayerPickupStreamIn): Called when a player-pickup enters the visual range of the player.
- [OnPlayerPickupStreamOut](../callbacks/OnPlayerPickupStreamOut): Called when a player-pickup leaves the visual range of the player.

## Related Resources

- [Pickup IDs](../resources/pickupids)
- [Pickup Types](../resources/pickuptypes)
