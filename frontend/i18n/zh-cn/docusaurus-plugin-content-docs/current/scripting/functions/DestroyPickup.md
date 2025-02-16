---
title: DestroyPickup
description: Destroys a pickup created with CreatePickup.
tags: ["pickup"]
---

## Description

Destroys a pickup created with CreatePickup.

| Name   | Description                                                 |
| ------ | ----------------------------------------------------------- |
| pickup | The ID of the pickup to destroy (returned by CreatePickup). |

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

- [CreatePickup](CreatePickup): Create a pickup.
- [IsValidPickup](IsValidPickup): Checks if a pickup is valid.

## Related Callbacks

- [OnPlayerPickUpPickup](../callbacks/OnPlayerPickUpPickup): Called when a player picks up a pickup.
