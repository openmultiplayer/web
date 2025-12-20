---
title: TextDrawSetPreviewRot
sidebar_label: TextDrawSetPreviewRot
description: 设置3D模型预览文本绘图的旋转角度和缩放比例。
tags: ["文本绘图"]
---

## 描述

设置 3D 模型预览文本绘图的旋转角度和缩放比例。

| 参数            | 说明                                                                               |
| --------------- | ---------------------------------------------------------------------------------- |
| Text:textid     | 要更改的文本绘图 ID                                                                |
| Float:rotationX | X 轴旋转角度值                                                                     |
| Float:rotationY | Y 轴旋转角度值                                                                     |
| Float:rotationZ | Z 轴旋转角度值                                                                     |
| Float:zoom      | 缩放值（默认 1.0），小于 1.0 的值会使视角更靠近模型，大于 1.0 的值会使视角远离模型 |

## 返回值

此函数不返回特定值。

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

    // 仍需使用TextDrawShowForAll/TextDrawShowForPlayer使文本绘图可见
    return 1;
}
```

## 注意事项

:::warning

文本绘图必须使用`TEXT_DRAW_FONT_MODEL_PREVIEW`字体类型且已设置预览模型，此函数才能生效。

:::

## 相关函数

- [TextDrawGetPreviewRot](TextDrawGetPreviewRot): 获取 3D 模型预览文本绘图的旋转参数
- [PlayerTextDrawSetPreviewRot](PlayerTextDrawSetPreviewRot): 设置玩家 3D 文本绘图预览的旋转参数
- [TextDrawSetPreviewModel](TextDrawSetPreviewModel): 设置文本绘图的 3D 预览模型
- [TextDrawSetPreviewVehCol](TextDrawSetPreviewVehCol): 设置文本绘图预览中车辆的配色方案
- [TextDrawFont](TextDrawFont): 设置文本绘图的字体样式

## 相关回调

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): 当玩家点击文本绘图时触发
