---
title: PlayerTextDrawSetPreviewRot
sidebar_label: PlayerTextDrawSetPreviewRot
description: 设置3D模型预览玩家文本绘图的旋转和缩放参数
tags: ["玩家", "文本绘图", "玩家文本绘图"]
---

## 描述

设置 3D 模型预览玩家文本绘图的旋转角度和缩放值

| 参数              | 说明                                               |
| ----------------- | -------------------------------------------------- |
| playerid          | 要修改的玩家 ID                                    |
| PlayerText:textid | 要修改的玩家文本绘图的 ID                          |
| Float:rotX        | X 轴旋转角度（单位：度）                           |
| Float:rotY        | Y 轴旋转角度（单位：度）                           |
| Float:rotZ        | Z 轴旋转角度（单位：度）                           |
| Float:zoom        | 缩放值（默认 1.0），值越小视角越近，值越大视角越远 |

## 返回值

此函数不返回特定值。

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
    return 1;
}
```

## 注意事项

:::warning

必须同时满足以下条件才能生效：

1. 使用`TEXT_DRAW_FONT_MODEL_PREVIEW`字体类型
2. 已通过 PlayerTextDrawSetPreviewModel 设置有效模型

:::

## 相关函数

- [TextDrawSetPreviewRot](TextDrawSetPreviewRot): 设置全局文本绘图的 3D 预览旋转
- [PlayerTextDrawSetPreviewModel](PlayerTextDrawSetPreviewModel): 设置玩家文本绘图的 3D 预览模型
- [PlayerTextDrawSetPreviewVehCol](PlayerTextDrawSetPreviewVehCol): 设置玩家文本绘图 3D 预览的车辆配色
- [PlayerTextDrawFont](PlayerTextDrawFont): 设置玩家文本绘图的字体类型

## 相关回调

- [OnPlayerClickPlayerTextDraw](../callbacks/OnPlayerClickPlayerTextDraw): 当玩家点击玩家文本绘图时触发
