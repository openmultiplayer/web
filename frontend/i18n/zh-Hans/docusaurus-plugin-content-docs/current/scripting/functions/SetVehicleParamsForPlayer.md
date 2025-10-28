---
title: SetVehicleParamsForPlayer
sidebar_label: SetVehicleParamsForPlayer
description: 为特定玩家设置车辆的参数。
tags: ["玩家", "车辆"]
---

## 描述

为指定玩家设置车辆的专属参数。

| 参数             | 说明                                              |
| ---------------- | ------------------------------------------------- |
| vehicle          | 目标车辆的 ID                                     |
| playerid         | 需要设置参数的玩家 ID                             |
| bool:objective   | 目标箭头显示（true=显示黄色浮动箭头，false=隐藏） |
| bool:doorslocked | 车门锁定状态（true=上锁，false=解锁）             |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（玩家或车辆不存在）

## 示例代码

```c
// 初始化时设置玩家专属车辆
SetVehicleParamsForPlayer(iPlayerVehicle, iPlayerID, true, false);

// 需要重置车辆时获取当前参数
new
    bool:iEngine, bool:iLights, bool:iAlarm,
    bool:iDoors, bool:iBonnet, bool:iBoot,
    bool:iObjective;

GetVehicleParamsEx(iPlayerVehicle, iEngine, iLights, iAlarm, iDoors, iBonnet, iBoot, iObjective);
SetVehicleParamsEx(iPlayerVehicle, iEngine, iLights, iAlarm, iDoors, iBonnet, iBoot, false);

// 锁定自己车辆（排除自己）
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/lock", true))
    {
        if (!IsPlayerInAnyVehicle(playerid))
        {
            return SendClientMessage(playerid,0xFFFFFFAA,"请进入车辆后使用此命令");
        }

        for (new i = 0; i < MAX_PLAYERS; i++)
        {
            if (i == playerid) continue;
            SetVehicleParamsForPlayer(GetPlayerVehicleID(playerid), i, false, true);
        }
        return 1;
    }
    return 0;
}

// 0.3a+版本流加载处理示例
new bool:iVehicleObjective[MAX_VEHICLES][2];

public OnGameModeInit()
{
    new temp = AddStaticVehicleEx(400, 0.0, 0.0, 5.0, 0.0, 0, 0, -1); // 创建车辆ID 1
    iVehicleObjective[temp][0] = true;  // 默认显示箭头
    iVehicleObjective[temp][1] = false; // 默认解锁车门
    return 1;
}

stock SetVehicleParamsForPlayerEx(vehicleid, playerid, bool:objective, bool:doorslocked)
{
    SetVehicleParamsForPlayer(vehicleid, playerid, objective, doorslocked);
    iVehicleObjective[vehicleid][0] = objective;
    iVehicleObjective[vehicleid][1] = doorslocked;
}

public OnVehicleStreamIn(vehicleid, forplayerid)
{
    // 车辆流加载时重新应用参数
    SetVehicleParamsForPlayer(vehicleid, forplayerid, iVehicleObjective[vehicleid][0], iVehicleObjective[vehicleid][1]);
}

// 标记特定车辆示例
new myMarkedCar;

public OnGameModeInit()
{
    myMarkedCar = AddStaticVehicleEx(400, 0.0, 0.0, 5.0, 0.0, 0, 0, -1); // 创建标记车辆
    return 1;
}

public OnVehicleStreamIn(vehicleid, forplayerid)
{
    if (vehicleid == myMarkedCar)
    {
        // 流加载时显示目标箭头
        SetVehicleParamsForPlayer(myMarkedCar, forplayerid, true, false);
    }
    return 1;
}
```

## 注意事项

:::tip

- 需要重置车辆（Respawn）才能完全移除目标箭头
- 必须通过[OnVehicleStreamIn](../callbacks/OnVehicleStreamIn)回调重新应用参数设置

:::

:::warning

参数设置在车辆流加载时需要重新应用

:::

## 相关函数

- [SetVehicleParamsEx](SetVehicleParamsEx): 设置全局车辆参数（对所有玩家生效）
