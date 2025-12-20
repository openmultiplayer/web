---
title: ShowVehicle
sidebar_label: ShowVehicle
description: 显示被隐藏的车辆。
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

:::warning

警告：此函数尚未实现。

:::

## 描述

显示被隐藏的车辆。

## 参数

| 参数      | 说明              |
| --------- | ----------------- |
| vehicleid | 要显示的车辆 ID。 |

## 示例

```c
new g_Vehicle;

public OnGameModeInit()
{
    g_Vehicle = CreateVehicle(536, 2496.5034, 5.6658, 27.2247, 180.0000, -1, -1, 60);
    HideVehicle(g_Vehicle);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/showvehicle", true))
    {
        if (IsVehicleHidden(g_Vehicle))
        {
            ShowVehicle(g_Vehicle);
        }
        return 1;
    }
    return 0;
}
```

## 相关函数

- [HideVehicle](HideVehicle): 从游戏中隐藏车辆
- [IsVehicleHidden](IsVehicleHidden): 检查车辆是否被隐藏
