---
title: IsPlayerInModShop
sidebar_label: IsPlayerInModShop
description: 检测玩家是否处于改装店内
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测玩家是否处于改装店内

## 参数说明

| 参数名   | 说明              |
| -------- | ----------------- |
| playerid | 需要检测的玩家 ID |

## 返回值

**true** - 玩家处于改装店内

**false** - 玩家未处于改装店内

## 示例代码

```c
if (IsPlayerInModShop(playerid))
{
    SendClientMessage(playerid, 0xFFFF00FF, "你正处于改装店内");
}
else
{
    SendClientMessage(playerid, 0xFF0000FF, "你未处于改装店内");
}
```

## 相关函数

下列函数可能对本功能有参考价值，因存在关联性：

- [AddVehicleComponent](AddVehicleComponent): 为车辆添加改装组件

## 相关回调

下列回调可能与本功能相关，建议配合使用：

- [OnVehicleMod](../callbacks/OnVehicleMod): 当车辆被改装时触发
- [OnVehicleRespray](../callbacks/OnVehicleRespray): 当玩家离开改装店时触发（即使未更改颜色）
- [OnVehiclePaintjob](../callbacks/OnVehiclePaintjob): 当玩家预览车辆涂装时触发
- [OnEnterExitModShop](../callbacks/OnEnterExitModShop): 当玩家进出改装店时触发
