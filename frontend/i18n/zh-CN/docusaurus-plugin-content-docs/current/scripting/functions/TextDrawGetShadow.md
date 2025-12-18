---
title: TextDrawGetShadow
sidebar_label: TextDrawGetShadow
description: 获取文本绘图阴影尺寸
tags: ["文本绘图"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取文本绘图文字的阴影尺寸

| 参数        | 说明                          |
| ----------- | ----------------------------- |
| Text:textid | 需要获取阴影尺寸的文本绘图 ID |

## 返回值

返回文本绘图的阴影尺寸值（整数型）

## 示例

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0, "示例文本绘图");
    TextDrawSetShadow(gMyTextdraw, 1);

    new shadow = TextDrawGetShadow(gMyTextdraw);
    // shadow = 1
    return 1;
}
```

## 相关函数

- [TextDrawCreate](TextDrawCreate): 创建文本绘图
- [TextDrawDestroy](TextDrawDestroy): 销毁文本绘图
- [TextDrawSetShadow](TextDrawSetShadow): 设置阴影效果
- [TextDrawColor](TextDrawColor): 设置文本颜色
- [TextDrawBoxColor](TextDrawBoxColor): 设置方框颜色
- [TextDrawBackgroundColor](TextDrawBackgroundColor): 设置背景颜色
- [TextDrawAlignment](TextDrawAlignment): 设置对齐方式
- [TextDrawFont](TextDrawFont): 设置字体类型
- [TextDrawLetterSize](TextDrawLetterSize): 设置字符尺寸
- [TextDrawTextSize](TextDrawTextSize): 设置文本区域尺寸
- [TextDrawSetOutline](TextDrawSetOutline): 设置文字描边
- [TextDrawSetProportional](TextDrawSetProportional): 启用比例间距
- [TextDrawUseBox](TextDrawUseBox): 切换方框显示
- [TextDrawSetString](TextDrawSetString): 更新文本内容
- [TextDrawShowForPlayer](TextDrawShowForPlayer): 为玩家显示
- [TextDrawHideForPlayer](TextDrawHideForPlayer): 为玩家隐藏
- [TextDrawShowForAll](TextDrawShowForAll): 全局显示
- [TextDrawHideForAll](TextDrawHideForAll): 全局隐藏
