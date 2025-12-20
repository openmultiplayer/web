---
title: GetObjectType
sidebar_label: GetObjectType
description: 获取物体的类型（全局物体或玩家物体）
tags: ["物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取物体的类型（全局物体或玩家物体）。

| 参数     | 说明                  |
| -------- | --------------------- |
| playerid | 玩家 ID               |
| objectid | 需要获取类型的物体 ID |

## 返回值

`0` - 函数执行失败（指定物体或玩家不存在）

`1` - 全局物体

`2` - 玩家物体

## 示例代码

```c
new objectid = CreateObject(985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);

new objectType = GetObjectType(playerid, objectid);
// objectType = 1
```

另一个示例：

```c
new playerobjectid = CreatePlayerObject(playerid, 19174, 978.88757, -986.34918, 40.95220,   0.00000, 0.00000, 228.00000);

new objectType = GetObjectType(playerid, playerobjectid);
// objectType = 2
```

## 相关函数

- [CreateObject](CreateObject): 创建全局物体
- [CreatePlayerObject](CreatePlayerObject): 创建玩家专属物体
