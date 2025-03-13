---
title: PlayerTextDrawGetBackgroundColour
sidebar_label: PlayerTextDrawGetBackgroundColour
description: 获取玩家文本绘图的背景颜色
tags: ["玩家", "文本绘图", "玩家文本绘图"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家文本绘图的背景颜色。

| 名称              | 描述                              |
| ----------------- | --------------------------------- |
| playerid          | 要查询的玩家 ID                   |
| PlayerText:textid | 要获取背景颜色的玩家文本绘图的 ID |

## 返回值

返回玩家文本绘图的背景颜色值（ARGB 十六进制格式）。

## 示例

```c
new PlayerText:pTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    pTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "示例文本");
    PlayerTextDrawSetOutline(playerid, pTextdraw[playerid], 1);
    PlayerTextDrawBackgroundColour(playerid, pTextdraw[playerid], 0x00FF00FF);
    PlayerTextDrawShow(playerid, pTextdraw[playerid]);

    new backgroundColour = PlayerTextDrawGetBackgroundColour(playerid, pTextdraw[playerid]);
    // backgroundColour = 0x00FF00FF（不透明绿色）
    return 1;
}
```

## 相关函数

- [CreatePlayerTextDraw](CreatePlayerTextDraw): 创建玩家文本绘图
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): 销毁玩家文本绘图
- [PlayerTextDrawBoxColour](PlayerTextDrawBoxColour): 设置玩家文本绘图方框颜色
- [PlayerTextDrawBackgroundColour](PlayerTextDrawBackgroundColour): 设置玩家文本绘图的背景颜色
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): 设置玩家文本绘图对齐方式
- [PlayerTextDrawFont](PlayerTextDrawFont): 设置玩家文本绘图的字体样式
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): 设置玩家文本绘图的字符尺寸
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): 设置玩家文本绘图方框尺寸（或 PlayerTextDrawSetSelectable 的可点击区域）
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): 切换玩家文本绘图的轮廓显示
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): 设置玩家文本绘图的阴影效果
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): 按比例缩放玩家文本绘图的文字间距
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): 切换玩家文本绘图的方框显示
- [PlayerTextDrawSetString](PlayerTextDrawSetString): 设置玩家文本绘图的显示内容
- [PlayerTextDrawShow](PlayerTextDrawShow): 显示玩家文本绘图
- [PlayerTextDrawHide](PlayerTextDrawHide): 隐藏玩家文本绘图
