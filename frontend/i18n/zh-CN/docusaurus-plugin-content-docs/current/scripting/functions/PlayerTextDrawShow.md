---
title: PlayerTextDrawShow
sidebar_label: PlayerTextDrawShow
description: 向指定玩家显示其专属的玩家文本绘图
tags: ["玩家", "文本绘图", "玩家文本绘图"]
---

## 描述

向创建该文本绘图的指定玩家显示其专属的玩家文本绘图

| 参数              | 说明                      |
| ----------------- | ------------------------- |
| playerid          | 要显示文本绘图的玩家 ID   |
| PlayerText:textid | 要显示的玩家文本绘图的 ID |

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
```

## 注意事项

:::tip

玩家文本绘图具有玩家专属性：

1. 每个玩家文本绘图仅对创建时的目标玩家有效
2. 无法将玩家 A 的文本绘图显示给玩家 B

:::

## 相关函数

- [PlayerTextDrawHide](PlayerTextDrawHide): 隐藏玩家文本绘图
- [CreatePlayerTextDraw](CreatePlayerTextDraw): 创建玩家文本绘图
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): 销毁玩家文本绘图
- [PlayerTextDrawColor](PlayerTextDrawColor): 设置文本颜色
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): 设置方框颜色
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): 设置背景颜色
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): 设置对齐方式
- [PlayerTextDrawFont](PlayerTextDrawFont): 设置字体类型
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): 设置字符尺寸
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): 设置文本区域尺寸
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): 切换轮廓显示
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): 设置阴影效果
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): 启用比例缩放
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): 切换方框显示
- [PlayerTextDrawSetString](PlayerTextDrawSetString): 修改文本内容
