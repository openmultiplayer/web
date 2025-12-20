---
title: GetPlayer3DTextLabelColor
sidebar_label: GetPlayer3DTextLabelColor
description: 获取玩家3D文本标签的颜色
tags: ["玩家", "3D文本标签"]
---

:::warning

此函数已弃用，请使用 [GetPlayer3DTextLabelColour](GetPlayer3DTextLabelColour)。

:::

## 描述

获取玩家 3D 文本标签的颜色。

| 参数                | 说明                              |
| ------------------- | --------------------------------- |
| playerid            | 玩家的 ID                         |
| PlayerText3D:textid | 需要获取颜色的玩家 3D 文本标签 ID |

## 返回值

返回玩家 3D 文本标签的颜色值（ARGB 格式）。

## 示例代码

```c
new PlayerText3D:playerTextId;
new Float:X, Float:Y, Float:Z;
new color;

GetPlayerPos(playerid, X, Y, Z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, X, Y, Z, 40.0);

color = GetPlayer3DTextLabelColor(playerid, playerTextId);
// color = 0x008080FF
```

## 相关函数

- [Get3DTextLabelColor](Get3DTextLabelColor): 获取 3D 文本标签颜色
