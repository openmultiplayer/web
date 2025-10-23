---
title: GetPlayerObjectSyncRotation
sidebar_label: GetPlayerObjectSyncRotation
description: 获取玩家物体的同步旋转状态
tags: ["玩家", "物体", "玩家物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家物体的同步旋转状态

| 参数名   | 说明        |
| -------- | ----------- |
| playerid | 玩家 ID     |
| objectid | 玩家物体 ID |

## 返回值

返回玩家物体的同步旋转状态（布尔值`true`/`false`）

## 示例代码

```c
new objectid = CreatePlayerObject(...);
new parentid = CreatePlayerObject(...);
AttachPlayerObjectToObject(playerid, objectid, parentid, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, true);

new bool:syncRotation = GetPlayerObjectSyncRotation(playerid, objectid);
// syncRotation = true
```

## 相关函数

- [AttachPlayerObjectToObject](AttachPlayerObjectToObject): 将玩家物体附加到其他物体
- [GetObjectSyncRotation](GetObjectSyncRotation): 获取全局物体的同步旋转状态
