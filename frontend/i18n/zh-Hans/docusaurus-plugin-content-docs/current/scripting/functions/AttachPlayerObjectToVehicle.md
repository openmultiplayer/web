---
title: AttachPlayerObjectToVehicle
sidebar_label: AttachPlayerObjectToVehicle
description: 将玩家物体附加到车辆上。
tags: ["玩家", "物体", "玩家物体", "车辆"]
---

## 描述

将玩家物体附加到车辆上。

| 名称            | 说明                    |
| --------------- | ----------------------- |
| playerid        | 创建该物体的所属玩家 ID |
| objectid        | 要附加的玩家物体 ID     |
| parentid        | 目标车辆 ID             |
| Float:offsetX   | X 轴位置偏移量          |
| Float:offsetY   | Y 轴位置偏移量          |
| Float:offsetZ   | Z 轴位置偏移量          |
| Float:rotationX | X 轴旋转偏移量          |
| Float:rotationY | Y 轴旋转偏移量          |
| Float:rotationZ | Z 轴旋转偏移量          |

## 返回值

本函数没有特定返回值。

## 示例

```c
public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER) // 玩家进入车辆时
    {
        // 附加巨型奶牛模型
        new cowObject = CreatePlayerObject(playerid, 16442, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
        new vehicleid = GetPlayerVehicleID(playerid);

        AttachPlayerObjectToVehicle(playerid, cowObject, vehicleid, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0);
    }
    return 1;
}
```

## 注意事项

:::tip

在附加操作前必须创建物体

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
- [AttachObjectToPlayer](AttachObjectToPlayer): 将物体附加到玩家
