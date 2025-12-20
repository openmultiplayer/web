---
title: SetObjectRot
sidebar_label: SetObjectRot
description: 设置物体在三个轴（X/Y/Z）上的旋转角度
tags: ["物体"]
---

## 描述

设置物体在三个轴（X/Y/Z）上的旋转角度。

| 参数            | 说明                     |
| --------------- | ------------------------ |
| objectid        | 要设置旋转的物体 ID      |
| Float:rotationX | X 轴旋转角度（单位：度） |
| Float:rotationY | Y 轴旋转角度（单位：度） |
| Float:rotationZ | Z 轴旋转角度（单位：度） |

## 返回值

此函数总是返回 1，即使指定的物体不存在也会返回成功

## 示例代码

```c
public OnGameModeInit()
{
    new objectid = CreateObject(2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    SetObjectRot(objectid, 0.0, 0.0, 180.0); // 将物体Z轴旋转调整为180度
    return 1;
}
```

## 相关函数

- [CreateObject](CreateObject): 创建物体
- [DestroyObject](DestroyObject): 销毁物体
- [IsValidObject](IsValidObject): 验证物体有效性
- [MoveObject](MoveObject): 移动物体
- [StopObject](StopObject): 停止物体移动
- [SetObjectPos](SetObjectPos): 设置物体坐标位置
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
