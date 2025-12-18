---
title: PlayerTextDrawHide
sidebar_label: PlayerTextDrawHide
description: 隐藏为指定玩家创建的玩家文本绘图
tags: ["玩家", "文本绘图", "玩家文本绘图"]
---

## 描述

隐藏为指定玩家创建的玩家文本绘图

| 参数              | 说明                      |
| ----------------- | ------------------------- |
| playerid          | 要隐藏文本绘图的玩家 ID   |
| PlayerText:textid | 要隐藏的玩家文本绘图的 ID |

## 返回值

此函数不返回特定值。

## 示例

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my OPEN.MP server");

    PlayerTextDrawShow(playerid, welcomeText[playerid]);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    PlayerTextDrawHide(playerid, welcomeText[playerid]);
    return 1;
}
```

## 相关函数

- [PlayerTextDrawShow](PlayerTextDrawShow): 显示玩家文本绘图
- [CreatePlayerTextDraw](CreatePlayerTextDraw): 创建玩家文本绘图
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): 销毁玩家文本绘图
- [PlayerTextDrawColor](PlayerTextDrawColor): 设置玩家文本绘图的文本颜色
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): 设置玩家文本绘图方框颜色
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): 设置玩家文本绘图背景颜色
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): 设置玩家文本绘图对齐方式
- [PlayerTextDrawFont](PlayerTextDrawFont): 设置玩家文本绘图的字体
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): 设置玩家文本绘图字符尺寸
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): 设置玩家文本绘图文本尺寸（或 PlayerTextDrawSetSelectable 的可点击区域）
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): 切换玩家文本绘图轮廓显示
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): 设置玩家文本绘图的阴影
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): 按比例缩放玩家文本绘图的字符间距
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): 切换玩家文本绘图的方框显示
- [PlayerTextDrawSetString](PlayerTextDrawSetString): 设置玩家文本绘图的文本内容
