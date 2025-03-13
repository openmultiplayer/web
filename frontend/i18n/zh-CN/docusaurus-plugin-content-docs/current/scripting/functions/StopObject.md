---
title: StopObject
sidebar_label: StopObject
description: 停止通过MoveObject移动的物体。
tags: ["物体"]
---

## 描述

停止通过[MoveObject](MoveObject)移动的物体。

| 参数名称 | 说明                |
| -------- | ------------------- |
| objectid | 要停止移动的物体 ID |

## 返回值

本函数不返回特定值。

## 示例代码

```c
new gAirportGate;

public OnGameModeInit()
{
    gAirportGate = CreateObject(980, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);

    MoveObject(gAirportGate, 0.0, 0.0, 15.0, 1.00);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/stopobject", true) == 0)
    {
        StopObject(gAirportGate);
        return 1;
    }
    return 0;
}
```

## 相关函数

- [CreateObject](CreateObject): 创建物体
- [DestroyObject](DestroyObject): 销毁物体
- [IsValidObject](IsValidObject): 验证物体有效性
- [MoveObject](MoveObject): 移动物体
- [SetObjectPos](SetObjectPos): 设置物体坐标
- [SetObjectRot](SetObjectRot): 设置物体旋转角度
- [GetObjectPos](GetObjectPos): 获取物体坐标
- [GetObjectRot](GetObjectRot): 获取物体旋转角度
- [AttachObjectToPlayer](AttachObjectToPlayer): 将物体附加到玩家
- [CreatePlayerObject](CreatePlayerObject): 创建玩家专属物体
- [DestroyPlayerObject](DestroyPlayerObject): 销毁玩家专属物体
- [IsValidPlayerObject](IsValidPlayerObject): 验证玩家物体有效性
- [MovePlayerObject](MovePlayerObject): 移动玩家专属物体
- [StopPlayerObject](StopPlayerObject): 停止玩家物体移动
- [SetPlayerObjectPos](SetPlayerObjectPos): 设置玩家物体坐标
- [SetPlayerObjectRot](SetPlayerObjectRot): 设置玩家物体旋转
- [GetPlayerObjectPos](GetPlayerObjectPos): 获取玩家物体坐标
- [GetPlayerObjectRot](GetPlayerObjectRot): 获取玩家物体旋转
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): 附加玩家物体到玩家

## 相关回调

- [OnObjectMoved](../callbacks/OnObjectMoved): 物体停止移动时触发
