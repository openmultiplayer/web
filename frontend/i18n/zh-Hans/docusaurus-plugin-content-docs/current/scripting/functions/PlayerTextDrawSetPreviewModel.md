---
title: PlayerTextDrawSetPreviewModel
sidebar_label: PlayerTextDrawSetPreviewModel
description: 设置玩家文本绘图的3D预览模型
tags: ["玩家", "文本绘图", "玩家文本绘图"]
---

## 描述

设置玩家文本绘图的指定模型 ID 的 3D 预览模型

| 参数              | 说明                              |
| ----------------- | --------------------------------- |
| playerid          | 玩家的 ID                         |
| PlayerText:textid | 要显示 3D 预览的玩家文本绘图的 ID |
| model             | 要显示的 GTA SA 或 SA:MP 模型 ID  |

## 返回值

**true** - 函数执行成功。如果传入无效模型会返回成功，但会显示为黄/黑问号

**false** - 函数执行失败。玩家或文本绘图不存在

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

    PlayerTextDrawSetPreviewModel(playerid, gTextDraw[playerid], 411); // 显示Infernus跑车（模型ID 411）
    //PlayerTextDrawSetPreviewModel(playerid, gTextDraw[playerid], 0);  // 显示模型0（CJ皮肤）
    //PlayerTextDrawSetPreviewModel(playerid, gTextDraw[playerid], 18646); // 显示模型18646（警灯物体）

    PlayerTextDrawShow(playerid, gTextDraw[playerid]);
    return 1;
}
```

## 注意事项

:::warning

必须使用字体类型`TEXT_DRAW_FONT_MODEL_PREVIEW`（模型预览字体）才能使此函数生效

:::

## 相关函数

- [PlayerTextDrawGetPreviewModel](PlayerTextDrawGetPreviewModel): 获取 3D 预览玩家文本绘图的模型 ID
- [PlayerTextDrawSetPreviewRot](PlayerTextDrawSetPreviewRot): 设置 3D 预览模型的旋转角度
- [PlayerTextDrawSetPreviewVehCol](PlayerTextDrawSetPreviewVehCol): 设置 3D 预览车辆的配色
- [PlayerTextDrawFont](PlayerTextDrawFont): 设置玩家文本绘图的字体类型

## 相关回调

- [OnPlayerClickPlayerTextDraw](../callbacks/OnPlayerClickPlayerTextDraw): 当玩家点击玩家文本绘图时触发
