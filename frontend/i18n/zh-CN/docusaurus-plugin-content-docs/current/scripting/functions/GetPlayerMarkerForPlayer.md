---
title: GetPlayerMarkerForPlayer
sidebar_label: GetPlayerMarkerForPlayer
description: 获取指定玩家在另一玩家视角下的名牌和雷达标记颜色
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取指定玩家在另一玩家视角下的**名牌**和**雷达标记**颜色

| 参数名   | 说明                                               |
| -------- | -------------------------------------------------- |
| playerid | 可以看到目标玩家改变后标记/名牌颜色的观察者玩家 ID |
| targetid | 被修改标记颜色的目标玩家 ID                        |

## 返回值

目标玩家的**名牌**和**雷达标记**颜色值

## 示例代码

```c
// 让玩家42看到玩家1的标记为红色
SetPlayerMarkerForPlayer(42, 1, 0xFF0000FF);

new markerColour = GetPlayerMarkerForPlayer(42, 1);
// markerColour = 0xFF0000FF
```

## 相关函数

- [ShowPlayerMarkers](ShowPlayerMarkers): 设置服务器是否显示雷达标记
- [LimitPlayerMarkerRadius](LimitPlayerMarkerRadius): 限制玩家标记显示半径
- [SetPlayerColor](SetPlayerColor): 设置玩家全局颜色
- [ShowPlayerNameTagForPlayer](ShowPlayerNameTagForPlayer): 控制特定玩家昵称标签的可见性
- [SetPlayerMarkerForPlayer](SetPlayerMarkerForPlayer): 为指定玩家设置其他玩家的雷达标记
