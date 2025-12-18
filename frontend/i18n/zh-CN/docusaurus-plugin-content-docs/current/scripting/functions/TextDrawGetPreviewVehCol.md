---
title: TextDrawGetPreviewVehCol
sidebar_label: TextDrawGetPreviewVehCol
description: 获取3D预览文本绘图的车辆颜色。
tags: ["文本绘图"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取 3D 预览文本绘图的车辆颜色。

| 参数        | 说明                               |
| ----------- | ---------------------------------- |
| Text:textid | 需要获取车辆颜色的文本绘图 ID      |
| &colour1    | 用于存储主颜色的变量（按引用传递） |
| &colour2    | 用于存储副颜色的变量（按引用传递） |

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
    TextDrawSetPreviewVehCol(gMyTextdraw, 6, 8);

    new colour1, colour2;
    TextDrawGetPreviewVehCol(gMyTextdraw, colour1, colour2);
    // colour1 = 6
    // colour2 = 8
    return 1;
}
```

## 相关函数

- [TextDrawSetPreviewModel](TextDrawSetPreviewModel): 设置文本绘图的 3D 预览模型
- [TextDrawSetPreviewRot](TextDrawSetPreviewRot): 设置 3D 预览的旋转参数
- [TextDrawFont](TextDrawFont): 设置文本绘图字体样式

## 相关回调

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): 玩家点击文本绘图时触发
