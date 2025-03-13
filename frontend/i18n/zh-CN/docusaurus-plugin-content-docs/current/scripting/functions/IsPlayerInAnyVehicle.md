---
title: IsPlayerInAnyVehicle
sidebar_label: IsPlayerInAnyVehicle
description: 检查玩家是否处于任何车辆内（作为驾驶员或乘客）
tags: ["玩家", "车辆"]
---

## 描述

检测玩家是否乘坐于任何车辆内（包含驾驶位或乘客座位）

| 参数名   | 说明              |
| -------- | ----------------- |
| playerid | 需要检测的玩家 ID |

## 返回值

**true** - 玩家正在车辆内

**false** - 玩家未处于任何车辆

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/invehicle", true) == 0)
    {
        if (IsPlayerInAnyVehicle(playerid))
        {
            SendClientMessage(playerid, 0x00FF00FF, "你正在车辆中");
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "你未乘坐任何车辆");
        }
        return 1;
    }
    return 0;
}
```

## 相关函数

- [IsPlayerInVehicle](IsPlayerInVehicle): 检测玩家是否处于指定车辆
- [GetPlayerVehicleSeat](GetPlayerVehicleSeat): 获取玩家当前乘坐的座位编号
