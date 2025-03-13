---
title: SetVehicleHealth
sidebar_label: SetVehicleHealth
description: 设置车辆的生命值。
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

设置车辆的生命值。当生命值降低时，引擎会先冒烟，当生命值低于 250（25%）时会出现火焰。

| 参数名       | 说明                   |
| ------------ | ---------------------- |
| vehicleid    | 要设置生命值的车辆 ID  |
| Float:health | 以浮点数值表示的生命值 |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（通常表示车辆不存在）

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp("/fixengine", cmdtext, true) == 0)
    {
        new
            vehicleid = GetPlayerVehicleID(playerid);

        // 完全修复车辆引擎
        SetVehicleHealth(vehicleid, 1000.0);
        SendClientMessage(playerid, -1, "车辆引擎已完全修复");
        return 1;
    }
    return 0;
}
```

## 注意事项

:::tip

- 车辆满血状态为 1000.0，允许设置更高数值
- 详细生命值参数说明请参考[此文档](../resources/vehiclehealth)

:::

## 相关函数

- [GetVehicleHealth](GetVehicleHealth): 获取车辆当前生命值
- [RepairVehicle](RepairVehicle): 完全修复车辆
- [SetPlayerHealth](SetPlayerHealth): 设置玩家生命值

## 相关回调函数

- [OnVehicleDeath](../callbacks/OnVehicleDeath): 车辆被摧毁时触发

## 相关资源

- [车辆生命值参数说明](../resources/vehiclehealth)
