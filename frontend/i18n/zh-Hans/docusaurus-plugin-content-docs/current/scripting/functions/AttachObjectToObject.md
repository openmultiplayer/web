---
title: AttachObjectToObject
sidebar_label: AttachObjectToObject
description: 将物体附加到其他物体上。
tags: ["物体"]
---

## 描述

您可以使用此功能将物体附加到其他物体上。被附加的物体会跟随主物体移动。

| 名称              | 说明                                                        |
| ----------------- | ----------------------------------------------------------- |
| objectid          | 要附加的物体 ID                                             |
| parentid          | 目标物体 ID                                                 |
| Float:offsetX     | 主物体与附加物体在 X 轴方向的距离                           |
| Float:offsetY     | 主物体与附加物体在 Y 轴方向的距离                           |
| Float:offsetZ     | 主物体与附加物体在 Z 轴方向的距离                           |
| Float:rotationX   | 附加物体相对于主物体 X 轴的旋转角度                         |
| Float:rotationY   | 附加物体相对于主物体 Y 轴的旋转角度                         |
| Float:rotationZ   | 附加物体相对于主物体 Z 轴的旋转角度                         |
| bool:syncRotation | 是否同步旋转（设为`false`时附加物体的旋转不会随主物体改变） |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（第一个物体不存在，不检测第二个物体是否存在）

## 示例

```c
new gObjectId = CreateObject(...);
new gAttachToId = CreateObject(...);

AttachObjectToObject(gObjectId, gAttachToId, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, true);
```

## 注意事项

:::tip

在附加操作前必须确保两个物体都已创建

:::

:::tip

SA-MP 原生版本没有玩家物体版的此函数
但 open.mp 提供了[AttachPlayerObjectToObject](AttachPlayerObjectToObject)

:::

## 相关函数

- [AttachObjectToPlayer](AttachObjectToPlayer): 将物体附加到玩家
- [AttachObjectToVehicle](AttachObjectToVehicle): 将物体附加到车辆
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
