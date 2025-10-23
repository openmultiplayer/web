---
title: PlayerTextDrawSetPreviewVehCol
sidebar_label: PlayerTextDrawSetPreviewVehCol
description: 设置玩家文本绘图3D预览中车辆的配色
tags: ["玩家", "文本绘图", "玩家文本绘图"]
---

## 描述

设置玩家文本绘图 3D 预览中显示的车辆主副配色（需预览模型为车辆）

| 参数名            | 说明                      |
| ----------------- | ------------------------- |
| playerid          | 要修改的玩家 ID           |
| PlayerText:textid | 要修改的玩家文本绘图的 ID |
| colour1           | 车辆主颜色 ID             |
| colour2           | 车辆副颜色 ID             |

## 返回值

该函数不返回特定值。

## 示例

```c
new PlayerText:gTextDraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gTextDraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "_");
    PlayerTextDrawFont(playerid, gTextDraw[playerid], TEXT_DRAW_FONT_MODEL_PREVIEW);
    PlayerTextDrawUseBox(playerid, gTextDraw[playerid], true);
    PlayerTextDrawBoxColor(playerid, gTextDraw[playerid], 0x000000FF);
    PlayerTextDrawTextSize(playerid, gTextDraw[playerid], 40.0, 40.0);

    PlayerTextDrawSetPreviewModel(playerid, gTextDraw[playerid], 411); // 设置预览模型为Infernus
    PlayerTextDrawSetPreviewVehCol(playerid, gTextDraw[playerid], 3, 6); // 主颜色3(亮红)，副颜色6(亮蓝)

    PlayerTextDrawShow(playerid, gTextDraw[playerid]);
    return 1;
}
```

## 注意事项

:::warning

生效条件需同时满足：

1. 使用`TEXT_DRAW_FONT_MODEL_PREVIEW`字体类型
2. 已通过 PlayerTextDrawSetPreviewModel 设置车辆模型

:::

## 相关函数

- [PlayerTextDrawSetPreviewModel](PlayerTextDrawSetPreviewModel): 设置玩家文本绘图的 3D 预览模型
- [PlayerTextDrawSetPreviewRot](PlayerTextDrawSetPreviewRot): 设置玩家文本绘图的 3D 预览旋转
- [PlayerTextDrawFont](PlayerTextDrawFont): 设置玩家文本绘图的字体类型

## 相关回调

- [OnPlayerClickPlayerTextDraw](../callbacks/OnPlayerClickPlayerTextDraw): 当玩家点击玩家文本绘图时触发
