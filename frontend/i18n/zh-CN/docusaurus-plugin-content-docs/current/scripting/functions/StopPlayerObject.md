---
title: StopPlayerObject
sidebar_label: StopPlayerObject
description: 停止正在移动的玩家物体（需配合MovePlayerObject使用后生效）。
tags: ["玩家"]
---

## 描述

停止通过 MovePlayerObject 移动的玩家物体。

## 参数

| 参数     | 说明                      |
| -------- | ------------------------- |
| playerid | 目标玩家的 ID。           |
| objectid | 要停止移动的玩家物体 ID。 |

## 返回值

此函数不返回特定值。

## 示例

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    MovePlayerObject(playerid, gPlayerObject[playerid], 2001.195679, 1547.113892, 10.000000, 2.0);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/stopobject", true) == 0)
    {
        StopPlayerObject(playerid, gPlayerObject[playerid]);
        return 1;
    }
    return 0;
}
```

## 相关函数

- [MovePlayerObject](MovePlayerObject): 移动玩家物体
- [CreatePlayerObject](CreatePlayerObject): 创建玩家专属物体
- [DestroyPlayerObject](DestroyPlayerObject): 销毁玩家物体
- [IsValidPlayerObject](IsValidPlayerObject): 验证玩家物体有效性
- [IsPlayerObjectMoving](IsPlayerObjectMoving): 检测玩家物体是否在移动
- [SetPlayerObjectPos](SetPlayerObjectPos): 设置玩家物体位置
- [SetPlayerObjectRot](SetPlayerObjectRot): 设置玩家物体旋转角度
- [GetPlayerObjectPos](GetPlayerObjectPos): 获取玩家物体坐标
- [GetPlayerObjectRot](GetPlayerObjectRot): 获取玩家物体旋转角度
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): 将玩家物体附加到玩家
- [CreateObject](CreateObject): 创建全局可见物体
- [DestroyObject](DestroyObject): 销毁全局物体
- [IsValidObject](IsValidObject): 验证全局物体有效性
- [MoveObject](MoveObject): 移动全局物体
- [IsObjectMoving](IsObjectMoving): 检测全局物体是否在移动
- [StopObject](StopObject): 停止全局物体移动
- [SetObjectPos](SetObjectPos): 设置全局物体位置
- [SetObjectRot](SetObjectRot): 设置全局物体旋转角度
- [GetObjectPos](GetObjectPos): 获取全局物体坐标
- [GetObjectRot](GetObjectRot): 获取全局物体旋转角度
- [AttachObjectToPlayer](AttachObjectToPlayer): 将全局物体附加到玩家
