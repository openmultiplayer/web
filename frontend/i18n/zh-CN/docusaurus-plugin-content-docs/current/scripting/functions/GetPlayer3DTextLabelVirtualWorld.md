---
title: GetPlayer3DTextLabelVirtualWorld
sidebar_label: GetPlayer3DTextLabelVirtualWorld
description: 获取玩家3D文本标签的虚拟世界ID
tags: ["玩家", "3D文本标签"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家 3D 文本标签的虚拟世界 ID。

| 参数                | 说明                                      |
| ------------------- | ----------------------------------------- |
| playerid            | 玩家的 ID                                 |
| PlayerText3D:textid | 需要获取虚拟世界 ID 的玩家 3D 文本标签 ID |

## 返回值

返回玩家 3D 文本标签的虚拟世界 ID。

## 示例代码

```c
new PlayerText3D:playerTextId;
new Float:X, Float:Y, Float:Z;
new worldid;

GetPlayerPos(playerid, X, Y, Z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, X, Y, Z, 40.0);

worldid = GetPlayer3DTextLabelVirtualWorld(playerid, playerTextId);
```

## 注意事项

:::warning

玩家 3D 文本标签本身不支持虚拟世界设置，
此函数实际返回的是玩家当前的虚拟世界 ID！

:::

## 相关函数

- [Get3DTextLabelVirtualWorld](Get3DTextLabelVirtualWorld): 获取 3D 文本标签的虚拟世界 ID
