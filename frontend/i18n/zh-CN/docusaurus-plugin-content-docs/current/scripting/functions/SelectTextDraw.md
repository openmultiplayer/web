---
title: SelectTextDraw
sidebar_label: SelectTextDraw
description: 显示光标并允许玩家选择文本绘图
tags: ["文本绘图"]
---

## 描述

显示光标并允许玩家选择文本绘图

| 参数        | 说明                                      |
| ----------- | ----------------------------------------- |
| playerid    | 可进行文本绘图选择的玩家 ID               |
| hoverColour | 鼠标悬停时文本绘图的高亮颜色（RGBA 格式） |

## 返回值

此函数不返回特定值。

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/tdselect", true))
    {
        SelectTextDraw(playerid, 0x00FF00FF); // 悬停时显示绿色高亮
        SendClientMessage(playerid, 0xFFFFFFFF, "服务器：请选择一个文本绘图！");
        return 1;
    }
    return 0;
}
```

## 注意事项

:::tip

悬停时高亮显示的是文本内容而非背景框（如果存在背景框）

:::

## 相关函数

- [CancelSelectTextDraw](CancelSelectTextDraw): 取消鼠标文本绘图选择模式
- [TextDrawSetSelectable](TextDrawSetSelectable): 设置文本绘图是否可通过 SelectTextDraw 选择
- [PlayerTextDrawSetSelectable](PlayerTextDrawSetSelectable): 设置玩家专属文本绘图是否可通过 SelectTextDraw 选择

## 相关回调

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): 玩家点击文本绘图时触发
- [OnPlayerClickPlayerTextDraw](../callbacks/OnPlayerClickPlayerTextDraw): 玩家点击专属文本绘图时触发
