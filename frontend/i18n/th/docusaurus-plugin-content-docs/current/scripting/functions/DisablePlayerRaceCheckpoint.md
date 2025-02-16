---
title: DisablePlayerRaceCheckpoint
sidebar_label: DisablePlayerRaceCheckpoint
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

- [SetPlayerCheckpoint](../../scripting/functions/SetPlayerCheckpoint.md): Create a checkpoint for a player.
- [DisablePlayerCheckpoint](../../scripting/functions/DisablePlayerCheckpoint.md): Disable the player's current checkpoint.
- [IsPlayerInCheckpoint](../../scripting/functions/IsPlayerInCheckpoint.md): Check if a player is in a checkpoint.
- [SetPlayerRaceCheckpoint](../../scripting/functions/SetPlayerRaceCheckpoint.md): Create a race checkpoint for a player.
- [IsPlayerInRaceCheckpoint](../../scripting/functions/IsPlayerInRaceCheckpoint.md): Check if a player is in a race checkpoint.
- [OnPlayerEnterCheckpoint](../../scripting/callbacks/OnPlayerEnterCheckpoint.md): Called when a player enters a checkpoint.
- [OnPlayerLeaveCheckpoint](../../scripting/callbacks/OnPlayerLeaveCheckpoint.md): Called when a player leaves a checkpoint.
- [OnPlayerEnterRaceCheckpoint](../../scripting/callbacks/OnPlayerEnterRaceCheckpoint.md): Called when a player enters a race checkpoint.
- [OnPlayerLeaveRaceCheckpoint](../../scripting/callbacks/OnPlayerLeaveRaceCheckpoint.md): Called when a player leaves a race checkpoint.
