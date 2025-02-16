---
title: CreatePickup
sidebar_label: CreatePickup
description: This function does exactly the same as AddStaticPickup, except it returns a pickup ID which can be used to destroy it afterwards and be tracked using OnPlayerPickUpPickup.
tags: ["pickup"]
---

## Description

This function does exactly the same as AddStaticPickup, except it returns a pickup ID which can be used to destroy it afterwards and be tracked using OnPlayerPickUpPickup.

| Name                             | Description                                                                       |
|----------------------------------|-----------------------------------------------------------------------------------|
| [model](../resources/pickupids)  | The model of the pickup.                                                          |
| [type](../resources/pickuptypes) | The pickup type. Determines how the pickup responds when picked up.               |
| Float:x                          | The X coordinate to create the pickup at.                                         |
| Float:y                          | The Y coordinate to create the pickup at.                                         |
| Float:z                          | The Z coordinate to create the pickup at.                                         |
| virtualWorld                     | The virtual world ID of the pickup. Use -1 to make the pickup show in all worlds. |

## Returns

The ID of the created pickup, -1 on failure (pickup max limit).

## Examples

```c
new pickup_Armour; // Create a variable to store the pickup ID in

public OnGameModeInit()
{
    pickup_Armour = CreatePickup(1242, 2, 1503.3359, 1432.3585, 10.1191, -1);
    // Create an armour pickup and store the ID in 'pickup'
    return 1;
}

// Later..
DestroyPickup(pickup_Armour); // Example of using the pickup ID
pickup_Armour = 0; // pickup variable needs to be reset to avoid future conflicts
```

## Notes

:::tip

- The only type of pickup that can be picked up from inside a vehicle is 14 (except for special pickups such as bribes).
- Pickups are shown to, and can be picked up by all players.
- It is possible that if DestroyPickup() is used when a pickup is picked up, more than one player can pick up the pickup, due to lag. This can be circumvented through the use of variables.
- Certain pickup types come with 'automatic responses', for example using an M4 model in the pickup will automatically give the player the weapon and some ammo.
- For fully scripted pickups, type 1 should be used.

:::

:::warning

Known Bug(s):

- Pickups that have a X or Y lower than -4096.0 or bigger than 4096.0 won't show up and won't trigger OnPlayerPickUpPickup either.

:::

## Related Functions

- [AddStaticPickup](AddStaticPickup): Add a static pickup.
- [DestroyPickup](DestroyPickup): Destroy a pickup.
- [IsValidPickup](IsValidPickup): Checks if a pickup is valid.
- [IsPickupStreamedIn](IsPickupStreamedIn): Checks if a pickup is streamed in for a specific player.
- [IsPickupHiddenForPlayer](IsPickupHiddenForPlayer): Checks if a pickup is hidden for a specific player.
- [SetPickupPos](SetPickupPos): Sets the position of a pickup.
- [GetPickupPos](GetPickupPos): Gets the coordinates of a pickup.
- [SetPickupModel](SetPickupModel): Sets the model of a pickup.
- [GetPickupModel](GetPickupModel): Gets the model ID of a pickup.
- [SetPickupType](SetPickupType): Sets the type of a pickup.
- [GetPickupType](GetPickupType): Gets the type of a pickup.
- [SetPickupVirtualWorld](SetPickupVirtualWorld): Sets the virtual world ID of a pickup.
- [GetPickupVirtualWorld](GetPickupVirtualWorld): Gets the virtual world ID of a pickup.
- [ShowPickupForPlayer](ShowPickupForPlayer): Shows a pickup for a specific player.
- [HidePickupForPlayer](HidePickupForPlayer): Hides a pickup for a specific player.
- [SetPickupForPlayer](SetPickupForPlayer): Adjusts the pickup model, type, and position for a specific player.
- [CreatePlayerPickup](CreatePlayerPickup): Creates a pickup which will be visible to only one player.
- [DestroyPlayerPickup](DestroyPlayerPickup): Destroy a player-pickup.

## Related Callbacks

The following callbacks might be useful, as they're related to this function.

- [OnPlayerPickUpPickup](../callbacks/OnPlayerPickUpPickup): Called when a player picks up a pickup.
- [OnPickupStreamIn](../callbacks/OnPickupStreamIn): Called when a pickup enters the visual range of a player.
- [OnPickupStreamOut](../callbacks/OnPickupStreamOut): Called when a pickup leaves the visual range of a player.

## Related Resources

- [Pickup IDs](../resources/pickupids)
- [Pickup Types](../resources/pickuptypes)
