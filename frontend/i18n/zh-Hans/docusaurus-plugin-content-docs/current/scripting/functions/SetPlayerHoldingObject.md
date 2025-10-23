---
title: SetPlayerHoldingObject
sidebar_label: SetPlayerHoldingObject
description: 将物体附加到骨骼上。
tags: ["玩家"]
---

## 描述

将物体附加到骨骼上。

| 参数名   | 说明                               |
| -------- | ---------------------------------- |
| playerid | 要附加物体的玩家 ID                |
| modelid  | 使用的物体模型 ID                  |
| bone     | 目标[骨骼 ID](../resources/boneid) |
| fOffsetX | (可选) X 轴位置偏移量              |
| fOffsetY | (可选) Y 轴位置偏移量              |
| fOffsetZ | (可选) Z 轴位置偏移量              |
| fRotX    | (可选) X 轴旋转角度                |
| fRotY    | (可选) Y 轴旋转角度                |
| fRotZ    | (可选) Z 轴旋转角度                |

## 返回值

成功返回 **1**，失败返回 **0**。

## 示例代码

```c
public OnPlayerSpawn(playerid)
{
    SetPlayerHoldingObject(playerid, 1609, 2); // 将乌龟附加到玩家头部
    return 1;
}
```

## 注意事项

:::tip

每个玩家只能附加一个物体。本函数与 CreateObject/CreatePlayerObject 物体池相互独立

:::

:::warning

该函数已在 SA-MP 0.3c 版本移除，请使用[SetPlayerAttachedObject](SetPlayerAttachedObject)

:::

## 相关函数

- [StopPlayerHoldingObject](StopPlayerHoldingObject): 移除附加物体
