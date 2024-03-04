---
title: OnPlayerClickPlayerTextDraw
description: 这个回调函数在玩家点击玩家-文本绘制时被调用。
tags: ["player", "textdraw", "playertextdraw"]
---

## 描述

这个回调函数在玩家点击玩家-文本绘制时被调用。当玩家取消选择模式(ESC)时它不被调用，不过，OnPlayerClickTextDraw 回调会调用。

| 参数名       | 描述                           |
| ------------ | ------------------------------ |
| playerid     | 选择文本绘制的玩家的 ID        |
| playertextid | 玩家选择的玩家-文本绘制的 ID。 |

## 返回值

它在过滤脚本中总是先被调用，所以返回 1 会阻止其他脚本看到它。

## 案例

```c
new PlayerText:gPlayerTextDraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // 创建文本绘制
    gPlayerTextDraw[playerid] = CreatePlayerTextDraw(playerid, 10.000000, 141.000000, "MyTextDraw");
    PlayerTextDrawTextSize(playerid, gPlayerTextDraw[playerid], 60.000000, 20.000000);
    PlayerTextDrawAlignment(playerid, gPlayerTextDraw[playerid],0);
    PlayerTextDrawBackgroundColor(playerid, gPlayerTextDraw[playerid],0x000000ff);
    PlayerTextDrawFont(playerid, gPlayerTextDraw[playerid], 1);
    PlayerTextDrawLetterSize(playerid, gPlayerTextDraw[playerid], 0.250000, 1.000000);
    PlayerTextDrawColor(playerid, gPlayerTextDraw[playerid], 0xffffffff);
    PlayerTextDrawSetProportional(playerid, gPlayerTextDraw[playerid], 1);
    PlayerTextDrawSetShadow(playerid, gPlayerTextDraw[playerid], 1);

    // 使它可被选择
    PlayerTextDrawSetSelectable(playerid, gPlayerTextDraw[playerid], 1);

    // 向玩家展示它
    PlayerTextDrawShow(playerid, gPlayerTextDraw[playerid]);
    return 1;
}

public OnPlayerKeyStateChange(playerid, newkeys, oldkeys)
{
    if (newkeys == KEY_SUBMISSION)
    {
        SelectTextDraw(playerid, 0xFF4040AA);
    }
    return 1;
}

public OnPlayerClickPlayerTextDraw(playerid, PlayerText:playertextid)
{
    if (playertextid == gPlayerTextDraw[playerid])
    {
         SendClientMessage(playerid, 0xFFFFFFAA, "你点击了一个文本绘制。");
         CancelSelectTextDraw(playerid);
         return 1;
    }
    return 0;
}
```

## 要点

:::warning

当一个玩家按 ESC 取消了选择一个文本绘制，OnPlayerClickTextDraw 回调函数被调用时，文本绘制 ID 为 INVALID_TEXT_DRAW（无效\_文本\_绘制），也不会调用 OnPlayerClickPlayerTextDraw 回调函数。

:::

## 相关回调和函数

- [PlayerTextDrawSetSelectable](../functions/PlayerTextDrawSetSelectable): 通过 SelectTextDraw 函数设置玩家文本绘制是否可选择。
- [OnPlayerClickTextDraw](OnPlayerClickTextDraw): 当玩家点击文本绘制时调用。
- [OnPlayerClickPlayer](OnPlayerClickPlayer): 当一个玩家点击另一个玩家时调用。
