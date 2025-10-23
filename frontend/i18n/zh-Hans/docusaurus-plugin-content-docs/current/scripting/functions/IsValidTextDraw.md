---
title: IsValidTextDraw
sidebar_label: IsValidTextDraw
description: 检测文本绘图有效性
tags: ["文本绘图"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测指定文本绘图是否有效。

## 参数说明

| 参数名      | 说明                |
| ----------- | ------------------- |
| Text:textid | 要检测的文本绘图 ID |

## 返回值

当文本绘图有效时返回 **true**，无效时返回 **false**

## 示例代码

```c
new Text:gMyTextdraw; // 全局文本绘图存储变量

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0, "示例文本绘图");

    if (IsValidTextDraw(gMyTextdraw))
    {
        // 文本绘图有效
    }
    else
    {
        // 文本绘图无效
    }
    return 1;
}
```

## 相关函数

- [TextDrawCreate](TextDrawCreate): 创建文本绘图
- [TextDrawDestroy](TextDrawDestroy): 销毁文本绘图
- [TextDrawColor](TextDrawColor): 设置文本颜色
- [TextDrawBoxColor](TextDrawBoxColor): 设置文本框颜色
- [TextDrawBackgroundColor](TextDrawBackgroundColor): 设置背景颜色
- [TextDrawAlignment](TextDrawAlignment): 设置对齐方式
- [TextDrawFont](TextDrawFont): 设置字体样式
- [TextDrawLetterSize](TextDrawLetterSize): 设置字符尺寸
- [TextDrawTextSize](TextDrawTextSize): 设置绘制区域尺寸
- [TextDrawSetOutline](TextDrawSetOutline): 启用文本描边
- [TextDrawSetShadow](TextDrawSetShadow): 设置文本阴影
- [TextDrawSetProportional](TextDrawSetProportional): 启用比例间距
- [TextDrawUseBox](TextDrawUseBox): 启用文本框
- [TextDrawSetString](TextDrawSetString): 更新文本内容
- [TextDrawShowForPlayer](TextDrawShowForPlayer): 为玩家显示文本绘图
- [TextDrawHideForPlayer](TextDrawHideForPlayer): 为玩家隐藏文本绘图
- [TextDrawShowForAll](TextDrawShowForAll): 全局显示文本绘图
- [TextDrawHideForAll](TextDrawHideForAll): 全局隐藏文本绘图
