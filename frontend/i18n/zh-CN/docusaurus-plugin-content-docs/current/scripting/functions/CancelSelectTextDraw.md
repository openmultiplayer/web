---
title: CancelSelectTextDraw
sidebar_label: CancelSelectTextDraw
description: 取消玩家通过鼠标选择文本绘图的功能
tags: ["文本绘图"]
---

## 描述

终止玩家当前的文本绘图选择状态

| 参数名   | 说明                          |
| -------- | ----------------------------- |
| playerid | 需要禁用文本绘图选择的玩家 ID |

## 返回值

本函数没有特定返回值

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/cancelselect", true))
    {
        CancelSelectTextDraw(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "服务器: 文本绘图选择已禁用！");
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

本函数会触发 [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw) 回调并传入 INVALID_TEXT_DRAW (65535)

在 OnPlayerClickTextDraw 回调中使用此函数时，若未处理该无效值情况会导致客户端进入无限循环

:::

## 相关函数

- [SelectTextDraw](SelectTextDraw): 启用鼠标选择文本绘图功能
- [TextDrawSetSelectable](TextDrawSetSelectable): 设置文本绘图是否可被选择

## 相关回调

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): 当玩家点击文本绘图时触发
