---
title: GetActors
sidebar_label: GetActors
description: 获取服务器上已创建的角色ID数组。
tags: ["角色"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取服务器上已创建的角色 ID 数组。

| 参数名   | 说明                                  |
| -------- | ------------------------------------- |
| actors[] | 数组变量（引用传递），用于存储角色 ID |
| size     | 数组的容量长度                        |

## 返回值

返回数组中存储的角色数量。

## 示例代码

```pawn
new actors[MAX_ACTORS];

GetActors(actors, sizeof(actors));
// `actors`数组现在包含已创建的角色ID，例如 {0, 1, 2, 3, 4, ...}
```

## 相关函数

- [GetPlayers](GetPlayers): 获取当前在线玩家 ID 数组
- [GetVehicles](GetVehicles): 获取已创建车辆 ID 数组
