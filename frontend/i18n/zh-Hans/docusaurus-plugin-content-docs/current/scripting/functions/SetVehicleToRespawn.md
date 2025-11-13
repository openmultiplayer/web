---
title: SetVehicleToRespawn
sidebar_label: SetVehicleToRespawn
description: 将车辆重置到其初始创建位置。
tags: ["车辆"]
---

## 描述

将车辆重置到其创建时的位置。

| 参数      | 说明            |
| --------- | --------------- |
| vehicleid | 要重置的车辆 ID |

## 返回值

**true** - 函数执行成功。

**false** - 函数执行失败。车辆不存在。

## 示例

```c
// 重置所有车辆
for (new i = 1; i < MAX_VEHICLES; i++)
{
    SetVehicleToRespawn(i);
}
```

## 相关函数

- [CreateVehicle](CreateVehicle): 创建车辆
- [DestroyVehicle](DestroyVehicle): 销毁车辆
