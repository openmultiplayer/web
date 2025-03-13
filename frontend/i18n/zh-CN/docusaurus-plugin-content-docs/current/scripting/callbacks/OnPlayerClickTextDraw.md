---
title: OnPlayerClickTextDraw
sidebar_label: OnPlayerClickTextDraw
description: 当玩家点击文本绘图或按ESC键取消选择模式时触发该回调
tags: ["玩家", "文本绘图"]
---

## 描述

当玩家点击文本绘图或按ESC键取消选择模式时触发该回调。

| 参数           | 说明                                                  |
| -------------- | ----------------------------------------------------- |
| playerid       | 触发点击操作的玩家ID                                  |
| Text:clickedid | 被点击的文本绘图ID（取消选择时返回INVALID_TEXT_DRAW） |

## 返回值

该回调在滤镜脚本中总是优先触发，返回1将阻止其他脚本处理此事件。

## 示例

```c
new Text:gTextDraw;

public OnGameModeInit()
{
    gTextDraw = TextDrawCreate(10.000000, 141.000000, "我的文本");
    TextDrawTextSize(gTextDraw, 60.000000, 20.000000);
    TextDrawAlignment(gTextDraw, TEXT_DRAW_ALIGN_LEFT);
    TextDrawBackgroundColor(gTextDraw, 0x000000FF);
    TextDrawFont(gTextDraw, TEXT_DRAW_FONT_1);
    TextDrawLetterSize(gTextDraw, 0.250000, 1.000000);
    TextDrawColor(gTextDraw, -1);
    TextDrawSetProportional(gTextDraw, true);
    TextDrawSetShadow(gTextDraw, 1);
    TextDrawSetSelectable(gTextDraw, true);
    return 1;
}

public OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)
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
        SendClientMessage(playerid, 0xFFFFFFAA, "您点击了文本绘图");
        CancelSelectTextDraw(playerid);
        return 1;
    }
    return 0;
}
```

## 注意

:::warning

- 点击区域由[TextDrawTextSize](../functions/TextDrawTextSize)定义
- 该函数的x/y参数值不可为零或负数
- 禁止无条件调用[CancelSelectTextDraw](../functions/CancelSelectTextDraw)，否则会导致无限循环

:::

## 相关回调

以下回调可能与当前回调存在关联：

- [OnPlayerClickPlayerTextDraw](OnPlayerClickPlayerTextDraw)：当玩家点击个人文本绘图时触发
- [OnPlayerClickPlayer](OnPlayerClickPlayer)：当玩家点击其他玩家时触发

## 相关函数

以下函数可能与当前回调相关：

- [SelectTextDraw](../functions/SelectTextDraw)：启用鼠标选择文本绘图模式
- [CancelSelectTextDraw](../functions/CancelSelectTextDraw)：取消文本绘图选择模式
