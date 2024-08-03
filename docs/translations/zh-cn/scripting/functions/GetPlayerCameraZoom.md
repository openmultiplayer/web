---
title: GetPlayerCameraZoom
description: 检索指定玩家的游戏视角缩放级别。
tags: ["player", "camera"]
---

## 描述

检索指定玩家的游戏视角缩放级别。

| 参数名   | 说明                            |
| -------- | ------------------------------- |
| playerid | 要获取视角缩放级别的玩家的 ID。 |

## 返回值

以浮点数形式返回玩家的视角缩放级别(数码相机, 狙击瞄准镜等等)。

## 案例

```c
new szString[144];
format(szString, sizeof(szString), "你的视角缩放级别是: %f", GetPlayerCameraZoom(playerid));
SendClientMessage(playerid, -1, szString);
```

## 要点

:::tip

这将检索游戏视角（包括狙击瞄准镜）的缩放级别，而不只是作为武器类的数码相机的变焦级别。

:::

## 相关函数

- [GetPlayerCameraAspectRatio](GetPlayerCameraAspectRation): 获取玩家视角的纵横比。
- [GetPlayerCameraPos](GetPlayerCameraPos): 找出玩家的视角在哪里。
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): 获取玩家视角的前向量。
