---
title: GetPlayerCameraAspectRatio
description: 检索玩家视角的纵横比。
tags: ["player", "camera"]
---

## 描述

检索玩家视角的纵横比。

| 参数名   | 说明                      |
| -------- | ------------------------- |
| playerid | 获得视角纵横比的玩家 ID。 |

## 返回值

玩家视角的纵横比，以浮点数表示。纵横比可以是以下三个值之一：关闭宽屏时为 4:3 (1.3333334，Float:0x3FAAAAAB)；打开信箱模式时为 5:4 (1.2470589，Float:0x3F9F9FA0)；无论信箱模式如何，打开宽屏时为 16:9 (1.7764707，Float:0x3FE36364)。

## 案例

```c
new szString[144];
format(szString, sizeof(szString), "你的纵横比是: %f", GetPlayerCameraAspectRatio(playerid));
SendClientMessage(playerid, -1, szString);
```

## 要点

:::tip

这个函数的返回值代表游戏显示设置中的"宽屏"选项的值，而不是玩家显示器的实际纵横比。

:::

## 相关函数

- [GetPlayerCameraZoom](GetPlayerCameraZoom): 获取玩家视角的缩放级别。
- [GetPlayerCameraPos](GetPlayerCameraPos): 找出玩家的视角在哪里。
- [GetPlayerCameraFrontVector](GetPlayerVameraFrontVector): 获取玩家视角的前向量。
