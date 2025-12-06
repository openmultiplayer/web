---
title: StopPlayerHoldingObject
sidebar_label: StopPlayerHoldingObject
description: 移除附加物体
tags: ["玩家"]
---

## 描述

移除玩家已附加的物体。

| 参数     | 说明                  |
| -------- | --------------------- |
| playerid | 需要移除物体的玩家 ID |

## 返回值

成功返回 1，失败返回 0

## 示例代码

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    if (IsPlayerHoldingObject(playerid))
    {
        StopPlayerHoldingObject(playerid);
    }
    return 1;
}
```

## 注意事项

:::warning

该函数已在 SA-MP 0.3c 版本中移除。请使用[RemovePlayerAttachedObject](RemovePlayerAttachedObject)

:::

## 相关函数

- [SetPlayerHoldingObject](SetPlayerHoldingObject): 将物体附加到骨骼
