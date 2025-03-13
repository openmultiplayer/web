---
title: TextDrawSetPreviewModel
sidebar_label: TextDrawSetPreviewModel
description: 设置文本绘图的模型预览。
tags: ["文本绘图"]
---

## 描述

设置用于文本绘图模型预览的 3D 模型。

| 名称        | 描述                               |
| ----------- | ---------------------------------- |
| Text:textid | 需要显示 3D 预览的文本绘图 ID。    |
| model       | 要显示的 GTA SA 或 SA:MP 模型 ID。 |

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

    TextDrawSetPreviewModel(gMyTextdraw, 411); // 显示模型411（Infernus）
    // TextDrawSetPreviewModel(gMyTextdraw, 1); // 显示模型1（CJ皮肤）
    // TextDrawSetPreviewModel(gMyTextdraw, 18646); // 显示模型18646（警灯物体）

    // 仍需使用TextDrawShowForAll/TextDrawShowForPlayer使文本绘图可见
    return 1;
}
```

## 注意事项

:::tip

使用[TextDrawBackgroundColor](TextDrawBackgroundColor)设置模型背后的背景颜色。

:::

:::warning

文本绘图必须使用`TEXT_DRAW_FONT_MODEL_PREVIEW`字体类型才能使本函数生效。

:::

## 相关函数

- [TextDrawGetPreviewModel](TextDrawGetPreviewModel): 获取 3D 预览文本绘图的模型 ID
- [TextDrawSetPreviewRot](TextDrawSetPreviewRot): 设置 3D 文本绘图预览的旋转角度
- [TextDrawSetPreviewVehCol](TextDrawSetPreviewVehCol): 设置 3D 文本绘图预览中车辆的颜色
- [TextDrawFont](TextDrawFont): 设置文本绘图的字体类型
- [PlayerTextDrawSetPreviewModel](PlayerTextDrawSetPreviewModel): 设置玩家专属 3D 文本绘图的预览模型 ID

## 相关回调

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): 当玩家点击文本绘图时触发
