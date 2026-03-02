---
title: PutPlayerInVehicle
sidebar_label: PutPlayerInVehicle
description: 将玩家放置到车辆中
tags: ["玩家", "车辆"]
---

## 描述

将玩家放置到车辆中

| 参数      | 说明              |
| --------- | ----------------- |
| playerid  | 需要放置的玩家 ID |
| vehicleid | 目标车辆 ID       |
| seatid    | 指定座位的 ID     |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败。玩家或车辆不存在

## 示例

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassanger)
{
    PutPlayerInVehicle(playerid, vehicleid, 0);
    return 1;
}
```

| 座位 ID | 对应位置                   |
| ------- | -------------------------- |
| 0       | 驾驶员                     |
| 1       | 前排乘客                   |
| 2       | 后排左侧乘客               |
| 3       | 后排右侧乘客               |
| 4+      | 额外座位（巴士等大型车辆） |

## 注意事项

:::tip

可通过循环调用 [GetPlayerVehicleSeat](GetPlayerVehicleSeat) 检查座位占用状态

:::

:::warning

- 若指定非法座位或座位已被占用，玩家离开车辆时会导致客户端崩溃
- 将玩家放置到尚未流加载的车辆中可能不可靠，因客户端可能未完成车辆资源加载
- 此问题同样适用于刚创建的车辆

:::

## 相关函数

- [RemovePlayerFromVehicle](RemovePlayerFromVehicle): 强制玩家离开车辆
- [GetPlayerVehicleID](GetPlayerVehicleID): 获取玩家当前所在车辆 ID
- [GetPlayerVehicleSeat](GetPlayerVehicleSeat): 获取玩家当前座位信息
- [GetVehicleSeats](GetVehicleSeats): 获取车辆最大座位数

## 相关回调

- [OnPlayerEnterVehicle](../callbacks/OnPlayerEnterVehicle): 当玩家开始进入车辆时触发
