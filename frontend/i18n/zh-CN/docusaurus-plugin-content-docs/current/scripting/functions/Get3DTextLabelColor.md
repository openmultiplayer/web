---
title: Get3DTextLabelColor
sidebar_label: Get3DTextLabelColor
description: 获取3D文本标签颜色
tags: ["3D文本标签"]
---

:::warning

该函数已弃用，请使用[Get3DTextLabelColour](Get3DTextLabelColour)。

:::

## 描述

获取 3D 文本标签的颜色值。

| 参数名        | 说明                        |
| ------------- | --------------------------- |
| Text3D:textid | 要获取颜色的 3D 文本标签 ID |

## 返回值

返回 3D 文本标签的 RGBA 颜色值。

## 示例

```c
new Text3D:gMyLabel;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);

new color =  Get3DTextLabelColor(gMyLabel);
// color = 0x008080FF
```

## 相关函数

- [GetPlayer3DTextLabelColor](GetPlayer3DTextLabelColor): 获取玩家 3D 文本标签颜色
