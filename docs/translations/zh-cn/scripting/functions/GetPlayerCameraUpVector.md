---
title: GetPlayerCameraUpVector
description: 该函数返回一个向量，它指向玩家视角的正上方，换句话说，它指向屏幕的中上方。
tags: ["player", "camera"]
---

## 描述

该函数返回一个向量，它指向玩家视角的正上方，换句话说，它指向屏幕的中上方。

| 参数名   | 说明                                |
| -------- | ----------------------------------- |
| playerid | 要获取视角的上向量的玩家 ID。       |
| Float:x  | 通过引用传递，存储 X 坐标的浮点数。 |
| Float:y  | 通过引用传递，存储 Y 坐标的浮点数。 |
| Float:z  | 通过引用传递，存储 Z 坐标的浮点数。 |

## 返回值

存储在引用传递的参数中。

## 要点

:::warning

该函数在 SA-MP 0.3b 版本中被删除

:::

## 相关函数

- [GetPlayerCameraPos](GetPlayerCameraPos): 找出玩家的视角在哪里。
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): 获取玩家视角的前向量。
