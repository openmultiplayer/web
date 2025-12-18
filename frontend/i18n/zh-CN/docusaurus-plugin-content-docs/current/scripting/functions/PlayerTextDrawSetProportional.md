---
title: PlayerTextDrawSetProportional
sidebar_label: PlayerTextDrawSetProportional
description: 按比例缩放玩家文本绘图的字符间距
tags: ["玩家", "文本绘图", "玩家文本绘图"]
---

## 描述

按比例缩放玩家文本绘图的字符间距。当使用[PlayerTextDrawLetterSize](PlayerTextDrawLetterSize)时，此函数可确保文本字符间距均匀分布

| 参数              | 说明                              |
| ----------------- | --------------------------------- |
| playerid          | 要设置比例缩放的玩家 ID           |
| PlayerText:textid | 要设置比例缩放的玩家文本绘图的 ID |
| bool:proportional | true 启用比例缩放，false 禁用     |

## 返回值

此函数不返回特定值。

## 示例

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my server!");
    PlayerTextDrawSetProportional(playerid, welcomeText[playerid], true); // 启用比例缩放

    PlayerTextDrawShow(playerid, welcomeText[playerid]);
    return 1;
}
```

## 相关函数

- [CreatePlayerTextDraw](CreatePlayerTextDraw): 创建玩家文本绘图
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): 销毁玩家文本绘图
- [PlayerTextDrawIsProportional](PlayerTextDrawIsProportional): 检查比例缩放状态
- [PlayerTextDrawColor](PlayerTextDrawColor): 设置文本颜色
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): 设置方框颜色
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): 设置背景颜色
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): 设置对齐方式
- [PlayerTextDrawFont](PlayerTextDrawFont): 设置字体类型
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): 设置字符尺寸
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): 设置文本区域尺寸
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): 切换轮廓显示
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): 设置阴影效果
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): 切换方框显示
- [PlayerTextDrawSetString](PlayerTextDrawSetString): 修改文本内容
- [PlayerTextDrawShow](PlayerTextDrawShow): 显示文本绘图
- [PlayerTextDrawHide](PlayerTextDrawHide): 隐藏文本绘图
