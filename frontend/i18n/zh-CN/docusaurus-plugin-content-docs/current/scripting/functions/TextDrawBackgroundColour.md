---
title: TextDrawBackgroundColour
sidebar_label: TextDrawBackgroundColour
description: 设置文本绘图的背景颜色（轮廓/阴影颜色，非文本框颜色）。
tags: ["文本绘图"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

设置文本绘图元素的背景颜色（此颜色影响文本轮廓和阴影，若要设置文本框颜色请使用 [TextDrawBoxColour](TextDrawBoxColour)）。

## 参数

| 名称             | 说明                       |
| ---------------- | -------------------------- |
| Text:textid      | 目标文本绘图的 ID          |
| backgroundColour | 要设置的背景颜色值（RGBA） |

## 返回值

此函数不返回任何特定值。

## 示例

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 425.0, "示例文本绘图");
    TextDrawUseBox(gMyTextdraw, true);
    TextDrawBackgroundColour(gMyTextdraw, 0xFFFFFFFF); // 设置白色背景
    return 1;
}
```

## 注意事项

:::tip

当使用 [TextDrawSetOutline](TextDrawSetOutline) 且轮廓尺寸大于 0 时，轮廓颜色将继承此背景颜色设置。修改此颜色值会影响 [TextDrawColour](TextDrawColour) 的最终显示效果。

:::

:::tip

修改已显示的文本绘图背景颜色时，无需重新创建元素。只需调用 [TextDrawShowForPlayer](TextDrawShowForPlayer)/[TextDrawShowForAll](TextDrawShowForAll) 重新显示即可立即生效。

:::

## 相关函数

- [TextDrawCreate](TextDrawCreate): 创建文本绘图
- [TextDrawDestroy](TextDrawDestroy): 销毁文本绘图
- [TextDrawColour](TextDrawColour): 设置文本字体颜色
- [TextDrawBoxColour](TextDrawBoxColour): 设置文本框颜色
- [TextDrawAlignment](TextDrawAlignment): 设置文本对齐方式
- [TextDrawFont](TextDrawFont): 设置文本字体样式
- [TextDrawLetterSize](TextDrawLetterSize): 设置字符尺寸
- [TextDrawTextSize](TextDrawTextSize): 设置文本框尺寸
- [TextDrawSetOutline](TextDrawSetOutline): 启用文本轮廓
- [TextDrawSetShadow](TextDrawSetShadow): 启用文本阴影
- [TextDrawSetProportional](TextDrawSetProportional): 启用比例间距
- [TextDrawUseBox](TextDrawUseBox): 启用文本框
- [TextDrawSetString](TextDrawSetString): 更新文本内容
- [TextDrawShowForPlayer](TextDrawShowForPlayer): 对玩家显示
- [TextDrawHideForPlayer](TextDrawHideForPlayer): 对玩家隐藏
- [TextDrawShowForAll](TextDrawShowForAll): 全局显示
- [TextDrawHideForAll](TextDrawHideForAll): 全局隐藏
