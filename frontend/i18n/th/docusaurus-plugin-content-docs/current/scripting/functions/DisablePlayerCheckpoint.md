---
title: DisablePlayerCheckpoint
sidebar_label: DisablePlayerCheckpoint
description: Disables (hides/destroys) a player's set checkpoint.
tags: ["player", "checkpoint"]
---

## คำอธิบาย

Disables (hides/destroys) a player's set checkpoint. Players can only have a single checkpoint set at a time. Checkpoints don't need to be disabled before setting another one.

| Name     | Description                                       |
| -------- | ------------------------------------------------- |
| playerid | The ID of the player whose checkpoint to disable. |

## ส่งคืน

1: The function executed successfully. Success is also returned if the player doesn't have a checkpoint shown already.

0: The function failed to execute. This means the player is not connected.

## ตัวอย่าง

```c
public OnPlayerEnterCheckpoint(playerid)
{
    GivePlayerMoney(playerid, 10000);
    DisablePlayerCheckpoint(playerid);
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SetPlayerCheckpoint](../../scripting/functions/SetPlayerCheckpoint.md): Create a checkpoint for a player.
- [IsPlayerInCheckpoint](../../scripting/functions/IsPlayerInCheckpoint.md): Check if a player is in a checkpoint.
- [SetPlayerRaceCheckpoint](../../scripting/functions/SetPlayerRaceCheckpoint.md): Create a race checkpoint for a player.
- [DisablePlayerRaceCheckpoint](../../scripting/functions/DisablePlayerRaceCheckpoint.md): Disable the player's current race checkpoint.
- [IsPlayerInRaceCheckpoint](../../scripting/functions/IsPlayerInRaceCheckpoint.md): Check if a player is in a race checkpoint.
- [OnPlayerEnterCheckpoint](../../scripting/callbacks/OnPlayerEnterCheckpoint.md): Called when a player enters a checkpoint.
- [OnPlayerLeaveCheckpoint](../../scripting/callbacks/OnPlayerLeaveCheckpoint.md): Called when a player leaves a checkpoint.
- [OnPlayerLeaveRaceCheckpoint](../../scripting/callbacks/OnPlayerLeaveRaceCheckpoint.md): Called when a player leaves a race checkpoint.
- [OnPlayerEnterRaceCheckpoint](../../scripting/callbacks/OnPlayerEnterRaceCheckpoint.md): Called when a player enters a race checkpoint.
