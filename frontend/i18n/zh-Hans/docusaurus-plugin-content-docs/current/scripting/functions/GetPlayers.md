---
title: GetPlayers
sidebar_label: GetPlayers
description: 获取当前在线玩家的ID数组
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取当前服务器在线玩家的 ID 数组

| 参数名    | 说明                               |
| --------- | ---------------------------------- |
| players[] | 存储玩家 ID 的数组（通过引用传递） |
| size      | 数组的容量大小                     |

## 返回值

返回实际存入数组的玩家数量

## 示例代码

假设服务器有 5 个在线玩家：

```c
new players[MAX_PLAYERS];
new length;

length = GetPlayers(players, sizeof(players));
// players数组现在包含在线玩家ID：{ 0, 1, 2, 3, 4 }
// length变量的值为5
```

## 相关函数

- [GetVehicles](GetVehicles): 获取已创建车辆的 ID 数组
- [GetActors](GetActors): 获取已创建角色的 ID 数组
