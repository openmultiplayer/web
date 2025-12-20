---
title: SetPlayerMarkerForPlayer
sidebar_label: SetPlayerMarkerForPlayer
description: 为特定玩家修改另一玩家的名牌颜色与雷达标记颜色。
tags: ["玩家"]
---

## 描述

修改指定玩家视角中另一玩家的名牌颜色与雷达标记颜色。

| 参数     | 说明                          |
| -------- | ----------------------------- |
| playerid | 将看到颜色变化的观察者玩家 ID |
| targetid | 要修改其标记颜色的目标玩家 ID |
| colour   | 新颜色值（支持 RGBA 透明度）  |

## 返回值

此函数不返回特定值。

## 示例代码

```c
// 使玩家42看到玩家1的标记为红色
SetPlayerMarkerForPlayer(42, 1, 0xFF0000FF);

// 设置半透明白色标记（聊天文字保持白色但标记不可见）
SetPlayerMarkerForPlayer(42, 1, 0xFFFFFF00);

// 保持聊天颜色不变，仅隐藏标记（需配合SetPlayerColor使用）
SetPlayerMarkerForPlayer(42, 1, (GetPlayerColor(1) & 0xFFFFFF00));

// 设置不透明标记同时保留聊天颜色（需配合SetPlayerColor使用）
SetPlayerMarkerForPlayer(42, 1, (GetPlayerColor(1) | 0x000000FF));
```

## 相关函数

- [ShowPlayerMarkers](ShowPlayerMarkers): 控制服务器是否显示雷达标记
- [LimitPlayerMarkerRadius](LimitPlayerMarkerRadius): 限制玩家标记显示半径
- [SetPlayerColor](SetPlayerColor): 设置玩家全局颜色
- [ShowPlayerNameTagForPlayer](ShowPlayerNameTagForPlayer): 控制特定玩家名牌的可见性
- [GetPlayerMarkerForPlayer](GetPlayerMarkerForPlayer): 获取玩家间的标记颜色配置
