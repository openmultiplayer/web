---
title: GetPlayer3DTextLabelColour
sidebar_label: GetPlayer3DTextLabelColour
description: 获取玩家3D文本标签的颜色
tags: ["玩家", "3D文本标签"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家 3D 文本标签的颜色。

| 名称                | 描述                              |
| ------------------- | --------------------------------- |
| playerid            | 玩家的 ID                         |
| PlayerText3D:textid | 需要获取颜色的玩家 3D 文本标签 ID |

## 返回值

返回玩家 3D 文本标签的颜色值（ARGB 格式）。

## 示例代码

```c
new PlayerText3D:playerTextId;
new Float:x, Float:y, Float:z;
new colour;

GetPlayerPos(playerid, x, y, z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, x, y, z, 40.0);

colour = GetPlayer3DTextLabelColour(playerid, playerTextId);
// colour = 0x008080FF
```

## 相关函数

- [Get3DTextLabelColour](Get3DTextLabelColour): 获取 3D 文本标签颜色
