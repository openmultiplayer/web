---
title: GetPlayer3DTextLabelDrawDistance
sidebar_label: GetPlayer3DTextLabelDrawDistance
description: 获取玩家3D文本标签的绘制距离
tags: ["玩家", "3D文本标签"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家 3D 文本标签的绘制距离。

| 参数                | 说明                                  |
| ------------------- | ------------------------------------- |
| playerid            | 玩家的 ID                             |
| PlayerText3D:textid | 需要获取绘制距离的玩家 3D 文本标签 ID |

## 返回值

以浮点数形式返回玩家 3D 文本标签的绘制距离。

## 示例代码

```c
new PlayerText3D:playerTextId;
new Float:x, Float:y, Float:z;
new Float:drawDistance;

GetPlayerPos(playerid, x, y, z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, x, y, z, 40.0);

drawDistance = GetPlayer3DTextLabelDrawDistance(playerid, playerTextId);
// drawDistance = 40.0
```

## 相关函数

- [SetPlayer3DTextLabelDrawDistance](SetPlayer3DTextLabelDrawDistance): 设置玩家 3D 文本标签的绘制距离
- [Get3DTextLabelDrawDistance](Get3DTextLabelDrawDistance): 获取 3D 文本标签的绘制距离
