---
title: AttachObjectToPlayer
sidebar_label: AttachObjectToPlayer
description: 将物体附加到玩家身上。
tags: ["物体", "玩家"]
---

## 描述

将物体附加到玩家身上。

| 名称            | 说明                          |
| --------------- | ----------------------------- |
| objectid        | 要附加的物体 ID               |
| parentid        | 要附加的玩家 ID               |
| Float:offsetX   | 玩家坐标的 X 轴偏移量         |
| Float:offsetY   | 玩家坐标的 Y 轴偏移量         |
| Float:offsetZ   | 玩家坐标的 Z 轴偏移量         |
| Float:rotationX | 物体相对于玩家 X 轴的旋转角度 |
| Float:rotationY | 物体相对于玩家 Y 轴的旋转角度 |
| Float:rotationZ | 物体相对于玩家 Z 轴的旋转角度 |

## 返回值

本函数始终返回 **false**。

## 示例

```c
new gMyObject;
gMyObject = CreateObject(19341, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
AttachObjectToPlayer(gMyObject, playerid, 1.5, 0.5, 0.0, 0.0, 1.5, 2);
```

## 相关函数

- [AttachObjectToVehicle](AttachObjectToVehicle): 将物体附加到车辆
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
