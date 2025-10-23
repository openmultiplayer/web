---
title: OnPlayerEnterVehicle
sidebar_label: OnPlayerEnterVehicle
description: 当玩家开始进入车辆时触发该回调函数（此时玩家尚未完全进入车辆）。
tags: ["玩家", "车辆"]
---

## 描述

当玩家开始进入车辆时触发该回调函数（此时玩家尚未完全进入车辆）。

| 参数名      | 说明                                   |
| ----------- | -------------------------------------- |
| playerid    | 尝试进入车辆的玩家ID                   |
| vehicleid   | 玩家尝试进入的车辆ID                   |
| ispassenger | 0表示作为驾驶员进入，1表示作为乘客进入 |

## 返回值

该回调始终在滤镜脚本中优先触发

## 示例

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    new string[128];
    format(string, sizeof(string), "你正在进入车辆 %i", vehicleid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## 注意事项

:::tip

- 该回调在玩家开始进入车辆时触发，而非完全进入后触发。详见 [OnPlayerStateChange](OnPlayerStateChange)
- 即使玩家被拒绝进入车辆（例如车辆已上锁或满员），该回调仍会被触发（但仅限作为乘客的情况）

:::

## 相关回调

以下回调函数可能与本回调相关：

- [OnPlayerExitVehicle](OnPlayerExitVehicle): 当玩家离开车辆时触发
- [OnPlayerStateChange](OnPlayerStateChange): 当玩家状态改变时触发

## 相关函数

以下函数可能与本回调函数相关：

- [PutPlayerInVehicle](../functions/PutPlayerInVehicle): 将玩家放入车辆中
- [GetPlayerVehicleSeat](../functions/GetPlayerVehicleSeat): 获取玩家所在车辆座位
