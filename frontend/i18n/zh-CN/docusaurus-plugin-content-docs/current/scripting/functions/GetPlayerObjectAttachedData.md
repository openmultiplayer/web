---
title: GetPlayerObjectAttachedData
sidebar_label: GetPlayerObjectAttachedData
description: 获取玩家物体的附加数据
tags: ["玩家", "物体", "玩家物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家物体的附加数据

| 参数           | 说明                                   |
| -------------- | -------------------------------------- |
| playerid       | 玩家 ID                                |
| objectid       | 需要获取附加数据的玩家物体 ID          |
| &parentVehicle | 存储父级车辆 ID 的变量（通过引用传递） |
| &parentObject  | 存储父级物体 ID 的变量（通过引用传递） |
| &parentPlayer  | 存储父级玩家 ID 的变量（通过引用传递） |

## 返回值

`true` - 函数执行成功

`false` - 函数执行失败（指定物体不存在）

## 示例代码

```c
new
    parentVehicle,
    parentObject,
    parentPlayer;

// 存储父级ID
GetPlayerObjectAttachedData(playerid, playerobjectid, parentVehicle, parentObject, parentPlayer);
```

## 相关函数

- [GetPlayerObjectAttachedOffset](GetPlayerObjectAttachedOffset): 获取玩家物体的附加偏移和旋转
- [GetObjectAttachedData](GetObjectAttachedData): 获取全局物体的附加数据
