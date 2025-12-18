---
title: TextDrawGetBoxColour
sidebar_label: TextDrawGetBoxColour
description: 获取文本绘图方框颜色
tags: ["文本绘图"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取文本绘图方框的颜色值

| 参数        | 说明                          |
| ----------- | ----------------------------- |
| Text:textid | 需要获取方框颜色的文本绘图 ID |

## 返回值

返回文本绘图的方框颜色值（RGBA 格式）

## 示例

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(123.0, 123.0, "示例文本");
    TextDrawUseBox(gMyTextdraw, true);
    TextDrawBoxColour(gMyTextdraw, 0xAA0000FF);

    new boxColour = TextDrawGetBoxColour(gMyTextdraw);
    // boxColour = 0xAA0000FF
    return 1;
}
```

## 相关函数

- [TextDrawCreate](TextDrawCreate): 创建文本绘图
- [TextDrawDestroy](TextDrawDestroy): 销毁文本绘图
- [TextDrawBoxColour](TextDrawBoxColour): 设置方框颜色
- [TextDrawBackgroundColour](TextDrawBackgroundColour): 设置背景颜色
- [TextDrawAlignment](TextDrawAlignment): 设置对齐方式
- [TextDrawFont](TextDrawFont): 设置字体类型
- [TextDrawLetterSize](TextDrawLetterSize): 设置字符尺寸
- [TextDrawTextSize](TextDrawTextSize): 设置文本区域尺寸
- [TextDrawSetOutline](TextDrawSetOutline): 设置文字描边
- [TextDrawSetShadow](TextDrawSetShadow): 设置阴影效果
- [TextDrawSetProportional](TextDrawSetProportional): 启用比例间距
- [TextDrawUseBox](TextDrawUseBox): 切换方框显示
- [TextDrawSetString](TextDrawSetString): 更新文本内容
- [TextDrawShowForPlayer](TextDrawShowForPlayer): 为玩家显示
- [TextDrawHideForPlayer](TextDrawHideForPlayer): 为玩家隐藏
- [TextDrawShowForAll](TextDrawShowForAll): 全局显示
- [TextDrawHideForAll](TextDrawHideForAll): 全局隐藏
