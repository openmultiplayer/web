---
title: TextDrawGetTextSize
sidebar_label: TextDrawGetTextSize
description: 获取文本绘图的X轴和Y轴尺寸。
tags: ["文本绘图"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取文本绘图的 X 轴和 Y 轴尺寸。

| 参数          | 说明                                 |
| ------------- | ------------------------------------ |
| Text:textid   | 需要获取尺寸的文本绘图 ID            |
| &Float:width  | 用于存储宽度的浮点变量（按引用传递） |
| &Float:height | 用于存储高度的浮点变量（按引用传递） |

## 返回值

此函数不返回特定值。

## 示例

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0, "示例文本绘图");
    TextDrawTextSize(gMyTextdraw, 2.0, 3.6);

    new Float:width, Float:height;
    TextDrawGetTextSize(gMyTextdraw, width, height);
    // 此时`width`将为2.0，`height`将为3.6
    return 1;
}
```

## 相关函数

- [TextDrawCreate](TextDrawCreate): 创建文本绘图
- [TextDrawDestroy](TextDrawDestroy): 销毁文本绘图
- [TextDrawTextSize](TextDrawTextSize): 设置文本框尺寸
- [TextDrawColor](TextDrawColor): 设置字体颜色
- [TextDrawBoxColor](TextDrawBoxColor): 设置文本框颜色
- [TextDrawBackgroundColor](TextDrawBackgroundColor): 设置背景颜色
- [TextDrawAlignment](TextDrawAlignment): 设置文本对齐方式
- [TextDrawFont](TextDrawFont): 设置字体样式
- [TextDrawLetterSize](TextDrawLetterSize): 设置字符尺寸
- [TextDrawSetOutline](TextDrawSetOutline): 启用文本描边
- [TextDrawSetShadow](TextDrawSetShadow): 启用文本阴影
- [TextDrawSetProportional](TextDrawSetProportional): 启用等比例间距
- [TextDrawUseBox](TextDrawUseBox): 启用文本框显示
- [TextDrawSetString](TextDrawSetString): 更新文本内容
- [TextDrawShowForPlayer](TextDrawShowForPlayer): 对玩家显示文本
- [TextDrawHideForPlayer](TextDrawHideForPlayer): 对玩家隐藏文本
- [TextDrawShowForAll](TextDrawShowForAll): 全局显示文本
- [TextDrawHideForAll](TextDrawHideForAll): 全局隐藏文本
