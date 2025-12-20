---
title: HideGameTextForPlayer
sidebar_label: HideGameTextForPlayer
description: 停止向玩家显示游戏文本样式。
tags: ["玩家", "游戏文本"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

停止向指定玩家显示特定样式的游戏文本。

| 参数     | 说明                                            |
| -------- | ----------------------------------------------- |
| playerid | 需要隐藏游戏文本的玩家 ID                       |
| style    | 要隐藏的文本[样式](../resources/gametextstyles) |

## 返回值

此函数不返回特定值。

## 示例

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    HideGameTextForPlayer(playerid, 3);
    return 1;
}
```

## 相关函数

- [HideGameTextForAll](HideGameTextForAll): 停止为所有玩家显示游戏文本样式
- [GameTextForPlayer](GameTextForPlayer): 向玩家显示游戏文本
- [GameTextForAll](GameTextForAll): 向所有玩家显示游戏文本
- [GetGameText](GetGameText): 获取指定游戏文本样式的所有信息
- [HasGameText](HasGameText): 玩家当前是否显示着指定样式的游戏文本？
- [TextDrawHideForAll](TextDrawHideForAll): 为所有玩家隐藏文本绘图
