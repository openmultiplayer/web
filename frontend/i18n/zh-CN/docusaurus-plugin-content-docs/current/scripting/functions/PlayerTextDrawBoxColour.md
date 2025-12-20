---
title: PlayerTextDrawBoxColour
sidebar_label: PlayerTextDrawBoxColour
description: 设置玩家文本绘图方框的颜色（需启用PlayerTextDrawUseBox）。
tags: ["玩家", "文本绘图", "玩家文本绘图"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

设置玩家文本绘图方框的颜色（需要先使用 PlayerTextDrawUseBox 启用方框）。

| 参数              | 说明                                                       |
| ----------------- | ---------------------------------------------------------- |
| playerid          | 要设置方框颜色的玩家文本绘图所属玩家的 ID                  |
| PlayerText:textid | 要设置方框颜色的玩家文本绘图的 ID                          |
| boxColour         | 需要设置的方框颜色值（支持透明度通道的 ARGB 十六进制格式） |

## 返回值

此函数不返回特定值。

## 示例

```c
new PlayerText:pTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    pTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "示例文本");
    PlayerTextDrawUseBox(playerid, pTextdraw[playerid], true);
    PlayerTextDrawBoxColour(playerid, pTextdraw[playerid], 0xFF0000FF); // 设置不透明红色方框
    return 1;
}
```

## 相关函数

- [CreatePlayerTextDraw](CreatePlayerTextDraw): 创建玩家文本绘图
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): 销毁玩家文本绘图
- [PlayerTextDrawColour](PlayerTextDrawColour): 设置玩家文本绘图的文字颜色
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
