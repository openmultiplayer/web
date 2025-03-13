---
title: MovePlayerObject
sidebar_label: MovePlayerObject
description: 以指定速度移动玩家专属物体
tags: ["玩家"]
---

## 描述

用于移动玩家专属物体并支持旋转的函数。玩家/车辆将在物体移动时附着其上

| 参数            | 说明                      |
| --------------- | ------------------------- |
| playerid        | 目标玩家的 ID             |
| objectid        | 要移动的物体 ID           |
| Float:targetX   | 目标位置的 X 坐标         |
| Float:targetY   | 目标位置的 Y 坐标         |
| Float:targetZ   | 目标位置的 Z 坐标         |
| Float:speed     | 移动速度（单位：单位/秒） |
| Float:rotationX | 最终 X 轴旋转角度（可选） |
| Float:rotationY | 最终 Y 轴旋转角度（可选） |
| Float:rotationZ | 最终 Z 轴旋转角度（可选） |

## 返回值

物体移动所需的时间（以毫秒为单位）

## 示例

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    MovePlayerObject(playerid, gPlayerObject[playerid], 2001.195679, 1547.113892, 10.000000, 2.0);
    return 1;
}
```

## 注意事项

:::tip

当使用旋转参数时，物体必须发生位移（X/Y/Z 坐标变化）。系统将在物体开始移动至停止期间自动插值计算旋转角度

:::

## 相关函数

- [CreatePlayerObject](CreatePlayerObject): 创建玩家专属物体
- [DestroyPlayerObject](DestroyPlayerObject): 销毁玩家专属物体
- [IsValidPlayerObject](IsValidPlayerObject): 验证玩家物体有效性
- [StopPlayerObject](StopPlayerObject): 停止玩家物体移动
- [IsObjectMoving](IsObjectMoving): 检测物体是否移动
- [SetPlayerObjectPos](SetPlayerObjectPos): 设置玩家物体位置
- [SetPlayerObjectRot](SetPlayerObjectRot): 设置玩家物体旋转
- [GetPlayerObjectPos](GetPlayerObjectPos): 获取玩家物体坐标
- [GetPlayerObjectRot](GetPlayerObjectRot): 获取玩家物体旋转角度
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): 附加物体到其他玩家
- [CreateObject](CreateObject): 创建全局物体
- [DestroyObject](DestroyObject): 销毁全局物体
- [IsValidObject](IsValidObject): 验证全局物体有效性
- [MoveObject](MoveObject): 移动全局物体
- [StopObject](StopObject): 停止全局物体移动
- [IsPlayerObjectMoving](IsPlayerObjectMoving): 检测玩家物体移动状态
- [SetObjectPos](SetObjectPos): 设置全局物体位置
- [SetObjectRot](SetObjectRot): 设置全局物体旋转
- [GetObjectPos](GetObjectPos): 获取全局物体坐标
- [GetObjectRot](GetObjectRot): 获取全局物体旋转角度
- [AttachObjectToPlayer](AttachObjectToPlayer): 附加全局物体到玩家
