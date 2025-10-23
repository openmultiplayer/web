---
title: TextDrawHideForAll
sidebar_label: TextDrawHideForAll
description: 隐藏所有玩家可见的文本绘图
tags: ["文本绘图"]
---

## 描述

隐藏指定文本绘图对所有玩家的显示

| 参数名      | 说明                                                                      |
| ----------- | ------------------------------------------------------------------------- |
| Text:textid | 需要隐藏的文本绘图 ID<br />该 ID 由[创建文本绘图](TextDrawCreate)函数返回 |

## 返回值

该函数没有特定返回值

## 示例

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(240.0, 580.0, "示例文本");
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/showtd", true))
    {
        TextDrawShowForAll(gMyTextdraw);
        return 1;
    }
    if (!strcmp(cmdtext, "/hidetd", true))
    {
        TextDrawHideForAll(gMyTextdraw);
        return 1;
    }
    return 0;
}
```

## 相关函数

- [TextDrawShowForPlayer](TextDrawShowForPlayer): 向指定玩家显示文本绘图
- [TextDrawHideForPlayer](TextDrawHideForPlayer): 对指定玩家隐藏文本绘图
- [TextDrawShowForAll](TextDrawShowForAll): 向所有在线玩家显示文本绘图
