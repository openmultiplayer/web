---
title: IsValidObject
sidebar_label: IsValidObject
description: 检测指定ID的物体是否存在。
tags: ["物体"]
---

## 描述

检测指定 ID 的游戏物体是否存在于服务器中。

| 参数名   | 说明            |
| -------- | --------------- |
| objectid | 要检测的物体 ID |

## 返回值

**true** - 物体存在

**false** - 物体不存在

## 示例代码

```c
new objectid; // 全局物体存储变量

public OnGameModeInit()
{
    objectid = CreateObject(2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);
    return 1;
}

public OnGameModeExit()
{
	if (IsValidObject(objectid))
	{
		DestroyObject(objectid); // 安全销毁物体
	}
    return 1;
}
```

## 注意事项

:::warning

本函数仅检测物体实例是否存在，不验证模型 ID 是否有效

:::

## 相关函数

- [CreateObject](CreateObject): 创建全局可见物体
- [DestroyObject](DestroyObject): 销毁全局物体
- [MoveObject](MoveObject): 移动物体
- [StopObject](StopObject): 停止物体移动
- [SetObjectPos](SetObjectPos): 设置物体坐标
- [SetObjectRot](SetObjectRot): 设置物体旋转角度
- [GetObjectPos](GetObjectPos): 获取物体坐标
- [GetObjectRot](GetObjectRot): 获取物体旋转角度
- [AttachObjectToPlayer](AttachObjectToPlayer): 将物体附加到玩家身上
- [CreatePlayerObject](CreatePlayerObject): 创建玩家专属物体
- [DestroyPlayerObject](DestroyPlayerObject): 销毁玩家物体
- [IsValidPlayerObject](IsValidPlayerObject): 检测玩家物体有效性
- [MovePlayerObject](MovePlayerObject): 移动玩家物体
- [StopPlayerObject](StopPlayerObject): 停止玩家物体移动
- [SetPlayerObjectPos](SetPlayerObjectPos): 设置玩家物体坐标
- [SetPlayerObjectRot](SetPlayerObjectRot): 设置玩家物体旋转
- [GetPlayerObjectPos](GetPlayerObjectPos): 获取玩家物体坐标
- [GetPlayerObjectRot](GetPlayerObjectRot): 获取玩家物体旋转
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): 将玩家物体附加到另一玩家
