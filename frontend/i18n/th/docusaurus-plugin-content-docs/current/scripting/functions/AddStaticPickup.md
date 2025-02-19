---
title: AddStaticPickup
sidebar_label: AddStaticPickup
description: This function adds a 'static' pickup to the game.
tags: []
---

## คำอธิบาย

This function adds a 'static' pickup to the game. These pickups support weapons, health, armor etc., with the ability to function without scripting them (weapons/health/armor will be given automatically).

| Name                                             | Description                                                                         |
| ------------------------------------------------ | ----------------------------------------------------------------------------------- |
| [model](../../scripting/resources/pickupids.md)  | The model of the pickup.                                                            |
| [type](../../scripting/resources/pickuptypes.md) | The pickup type. Determines how the pickup responds when picked up.                 |
| Float:X                                          | The X coordinate to create the pickup at.                                           |
| Float:Y                                          | The Y coordinate to create the pickup at.                                           |
| Float:Z                                          | The Z coordinate to create the pickup at.                                           |
| virtualworld                                     | The virtual world ID to put tht pickup in. Use -1 to show the pickup in all worlds. |

## ส่งคืน

1 if the pickup is successfully created.

0 if failed to create.

## ตัวอย่าง

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

## บันทึก

:::tip

This function doesn't return a pickup ID that you can use in, for example, OnPlayerPickUpPickup. Use CreatePickup if you'd like to assign IDs.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [CreatePickup](../../scripting/functions/CreatePickup.md): Create a pickup.
- [DestroyPickup](../../scripting/functions/DestroyPickup.md): Destroy a pickup.
- [OnPlayerPickUpPickup](../../scripting/callbacks/OnPlayerPickUpPickup.md): Called when a player picks up a pickup.
