---
title: TextDrawGetString
sidebar_label: TextDrawGetString
description: 获取文本绘图的文字内容
tags: ["文本绘图"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取指定文本绘图的文字内容

| 参数                         | 说明                                 |
| ---------------------------- | ------------------------------------ |
| Text:textid                  | 需要获取文字的文本绘图 ID            |
| string[]                     | 存储文本内容的字符数组（按引用传递） |
| stringSize = sizeof (string) | 数组容量上限                         |

## 返回值

此函数不返回特定值。

## 示例

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 240.0, "Hello World!");

    new string[16];
    TextDrawGetString(gMyTextdraw, string, sizeof(string));
    // string数组现在存储着'Hello World!'
    return 1;
}
```

## 相关函数

- [TextDrawCreate](TextDrawCreate): 新建一个文本绘图
- [TextDrawDestroy](TextDrawDestroy): 删除指定文本绘图
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
- [TextDrawShowForPlayer](TextDrawShowForPlayer): 向指定玩家显示文本绘图
- [TextDrawHideForPlayer](TextDrawHideForPlayer): 对指定玩家隐藏文本绘图
- [TextDrawShowForAll](TextDrawShowForAll): 向所有在线玩家显示文本绘图
- [TextDrawHideForAll](TextDrawHideForAll): 全局隐藏指定文本绘图
- [TextDrawSetString](TextDrawSetString): 修改文本绘图的文字内容
- [PlayerTextDrawGetString](PlayerTextDrawGetString): 获取玩家专属文本绘图的文字
