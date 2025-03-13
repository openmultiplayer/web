---
title: GetPlayerSirenState
sidebar_label: GetPlayerSirenState
description: 获取玩家车辆的警笛状态
tags: ["玩家", "车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家当前所处车辆的警笛开关状态

## 参数

| 参数名   | 说明    |
| -------- | ------- |
| playerid | 玩家 ID |

## 返回值

返回警笛状态布尔值（true=开启，false=关闭）

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/siren", true))
    {
        if (!IsPlayerInAnyVehicle(playerid))
        {
            return 1;
        }

        new bool:sirenState = GetPlayerSirenState(playerid);

        SendClientMessage(playerid, 0xFFFF00FF, "车辆警笛状态：%s", sirenState ? "开启" : "关闭");
        return 1;
    }
    return 0;
}
```

## 相关函数

- [SetVehicleParamsSirenState](SetVehicleParamsSirenState): 设置车辆警笛开关状态
- [ToggleVehicleSirenEnabled](ToggleVehicleSirenEnabled): 切换车辆警笛状态
- [IsVehicleSirenEnabled](IsVehicleSirenEnabled): 检测车辆警笛是否启用
- [GetVehicleSirenState](GetVehicleSirenState): 获取车辆警笛状态（通过车辆 ID）
