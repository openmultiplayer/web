---
title: SetPlayer3DTextLabelVirtualWorld
sidebar_label: SetPlayer3DTextLabelVirtualWorld
description: 设置玩家3D文本标签的虚拟世界ID
tags: ["玩家", "3D文本标签"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

设置玩家专属 3D 文本标签的虚拟世界 ID

| 参数名              | 说明                                |
| ------------------- | ----------------------------------- |
| playerid            | 要设置的目标玩家 ID                 |
| PlayerText3D:textid | 要设置的玩家专属 3D 文本标签 ID     |
| virtualWorld        | 设置该 3D 文本标签可见的虚拟世界 ID |

## 示例

```c
new PlayerText3D:playerTextId;
new Float:X, Float:Y, Float:Z;

GetPlayerPos(playerid, X, Y, Z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, X, Y, Z, 40.0);

SetPlayer3DTextLabelVirtualWorld(playerid, playerTextId, 60);
```

## 注意事项

:::warning

玩家专属 3D 文本标签暂不支持虚拟世界功能
本函数实际无效且存在底层实现缺陷！

:::

## 相关函数

- [GetPlayer3DTextLabelVirtualWorld](GetPlayer3DTextLabelVirtualWorld): 获取玩家 3D 文本标签的虚拟世界 ID
- [Set3DTextLabelVirtualWorld](Set3DTextLabelVirtualWorld): 设置全局 3D 文本标签的虚拟世界 ID
