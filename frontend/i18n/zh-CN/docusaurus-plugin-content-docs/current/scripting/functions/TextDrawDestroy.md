---
title: TextDrawDestroy
sidebar_label: TextDrawDestroy
description: 销毁先前创建的文本绘图。
tags: ["文本绘图"]
---

## 描述

销毁先前创建的文本绘图。

| 参数        | 说明                                          |
| ----------- | --------------------------------------------- |
| Text:textid | 需要销毁的文本绘图 ID，由 TextDrawCreate 返回 |

## 返回值

此函数不返回特定值。

## 示例

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(240.0, 580.0, "欢迎来到我的OPEN.MP服务器");
    return 1;
}

public OnGameModeExit()
{
    TextDrawDestroy(gMyTextdraw);
    return 1;
}
```

## 相关函数

- [TextDrawCreate](TextDrawCreate): 创建文本绘图
- [TextDrawColor](TextDrawColor): 设置文本字体颜色
- [TextDrawBoxColor](TextDrawBoxColor): 设置文本框颜色
- [TextDrawBackgroundColor](TextDrawBackgroundColor): 设置背景颜色
- [TextDrawAlignment](TextDrawAlignment): 设置文本对齐方式
- [TextDrawFont](TextDrawFont): 设置字体样式
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
