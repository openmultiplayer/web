---
title: SetPlayerObjectMoveSpeed
sidebar_label: SetPlayerObjectMoveSpeed
description: 设置玩家物体的移动速度。
tags: ["玩家", "物体", "玩家物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

设置玩家物体的移动速度。

| 参数        | 说明                                |
| ----------- | ----------------------------------- |
| playerid    | 所属玩家的 ID                       |
| objectid    | 要设置移动速度的玩家物体 ID         |
| Float:speed | 物体的移动速度（单位：游戏单位/秒） |

## 返回值

`true` - 函数执行成功

`false` - 函数执行失败（指定物体不存在）

## 示例代码

```c
new playerobjectid = CreatePlayerObject(playerid, 985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);
MovePlayerObject(playerid, playerobjectid, 1003.3915, -643.3342, 114.5122,  0.8);

SetPlayerObjectMoveSpeed(playerid, playerobjectid, 1.5);
// 移动速度从0.8调整为1.5
```

## 相关函数

- [MovePlayerObject](MovePlayerObject): 以指定速度移动玩家物体至新坐标
- [GetPlayerObjectMoveSpeed](GetPlayerObjectMoveSpeed): 获取玩家物体的当前移动速度
- [SetObjectMoveSpeed](SetObjectMoveSpeed): 设置全局物体的移动速度
