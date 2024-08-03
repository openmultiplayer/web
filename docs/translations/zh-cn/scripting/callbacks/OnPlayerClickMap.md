---
title: OnPlayerClickMap
description: 当玩家在暂停菜单地图上放置一个目标/路径点时(通过右键单击)，OnPlayerClickMap回调函数被调用。
tags: ["player"]
---

## 描述

当玩家在暂停菜单地图上放置一个目标/路径点时(通过右键单击)，OnPlayerClickMap 回调函数被调用。

| 参数名   | 描述                                          |
| -------- | --------------------------------------------- |
| playerid | 放置目标/路径点的玩家 ID                      |
| Float:fX | 玩家点击的 X 轴浮点坐标                       |
| Float:fY | 玩家点击的 Y 轴浮点坐标                       |
| Float:fZ | 玩家点击的 Z 轴浮点坐标 (不准确-见下面的说明) |

## 返回值

1 - 将阻止其他过滤脚本接收到这个回调。

0 - 表示这个回调函数将被传递给下一个过滤脚本。

它在游戏模式中总是先被调用。

## 案例

```c
public OnPlayerClickMap(playerid, Float:fX, Float:fY, Float:fZ)
{
    SetPlayerPosFindZ(playerid, fX, fY, fZ);
    return 1;
}
```

## 要点

:::tip

就像回调名想表达的，当玩家点击标记的目标时才会调用它，而不会在按键的时候调用。在地图上被点击的区域距离玩家较远时，返回的 Z 轴值为 0 (无效)；使用 MapAndreas 或 ColAndreas 插件获取更精确的 Z 轴坐标。

:::

## 相关回调
