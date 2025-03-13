---
title: AttachObjectToVehicle
sidebar_label: AttachObjectToVehicle
description: 将物体附加到车辆上。
tags: ["物体", "车辆"]
---

## 描述

将物体附加到车辆上。

| 名称            | 说明                                                |
| --------------- | --------------------------------------------------- |
| objectid        | 要附加的物体 ID（必须是已创建的物体 ID，非模型 ID） |
| parentid        | 目标车辆 ID                                         |
| Float:offsetX   | 车辆坐标系的 X 轴偏移量                             |
| Float:offsetY   | 车辆坐标系的 Y 轴偏移量                             |
| Float:offsetZ   | 车辆坐标系的 Z 轴偏移量                             |
| Float:rotationX | 物体 X 轴旋转偏移量                                 |
| Float:rotationY | 物体 Y 轴旋转偏移量                                 |
| Float:rotationZ | 物体 Z 轴旋转偏移量                                 |

## 返回值

本函数没有特定返回值。

## 示例

```c
new objectid = CreateObject(...);
new vehicleid = GetPlayerVehicleID(playerid);
AttachObjectToVehicle(objectid, vehicleid, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0);
```

## 注意事项

:::tip

必须预先创建物体

:::

:::warning

当车辆被销毁或重置时，附加物体不会随之销毁，它们会保持在车辆消失的位置静止，并在新车辆占用该 ID 时重新附加

:::

## 相关函数

- [AttachObjectToPlayer](AttachObjectToPlayer): 将物体附加到玩家
- [AttachObjectToObject](AttachObjectToObject): 将物体附加到物体
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): 将玩家物体附加到玩家
- [CreateObject](CreateObject): 创建物体
- [DestroyObject](DestroyObject): 销毁物体
- [IsValidObject](IsValidObject): 验证物体有效性
- [MoveObject](MoveObject): 移动物体
- [StopObject](StopObject): 停止物体移动
- [SetObjectPos](SetObjectPos): 设置物体坐标
- [SetObjectRot](SetObjectRot): 设置物体旋转
- [GetObjectPos](GetObjectPos): 获取物体坐标
- [GetObjectRot](GetObjectRot): 获取物体旋转
- [CreatePlayerObject](CreatePlayerObject): 为单个玩家创建物体
- [DestroyPlayerObject](DestroyPlayerObject): 销毁玩家物体
- [IsValidPlayerObject](IsValidPlayerObject): 验证玩家物体有效性
- [MovePlayerObject](MovePlayerObject): 移动玩家物体
- [StopPlayerObject](StopPlayerObject): 停止玩家物体移动
- [SetPlayerObjectPos](SetPlayerObjectPos): 设置玩家物体坐标
- [SetPlayerObjectRot](SetPlayerObjectRot): 设置玩家物体旋转
- [GetPlayerObjectPos](GetPlayerObjectPos): 获取玩家物体坐标
- [GetPlayerObjectRot](GetPlayerObjectRot): 获取玩家物体旋转
