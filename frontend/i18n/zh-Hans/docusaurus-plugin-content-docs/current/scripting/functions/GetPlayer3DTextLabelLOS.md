---
title: GetPlayer3DTextLabelLOS
sidebar_label: GetPlayer3DTextLabelLOS
description: 获取玩家3D文本标签的视线检测状态
tags: ["玩家", "3D文本标签"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家 3D 文本标签的视线检测状态。

| 名称                | 描述                                      |
| ------------------- | ----------------------------------------- |
| playerid            | 玩家的 ID                                 |
| PlayerText3D:textid | 需要获取视线检测状态的玩家 3D 文本标签 ID |

## 返回值

返回表示玩家 3D 文本标签视线检测状态的布尔值（false/true）。

## 示例代码

```c
new PlayerText3D:playerTextId;
new Float:X, Float:Y, Float:Z;
new bool:testLOS;

GetPlayerPos(playerid, X, Y, Z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, X, Y, Z, 40.0, INVALID_PLAYER_ID, INVALID_VEHICLE_ID, true);

testLOS = GetPlayer3DTextLabelLOS(playerid, playerTextId);
// testLOS = true（启用视线检测）
```

## 相关函数

- [SetPlayer3DTextLabelLOS](SetPlayer3DTextLabelLOS): 设置玩家 3D 文本标签的视线检测状态
- [Get3DTextLabelLOS](Get3DTextLabelLOS): 获取 3D 文本标签的视线检测状态
