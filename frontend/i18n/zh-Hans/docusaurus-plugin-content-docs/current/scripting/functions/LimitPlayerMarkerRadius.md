---
title: LimitPlayerMarkerRadius
sidebar_label: LimitPlayerMarkerRadius
description: 设置玩家标记的显示半径
tags: ["玩家"]
---

## 描述

设置玩家在小地图上的标记可见范围。只有在该半径范围内的其他玩家才会显示位置标记。

| 参数名             | 说明         |
| ------------------ | ------------ |
| Float:markerRadius | 标记可见半径 |

## 返回值

本函数没有返回值。

## 示例代码

```c
public OnGameModeInit()
{
    LimitPlayerMarkerRadius(100.0);
    return 1;
}
```

## 相关函数

- [ShowPlayerMarkers](ShowPlayerMarkers): 控制雷达是否显示玩家标记
- [SetPlayerMarkerForPlayer](SetPlayerMarkerForPlayer): 自定义玩家标记颜色
- [LimitGlobalChatRadius](LimitGlobalChatRadius): 设置全局聊天可听范围
