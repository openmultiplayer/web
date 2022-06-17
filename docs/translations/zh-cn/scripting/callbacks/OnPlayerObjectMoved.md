---
title: OnPlayerObjectMoved
description: This callback is called when a player object is moved after MovePlayerObject (when it stops moving).
tags: ["player"]
---

## 描述

This callback is called when a player object is moved after MovePlayerObject (when it stops moving).

| 参数名   | 描述                                       |
| -------- | ------------------------------------------ |
| playerid | The playerid the object is assigned to     |
| objectid | The ID of the player object that was moved |

## 返回值

它在过滤脚本中总是先被调用。

## 案例

```c
public OnPlayerObjectMoved(playerid, objectid)
{
    printf("Player object moved: objectid: %d playerid: %d", objectid, playerid);
    return 1;
}
```

## 要点

:::tip

This callback can also be called for NPC.

:::

## 相关函数

- [MovePlayerObject](../functions/MovePlayerObject): Move a player object.
- [IsPlayerObjectMoving](../functions/IsPlayerObjectMoving): Check if the player object is moving.
- [StopPlayerObject](../functions/StopPlayerObject): Stop a player object from moving.
- [CreatePlayerObject](../functions/CreatePlayerObject): Create an object for only one player.
- [DestroyPlayerObject](../functions/DestroyPlayerObject): Destroy a player object.
