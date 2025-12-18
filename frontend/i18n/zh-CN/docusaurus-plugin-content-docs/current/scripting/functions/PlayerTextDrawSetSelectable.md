---
title: PlayerTextDrawSetSelectable
sidebar_label: PlayerTextDrawSetSelectable
description: 设置玩家文本绘图的可选状态
tags: ["玩家", "文本绘图", "玩家文本绘图"]
---

## 描述

设置玩家文本绘图是否可被鼠标选择

| 参数              | 说明                                                   |
| ----------------- | ------------------------------------------------------ |
| playerid          | 要设置可选状态的玩家 ID                                |
| PlayerText:textid | 要设置可选状态的玩家文本绘图的 ID                      |
| bool:selectable   | 设置为 true 可被选择，false 不可被选择。默认值为 false |

## 返回值

此函数不返回特定值。

## 示例

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my server");
    PlayerTextDrawTextSize(playerid, welcomeText[playerid], 30.0, 10.0);

    // 设置文本为可选
    PlayerTextDrawSetSelectable(playerid, welcomeText[playerid], true);

    // 启用玩家选择模式
    SelectTextDraw(playerid, 0xFF0000FF);

    // 向玩家显示文本
    PlayerTextDrawShow(playerid, welcomeText[playerid]);
    return 1;
}
```

## 注意事项

:::tip

使用[PlayerTextDrawTextSize](PlayerTextDrawTextSize)定义可点击区域尺寸

:::

:::warning

必须遵循以下调用顺序：

1. 先调用 PlayerTextDrawSetSelectable 设置可选状态
2. 再调用 SelectTextDraw 启用选择模式
3. 最后显示文本绘图

:::

## 相关函数

- [PlayerTextDrawIsSelectable](PlayerTextDrawIsSelectable): 检查玩家文本绘图是否可被选择
- [SelectTextDraw](SelectTextDraw): 启用鼠标选择文本绘图模式
- [CancelSelectTextDraw](CancelSelectTextDraw): 取消文本绘图选择模式

## 相关回调

- [OnPlayerClickPlayerTextDraw](../callbacks/OnPlayerClickPlayerTextDraw): 当玩家点击玩家文本绘图时触发
