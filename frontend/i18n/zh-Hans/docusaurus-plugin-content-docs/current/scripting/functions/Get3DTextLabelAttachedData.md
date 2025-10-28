---
title: Get3DTextLabelAttachedData
sidebar_label: Get3DTextLabelAttachedData
description: 获取3D文本标签的附加数据
tags: ["3D文本标签"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取 3D 文本标签的附加数据。

| 参数             | 说明                                     |
| ---------------- | ---------------------------------------- |
| Text3D:textid    | 要获取附加数据的 3D 文本标签 ID          |
| &parentPlayerid  | 用于存储父级玩家 ID 的变量（按引用传递） |
| &parentVehicleid | 用于存储父级车辆 ID 的变量（按引用传递） |

## 示例

**父级玩家 ID** 示例：

```c
new Text3D:gMyLabel;
new parentPlayerid;
new parentVehicleid;

gMyLabel = Create3DTextLabel("你好，我是新来的！", 0x008080FF, 30.0, 40.0, 50.0, 40.0, false);
Attach3DTextLabelToPlayer(gMyLabel, playerid, 0.0, 0.0, 0.7);

Get3DTextLabelAttachedData(gMyLabel, parentPlayerid, parentVehicleid);
```

**父级车辆 ID** 示例：

```c
new Text3D:gVehicle3dText[MAX_VEHICLES];
new gVehicleId;

new parentPlayerid;
new parentVehicleid;

gVehicleId = CreateVehicle(510, 0.0, 0.0, 15.0, 5, 0, 120);
gVehicle3dText[gVehicleId] = Create3DTextLabel("示例文本", 0xFF0000AA, 0.0, 0.0, 0.0, 50.0, 0, false);
Attach3DTextLabelToVehicle(gVehicle3dText[gVehicleId], gVehicleId, 0.0, 0.0, 2.0);

Get3DTextLabelAttachedData(gVehicle3dText[gVehicleId], parentPlayerid, parentVehicleid);
// 此时parentVehicleid将等于gVehicleId的值
```

## 相关函数

- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): 将 3D 文本标签附加到玩家身上
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): 将 3D 文本标签附加到车辆
- [GetPlayer3DTextLabelAttachedData](GetPlayer3DTextLabelAttachedData): 获取玩家 3D 文本标签的附加数据
