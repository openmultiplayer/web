---
title: PlayerTextDrawGetPreviewRot
sidebar_label: PlayerTextDrawGetPreviewRot
description: 获取3D模型预览玩家文本绘图的旋转和缩放参数
tags: ["玩家", "文本绘图", "玩家文本绘图"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取 3D 模型预览玩家文本绘图的旋转角度和缩放值

| 参数              | 说明                                          |
| ----------------- | --------------------------------------------- |
| playerid          | 玩家的 ID                                     |
| PlayerText:textid | 要获取旋转和缩放参数的玩家文本绘图的 ID       |
| &Float:rotationX  | 用于存储 X 轴旋转角度的浮点变量，通过引用传递 |
| &Float:rotationY  | 用于存储 Y 轴旋转角度的浮点变量，通过引用传递 |
| &Float:rotationZ  | 用于存储 Z 轴旋转角度的浮点变量，通过引用传递 |
| &Float:zoom       | 用于存储缩放值的浮点变量，通过引用传递        |

## 示例

```c
new PlayerText:gMyTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gMyTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "_");
    PlayerTextDrawFont(playerid, gMyTextdraw[playerid], TEXT_DRAW_FONT_MODEL_PREVIEW);
    PlayerTextDrawUseBox(playerid, gMyTextdraw[playerid], 1);
    PlayerTextDrawBoxColor(playerid, gMyTextdraw[playerid], 0x000000FF);
    PlayerTextDrawTextSize(playerid, gMyTextdraw[playerid], 40.0, 40.0);
    PlayerTextDrawSetPreviewModel(playerid, gMyTextdraw[playerid], 411);
    PlayerTextDrawSetPreviewRot(playerid, gMyTextdraw[playerid], -10.0, 0.0, -20.0, 1.0);
    PlayerTextDrawShow(playerid, gMyTextdraw[playerid]);

    new Float:rotationX, Float:rotationY, Float:rotationZ, Float:zoom;
    PlayerTextDrawGetPreviewRot(playerid, gMyTextdraw[playerid], rotationX, rotationY, rotationZ, zoom);
    // rotationX = -10.0
    // rotationY = 0.0
    // rotationZ = -20.0
    // zoom = 1.0
    return 1;
}
```

## 相关函数

- [PlayerTextDrawSetPreviewRot](PlayerTextDrawSetPreviewRot): 设置 3D 玩家文本绘图的预览旋转
- [PlayerTextDrawSetPreviewModel](PlayerTextDrawSetPreviewModel): 设置 3D 玩家文本绘图的预览模型
- [PlayerTextDrawSetPreviewVehCol](PlayerTextDrawSetPreviewVehCol): 设置 3D 玩家文本绘图预览中车辆的颜色

## 相关回调

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): 当玩家点击文本绘图时触发
