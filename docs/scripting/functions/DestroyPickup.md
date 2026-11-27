---
title: "DestroyPickup | open.mp"
description: "Destroys a pickup created with CreatePickup."
canonical: https://open.mp/docs/scripting/functions/DestroyPickup
language: en
---

# DestroyPickup

## Description

Destroys a pickup created with [CreatePickup](https://open.mp/docs/scripting/functions/CreatePickup).

| Name | Description |
| --- | --- |
| pickup | The ID of the pickup to destroy (returned by [CreatePickup](https://open.mp/docs/scripting/functions/CreatePickup)). |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The pickup specified doesn't exist.

## Examples

```c
new g_PickupArmour;

// Create a pickup for armor.
g_PickupArmour = CreatePickup(1242, 2, 1503.3359, 1432.3585, 10.1191);

// Some time later...
DestroyPickup(g_PickupArmour);
```

## Related Functions

-   [CreatePickup](https://open.mp/docs/scripting/functions/CreatePickup): Create a pickup.
-   [IsValidPickup](https://open.mp/docs/scripting/functions/IsValidPickup): Checks if a pickup is valid.

## Related Callbacks

-   [OnPlayerPickUpPickup](https://open.mp/docs/scripting/callbacks/OnPlayerPickUpPickup): Called when a player picks up a pickup.
