---
title: IsPlayerObjectMoving
sidebar_label: IsPlayerObjectMoving
description: 检测指定玩家物体是否处于移动中
tags: ["玩家", "物体", "玩家物体"]
---

## 描述

检测指定玩家物体是否处于移动状态

| 参数名   | 说明                |
| -------- | ------------------- |
| playerid | 需检测的玩家 ID     |
| objectid | 待检测的玩家物体 ID |

## 返回值

**1** - 玩家物体正在移动

**0** - 玩家物体处于静止

## 示例代码

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.2834, 0.0, 0.0, 96.0);

    MovePlayerObject(playerid, gPlayerObject[playerid], 2001.195679, 1547.113892, 10.0, 2.0);

	if (IsPlayerObjectMoving(playerid, gPlayerObject[playerid]))
	{
		StopPlayerObject(playerid, gPlayerObject[playerid]);
	}
    return 1;
}
```

## 相关函数

- [CreatePlayerObject](CreatePlayerObject): 创建玩家专属物体
- [DestroyPlayerObject](DestroyPlayerObject): 销毁玩家物体
- [IsValidPlayerObject](IsValidPlayerObject): 验证玩家物体有效性
- [MovePlayerObject](MovePlayerObject): 移动玩家物体
- [StopPlayerObject](StopPlayerObject): 停止玩家物体移动
- [SetPlayerObjectPos](SetPlayerObjectPos): 设置玩家物体坐标
- [SetPlayerObjectRot](SetPlayerObjectRot): 设置玩家物体旋转角度
- [GetPlayerObjectPos](GetPlayerObjectPos): 获取玩家物体坐标
- [GetPlayerObjectRot](GetPlayerObjectRot): 获取玩家物体旋转角度
- [AttachPlayerObjectToPlayer](AttachObjectToPlayer): 将玩家物体附加至玩家
- [CreateObject](CreateObject): 创建物体
- [DestroyObject](DestroyObject): 销毁物体
- [IsValidObject](IsValidObject): 验证物体有效性
- [MoveObject](MoveObject): 移动物体
- [IsObjectMoving](IsObjectMoving): 检测物体移动状态
- [StopObject](StopObject): 停止物体移动
- [SetObjectPos](SetObjectPos): 设置物体坐标
- [SetObjectRot](SetObjectRot): 设置物体旋转角度
- [GetObjectPos](GetObjectPos): 获取物体坐标
- [GetObjectRot](GetObjectRot): 获取物体旋转角度
- [AttachObjectToPlayer](AttachObjectToPlayer): 将物体附加至玩家

## 相关回调

- [OnPlayerObjectMoved](../callbacks/OnPlayerObjectMoved): 当玩家物体停止移动时触发
