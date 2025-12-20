---
title: GetPlayer3DTextLabelPos
sidebar_label: GetPlayer3DTextLabelPos
description: 获取玩家3D文本标签的位置
tags: ["玩家", "3D文本标签"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家 3D 文本标签的位置。

| 参数                | 说明                                |
| ------------------- | ----------------------------------- |
| playerid            | 玩家的 ID                           |
| PlayerText3D:textid | 需要获取位置的玩家 3D 文本标签 ID   |
| &Float:x            | 存储 X 坐标的浮点变量，通过引用传递 |
| &Float:y            | 存储 Y 坐标的浮点变量，通过引用传递 |
| &Float:z            | 存储 Z 坐标的浮点变量，通过引用传递 |

## 示例代码

```c
new PlayerText3D:playerTextId;
new Float:playerX, Float:playerY, Float:playerZ;

GetPlayerPos(playerid, playerX, playerY, playerZ);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, playerX, playerY, playerZ, 40.0);

new Float:x, Float:y, Float:z;
GetPlayer3DTextLabelPos(playerid, playerTextId, x, y, z);
```

## 相关函数

- [Get3DTextLabelPos](Get3DTextLabelPos): 获取 3D 文本标签的位置
