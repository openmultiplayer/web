---
title: SetPlayerCheckpoint
sidebar_label: SetPlayerCheckpoint
description: Sets a checkpoint (red cylinder) for a player.
tags: ["player", "checkpoint"]
---

## คำอธิบาย

Sets a checkpoint (red cylinder) for a player. Also shows a red blip on the radar. When players enter a checkpoint, OnPlayerEnterCheckpoint is called and actions can be performed.

| Name       | Description                                        |
| ---------- | -------------------------------------------------- |
| playerid   | The ID of the player for whom to set a checkpoint. |
| Float:x    | The X coordinate to set the checkpoint at.         |
| Float:y    | The Y coordinate to set the checkpoint at.         |
| Float:z    | The Z coordinate to set the checkpoint at.         |
| Float:size | The size of the checkpoint.                        |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. This means the player specified does not exist.

## ตัวอย่าง

```c
// In this example the player's checkpoint will be set when they spawn.
// On entering the checkpoint they will receive $1000 and the checkpoint will be disabled.

new bool:onCheck[MAX_PLAYERS];

public OnPlayerSpawn(playerid)
{
    SetPlayerCheckpoint(playerid, 1982.6150, -220.6680, -0.2432, 3.0);
    onCheck[playerid] = true;
    return 1;
}

public OnPlayerEnterCheckpoint(playerid)
{
    if (onCheck[playerid]) // if it's true
    {
        GivePlayerMoney(playerid, 1000);
        DisablePlayerCheckpoint(playerid);
        onCheck[playerid] = false;
    }
    return 1;
}
```

## บันทึก

:::warning

Checkpoints are asynchronous, meaning only one can be shown at a time. To 'stream' checkpoints (only show them when players are close enough), use a checkpoint streamer.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- DisablePlayerCheckpoint: Disable the player's current checkpoint.
- IsPlayerInCheckpoint: Check if a player is in a checkpoint.
- SetPlayerRaceCheckpoint: Create a race checkpoint for a player.
- DisablePlayerRaceCheckpoint: Disable the player's current race checkpoint.
- IsPlayerInRaceCheckpoint: Check if a player is in a race checkpoint.
- OnPlayerEnterCheckpoint: Called when a player enters a checkpoint.
- OnPlayerLeaveCheckpoint: Called when a player leaves a checkpoint.
- OnPlayerEnterRaceCheckpoint: Called when a player enters a race checkpoint.
- OnPlayerLeaveRaceCheckpoint: Called when a player leaves a race checkpoint.
