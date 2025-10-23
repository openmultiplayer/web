---
title: TextDrawGetAlignment
sidebar_label: TextDrawGetAlignment
description: 获取文本绘图的文本对齐方式。
tags: ["文本绘图"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取文本绘图的文本对齐方式。

| 名称        | 说明                          |
| ----------- | ----------------------------- |
| Text:textid | 需要获取对齐方式的文本绘图 ID |

## 返回值

返回文本绘图的文本对齐方式。

## 示例

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 425.0, "这是一个示例文本绘图");
    TextDrawAlignment(gMyTextdraw, TEXT_DRAW_ALIGN_CENTER);

    new TEXT_DRAW_ALIGN:align = TextDrawGetAlignment(gMyTextdraw);
    // align = TEXT_DRAW_ALIGN_CENTER
    return 1;
}
```

## 相关函数

- [TextDrawCreate](TextDrawCreate): 创建文本绘图
- [TextDrawDestroy](TextDrawDestroy): 销毁文本绘图
- [TextDrawAlignment](TextDrawAlignment): 设置文本对齐方式
- [TextDrawColor](TextDrawColor): 设置文本字体颜色
- [TextDrawBoxColor](TextDrawBoxColor): 设置文本框颜色
- [TextDrawBackgroundColor](TextDrawBackgroundColor): 设置背景颜色
- [TextDrawLetterSize](TextDrawLetterSize): 设置字符尺寸
- [TextDrawTextSize](TextDrawTextSize): 设置文本框尺寸
- [TextDrawSetOutline](TextDrawSetOutline): 启用文本描边
- [TextDrawSetShadow](TextDrawSetShadow): 启用文本阴影
- [TextDrawSetProportional](TextDrawSetProportional): 启用等比例间距
- [TextDrawUseBox](TextDrawUseBox): 启用文本框显示
- [TextDrawSetString](TextDrawSetString): 更新文本内容
- [TextDrawShowForPlayer](TextDrawShowForPlayer): 对玩家显示文本
- [TextDrawHideForPlayer](TextDrawHideForPlayer): 对玩家隐藏文本
- [TextDrawShowForAll](TextDrawShowForAll): 全局显示文本
- [TextDrawHideForAll](TextDrawHideForAll): 全局隐藏文本
