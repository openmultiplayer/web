---
title: SetVehicleAngularVelocity
sidebar_label: SetVehicleAngularVelocity
description: 设置车辆在X、Y、Z轴上的角速度。
tags: ["车辆"]
---

:::info

此函数基于世界坐标系而非局部坐标系。如需进行局部坐标系角速度调整，必须基于[GetVehicleRotationQuat](GetVehicleRotationQuat)应用旋转矩阵。

:::

## 描述

设置车辆在 X、Y、Z 轴上的角速度

| 参数      | 说明                  |
| --------- | --------------------- |
| vehicleid | 要设置角速度的车辆 ID |
| Float:x   | X 轴方向的角速度量    |
| Float:y   | Y 轴方向的角速度量    |
| Float:z   | Z 轴方向的角速度量    |

## 返回值

**true** - 函数执行成功。

**false** - 函数执行失败。车辆不存在。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/spin", cmdtext))
    {
        if (IsPlayerInAnyVehicle(playerid))
        {
            SetVehicleAngularVelocity(GetPlayerVehicleID(playerid), 0.0, 0.0, 2.0);
        }
        return 1;
    }
}
```

## 注意

:::warning

此函数对无人车辆无效且不影响火车。

:::

## 相关函数

- [SetVehicleVelocity](SetVehicleVelocity): 设置车辆线速度
- [GetVehicleVelocity](GetVehicleVelocity): 获取车辆线速度
