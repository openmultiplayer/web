---
title: TextDrawBoxColor
sidebar_label: TextDrawBoxColor
description: 调整文本框颜色（仅在TextDrawUseBox的'use'参数为1时生效）。
tags: ["文本绘图"]
---

## 描述

调整文本框颜色（仅在 TextDrawUseBox 的'use'参数为'true'时生效）。

| 名称        | 说明                                                                                                            |
| ----------- | --------------------------------------------------------------------------------------------------------------- |
| Text:textid | 需要修改的文本绘图                                                                                              |
| boxColour   | 颜色值。透明度由颜色的 alpha 通道决定（例如 0x000000FF 表示完全不透明的黑色，而 0x000000AA 表示半透明的黑色）。 |

## 返回值

该函数不返回任何特定值。

## 示例

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(123.0, 123.0, "Example");
    TextDrawUseBox(gMyTextdraw, true);
    TextDrawBoxColor(gMyTextdraw, 0xFFFFFFFF);
    return 1;
}
```

## 注意事项

:::tip

如果您想更改已显示的文本绘图的框颜色，无需重新创建。只需在修改后使用[TextDrawShowForPlayer](TextDrawShowForPlayer)/[TextDrawShowForAll](TextDrawShowForAll)即可立即生效。

:::

## 相关函数

- [TextDrawCreate](TextDrawCreate): 创建文本绘图
- [TextDrawDestroy](TextDrawDestroy): 销毁文本绘图
- [TextDrawColor](TextDrawColor): 设置文本绘图字体颜色
- [TextDrawBackgroundColor](TextDrawBackgroundColor): 设置文本绘图背景颜色
- [TextDrawAlignment](TextDrawAlignment): 设置文本对齐方式
- [TextDrawFont](TextDrawFont): 设置文本字体样式
- [TextDrawLetterSize](TextDrawLetterSize): 设置文本字符尺寸
- [TextDrawTextSize](TextDrawTextSize): 设置文本框尺寸
- [TextDrawSetOutline](TextDrawSetOutline): 启用文本描边效果
- [TextDrawSetShadow](TextDrawSetShadow): 启用文本阴影效果
- [TextDrawSetProportional](TextDrawSetProportional): 启用等比例文本间距
- [TextDrawUseBox](TextDrawUseBox): 启用文本框显示
- [TextDrawSetString](TextDrawSetString): 更新文本内容
- [TextDrawShowForPlayer](TextDrawShowForPlayer): 对指定玩家显示文本绘图
- [TextDrawHideForPlayer](TextDrawHideForPlayer): 对指定玩家隐藏文本绘图
- [TextDrawShowForAll](TextDrawShowForAll): 对所有玩家显示文本绘图
- [TextDrawHideForAll](TextDrawHideForAll): 对所有玩家隐藏文本绘图
