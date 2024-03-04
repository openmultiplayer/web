---
title: SetPlayerCameraLookAt
description: 设置玩家的视角所看的方向。
tags: ["player"]
---

## 描述

设置玩家的视角所看的方向。通常与 SetPlayerCameraPos 结合使用。

| 参数名   | 说明                                                                                                                                                            |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid | 要设置视角的玩家 ID。                                                                                                                                           |
| Float:x  | 玩家的视角所看向的 X 坐标。                                                                                                                                     |
| Float:y  | 玩家的视角所看向的 Y 坐标。                                                                                                                                     |
| Float:z  | 玩家的视角所看向的 Z 坐标。                                                                                                                                     |
| cut      | 可使用的[风格](../resources/cameracutstyles)。可以使用 CAMERA_MOVE 从旧位置插值（缓慢变化）到新位置。|

## 返回值

1:函数执行成功。

0:函数执行失败。 指定的玩家不存在。

## 案例

```c
SetPlayerCameraPos(playerid, 320.0, 50.0, 170.0);
SetPlayerCameraLookAt(playerid, 324.34, 54.122, 173.35);
```

## 要点

:::warning

在启用旁观者模式后，不能直接使用视角函数。

:::

## 相关函数

- [SetPlayerCameraPos](SetPlayerCameraPos): 设置玩家的视角位置。
- [SetCameraBehindPlayer](SetCameraBehindPlayer): 重置视角到玩家后面。
- [GetPlayerCameraPos](GetPlayerCameraPos): 找出玩家的视角在哪里。
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): 获取玩家视角的前向量。
