---
title: IsPlayerInCheckpoint
sidebar_label: IsPlayerInCheckpoint
description: Check if the player is currently inside a checkpoint, this could be used for properties or teleport points for example.
tags: ["player", "checkpoint"]
---

## คำอธิบาย

Check if the player is currently inside a checkpoint, this could be used for properties or teleport points for example.

| Name     | Description                                |
| -------- | ------------------------------------------ |
| playerid | The player you want to know the status of. |

## ส่งคืน

false if player isn't in his checkpoint else true

## ตัวอย่าง

```c
if (IsPlayerInCheckpoint(playerid))
{
  SetPlayerHealth(playerid, 100.0);
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SetPlayerCheckpoint](../../scripting/functions/SetPlayerCheckpoint.md): Create a checkpoint for a player.
- [DisablePlayerCheckpoint](../../scripting/functions/DisablePlayerCheckpoint.md): Disable the player's current checkpoint.
- [SetPlayerRaceCheckpoint](../../scripting/functions/SetPlayerRaceCheckpoint.md): Create a race checkpoint for a player.
- [DisablePlayerRaceCheckpoint](../../scripting/functions/DisablePlayerRaceCheckpoint.md): Disable the player's current race checkpoint.
- [IsPlayerInRaceCheckpoint](../../scripting/functions/IsPlayerInRaceCheckpoint.md): Check if a player is in a race checkpoint.
- [OnPlayerEnterCheckpoint](../../scripting/callbacks/OnPlayerEnterCheckpoint.md): Called when a player enters a checkpoint.
- [OnPlayerLeaveCheckpoint](../../scripting/callbacks/OnPlayerLeaveCheckpoint.md): Called when a player leaves a checkpoint.
- [OnPlayerEnterRaceCheckpoint](../../scripting/callbacks/OnPlayerEnterRaceCheckpoint.md): Called when a player enters a race checkpoint.
- [OnPlayerLeaveRaceCheckpoint](../../scripting/callbacks/OnPlayerLeaveRaceCheckpoint.md): Called when a player leaves a race checkpoint.
