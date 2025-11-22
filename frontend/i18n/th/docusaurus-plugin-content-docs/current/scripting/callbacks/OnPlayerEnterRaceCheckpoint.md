---
title: OnPlayerEnterRaceCheckpoint
sidebar_label: OnPlayerEnterRaceCheckpoint
description: This callback is called when a player enters a race checkpoint.
tags: ["player", "checkpoint", "racecheckpoint"]
---

## คำอธิบาย

This callback is called when a player enters a race checkpoint.

| Name     | Description                                           |
| -------- | ----------------------------------------------------- |
| playerid | The ID of the player who entered the race checkpoint. |

## ส่งคืน

มันถูกเรียกในฟิลเตอร์สคริปต์ก่อนเสมอ

## ตัวอย่าง

```c
public OnPlayerEnterRaceCheckpoint(playerid)
{
    printf("Player %d entered a race checkpoint!", playerid);
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
