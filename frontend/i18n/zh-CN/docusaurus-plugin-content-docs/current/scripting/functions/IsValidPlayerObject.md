---
title: IsValidPlayerObject
sidebar_label: IsValidPlayerObject
description: 检测玩家专属物体有效性
tags: ["玩家", "物体", "玩家物体"]
---

## 描述

检测指定玩家的专属物体 ID 是否有效。

| 参数名   | 说明                |
| -------- | ------------------- |
| playerid | 要检测的玩家 ID     |
| objectid | 要检测的玩家物体 ID |

## 返回值

**true** - 玩家物体存在

**false** - 玩家物体不存在

## 示例代码

```c
new gPlayerObject[MAX_PLAYERS]; // 玩家物体存储数组

public OnPlayerConnect(playerid)
{
    // 在坐标(2001.19,1547.11,14.28)为玩家创建专属物体
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);
    return 1;
}

public OnPlayerDisconnect(playerid, reason)
{
	// 安全检测后删除物体
	if (IsValidPlayerObject(playerid, gPlayerObject[playerid]))
	{
		DestroyPlayerObject(playerid, gPlayerObject[playerid]);
	}
    return 1;
}
```

## 相关函数

- [CreatePlayerObject](CreatePlayerObject): 创建玩家专属物体
- [DestroyPlayerObject](DestroyPlayerObject): 销毁玩家物体
- [MovePlayerObject](MovePlayerObject): 移动玩家物体
- [StopPlayerObject](StopPlayerObject): 停止玩家物体移动
- [SetPlayerObjectPos](SetPlayerObjectPos): 设置玩家物体坐标
- [SetPlayerObjectRot](SetPlayerObjectRot): 设置玩家物体旋转角度
- [GetPlayerObjectPos](GetPlayerObjectPos): 获取玩家物体坐标
- [GetPlayerObjectRot](GetPlayerObjectRot): 获取玩家物体旋转角度
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): 将玩家物体附加到另一玩家

### 全局物体操作

- [CreateObject](CreateObject): 创建全局可见物体
- [DestroyObject](DestroyObject): 销毁全局物体
- [IsValidObject](IsValidObject): 检测全局物体有效性
- [MoveObject](MoveObject): 移动全局物体
- [StopObject](StopObject): 停止全局物体移动
- [SetObjectPos](SetObjectPos): 设置全局物体坐标
- [SetObjectRot](SetObjectRot): 设置全局物体旋转
- [GetObjectPos](GetObjectPos): 获取全局物体坐标
- [GetObjectRot](GetObjectRot): 获取全局物体旋转
- [AttachObjectToPlayer](AttachObjectToPlayer): 将全局物体附加到玩家
