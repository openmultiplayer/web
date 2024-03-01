---
title: OnPlayerClickTextDraw
description: 当玩家点击文本绘制或用Escape键取消选择模式时，这个回调函数被调用。
tags: ["player", "textdraw"]
---

## 描述

当玩家点击文本绘制或用 Escape 键取消选择模式时，这个回调函数被调用。

| 参数名    | 描述                                                                |
| --------- | ------------------------------------------------------------------- |
| playerid  | 点击文本绘制的玩家的 ID。                                           |
| clickedid | 被点击的文本绘制的 ID。如果选择模式被取消，则为 INVALID_TEXT_DRAW。 |

## 返回值

它在过滤脚本中总是先被调用，所以返回 1 会阻止其他脚本看到它。

## 案例

```c
new Text:gTextDraw;

public OnGameModeInit()
{
    gTextDraw = TextDrawCreate(10.000000, 141.000000, "我的文本绘制");
    TextDrawTextSize(gTextDraw,60.000000, 20.000000);
    TextDrawAlignment(gTextDraw,0);
    TextDrawBackgroundColor(gTextDraw,0x000000ff);
    TextDrawFont(gTextDraw,1);
    TextDrawLetterSize(gTextDraw,0.250000, 1.000000);
    TextDrawColor(gTextDraw,0xffffffff);
    TextDrawSetProportional(gTextDraw,1);
    TextDrawSetShadow(gTextDraw,1);
    TextDrawSetSelectable(gTextDraw, 1);
    return 1;
}

public OnPlayerKeyStateChange(playerid, newkeys, oldkeys)
{
    if (newkeys == KEY_SUBMISSION)
    {
        TextDrawShowForPlayer(playerid, gTextDraw);
        SelectTextDraw(playerid, 0xFF4040AA);
    }
    return 1;
}

public OnPlayerClickTextDraw(playerid, Text:clickedid)
{
    if (clickedid == gTextDraw)
    {
         SendClientMessage(playerid, 0xFFFFFFAA, "你点击了一个文本绘制");
         CancelSelectTextDraw(playerid);
         return 1;
    }
    return 0;
}
```

## 要点

:::warning

TextDrawTextSize 定义了可点击区域。向函数传递的 x 轴和 y 轴参数不能为零或负值。不能无条件地在此回调函数中使用 CancelSelectTextDraw，这将导致无限循环。

:::

## 相关回调

- [OnPlayerClickPlayerTextDraw](OnPlayerClickPlayerTextDraw): 当玩家点击玩家文本绘制时调用。
- [OnPlayerClickPlayer](OnPlayerClickPlayer): 当一个玩家点击另一个玩家时调用。
