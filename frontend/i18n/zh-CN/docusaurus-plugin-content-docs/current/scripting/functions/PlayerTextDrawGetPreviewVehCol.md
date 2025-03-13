---
title: PlayerTextDrawGetPreviewVehCol
sidebar_label: PlayerTextDrawGetPreviewVehCol
description: 获取3D预览玩家文本绘图的车辆颜色
tags: ["玩家", "文本绘图", "玩家文本绘图"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取 3D 预览玩家文本绘图的车辆颜色

| 参数名            | 说明                               |
| ----------------- | ---------------------------------- |
| playerid          | 玩家的 ID                          |
| PlayerText:textid | 要获取车辆颜色的玩家文本绘图的 ID  |
| &colour1          | 用于存储主颜色的变量，通过引用传递 |
| &colour2          | 用于存储副颜色的变量，通过引用传递 |

## 示例

```c
new PlayerText:pTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    pTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "_");
    PlayerTextDrawFont(playerid, pTextdraw[playerid], TEXT_DRAW_FONT_MODEL_PREVIEW);
    PlayerTextDrawUseBox(playerid, pTextdraw[playerid], true);
    PlayerTextDrawBoxColor(playerid, pTextdraw[playerid], 0x000000FF);
    PlayerTextDrawTextSize(playerid, pTextdraw[playerid], 40.0, 40.0);
    PlayerTextDrawSetPreviewModel(playerid, pTextdraw[playerid], 411);
    PlayerTextDrawSetPreviewVehCol(playerid, pTextdraw[playerid], 6, 8);

    new colour1, colour2;
    PlayerTextDrawGetPreviewVehCol(playerid, pTextdraw[playerid], colour1, colour2);
    // colour1 = 6
    // colour2 = 8
    return 1;
}
```

## 相关函数

- [PlayerTextDrawSetPreviewModel](PlayerTextDrawSetPreviewModel): 设置 3D 玩家文本绘图的预览模型 ID
- [PlayerTextDrawSetPreviewRot](PlayerTextDrawSetPreviewRot): 设置 3D 玩家文本绘图的预览旋转角度
- [PlayerTextDrawFont](PlayerTextDrawFont): 设置玩家文本绘图的字体

## 相关回调

- [OnPlayerClickPlayerTextDraw](../callbacks/OnPlayerClickPlayerTextDraw): 当玩家点击玩家文本绘图时触发
