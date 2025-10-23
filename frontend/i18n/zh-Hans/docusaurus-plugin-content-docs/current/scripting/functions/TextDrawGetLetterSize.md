---
title: TextDrawGetLetterSize
sidebar_label: TextDrawGetLetterSize
description: 获取字符的宽度和高度。
tags: ["文本绘图"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取字符的宽度和高度。

| 名称          | 说明                                 |
| ------------- | ------------------------------------ |
| Text:textid   | 需要获取字符尺寸的文本绘图 ID        |
| &Float:width  | 用于存储宽度的浮点变量（按引用传递） |
| &Float:height | 用于存储高度的浮点变量（按引用传递） |

## 返回值

该函数不返回任何特定值。

## 示例

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0,"示例文本绘图");
    TextDrawLetterSize(gMyTextdraw, 3.2, 5.1);

    new Float:width, Float:height;
    TextDrawGetLetterSize(gMyTextdraw, width, height);
    // 此时`width`将为3.2，`height`将为5.1
    return 1;
}
```

## 相关函数

- [TextDrawCreate](TextDrawCreate): 创建文本绘图
- [TextDrawDestroy](TextDrawDestroy): 销毁文本绘图
- [TextDrawLetterSize](TextDrawLetterSize): 设置字符尺寸
- [TextDrawColor](TextDrawColor): 设置字体颜色
- [TextDrawBoxColor](TextDrawBoxColor): 设置文本框颜色
- [TextDrawBackgroundColor](TextDrawBackgroundColor): 设置背景颜色
- [TextDrawAlignment](TextDrawAlignment): 设置文本对齐方式
- [TextDrawFont](TextDrawFont): 设置字体样式
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
