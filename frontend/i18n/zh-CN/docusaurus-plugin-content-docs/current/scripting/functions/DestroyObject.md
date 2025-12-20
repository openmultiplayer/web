---
title: DestroyObject
sidebar_label: DestroyObject
description: 销毁通过 CreateObject 创建的物体。
tags: ["物体"]
---

## 描述

销毁通过 CreateObject 创建的物体。

| 参数     | 说明                                  |
| -------- | ------------------------------------- |
| objectid | 要销毁的物体 ID，由 CreateObject 返回 |

## 返回值

此函数不返回特定值。

## 示例

```c
public OnObjectMoved(objectid)
{
    DestroyObject(objectid);
    return 1;
}
```

## 相关函数

- [CreateObject](CreateObject): 创建物体
- [IsValidObject](IsValidObject): 检查物体是否有效
- [MoveObject](MoveObject): 移动物体
- [StopObject](StopObject): 停止物体移动
- [SetObjectPos](SetObjectPos): 设置物体位置
- [SetObjectRot](SetObjectRot): 设置物体旋转角度
- [GetObjectPos](GetObjectPos): 获取物体位置
- [GetObjectRot](GetObjectRot): 获取物体旋转角度
- [AttachObjectToPlayer](AttachObjectToPlayer): 将物体附加到玩家
- [CreatePlayerObject](CreatePlayerObject): 创建玩家专属物体
- [DestroyPlayerObject](DestroyPlayerObject): 销毁玩家专属物体
- [IsValidPlayerObject](IsValidPlayerObject): 检查玩家专属物体是否有效
- [MovePlayerObject](MovePlayerObject): 移动玩家专属物体
- [StopPlayerObject](StopPlayerObject): 停止玩家专属物体移动
- [SetPlayerObjectPos](SetPlayerObjectPos): 设置玩家专属物体位置
- [SetPlayerObjectRot](SetPlayerObjectRot): 设置玩家专属物体旋转角度
- [GetPlayerObjectPos](GetPlayerObjectPos): 获取玩家专属物体位置
- [GetPlayerObjectRot](GetPlayerObjectRot): 获取玩家专属物体旋转角度
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): 将玩家专属物体附加到玩家
