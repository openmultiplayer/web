---
title: AttachPlayerObjectToObject
sidebar_label: AttachPlayerObjectToObject
description: 将玩家物体附加到其他玩家物体上。
tags: ["玩家", "物体", "玩家物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

你可以使用此函数将玩家物体附加到其他玩家物体上。被附加的物体会跟随主物体移动。

| 参数              | 说明                                                        |
| ----------------- | ----------------------------------------------------------- |
| playerid          | 玩家 ID                                                     |
| objectid          | 要附加的玩家物体 ID                                         |
| parentid          | 目标玩家物体 ID                                             |
| Float:OffsetX     | 主物体与附加物体在 X 轴方向的距离                           |
| Float:OffsetY     | 主物体与附加物体在 Y 轴方向的距离                           |
| Float:OffsetZ     | 主物体与附加物体在 Z 轴方向的距离                           |
| Float:RotX        | 附加物体相对于主物体 X 轴的旋转角度                         |
| Float:RotY        | 附加物体相对于主物体 Y 轴的旋转角度                         |
| Float:RotZ        | 附加物体相对于主物体 Z 轴的旋转角度                         |
| bool:syncRotation | 是否同步旋转（设为`false`时附加物体的旋转不会随主物体改变） |

## 返回值

`true` - 函数执行成功

`false` - 函数执行失败（第一个物体不存在，不检测第二个物体是否存在）

## 示例

```c
new objectid = CreatePlayerObject(...);
new parentid = CreatePlayerObject(...);

AttachPlayerObjectToObject(playerid, objectid, parentid, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, true);
```

## 注意事项

:::tip

在附加操作前必须确保两个物体都已创建

:::

## 相关函数

- [AttachObjectToObject](AttachObjectToObject): 将物体附加到其他物体
- [AttachObjectToPlayer](AttachObjectToPlayer): 将物体附加到玩家
- [AttachObjectToVehicle](AttachObjectToVehicle): 将物体附加到车辆
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): 将玩家物体附加到玩家
- [CreatePlayerObject](CreatePlayerObject): 为单个玩家创建物体
- [DestroyPlayerObject](DestroyPlayerObject): 销毁玩家物体
- [IsValidPlayerObject](IsValidPlayerObject): 验证玩家物体有效性
- [MovePlayerObject](MovePlayerObject): 移动玩家物体
- [StopPlayerObject](StopPlayerObject): 停止玩家物体移动
- [SetPlayerObjectPos](SetPlayerObjectPos): 设置玩家物体坐标
- [SetPlayerObjectRot](SetPlayerObjectRot): 设置玩家物体旋转
- [GetPlayerObjectPos](GetPlayerObjectPos): 获取玩家物体坐标
- [GetPlayerObjectRot](GetPlayerObjectRot): 获取玩家物体旋转
