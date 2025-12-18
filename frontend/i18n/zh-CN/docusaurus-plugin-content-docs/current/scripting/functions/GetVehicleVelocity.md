---
title: GetVehicleVelocity
sidebar_label: GetVehicleVelocity
description: 获取车辆在XYZ轴上的三维速度。
tags: ["车辆"]
---

## 描述

获取车辆在三维空间中的运动速度分量。

| 参数      | 说明                                        |
| --------- | ------------------------------------------- |
| vehicleid | 目标车辆 ID                                 |
| &Float:x  | 存储 X 轴速度分量的浮点变量（通过引用传递） |
| &Float:y  | 存储 Y 轴速度分量的浮点变量（通过引用传递） |
| &Float:z  | 存储 Z 轴速度分量的浮点变量（通过引用传递） |

## 返回值

**true** - 操作成功执行

**false** - 操作执行失败（指定车辆不存在）

车辆的三维速度分量将被存储至指定变量。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/GetMyCarVelocity", cmdtext))
    {
        if (!IsPlayerInAnyVehicle(playerid))
        {
            return 1;
        }

        new
            Float: vehVelocity[3],
            string[128];

        GetVehicleVelocity(GetPlayerVehicleID(playerid), vehVelocity[0], vehVelocity[1], vehVelocity[2]);

        format(string, sizeof(string), "当前三维速度：X%.2f Y%.2f Z%.2f", vehVelocity[0], vehVelocity[1], vehVelocity[2]);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
        return 1;
    }
    return 0;
}
```

## 注意事项

:::tip

此函数可配合公式计算车辆的实际移动速度（单位：千米/小时 或 米/秒）

:::

## 相关函数

- [SetVehicleVelocity](SetVehicleVelocity): 设置车辆的三维速度
- [SetPlayerVelocity](SetPlayerVelocity): 设置玩家的三维速度
- [GetPlayerVelocity](GetPlayerVelocity): 获取玩家的三维速度
