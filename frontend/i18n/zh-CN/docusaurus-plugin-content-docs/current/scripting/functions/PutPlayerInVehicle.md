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
// 全局数组用于追踪每位玩家所属的车辆
// 使用 INVALID_VEHICLE_ID 表示玩家当前无车辆
static s_PlayerVehicle[MAX_PLAYERS] = { INVALID_VEHICLE_ID, ... };

public OnPlayerSpawn(playerid)
{
    // 检查玩家是否已有有效车辆
    if (!IsValidVehicle(s_PlayerVehicle[playerid]))
    {
        // 若没有则创建新车辆并存储ID
        s_PlayerVehicle[playerid] = CreateVehicle(411, 0.0, 0.0, 3.5, 0.0, -1, -1, -1);
    }

    // 标记需要在车辆加载完成后放置玩家
    // 避免客户端车辆模型尚未加载完成的情况
    SetPVarInt(playerid, "PutPlayerInVehicle", 1);

    return 1;
}

public OnVehicleStreamIn(vehicleid, forplayerid)
{
    // 当车辆完成流加载时触发此回调
    // 检查是否为该玩家的车辆且需要放置
    if (vehicleid == s_PlayerVehicle[forplayerid] && GetPVarInt(forplayerid, "PutPlayerInVehicle"))
    {
        // 将玩家放置至车辆
        PutPlayerInVehicle(forplayerid, vehicleid, 0);

        // 清除标记防止重复放置
        // 例如玩家离开后车辆再次流加载的情况
        DeletePVar(forplayerid, "PutPlayerInVehicle");
    }

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
