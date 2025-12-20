---
title: TextDrawGetPreviewRot
sidebar_label: TextDrawGetPreviewRot
description: 获取3D模型预览文本绘图的旋转参数与缩放值
tags: ["文本绘图"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取 3D 模型预览文本绘图的旋转角度与缩放比例

| 参数             | 说明                                      |
| ---------------- | ----------------------------------------- |
| Text:textid      | 需要获取参数的 3D 模型预览文本绘图 ID     |
| &Float:rotationX | 存储 X 轴旋转角度的浮点变量（按引用传递） |
| &Float:rotationY | 存储 Y 轴旋转角度的浮点变量（按引用传递） |
| &Float:rotationZ | 存储 Z 轴旋转角度的浮点变量（按引用传递） |
| &Float:zoom      | 存储缩放比例的浮点变量（按引用传递）      |

## 示例

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 240.0, "_");
    TextDrawFont(gMyTextdraw, TEXT_DRAW_FONT_MODEL_PREVIEW);
    TextDrawUseBox(gMyTextdraw, true);
    TextDrawBoxColor(gMyTextdraw, 0x000000FF);
    TextDrawTextSize(gMyTextdraw, 40.0, 40.0);
    TextDrawSetPreviewModel(gMyTextdraw, 411);
    TextDrawSetPreviewRot(gMyTextdraw, -10.0, 0.0, -20.0, 1.0);

    new Float:rotationX, Float:rotationY, Float:rotationZ, Float:zoom;
    TextDrawGetPreviewRot(gMyTextdraw, rotationX, rotationY, rotationZ, zoom);
    // rotationX的值为-10.0
    // rotationY的值为0.0
    // rotationZ的值为-20.0
    // zoom的值为1.0
    return 1;
}
```

## 相关函数

- [TextDrawSetPreviewRot](TextDrawSetPreviewRot): 设置 3D 模型预览文本绘图的旋转与缩放
- [PlayerTextDrawSetPreviewRot](PlayerTextDrawSetPreviewRot): 设置玩家专属 3D 文本绘图的预览旋转
- [TextDrawSetPreviewModel](TextDrawSetPreviewModel): 定义文本绘图显示的 3D 预览模型
- [TextDrawSetPreviewVehCol](TextDrawSetPreviewVehCol): 调整 3D 预览中车辆的配色方案
- [TextDrawFont](TextDrawFont): 更改文本绘图的字体样式

## 相关回调

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): 当玩家点击文本绘图时触发
