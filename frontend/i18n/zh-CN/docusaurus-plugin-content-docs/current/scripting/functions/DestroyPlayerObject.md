---
title: DestroyPlayerObject
sidebar_label: DestroyPlayerObject
description: 销毁通过 CreatePlayerObject 创建的玩家专属物体。
tags: ["玩家", "物体", "玩家专属物体"]
---

## 描述

销毁通过 [CreatePlayerObject](CreatePlayerObject) 创建的玩家专属物体。

| 名称     | 描述                                                  |
| -------- | ----------------------------------------------------- |
| playerid | 要销毁其玩家专属物体的玩家 ID                         |
| objectid | 要销毁的玩家专属物体 ID（由 CreatePlayerObject 返回） |

## 返回值

该函数不返回特定值。

## 示例

```c
public OnPlayerObjectMoved(playerid, objectid)
{
    DestroyPlayerObject(playerid, objectid);
    return 1;
}
```

## 相关函数

- [CreatePlayerObject](CreatePlayerObject): 创建玩家专属物体
- [IsValidPlayerObject](IsValidPlayerObject): 检查指定玩家专属物体是否有效
- [MovePlayerObject](MovePlayerObject): 移动玩家专属物体
- [StopPlayerObject](StopPlayerObject): 停止玩家专属物体移动
- [SetPlayerObjectPos](SetPlayerObjectPos): 设置玩家专属物体位置
- [SetPlayerObjectRot](SetPlayerObjectRot): 设置玩家专属物体旋转角度
- [GetPlayerObjectPos](GetPlayerObjectPos): 获取玩家专属物体位置
- [GetPlayerObjectRot](GetPlayerObjectRot): 获取玩家专属物体旋转角度
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): 将玩家专属物体附加到指定玩家
- [CreateObject](CreateObject): 创建全局物体
- [DestroyObject](DestroyObject): 销毁全局物体
- [IsValidObject](IsValidObject): 检查指定全局物体是否有效
- [MoveObject](MoveObject): 移动全局物体
- [StopObject](StopObject): 停止全局物体移动
- [SetObjectPos](SetObjectPos): 设置全局物体位置
- [SetObjectRot](SetObjectRot): 设置全局物体旋转角度
- [GetObjectPos](GetObjectPos): 获取全局物体位置
- [GetObjectRot](GetObjectRot): 获取全局物体旋转角度
- [AttachObjectToPlayer](AttachObjectToPlayer): 将全局物体附加到玩家
