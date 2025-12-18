---
title: TextDrawGetBackgroundColour
sidebar_label: TextDrawGetBackgroundColour
description: 获取文本绘图的背景颜色
tags: ["文本绘图"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取指定文本绘图的背景颜色

| 参数        | 说明                          |
| ----------- | ----------------------------- |
| Text:textid | 需要获取背景颜色的文本绘图 ID |

## 返回值

返回文本绘图的背景颜色值（RGBA 格式）

## 示例

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(123.0, 123.0, "Example");
    TextDrawSetOutline(gMyTextdraw, 1);
    TextDrawBackgroundColour(gMyTextdraw, 0xFF0000FF);

    new backgroundColour = TextDrawGetBackgroundColour(gMyTextdraw);
    // backgroundColour = 0xFF0000FF
    return 1;
}
```

## 相关函数

- [TextDrawCreate](TextDrawCreate): 新建一个文本绘图
- [TextDrawDestroy](TextDrawDestroy): 删除指定文本绘图
- [TextDrawBoxColour](TextDrawBoxColour): 调整文本绘图的背景方框颜色
- [TextDrawBackgroundColour](TextDrawBackgroundColour): 修改文本绘图的背景颜色
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
