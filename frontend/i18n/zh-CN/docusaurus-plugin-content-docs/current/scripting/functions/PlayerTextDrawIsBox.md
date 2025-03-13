---
title: PlayerTextDrawIsBox
sidebar_label: PlayerTextDrawIsBox
description: 检查玩家文本绘图是否启用了方框
tags: ["玩家", "文本绘图", "玩家文本绘图"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检查玩家文本绘图是否启用了方框

## 参数

| 参数名            | 说明                      |
| ----------------- | ------------------------- |
| playerid          | 玩家的 ID                 |
| PlayerText:textid | 要检查的玩家文本绘图的 ID |

## 返回值

返回 **true** 表示玩家文本绘图已启用方框，否则返回 **false**

## 示例用法

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 40.0, 140.0, "_~N~Welcome!~N~_");
    PlayerTextDrawUseBox(playerid, welcomeText[playerid], true); // 启用方框
    PlayerTextDrawBoxColor(playerid, welcomeText[playerid], 0x00000066); // 设置方框颜色为半透明黑色
    PlayerTextDrawShow(playerid, welcomeText[playerid]);

    if (PlayerTextDrawIsBox(playerid, welcomeText[playerid]))
    {
        // 玩家文本绘图已启用方框
    }
    else
    {
        // 玩家文本绘图未启用方框
    }
    return 1;
}
```

## 相关函数

- [PlayerTextDrawCreate](PlayerTextDrawCreate): 创建玩家文本绘图
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): 销毁玩家文本绘图
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): 切换玩家文本绘图的方框显示
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
- [PlayerTextDrawSetString](PlayerTextDrawSetString): 设置玩家文本绘图的文本内容
- [PlayerTextDrawShow](PlayerTextDrawShow): 显示玩家文本绘图
- [PlayerTextDrawHide](PlayerTextDrawHide): 隐藏玩家文本绘图
- [IsPlayerTextDrawVisible](IsPlayerTextDrawVisible): 检查玩家文本绘图是否对玩家可见
- [IsValidPlayerTextDraw](IsValidPlayerTextDraw): 检查玩家文本绘图是否有效
