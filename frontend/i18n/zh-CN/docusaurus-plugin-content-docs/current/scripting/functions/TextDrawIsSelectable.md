---
title: TextDrawIsSelectable
sidebar_label: TextDrawIsSelectable
description: 检测文本绘图是否处于可选状态
tags: ["文本绘图"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测文本绘图是否支持玩家点击交互

## 参数说明

| 参数        | 说明                  |
| ----------- | --------------------- |
| Text:textid | 需要检测的文本绘图 ID |

## 返回值

若文本绘图处于可选状态返回 true，否则返回 false

## 示例用法

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0, "示例文本绘图");
    TextDrawTextSize(gMyTextdraw, 30.0, 10.0);
    TextDrawSetSelectable(gMyTextdraw, true);

    if (TextDrawIsSelectable(gMyTextdraw))
    {
        // 文本绘图处于可选状态
    }
    else
    {
        // 文本绘图不可交互
    }
    return 1;
}
```

## 相关函数

- [TextDrawCreate](TextDrawCreate): 新建一个文本绘图
- [TextDrawDestroy](TextDrawDestroy): 删除指定文本绘图
- [TextDrawSetSelectable](TextDrawSetSelectable): 控制文本绘图的点击交互功能
- [TextDrawColor](TextDrawColor): 调整文本绘图的文字颜色
- [TextDrawBoxColor](TextDrawBoxColor): 修改文本绘图的背景方框颜色
- [TextDrawBackgroundColor](TextDrawBackgroundColor): 修改文本绘图的背景颜色
- [TextDrawAlignment](TextDrawAlignment): 调整文本绘图的文字对齐方式
- [TextDrawFont](TextDrawFont): 更改文本绘图的字体样式
- [TextDrawLetterSize](TextDrawLetterSize): 调节文本绘图的字符大小
- [TextDrawTextSize](TextDrawTextSize): 定义文本绘图方框的尺寸
- [TextDrawSetOutline](TextDrawSetOutline): 控制文本轮廓的显示状态
- [TextDrawSetShadow](TextDrawSetShadow): 切换文本阴影的启用状态
- [TextDrawSetProportional](TextDrawSetProportional): 启用文本字符的比例间距
- [TextDrawUseBox](TextDrawUseBox): 控制文本绘图方框的显示开关
- [TextDrawSetString](TextDrawSetString): 修改现有文本绘图的文字内容
- [TextDrawShowForPlayer](TextDrawShowForPlayer): 向指定玩家显示文本绘图
- [TextDrawHideForPlayer](TextDrawHideForPlayer): 对指定玩家隐藏文本绘图
- [TextDrawShowForAll](TextDrawShowForAll): 向所有在线玩家显示文本绘图
- [TextDrawHideForAll](TextDrawHideForAll): 全局隐藏指定文本绘图
