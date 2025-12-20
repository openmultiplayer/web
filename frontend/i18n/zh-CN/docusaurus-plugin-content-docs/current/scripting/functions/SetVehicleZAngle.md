---
title: SetVehicleZAngle
sidebar_label: SetVehicleZAngle
description: 设置车辆Z轴旋转角度（偏航角）。
tags: ["车辆"]
---

## 描述

设置车辆 Z 轴旋转角度（偏航角）。

| 参数        | 说明                              |
| ----------- | --------------------------------- |
| vehicleid   | 要设置旋转角度的车辆 ID           |
| Float:angle | 要设置的 Z 轴旋转角度（单位：度） |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（指定的车辆不存在）

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/flip", true) == 0)
    {
        new
            vehicleid,
            Float:angle;

        vehicleid = GetPlayerVehicleID(playerid);
        GetVehicleZAngle(vehicleid, angle);
        SetVehicleZAngle(vehicleid, angle);

        SendClientMessage(playerid, 0xFFFFFFFF, "你的车辆已复位角度");
        return 1;
    }
    return 0;
}
```

## 重要说明

:::tip

- 使用此函数将重置车辆的 X/Y 轴旋转（俯仰和横滚）
- X/Y 轴旋转角度不可通过此函数设置
- 此函数对无人驾驶的车辆无效（GTA 引擎原生限制）

:::

## 相关函数

- [GetVehicleZAngle](GetVehicleZAngle): 获取车辆当前 Z 轴角度
- [SetVehiclePos](SetVehiclePos): 设置车辆坐标位置
