---
title: OnPlayerClickPlayerTextDraw
sidebar_label: OnPlayerClickPlayerTextDraw
description: 当玩家点击个人文本绘图时触发此回调
tags: ["玩家", "文本绘图", "玩家文本绘图"]
---

## 描述

当玩家点击个人文本绘图（player-textdraw）时触发此回调。注意：玩家按ESC取消选择模式时会触发[OnPlayerClickTextDraw](OnPlayerClickTextDraw)而非此回调。

| 参数                    | 说明                   |
| ----------------------- | ---------------------- |
| playerid                | 触发点击操作的玩家ID   |
| PlayerText:playertextid | 被点击的个人文本绘图ID |

## 返回值

此回调在滤镜脚本中总是优先触发，返回1将阻止其他脚本处理此事件。

## 示例

```c
new PlayerText:gPlayerTextDraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // 创建个人文本绘图
    gPlayerTextDraw[playerid] = CreatePlayerTextDraw(playerid, 10.000000, 141.000000, "我的文本");
    PlayerTextDrawTextSize(playerid, gPlayerTextDraw[playerid], 60.000000, 20.000000);
    PlayerTextDrawAlignment(playerid, gPlayerTextDraw[playerid], TEXT_DRAW_ALIGN_LEFT);
    PlayerTextDrawBackgroundColor(playerid, gPlayerTextDraw[playerid], 0x000000FF);
    PlayerTextDrawFont(playerid, gPlayerTextDraw[playerid], TEXT_DRAW_FONT_1);
    PlayerTextDrawLetterSize(playerid, gPlayerTextDraw[playerid], 0.250000, 1.000000);
    PlayerTextDrawColor(playerid, gPlayerTextDraw[playerid], -1);
    PlayerTextDrawSetProportional(playerid, gPlayerTextDraw[playerid], true);
    PlayerTextDrawSetShadow(playerid, gPlayerTextDraw[playerid], 1);

    // 设置为可点击
    PlayerTextDrawSetSelectable(playerid, gPlayerTextDraw[playerid], true);

    // 向玩家显示
    PlayerTextDrawShow(playerid, gPlayerTextDraw[playerid]);
    return 1;
}

public OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)
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
        SendClientMessage(playerid, 0xFFFFFFAA, "你点击了个人文本绘图");
        CancelSelectTextDraw(playerid);
        return 1;
    }
    return 0;
}
```

## 注意

:::warning

当玩家按ESC取消选择时：

- 会触发[OnPlayerClickTextDraw](OnPlayerClickTextDraw)并返回`INVALID_TEXT_DRAW`
- 此回调不会被触发

:::

## 相关回调

以下回调可能与当前回调存在关联：

- [OnPlayerClickTextDraw](OnPlayerClickTextDraw)：当玩家点击全局文本绘图时触发
- [OnPlayerClickPlayer](OnPlayerClickPlayer)：当玩家点击其他玩家时触发

## 相关函数

以下函数可能与当前回调相关：

- [PlayerTextDrawSetSelectable](../functions/PlayerTextDrawSetSelectable)：设置个人文本绘图的可点击状态
- [SelectTextDraw](../functions/SelectTextDraw)：启用玩家文本绘图选择模式
