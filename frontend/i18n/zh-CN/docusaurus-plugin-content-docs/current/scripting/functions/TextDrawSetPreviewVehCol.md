---
title: TextDrawSetPreviewVehCol
sidebar_label: TextDrawSetPreviewVehCol
description: 若在3D预览文本绘图中使用车辆模型，此函数用于设置该车辆的两个颜色值。
tags: ["文本绘图"]
---

## 描述

若在 3D 预览文本绘图中使用车辆模型，此函数用于设置该车辆的两个颜色值。

| 参数        | 说明                                      |
| ----------- | ----------------------------------------- |
| Text:textid | 已设置为显示 3D 车辆模型预览的文本绘图 ID |
| colour1     | 车辆主颜色 ID                             |
| colour2     | 车辆副颜色 ID                             |

## 返回值

此函数不返回特定值。

## 示例代码

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 240.0, "_");
    TextDrawFont(gMyTextdraw, TEXT_DRAW_FONT_MODEL_PREVIEW);
    TextDrawUseBox(gMyTextdraw, true);
    TextDrawBoxColor(gMyTextdraw, 0x000000FF);
    TextDrawTextSize(gMyTextdraw, 40.0, 40.0);
    TextDrawSetPreviewModel(gMyTextdraw, 411); // 显示模型411（灵车）
    TextDrawSetPreviewVehCol(gMyTextdraw, 6, 6); // 设置灵车主副颜色为6号（黄色）

    // 仍需使用TextDrawShowForAll/TextDrawShowForPlayer使文本绘图可见
    return 1;
}
```

## 注意事项

:::warning

文本绘图必须使用字体类型`TEXT_DRAW_FONT_MODEL_PREVIEW`，否则此函数将无效。

:::

## 相关函数

- [TextDrawSetPreviewModel](TextDrawSetPreviewModel): 设置文本绘图的 3D 预览模型。
- [TextDrawSetPreviewRot](TextDrawSetPreviewRot): 设置 3D 文本绘图预览的旋转角度。
- [TextDrawFont](TextDrawFont): 设置文本绘图的字体样式。

## 相关回调

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): 当玩家点击文本绘图时调用。
