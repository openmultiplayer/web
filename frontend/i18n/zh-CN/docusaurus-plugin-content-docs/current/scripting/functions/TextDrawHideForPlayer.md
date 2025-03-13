---
title: TextDrawHideForPlayer
sidebar_label: TextDrawHideForPlayer
description: 对指定玩家隐藏文本绘图。
tags: ["玩家", "文本绘图"]
---

## 描述

对指定玩家隐藏文本绘图。

| 名称        | 说明                      |
| ----------- | ------------------------- |
| playerid    | 需要隐藏文本绘图的玩家 ID |
| Text:textid | 需要隐藏的文本绘图 ID     |

## 返回值

该函数不返回任何特定值。

## 示例

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(123.0, 123.0, "示例");
    return 1;
}

public OnGameModeExit()
{
    TextDrawDestroy(gMyTextdraw);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    TextDrawShowForPlayer(playerid, gMyTextdraw);
    return 1;
}

public OnPlayerDeath(playerid, reason)
{
    TextDrawHideForPlayer(playerid, gMyTextdraw);
    return 1;
}
```

## 相关函数

- [TextDrawHideForAll](TextDrawHideForAll): 全局隐藏文本绘图
- [TextDrawShowForPlayer](TextDrawShowForPlayer): 对玩家显示文本绘图
- [TextDrawShowForAll](TextDrawShowForAll): 全局显示文本绘图
- [IsTextDrawVisibleForPlayer](IsTextDrawVisibleForPlayer): 检测文本绘图是否对玩家可见
