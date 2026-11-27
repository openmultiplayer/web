---
title: "AddStaticPickup | open.mp"
description: "This function adds a 'static' pickup to the game."
canonical: https://open.mp/docs/scripting/functions/AddStaticPickup
language: en
---

# AddStaticPickup

## Description

This function adds a 'static' pickup to the game. These pickups support weapons, health, armor etc., with the ability to function without scripting them (weapons/health/armor will be given automatically).

| Name | Description |
| --- | --- |
| [model](https://open.mp/docs/scripting/resources/pickupids) | The model of the pickup. |
| [type](https://open.mp/docs/scripting/resources/pickuptypes) | The pickup type. Determines how the pickup responds when picked up. |
| Float:x | The X coordinate to create the pickup at. |
| Float:y | The Y coordinate to create the pickup at. |
| Float:z | The Z coordinate to create the pickup at. |
| virtualWorld | The virtual world ID to put tht pickup in. Use -1 to show the pickup in all worlds. |

## Returns

**1** - if the pickup is successfully created.

**0** - if failed to create.

## Examples

```c
public OnGameModeInit()
{
    // Create a pickup for armor
    AddStaticPickup(1242, 2, 1503.3359, 1432.3585, 10.1191, 0);

    // Create a pickup for some health, right next to the armour
    AddStaticPickup(1240, 2, 1506.3359, 1432.3585, 10.1191, 0);

    return 1;
}
```

## Notes

note

This function doesn't return a pickup ID that you can use in, for example, [OnPlayerPickUpPickup](https://open.mp/docs/scripting/callbacks/OnPlayerPickUpPickup). Use [CreatePickup](https://open.mp/docs/scripting/functions/CreatePickup) if you'd like to assign IDs.

## Related Functions

-   [CreatePickup](https://open.mp/docs/scripting/functions/CreatePickup): Create a pickup.
-   [DestroyPickup](https://open.mp/docs/scripting/functions/DestroyPickup): Destroy a pickup.

## Related Callbacks

-   [OnPlayerPickUpPickup](https://open.mp/docs/scripting/callbacks/OnPlayerPickUpPickup): Called when a player picks up a pickup.

## Related Resources

-   [Pickup IDs](https://open.mp/docs/scripting/resources/pickupids)
