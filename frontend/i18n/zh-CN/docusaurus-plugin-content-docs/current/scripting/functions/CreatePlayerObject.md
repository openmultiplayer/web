---
title: CreatePlayerObject
sidebar_label: CreatePlayerObject
description: 创建一个仅对单个玩家可见的物体。
tags: ["玩家", "物体", "玩家物体"]
---

## 描述

创建一个仅对单个玩家可见的物体。

| 参数               | 说明                                                                                   |
| ------------------ | -------------------------------------------------------------------------------------- |
| playerid           | 要为其创建物体的玩家 ID                                                                |
| modelid            | 要创建的模型 ID                                                                        |
| Float:x            | 物体创建的 X 坐标                                                                      |
| Float:y            | 物体创建的 Y 坐标                                                                      |
| Float:z            | 物体创建的 Z 坐标                                                                      |
| Float:rotationX    | 物体的 X 轴旋转角度                                                                    |
| Float:rotationY    | 物体的 Y 轴旋转角度                                                                    |
| Float:rotationZ    | 物体的 Z 轴旋转角度                                                                    |
| Float:drawDistance | 物体对玩家可见的渲染距离。0.0 将使物体在其默认距离渲染。省略此参数将使用默认渲染距离。 |

## 返回值

返回创建物体的 ID，若达到物体数量上限（MAX_OBJECTS）则返回 INVALID_OBJECT_ID。

## 示例

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    // 或者使用DrawDistance参数使其在尽可能远的距离可见：
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0, 300.0);
    return 1;
}

public OnPlayerDisconnect(playerid, reason)
{
    DestroyPlayerObject(playerid, gPlayerObject[playerid]);
    return 1;
}
```

## 相关函数

- [DestroyPlayerObject](DestroyPlayerObject): 销毁玩家物体
- [IsValidPlayerObject](IsValidPlayerObject): 验证玩家物体是否有效
- [MovePlayerObject](MovePlayerObject): 移动玩家物体
- [StopPlayerObject](StopPlayerObject): 停止玩家物体移动
- [SetPlayerObjectPos](SetPlayerObjectPos): 设置玩家物体位置
- [SetPlayerObjectRot](SetPlayerObjectRot): 设置玩家物体旋转角度
- [GetPlayerObjectPos](GetPlayerObjectPos): 获取玩家物体位置
- [GetPlayerObjectRot](GetPlayerObjectRot): 获取玩家物体旋转角度
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): 将玩家物体附加到玩家身上
- [CreateObject](CreateObject): 创建物体
- [DestroyObject](DestroyObject): 销毁物体
- [IsValidObject](IsValidObject): 验证物体是否有效
- [MoveObject](MoveObject): 移动物体
- [StopObject](StopObject): 停止物体移动
- [SetObjectPos](SetObjectPos): 设置物体位置
- [SetObjectRot](SetObjectRot): 设置物体旋转角度
- [GetObjectPos](GetObjectPos): 获取物体位置
- [GetObjectRot](GetObjectRot): 获取物体旋转角度
- [AttachObjectToPlayer](AttachObjectToPlayer): 将物体附加到玩家身上
