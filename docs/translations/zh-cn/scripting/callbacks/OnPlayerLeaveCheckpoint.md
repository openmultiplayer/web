---
title: OnPlayerLeaveCheckpoint
description: This callback is called when a player leaves the checkpoint set for them by SetPlayerCheckpoint.
tags: ["player", "checkpoint"]
---

## 描述

This callback is called when a player leaves the checkpoint set for them by SetPlayerCheckpoint. Only one checkpoint can be set at a time.

| 参数名   | 描述                                             |
| -------- | ------------------------------------------------ |
| playerid | The ID of the player that left their checkpoint. |

## 返回值

它在过滤脚本中总是先被调用。

## 案例

```c
public OnPlayerLeaveCheckpoint(playerid)
{
    printf("Player %i left a checkpoint!", playerid);
    return 1;
}
```

## 要点

<TipNPCCallbacks />

## 相关函数

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Create a checkpoint for a player.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Disable the player's current checkpoint.
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint): Check if a player is in a checkpoint.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Create a race checkpoint for a player.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Disable the player's current race checkpoint.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Check if a player is in a race checkpoint.
