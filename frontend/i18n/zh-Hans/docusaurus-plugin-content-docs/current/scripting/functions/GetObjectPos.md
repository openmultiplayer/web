---
title: GetObjectPos
sidebar_label: GetObjectPos
description: 获取物体的当前位置
tags: ["物体"]
---

## 描述

获取物体的当前位置。

| 名称     | 描述                                |
| -------- | ----------------------------------- |
| objectid | 需要获取位置的物体 ID               |
| &Float:x | 存储 X 坐标的浮点变量，通过引用传递 |
| &Float:y | 存储 Y 坐标的浮点变量，通过引用传递 |
| &Float:z | 存储 Z 坐标的浮点变量，通过引用传递 |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（指定物体不存在）

## 示例代码

```c
public OnGameModeInit()
{
    new objectid = CreateObject(2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    new Float:x, Float:y, Float:z;
    GetObjectPos(objectid, x, y, z);
    // x = 2001.195679
    // y = 1547.113892
    // z = 14.283400
    return 1;
}
```

## 相关函数

- [CreateObject](CreateObject): 创建物体
- [DestroyObject](DestroyObject): 销毁物体
- [IsValidObject](IsValidObject): 验证物体是否有效
- [MoveObject](MoveObject): 移动物体
- [StopObject](StopObject): 停止物体移动
- [SetObjectPos](SetObjectPos): 设置物体位置
- [SetObjectRot](SetObjectRot): 设置物体旋转
- [GetObjectRot](GetObjectRot): 获取物体旋转参数
- [AttachObjectToPlayer](AttachObjectToPlayer): 将物体附加到玩家
- [CreatePlayerObject](CreatePlayerObject): 创建玩家专属物体
- [DestroyPlayerObject](DestroyPlayerObject): 销毁玩家物体
- [IsValidPlayerObject](IsValidPlayerObject): 验证玩家物体是否有效
- [MovePlayerObject](MovePlayerObject): 移动玩家物体
- [StopPlayerObject](StopPlayerObject): 停止玩家物体移动
- [SetPlayerObjectPos](SetPlayerObjectPos): 设置玩家物体位置
- [SetPlayerObjectRot](SetPlayerObjectRot): 设置玩家物体旋转
- [GetPlayerObjectPos](GetPlayerObjectPos): 获取玩家物体位置
- [GetPlayerObjectRot](GetPlayerObjectRot): 获取玩家物体旋转参数
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): 将玩家物体附加到其他玩家
