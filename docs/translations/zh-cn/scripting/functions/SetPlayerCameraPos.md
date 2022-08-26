---
title: SetPlayerCameraPos
description: 设置玩家的视角到指定位置。
tags: ["player"]
---

## 描述

设置玩家的视角到指定位置。

| 参数名   | 说明          |
| -------- | ------------- |
| playerid | 玩家 ID。     |
| Float:x  | 视角的 X 坐标 |
| Float:y  | 视角的 Y 坐标 |
| Float:z  | 视角的 Z 坐标 |

## 返回值

1:函数执行成功。

0:函数执行失败。指定的玩家不存在。

## 案例

```c
SetPlayerCameraPos(playerid, 652.23, 457.21, 10.84);
```

## 要点

:::tip

通常还需要结合 SetPlayerCameraLookAt 函数才能正常工作。
使用 SetCameraBehindPlayer 来重置视角到玩家后面。

:::

:::warning

在启用旁观者模式后，不能直接使用视角函数。

:::

## 相关函数

- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): 设置玩家的视角所看的方向。
- [SetCameraBehindPlayer](SetCameraBehindPlayer): 重置视角到玩家后面。
