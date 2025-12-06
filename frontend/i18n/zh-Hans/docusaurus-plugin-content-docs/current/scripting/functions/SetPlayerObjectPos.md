---
title: SetPlayerObjectPos
sidebar_label: SetPlayerObjectPos
description: 设置玩家物体到指定坐标位置。
tags: ["玩家", "物体", "玩家物体"]
---

## 描述

设置玩家物体到指定坐标位置。

| 参数名   | 说明                                      |
| -------- | ----------------------------------------- |
| playerid | 目标玩家 ID                               |
| objectid | 玩家物体 ID（由 CreatePlayerObject 创建） |
| Float:x  | 目标位置 X 坐标                           |
| Float:y  | 目标位置 Y 坐标                           |
| Float:z  | 目标位置 Z 坐标                           |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（玩家或物体不存在）

## 示例代码

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);
    return 1;
}

// 后续操作
SetPlayerObjectPos(playerid, gPlayerObject[playerid], 2001.195679, 1547.113892, 14.283400);
```

## 相关函数

- [CreatePlayerObject](CreatePlayerObject): 创建玩家专属物体
- [DestroyPlayerObject](DestroyPlayerObject): 销毁玩家物体
- [IsValidPlayerObject](IsValidPlayerObject): 验证玩家物体有效性
- [MovePlayerObject](MovePlayerObject): 移动玩家物体
- [StopPlayerObject](StopPlayerObject): 停止玩家物体移动
- [SetPlayerObjectRot](SetPlayerObjectRot): 设置玩家物体旋转角度
- [GetPlayerObjectPos](GetPlayerObjectPos): 获取玩家物体坐标
- [GetPlayerObjectRot](GetPlayerObjectRot): 获取玩家物体旋转角度
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): 将玩家物体附加到玩家
- [CreateObject](CreateObject): 创建全局物体
- [DestroyObject](DestroyObject): 销毁全局物体
- [IsValidObject](IsValidObject): 验证全局物体有效性
- [MoveObject](MoveObject): 移动全局物体
- [StopObject](StopObject): 停止全局物体移动
- [SetObjectPos](SetObjectPos): 设置全局物体坐标
- [SetObjectRot](SetObjectRot): 设置全局物体旋转角度
- [GetObjectPos](GetObjectPos): 获取全局物体坐标
- [GetObjectRot](GetObjectRot): 获取全局物体旋转角度
- [AttachObjectToPlayer](AttachObjectToPlayer): 将全局物体附加到玩家
