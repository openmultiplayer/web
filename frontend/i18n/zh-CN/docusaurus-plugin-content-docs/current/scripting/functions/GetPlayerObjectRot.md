---
title: GetPlayerObjectRot
sidebar_label: GetPlayerObjectRot
description: 获取玩家物体的旋转角度
tags: ["玩家", "物体", "玩家物体"]
---

## 描述

此函数用于获取玩家物体的当前旋转角度。旋转角度通过引用方式存储在三个 rotationX/rotationY/rotationZ 变量中。

| 参数             | 说明                                          |
| ---------------- | --------------------------------------------- |
| playerid         | 关联该物体的玩家 ID                           |
| objectid         | 需要获取旋转角度的物体 ID                     |
| &Float:rotationX | 存储 X 轴旋转角度的浮点型变量（通过引用传递） |
| &Float:rotationY | 存储 Y 轴旋转角度的浮点型变量（通过引用传递） |
| &Float:rotationZ | 存储 Z 轴旋转角度的浮点型变量（通过引用传递） |

## 返回值

物体的旋转角度将被存储在指定的变量中

## 示例代码

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    new Float:rotationX, Float:rotationY, Float:rotationZ;
    GetPlayerObjectRot(playerid, gPlayerObject[playerid], rotationX, rotationY, rotationZ);
    // rotationX = 0.0
    // rotationY = 0.0
    // rotationZ = 96.0
    return 1;
}
```

## 相关函数

- [CreatePlayerObject](CreatePlayerObject): 为单个玩家创建物体
- [DestroyPlayerObject](DestroyPlayerObject): 销毁玩家物体
- [IsValidPlayerObject](IsValidPlayerObject): 验证玩家物体是否有效
- [MovePlayerObject](MovePlayerObject): 移动玩家物体
- [StopPlayerObject](StopPlayerObject): 停止玩家物体移动
- [SetPlayerObjectPos](SetPlayerObjectPos): 设置玩家物体位置
- [SetPlayerObjectRot](SetPlayerObjectRot): 设置玩家物体旋转角度
- [GetPlayerObjectPos](GetPlayerObjectPos): 获取玩家物体位置
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): 将玩家物体附加到玩家身上
- [CreateObject](CreateObject): 创建全局物体
- [DestroyObject](DestroyObject): 销毁全局物体
- [IsValidObject](IsValidObject): 验证全局物体是否有效
- [MoveObject](MoveObject): 移动全局物体
- [StopObject](StopObject): 停止全局物体移动
- [SetObjectPos](SetObjectPos): 设置全局物体位置
- [SetObjectRot](SetObjectRot): 设置全局物体旋转角度
- [GetObjectPos](GetObjectPos): 获取全局物体位置
- [GetObjectRot](GetObjectRot): 获取全局物体旋转角度
- [AttachObjectToPlayer](AttachObjectToPlayer): 将全局物体附加到玩家身上
