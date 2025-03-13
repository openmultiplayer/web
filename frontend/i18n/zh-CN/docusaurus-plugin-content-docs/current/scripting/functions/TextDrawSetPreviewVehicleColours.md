---
title: TextDrawSetPreviewVehicleColours
sidebar_label: TextDrawSetPreviewVehicleColours
description: 当3D预览文本绘图使用车辆模型时，设置该车辆的两个颜色值。
tags: ["文本绘图"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

当 3D 预览文本绘图使用车辆模型时，设置该车辆的两个颜色值。

| 名称        | 描述                                      |
| ----------- | ----------------------------------------- |
| Text:textid | 已设置为显示 3D 车辆模型预览的文本绘图 ID |
| colour1     | 要设置的主颜色 ID                         |
| colour2     | 要设置的副颜色 ID                         |

## 返回值

该函数不返回特定值。

## 示例

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 240.0, "_");
    TextDrawFont(gMyTextdraw, TEXT_DRAW_FONT_MODEL_PREVIEW);
    TextDrawUseBox(gMyTextdraw, 1);
    TextDrawBoxColor(gMyTextdraw, 0x000000FF);
    TextDrawTextSize(gMyTextdraw, 40.0, 40.0);
    TextDrawSetPreviewModel(gMyTextdraw, 411); // 显示411号模型（Infernus）
    TextDrawSetPreviewVehicleColours(gMyTextdraw, 6, 6); // 将Infernus的主副颜色设为6号（黄色）

    // 仍需使用TextDrawShowForAll/TextDrawShowForPlayer使文本绘图可见
    return 1;
}
```

## 注意事项

:::warning

文本绘图必须使用`TEXT_DRAW_FONT_MODEL_PREVIEW`字体类型，该函数才能生效。

:::

## 相关函数

- [TextDrawSetPreviewModel](TextDrawSetPreviewModel): 设置文本绘图的 3D 预览模型
- [TextDrawSetPreviewRot](TextDrawSetPreviewRot): 设置 3D 文本绘图预览的旋转参数
- [TextDrawFont](TextDrawFont): 设置文本绘图的字体样式

## 相关回调

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): 当玩家点击文本绘图时触发
