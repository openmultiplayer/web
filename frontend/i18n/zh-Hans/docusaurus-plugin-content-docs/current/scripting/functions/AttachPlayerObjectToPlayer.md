---
title: AttachPlayerObjectToPlayer
sidebar_label: AttachPlayerObjectToPlayer
description: 功能与AttachObjectToPlayer相同，但针对玩家创建的物体。
tags: ["玩家", "物体", "玩家物体"]
---

## 描述

功能与[AttachObjectToPlayer](AttachObjectToPlayer)相同，但针对玩家创建的物体。

| 名称            | 说明                        |
| --------------- | --------------------------- |
| playerid        | 与物体关联的玩家 ID         |
| objectid        | 要附加的玩家物体 ID         |
| parentid        | 目标玩家 ID                 |
| Float:offsetX   | 玩家与物体在 X 轴方向的距离 |
| Float:offsetY   | 玩家与物体在 Y 轴方向的距离 |
| Float:offsetZ   | 玩家与物体在 Z 轴方向的距离 |
| Float:rotationX | X 轴旋转角度                |
| Float:rotationY | Y 轴旋转角度                |
| Float:rotationZ | Z 轴旋转角度                |

## 返回值

本函数没有特定返回值。

## 示例

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerSpawn(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    AttachPlayerObjectToPlayer(playerid, gPlayerObject[playerid], other_playerid, 1.5, 0.5, 0.0, 0.0, 1.5, 2.0);
    return 1;
}
```

## 注意事项

:::warning

此函数已在 SA-MP 0.3 版本中移除

:::

## 相关函数

- [CreatePlayerObject](CreatePlayerObject): 为单个玩家创建物体
- [DestroyPlayerObject](DestroyPlayerObject): 销毁玩家物体
- [IsValidPlayerObject](IsValidPlayerObject): 验证玩家物体有效性
- [MovePlayerObject](MovePlayerObject): 移动玩家物体
- [StopPlayerObject](StopPlayerObject): 停止玩家物体移动
- [SetPlayerObjectRot](SetPlayerObjectRot): 设置玩家物体旋转
- [GetPlayerObjectPos](GetPlayerObjectPos): 获取玩家物体坐标
- [SetPlayerObjectPos](SetPlayerObjectPos): 设置玩家物体坐标
- [GetPlayerObjectRot](GetPlayerObjectRot): 获取玩家物体旋转
- [SetPlayerAttachedObject](SetPlayerAttachedObject): 为玩家附加物体
- [RemovePlayerAttachedObject](RemovePlayerAttachedObject): 移除玩家附加的物体
- [IsPlayerAttachedObjectSlotUsed](IsPlayerAttachedObjectSlotUsed): 检测玩家附加物体槽位占用
- [CreateObject](CreateObject): 创建物体
- [DestroyObject](DestroyObject): 销毁物体
- [IsValidObject](IsValidObject): 验证物体有效性
- [MoveObject](MoveObject): 移动物体
- [StopObject](StopObject): 停止物体移动
- [SetObjectPos](SetObjectPos): 设置物体坐标
- [SetObjectRot](SetObjectRot): 设置物体旋转
- [GetObjectPos](GetObjectPos): 获取物体坐标
- [GetObjectRot](GetObjectRot): 获取物体旋转
- [AttachObjectToPlayer](AttachObjectToPlayer): 将物体附加到玩家
