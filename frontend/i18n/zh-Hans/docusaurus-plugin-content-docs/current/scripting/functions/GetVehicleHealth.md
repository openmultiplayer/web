---
title: GetVehicleHealth
sidebar_label: GetVehicleHealth
description: 获取车辆的健康值
tags: ["车辆"]
---

## 描述

获取车辆的健康值

| 参数          | 说明                                 |
| ------------- | ------------------------------------ |
| vehicleid     | 要获取健康值的车辆 ID                |
| &Float:health | 存储健康值的浮点变量（通过引用传递） |

## 返回值

**true** - 执行成功

**false** - 执行失败（无效的车辆 ID）

实际健康值通过引用变量返回，非函数返回值本身。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/repair", true) == 0)
    {
        new
            Float:vehicleHealth,
            vehicleid = GetPlayerVehicleID(playerid);

        GetVehicleHealth(vehicleid, vehicleHealth);

        if (vehicleHealth > 500.0)
        {
            return SendClientMessage(playerid, COLOR_RED, "车辆无需修理！");
        }

        SetVehicleHealth(vehicleid, 1000.0);
        SendClientMessage(playerid, COLOR_GREEN, "车辆已修复！");
        return 1;
    }
    return 0;
}
```

## 注意事项

:::tip

车辆满血量为 1000，但更高的数值可以提升车辆耐久度。详细健康值说明请参阅[此处](../resources/vehiclehealth)。

:::

:::tip

当车辆健康值低于 250 时会起火，数秒后将爆炸。

:::

## 相关函数

- [SetVehicleHealth](SetVehicleHealth): 设置车辆健康值
- [GetPlayerHealth](GetPlayerHealth): 获取玩家生命值
- [GetPlayerArmour](GetPlayerArmour): 获取玩家护甲值

## 相关资源

- [车辆健康值说明](../resources/vehiclehealth)
