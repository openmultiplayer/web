---
title: OnPlayerLeaveCheckpoint
sidebar_label: OnPlayerLeaveCheckpoint
description: This callback is called when a player leaves the checkpoint set for them by SetPlayerCheckpoint.
tags: ["player", "checkpoint"]
---

## คำอธิบาย

This callback is called when a player leaves the checkpoint set for them by SetPlayerCheckpoint. Only one checkpoint can be set at a time.

| Name     | Description                                      |
| -------- | ------------------------------------------------ |
| playerid | The ID of the player that left their checkpoint. |

## ส่งคืน

มันถูกเรียกในฟิลเตอร์สคริปต์ก่อนเสมอ

## ตัวอย่าง

```c
public OnPlayerLeaveCheckpoint(playerid)
{
    printf("Player %i left a checkpoint!", playerid);
    return 1;
}
```

## บันทึก

:::tip

NPC สามารถเรียก Callback นี้ได้

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Create a checkpoint for a player.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Disable the player's current checkpoint.
- [IsPlayerInCheckpoint](../functions/IsPlayerInRaceCheckpoint): Check if a player is in a checkpoint.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Create a race checkpoint for a player.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Disable the player's current race checkpoint.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Check if a player is in a race checkpoint.
