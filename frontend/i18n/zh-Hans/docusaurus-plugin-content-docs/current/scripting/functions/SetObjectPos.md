---
title: SetObjectPos
sidebar_label: SetObjectPos
description: 设置物体的坐标位置
tags: ["物体"]
---

## 描述

设置物体的坐标位置

| 参数名   | 描述                                            |
| -------- | ----------------------------------------------- |
| objectid | 要设置位置的物体 ID（由 CreateObject 函数返回） |
| Float:x  | 物体新的 X 坐标值                               |
| Float:y  | 物体新的 Y 坐标值                               |
| Float:z  | 物体新的 Z 坐标值                               |

## 返回值

该函数总是返回 **true**，即使指定的物体不存在也会返回成功

## 示例代码

```c
SetObjectPos(objectid, 2001.195679, 1547.113892, 14.283400);
```

## 相关函数

- [CreateObject](CreateObject): 创建物体
- [DestroyObject](DestroyObject): 销毁物体
- [IsValidObject](IsValidObject): 验证物体是否有效
- [MoveObject](MoveObject): 移动物体
- [StopObject](StopObject): 停止物体移动
- [SetObjectRot](SetObjectRot): 设置物体旋转角度
- [GetObjectPos](GetObjectPos): 获取物体坐标
- [GetObjectRot](GetObjectRot): 获取物体旋转角度
- [AttachObjectToPlayer](AttachObjectToPlayer): 将物体附加到玩家身上
- [CreatePlayerObject](CreatePlayerObject): 创建玩家专属物体
- [DestroyPlayerObject](DestroyPlayerObject): 销毁玩家专属物体
- [IsValidPlayerObject](IsValidPlayerObject): 验证玩家专属物体有效性
- [MovePlayerObject](MovePlayerObject): 移动玩家专属物体
- [StopPlayerObject](StopPlayerObject): 停止玩家专属物体移动
- [SetPlayerObjectPos](SetPlayerObjectPos): 设置玩家专属物体坐标
- [SetPlayerObjectRot](SetPlayerObjectRot): 设置玩家专属物体旋转角度
- [GetPlayerObjectPos](GetPlayerObjectPos): 获取玩家专属物体坐标
- [GetPlayerObjectRot](GetPlayerObjectRot): 获取玩家专属物体旋转角度
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): 将玩家专属物体附加到其他玩家
