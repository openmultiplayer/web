---
title: DestroyPickup
description: Destroys a pickup created with CreatePickup.
tags: []
---

## คำอธิบาย

Destroys a pickup created with CreatePickup.

| Name   | Description                                                 |
| ------ | ----------------------------------------------------------- |
| pickup | The ID of the pickup to destroy (returned by CreatePickup). |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
// Create a pickup for armor.
pickup_armour = CreatePickup ( 1242, 2, 1503.3359, 1432.3585, 10.1191 );

//some time later...
DestroyPickup(pickup_armour);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [CreatePickup](../../scripting/functions/CreatePickup.md): Create a pickup.
- [OnPlayerPickUpPickup](../../scripting/callbacks/OnPlayerPickUpPickup.md): Called when a player picks up a pickup.
