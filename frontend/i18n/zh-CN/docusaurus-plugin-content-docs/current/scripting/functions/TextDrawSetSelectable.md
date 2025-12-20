---
title: TextDrawSetSelectable
sidebar_label: TextDrawSetSelectable
description: 设置文本绘图是否可被选中（点击）。
tags: ["文本绘图"]
---

## 描述

设置文本绘图是否可被选中（点击）

| 参数            | 说明                                    |
| --------------- | --------------------------------------- |
| Text:textid     | 需要设置可选中状态的文本绘图 ID。       |
| bool:selectable | 'true'表示可选中，'false'表示不可选中。 |

## 返回值

此函数不返回特定值。

## 示例

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0, "示例文本绘图");
    TextDrawTextSize(gMyTextdraw, 30.0, 10.0);
    TextDrawSetSelectable(gMyTextdraw, true); // true表示可选中
    return 1;
}
```

## 注意事项

:::tip

使用[TextDrawTextSize](TextDrawTextSize)定义可点击区域的范围。

:::

:::warning

必须在文本绘图显示给玩家前调用 TextDrawSetSelectable 才能生效。

:::

## 相关函数

- [TextDrawIsSelectable](TextDrawIsSelectable): 检查文本绘图是否可选中
- [SelectTextDraw](SelectTextDraw): 启用鼠标选择功能
- [CancelSelectTextDraw](CancelSelectTextDraw): 取消文本绘图的鼠标选择状态

## 相关回调

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): 当玩家点击文本绘图时触发
