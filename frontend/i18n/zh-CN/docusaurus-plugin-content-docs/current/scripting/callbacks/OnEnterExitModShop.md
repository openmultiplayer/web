---
title: OnEnterExitModShop
sidebar_label: OnEnterExitModShop
description: 当玩家进入或离开改装店时触发该回调
tags: ["玩家"]
---

## 描述

当玩家进入或离开车辆改装店时触发该回调。

| 参数       | 说明                                      |
| ---------- | ----------------------------------------- |
| playerid   | 触发事件的玩家 ID                         |
| enterexit  | 状态标识：1=进入改装店，0=离开改装店      |
| interiorid | 玩家进入的改装店室内空间 ID（离开时为 0） |

## 返回值

在滤镜脚本中总是优先被调用。

## 示例

```c
public OnEnterExitModShop(playerid, enterexit, interiorid)
{
    if (enterexit == 0) // 当enterexit为0时表示玩家离开
    {
        SendClientMessage(playerid, COLOR_WHITE, "改装完成！已扣除改装费¥100。");
        GivePlayerMoney(playerid, -100);
    }
    return 1;
}
```

## 注意

:::warning

已知问题：

- 多名玩家同时进入同一改装店时会发生模型碰撞

:::

## 相关回调

以下回调可能与当前回调存在关联：

- [OnVehicleMod](OnVehicleMod)：当车辆被改装时触发
- [OnVehicleRespray](OnVehicleRespray)：玩家离开改装店时触发（即使未更改颜色）
- [OnVehiclePaintjob](OnVehiclePaintjob)：玩家在改装店内预览车辆涂装时触发

## 相关函数

以下函数可能与当前回调相关：

- [IsPlayerInModShop](../functions/IsPlayerInModShop)：检测玩家是否在改装店内
- [AddVehicleComponent](../functions/AddVehicleComponent)：为车辆添加改装组件
