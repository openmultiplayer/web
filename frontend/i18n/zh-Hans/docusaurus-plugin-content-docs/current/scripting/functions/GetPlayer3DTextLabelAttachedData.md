---
title: GetPlayer3DTextLabelAttachedData
sidebar_label: GetPlayer3DTextLabelAttachedData
description: 获取玩家3D文本标签的附加数据
tags: ["玩家", "3D文本标签"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家 3D 文本标签的附加数据。

| 参数                | 说明                                  |
| ------------------- | ------------------------------------- |
| playerid            | 玩家的 ID                             |
| PlayerText3D:textid | 需要获取附加数据的玩家 3D 文本标签 ID |
| &parentPlayerid     | 存储父玩家 ID 的变量，通过引用传递    |
| &parentVehicleid    | 存储父车辆 ID 的变量，通过引用传递    |

## 示例代码

### 父玩家 ID 示例

```c
new PlayerText3D:playerTextId;
new Float:X, Float:Y, Float:Z;
new attachedplayer = 37; // 附加到ID为37的玩家

new parentPlayerid;
new parentVehicleid;

GetPlayerPos(playerid, X, Y, Z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, X, Y, Z, 40.0, attachedplayer, INVALID_VEHICLE_ID);

GetPlayer3DTextLabelAttachedData(playerid, playerTextId, parentPlayerid, parentVehicleid);
// `parentPlayerid` 将为 '37'
```

### 父车辆 ID 示例

```c
new PlayerText3D:gVehicle3dText[MAX_VEHICLES];
new gVehicleId;

new parentPlayerid;
new parentVehicleid;

gVehicleId = CreateVehicle(510, 0.0, 0.0, 15.0, 5, 0, 120);
gVehicle3dText[gVehicleId] = CreatePlayer3DTextLabel(playerid, "示例文本", 0xFF0000AA, 0.0, 0.0, 0.0, 50.0, INVALID_PLAYER_ID, gVehicleId);

GetPlayer3DTextLabelAttachedData(playerid, gVehicle3dText[gVehicleId], parentPlayerid, parentVehicleid);
// `parentVehicleid` 将等于 'gVehicleId' 的值
```

## 相关函数

- [Get3DTextLabelAttachedData](Get3DTextLabelAttachedData): 获取 3D 文本标签的附加数据
