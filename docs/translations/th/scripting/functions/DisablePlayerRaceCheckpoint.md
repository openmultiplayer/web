---
title: DisablePlayerRaceCheckpoint
description: Disable any initialized race checkpoints for a specific player, since you can only have one at any given time.
tags: ["player", "checkpoint", "racecheckpoint"]
---

## คำอธิบาย

Disable any initialized race checkpoints for a specific player, since you can only have one at any given time.

| Name     | Description                                       |
| -------- | ------------------------------------------------- |
| playerid | The player to disable the current checkpoint for. |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
public OnPlayerLeaveRaceCheckpoint(playerid)
{
    DisablePlayerRaceCheckpoint(playerid);
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SetPlayerCheckpoint](SetPlayerCheckpoint): Create a checkpoint for a player.
- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): Disable the player's current checkpoint.
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): Check if a player is in a checkpoint.
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): Create a race checkpoint for a player.
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): Check if a player is in a race checkpoint.
- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): Called when a player enters a checkpoint.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): Called when a player leaves a checkpoint.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): Called when a player enters a race checkpoint.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): Called when a player leaves a race checkpoint.
