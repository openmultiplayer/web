---
title: GetObjectAttachedData
sidebar_label: GetObjectAttachedData
description: 获取物体的附加数据
tags: ["物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取物体的附加数据。

| 名称           | 描述                                 |
| -------------- | ------------------------------------ |
| objectid       | 需要获取附加数据的物体 ID            |
| &parentVehicle | 存储父车辆 ID 的变量，通过引用传递。 |
| &parentObject  | 存储父物体 ID 的变量，通过引用传递。 |
| &parentPlayer  | 存储父玩家 ID 的变量，通过引用传递。 |

## 返回值

`true` - 函数执行成功

`false` - 函数执行失败（指定物体不存在）

## 示例代码

```c
new
    parentVehicle,
    parentObject,
    parentPlayer;

GetObjectAttachedData(objectid, parentVehicle, parentObject, parentPlayer);
```

## 相关函数

- [GetObjectAttachedOffset](GetObjectAttachedOffset): 获取物体的附加偏移和旋转参数
- [GetPlayerObjectAttachedData](GetPlayerObjectAttachedData): 获取玩家物体的附加数据
