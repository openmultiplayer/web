---
title: GetObjectRot
sidebar_label: GetObjectRot
description: 使用此函数获取物体当前的旋转角度
tags: ["物体"]
---

## 描述

使用此函数获取物体当前的旋转角度。旋转参数通过引用方式存储在三个变量 rotationX/rotationY/rotationZ 中。

| 参数             | 说明                                      |
| ---------------- | ----------------------------------------- |
| objectid         | 需要获取旋转参数的物体 ID                 |
| &Float:rotationX | 存储 X 轴旋转角度的浮点变量，通过引用传递 |
| &Float:rotationY | 存储 Y 轴旋转角度的浮点变量，通过引用传递 |
| &Float:rotationZ | 存储 Z 轴旋转角度的浮点变量，通过引用传递 |

## 返回值

物体的旋转角度通过引用变量返回，不通过函数返回值。

## 示例代码

```c
public OnGameModeInit()
{
    new objectid = CreateObject(652, 732.32690, 1940.21289, 4.27340, 357.00000, 0.00000, -76.00000);

    new Float:rotationX, Float:rotationY, Float:rotationZ;
    GetObjectRot(objectid, rotationX, rotationY, rotationZ);
    // rotationX = 357.00000
    // rotationY = 0.00000
    // rotationZ = -76.00000
    return 1;
}
```

## 相关函数

- [GetObjectPos](GetObjectPos): 获取物体位置
- [CreateObject](CreateObject): 创建物体
- [DestroyObject](DestroyObject): 销毁物体
- [IsValidObject](IsValidObject): 验证物体有效性
- [MoveObject](MoveObject): 移动物体
- [StopObject](StopObject): 停止物体移动
- [SetObjectPos](SetObjectPos): 设置物体位置
- [SetObjectRot](SetObjectRot): 设置物体旋转
- [AttachObjectToPlayer](AttachObjectToPlayer): 将物体附加到玩家
- [CreatePlayerObject](CreatePlayerObject): 创建玩家专属物体
- [DestroyPlayerObject](DestroyPlayerObject): 销毁玩家物体
- [IsValidPlayerObject](IsValidPlayerObject): 验证玩家物体有效性
- [MovePlayerObject](MovePlayerObject): 移动玩家物体
- [StopPlayerObject](StopPlayerObject): 停止玩家物体移动
- [SetPlayerObjectPos](SetPlayerObjectPos): 设置玩家物体位置
- [SetPlayerObjectRot](SetPlayerObjectRot): 设置玩家物体旋转
- [GetPlayerObjectPos](GetPlayerObjectPos): 获取玩家物体位置
- [GetPlayerObjectRot](GetPlayerObjectRot): 获取玩家物体旋转角度
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): 将玩家物体附加到其他玩家
