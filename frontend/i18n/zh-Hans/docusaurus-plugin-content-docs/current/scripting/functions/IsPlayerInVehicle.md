---
title: IsPlayerInVehicle
sidebar_label: IsPlayerInVehicle
description: 验证玩家是否乘坐于特定车辆实例
tags: ["玩家", "车辆"]
---

## 描述

检测玩家当前是否乘坐于指定车辆实例内

| 参数名    | 说明                                 |
| --------- | ------------------------------------ |
| playerid  | 目标玩家 ID                          |
| vehicleid | 车辆实例 ID（注意：非车辆模型 ID！） |

## 返回值

**true** - 玩家处于该车辆内

**false** - 玩家未处于该车辆内

## 示例代码

```c
new gSpecialCar;

public OnGameModeInit()
{
    gSpecialCar = AddStaticVehicle(411, 0.0, 0.0, 5.0, 0.0, -1, -1);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/gSpecialCar", true) == 0)
    {
        if (IsPlayerInVehicle(playerid, gSpecialCar))
        {
            SendClientMessage(playerid, -1, "您正在特殊车辆中！");
        }
        return 1;
    }
    return 0;
}
```

## 相关函数

- [IsPlayerInAnyVehicle](IsPlayerInAnyVehicle): 检测玩家是否乘坐于任意车辆
- [GetPlayerVehicleSeat](GetPlayerVehicleSeat): 查询玩家当前座位位置
