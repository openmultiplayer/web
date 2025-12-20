---
title: SetVehicleParamsEx
sidebar_label: SetVehicleParamsEx
description: 为所有玩家设置车辆的参数。
tags: ["车辆"]
---

## 描述

设置车辆的全局参数，对所有玩家生效。

| 参数           | 说明                           |
| -------------- | ------------------------------ |
| vehicleid      | 目标车辆的 ID                  |
| bool:engine    | 引擎状态（0=关闭，1=启动）     |
| bool:lights    | 车灯状态（0=关闭，1=开启）     |
| bool:alarm     | 警报状态（1=触发警报声）       |
| bool:doors     | 车门锁状态（0=解锁，1=上锁）   |
| bool:bonnet    | 引擎盖状态（0=关闭，1=开启）   |
| bool:boot      | 行李箱状态（0=关闭，1=开启）   |
| bool:objective | 目标箭头显示（0=隐藏，1=显示） |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（通常表示车辆不存在）

## 示例代码

```c
// 全局变量声明
new
    gVehicleAlarmTimer[MAX_VEHICLES] = {0, ...};

// 修改单个参数时需先获取当前状态
new
    bool:engine, bool:lights, bool:alarm, bool:doors, bool:bonnet, bool:boot, bool:objective;

// 创建车辆时的设置
GetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);
SetVehicleParamsEx(vehicleid, VEHICLE_PARAMS_ON, lights, alarm, doors, bonnet, boot, objective); // 仅修改引擎状态

// 带警报自动关闭的增强函数
SetVehicleParamsEx_Fixed(vehicleid, &bool:engine, &bool:lights, &bool:alarm, &bool:doors, &bool:bonnet, &bool:boot, &bool:objective)
{
    SetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);
    if (alarm)
    {
        // 重置定时器实现20秒后自动关闭警报
        KillTimer(gVehicleAlarmTimer[vehicleid]);
        gVehicleAlarmTimer[vehicleid] = 0;
        gVehicleAlarmTimer[vehicleid] = SetTimerEx("DisableVehicleAlarm", 20000, false, "d", vehicleid);
    }
}

forward DisableVehicleAlarm(vehicleid);
public DisableVehicleAlarm(vehicleid)
{
    new
        bool:engine, bool:lights, bool:alarm, bool:doors, bool:bonnet, bool:boot, bool:objective;

    GetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);
    if (alarm == VEHICLE_PARAMS_ON)
    {
        SetVehicleParamsEx(vehicleid, engine, lights, VEHICLE_PARAMS_OFF, doors, bonnet, boot, objective);
    }

    gVehicleAlarmTimer[vehicleid] = 0;
}
```

## 定义常量

- `VEHICLE_PARAMS_UNSET` (-1) 未设置
- `VEHICLE_PARAMS_OFF` (0) 关闭
- `VEHICLE_PARAMS_ON` (1) 开启

## 注意事项

:::tip

- 警报触发后不会自动停止，需手动调用此函数关闭
- 启用[ManualVehicleEngineAndLights](ManualVehicleEngineAndLights)后，车灯在白天也会保持开启状态

:::

## 相关函数

- [GetVehicleParamsEx](GetVehicleParamsEx): 获取车辆参数状态
- [SetVehicleParamsForPlayer](SetVehicleParamsForPlayer): 设置玩家专属车辆参数
- [UpdateVehicleDamageStatus](UpdateVehicleDamageStatus): 更新车辆损坏状态
