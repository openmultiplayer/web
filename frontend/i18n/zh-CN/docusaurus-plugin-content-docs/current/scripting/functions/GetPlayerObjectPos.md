---
title: GetPlayerObjectPos
sidebar_label: GetPlayerObjectPos
description: 获取玩家物体的位置（通过CreatePlayerObject创建）
tags: ["玩家", "物体", "玩家物体"]
---

## 描述

获取玩家物体（通过[CreatePlayerObject](CreatePlayerObject)创建）的位置

| 参数名   | 说明                                    |
| -------- | --------------------------------------- |
| playerid | 需要获取物体位置的玩家 ID               |
| objectid | 需要获取位置的物体 ID                   |
| &Float:x | 存储 X 坐标的浮点型变量（通过引用传递） |
| &Float:y | 存储 Y 坐标的浮点型变量（通过引用传递） |
| &Float:z | 存储 Z 坐标的浮点型变量（通过引用传递） |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（玩家或物体不存在）

物体的位置会被存储在指定的变量中

## 示例代码

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    new Float:x, Float:y, Float:z;
    GetPlayerObjectPos(playerid, gPlayerObject[playerid], x, y, z);
    // x = 2001.195679
    // y = 1547.113892
    // z = 14.283400
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
- [GetPlayerObjectRot](GetPlayerObjectRot): 获取玩家物体旋转角度
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
