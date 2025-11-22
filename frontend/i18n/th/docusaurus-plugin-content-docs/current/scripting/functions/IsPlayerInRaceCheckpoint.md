---
title: IsPlayerInRaceCheckpoint
sidebar_label: IsPlayerInRaceCheckpoint
description: Check if the player is inside their current set race checkpoint (SetPlayerRaceCheckpoint).
tags: ["player", "checkpoint", "racecheckpoint"]
---

## คำอธิบาย

Check if the player is inside their current set race checkpoint (SetPlayerRaceCheckpoint).

| Name     | Description                    |
| -------- | ------------------------------ |
| playerid | The ID of the player to check. |

## ส่งคืน

0: Player is not in a race checkpoint.

1: Player is in a race checkpoint.

## ตัวอย่าง

```c
if (IsPlayerInRaceCheckpoint(playerid))
{
    SetPlayerHealth(playerid, 100);
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SetPlayerCheckpoint](SetPlayerCheckpoint): Create a checkpoint for a player.
- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): Disable the player's current checkpoint.
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): Check if a player is in a checkpoint.
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): Create a race checkpoint for a player.
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): Disable the player's current race checkpoint.
- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): Called when a player enters a checkpoint.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): Called when a player leaves a checkpoint.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): Called when a player enters a race checkpoint.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): Called when a player leaves a race checkpoint.
