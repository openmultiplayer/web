---
title: GetPlayer3DTextLabelDrawDist
sidebar_label: GetPlayer3DTextLabelDrawDist
description: 获取玩家3D文本标签的绘制距离
tags: ["玩家", "3D文本标签"]
---

:::warning

该函数已弃用，请使用 [GetPlayer3DTextLabelDrawDistance](GetPlayer3DTextLabelDrawDistance)。

:::

## 描述

获取玩家 3D 文本标签的绘制距离。

| 名称                | 描述                                  |
| ------------------- | ------------------------------------- |
| playerid            | 玩家的 ID                             |
| PlayerText3D:textid | 需要获取绘制距离的玩家 3D 文本标签 ID |

## 返回值

以浮点数形式返回玩家 3D 文本标签的绘制距离。

## 示例代码

```c
new PlayerText3D:playerTextId;
new Float:X, Float:Y, Float:Z;
new Float:drawDistance;

GetPlayerPos(playerid, X, Y, Z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, X, Y, Z, 40.0);

drawDistance = GetPlayer3DTextLabelDrawDist(playerid, playerTextId);
// drawDistance = 40.0
```

## 注意事项

:::tip

此函数是 [GetPlayer3DTextLabelDrawDistance](GetPlayer3DTextLabelDrawDistance) 的简写形式

:::

## 相关函数

- [SetPlayer3DTextLabelDrawDistance](SetPlayer3DTextLabelDrawDistance): 设置玩家 3D 文本标签的绘制距离
- [Get3DTextLabelDrawDistance](Get3DTextLabelDrawDistance): 获取 3D 文本标签的绘制距离
