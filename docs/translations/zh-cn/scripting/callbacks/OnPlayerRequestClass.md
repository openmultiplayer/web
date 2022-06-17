---
title: OnPlayerRequestClass
description: Called when a player changes class at class selection (and when class selection first appears).
tags: ["player"]
---

## 描述

Called when a player changes class at class selection (and when class selection first appears).

| 参数名   | 描述                                                                   |
| -------- | ---------------------------------------------------------------------- |
| playerid | The ID of the player that changed class.                               |
| classid  | The ID of the current class being viewed (returned by AddPlayerClass). |

## 返回值

它在过滤脚本中总是先被调用。

## 案例

```c
public OnPlayerRequestClass(playerid,classid)
{
    if (classid == 3 && !IsPlayerAdmin(playerid))
    {
        SendClientMessage(playerid, COLOR_RED, "This skin is only for admins!");
        return 0;
    }
    return 1;
}
```

## 要点

:::tip

This callback is also called when a player presses F4.

:::

## 相关函数

- [AddPlayerClass](../functions/AddPlayerClass): Add a class.
