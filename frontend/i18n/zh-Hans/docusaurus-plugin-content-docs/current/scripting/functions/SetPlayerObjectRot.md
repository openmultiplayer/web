---
title: SetPlayerObjectRot
sidebar_label: SetPlayerObjectRot
description: 设置物体在X、Y和Z轴上的旋转角度。
tags: ["玩家", "物体", "玩家物体"]
---

## 描述

设置物体在 X、Y 和 Z 轴上的旋转角度。

| 参数            | 说明                        |
| --------------- | --------------------------- |
| playerid        | 需要旋转其玩家物体的玩家 ID |
| objectid        | 需要旋转的玩家物体 ID       |
| Float:rotationX | 要设置的 X 轴旋转角度       |
| Float:rotationY | 要设置的 Y 轴旋转角度       |
| Float:rotationZ | 要设置的 Z 轴旋转角度       |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败

## 示例

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    SetPlayerObjectRot(playerid, gPlayerObject[playerid], 0.0, 0.0, 180.0);
    return 1;
}
```

## 要点提示

:::tip

要实现平滑旋转效果，请参考[MovePlayerObject](MovePlayerObject)。

:::

## 相关函数

- [CreatePlayerObject](CreatePlayerObject): 创建玩家专属物体
- [DestroyPlayerObject](DestroyPlayerObject): 销毁玩家物体
- [IsValidPlayerObject](IsValidPlayerObject): 验证玩家物体有效性
- [MovePlayerObject](MovePlayerObject): 移动玩家物体
- [StopPlayerObject](StopPlayerObject): 停止玩家物体移动
- [SetPlayerObjectPos](SetPlayerObjectPos): 设置玩家物体位置
- [GetPlayerObjectPos](GetPlayerObjectPos): 获取玩家物体坐标
- [GetPlayerObjectRot](GetPlayerObjectRot): 获取玩家物体旋转角度
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): 将玩家物体附加到玩家身上
- [CreateObject](CreateObject): 创建全局物体
- [DestroyObject](DestroyObject): 销毁全局物体
- [IsValidObject](IsValidObject): 验证全局物体有效性
- [MoveObject](MoveObject): 移动全局物体
- [StopObject](StopObject): 停止全局物体移动
- [SetObjectPos](SetObjectPos): 设置全局物体位置
- [SetObjectRot](SetObjectRot): 设置全局物体旋转角度
- [GetObjectPos](GetObjectPos): 获取全局物体坐标
- [GetObjectRot](GetObjectRot): 获取全局物体旋转角度
- [AttachObjectToPlayer](AttachObjectToPlayer): 将全局物体附加到玩家身上
