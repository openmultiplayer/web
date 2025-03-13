---
title: PlayerTextDrawGetOutline
sidebar_label: PlayerTextDrawGetOutline
description: 获取玩家文本绘图的轮廓大小
tags: ["玩家", "文本绘图", "玩家文本绘图"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家文本绘图的轮廓大小

| 参数名            | 说明                              |
| ----------------- | --------------------------------- |
| playerid          | 玩家的 ID                         |
| PlayerText:textid | 要获取轮廓大小的玩家文本绘图的 ID |

## 返回值

返回玩家文本绘图的轮廓大小。

## 示例

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my OPEN.MP server");
    PlayerTextDrawSetOutline(playerid, welcomeText[playerid], 1);
    PlayerTextDrawShow(playerid, welcomeText[playerid]);

    new outline = PlayerTextDrawGetOutline(playerid, welcomeText[playerid]);
    // outline = 1
    return 1;
}
```

## 相关函数

- [PlayerTextDrawCreate](PlayerTextDrawCreate): 创建玩家文本绘图
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): 销毁玩家文本绘图
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): 切换玩家文本绘图轮廓显示
- [PlayerTextDrawColor](PlayerTextDrawColor): 设置玩家文本绘图的文本颜色
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): 设置玩家文本绘图方框颜色
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): 设置玩家文本绘图背景颜色
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): 设置玩家文本绘图对齐方式
- [PlayerTextDrawFont](PlayerTextDrawFont): 设置玩家文本绘图的字体
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): 设置玩家文本绘图字符尺寸
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): 设置玩家文本绘图文本尺寸（或 PlayerTextDrawSetSelectable 的可点击区域）
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): 按比例缩放玩家文本绘图的字符间距
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): 切换玩家文本绘图的方框显示
- [PlayerTextDrawSetString](PlayerTextDrawSetString): 设置玩家文本绘图的文本内容
- [PlayerTextDrawShow](PlayerTextDrawShow): 显示玩家文本绘图
- [PlayerTextDrawHide](PlayerTextDrawHide): 隐藏玩家文本绘图
- [IsPlayerTextDrawVisible](IsPlayerTextDrawVisible): 检查玩家文本绘图是否对玩家可见
- [IsValidPlayerTextDraw](IsValidPlayerTextDraw): 检查玩家文本绘图是否有效
