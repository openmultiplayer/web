---
title: SetPlayerRaceCheckpoint
sidebar_label: SetPlayerRaceCheckpoint
description: Creates a race checkpoint.
tags: ["player", "checkpoint", "racecheckpoint"]
---

## คำอธิบาย

Creates a race checkpoint. When the player enters it, the OnPlayerEnterRaceCheckpoint callback is called.

| Name        | Description                                                                                                                                                                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid    | The ID of the player to set the checkpoint for                                                                                                                                                                                                           |
| type        | Type of checkpoint.0-Normal, 1-Finish, 2-Nothing(Only the checkpoint without anything on it), 3-Air normal, 4-Air finish, 5-Air (rotates and stops), 6-Air (increases, decreases and disappears), 7-Air (swings down and up), 8-Air (swings up and down) |
| Float:x     | X-Coordinate                                                                                                                                                                                                                                             |
| Float:y     | Y-Coordinate                                                                                                                                                                                                                                             |
| Float:z     | Z-Coordinate                                                                                                                                                                                                                                             |
| Float:nextx | X-Coordinate of the next point, for the arrow facing direction                                                                                                                                                                                           |
| Float:nexty | Y-Coordinate of the next point, for the arrow facing direction                                                                                                                                                                                           |
| Float:nextz | Z-Coordinate of the next point, for the arrow facing direction                                                                                                                                                                                           |
| Float:size  | Size (diameter) of the checkpoint                                                                                                                                                                                                                        |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. This means the player specified does not exist.

## ตัวอย่าง

```c
//from Yagu's race filterscript, (c) by Yagu
public SetRaceCheckpoint(playerid, Airrace, target, next)
{
     if (next == -1 && Airrace == 0)
         SetPlayerRaceCheckpoint(playerid,1,RaceCheckpoints[target][0],RaceCheckpoints[target][1],RaceCheckpoints[target][2],
                         0.0,0.0,0.0,CPsize);
     else if (next == -1 && Airrace == 1)
         SetPlayerRaceCheckpoint(playerid,4,RaceCheckpoints[target][0],RaceCheckpoints[target][1],RaceCheckpoints[target][2],
                         0.0,0.0,0.0,CPsize);
     else if (Airrace == 1)
         SetPlayerRaceCheckpoint(playerid,3,RaceCheckpoints[target][0],RaceCheckpoints[target][1],RaceCheckpoints[target][2],
                         RaceCheckpoints[next][0],RaceCheckpoints[next][1],RaceCheckpoints[next][2],CPsize);
     else
         SetPlayerRaceCheckpoint(playerid,0,RaceCheckpoints[target][0],RaceCheckpoints[target][1],RaceCheckpoints[target][2],
                         RaceCheckpoints[next][0],RaceCheckpoints[next][1],RaceCheckpoints[next][2],CPsize);
}
```

## บันทึก

:::warning

Race checkpoints are asynchronous, meaning only one can be shown at a time. To 'stream' race checkpoints (only show them when players are close enough), use a race checkpoint streamer.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetPlayerCheckpoint: Create a checkpoint for a player.
- DisablePlayerCheckpoint: Disable the player's current checkpoint.
- IsPlayerInCheckpoint: Check if a player is in a checkpoint.
- DisablePlayerRaceCheckpoint: Disable the player's current race checkpoint.
- IsPlayerInRaceCheckpoint: Check if a player is in a race checkpoint.
- OnPlayerEnterCheckpoint: Called when a player enters a checkpoint.
- OnPlayerLeaveCheckpoint: Called when a player leaves a checkpoint.
- OnPlayerEnterRaceCheckpoint: Called when a player enters a race checkpoint.
- OnPlayerLeaveRaceCheckpoint: Called when a player leaves a race checkpoint.
