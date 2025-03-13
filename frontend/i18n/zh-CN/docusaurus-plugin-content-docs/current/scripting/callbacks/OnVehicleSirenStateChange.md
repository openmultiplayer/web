---
title: OnVehicleSirenStateChange
sidebar_label: OnVehicleSirenStateChange
description: 当车辆警笛状态发生变更时触发该回调函数。
tags: ["车辆"]
---

<VersionWarnZH_CN name='回调' version='SA-MP 0.3.7' />

## 描述

当车辆的警笛状态被切换时触发该回调函数。

| 参数名    | 说明                           |
| --------- | ------------------------------ |
| playerid  | 切换警笛状态的玩家ID（驾驶员） |
| vehicleid | 警笛状态发生变更的车辆ID       |
| newstate  | 警笛新状态（0=关闭，1=开启）   |

## 返回值

1 - 阻止游戏模式接收此回调  
0 - 允许回调传递给游戏模式

该回调始终在滤镜脚本中优先触发。

## 示例

```c
public OnVehicleSirenStateChange(playerid, vehicleid, newstate)
{
    if (newstate)
    {
        GameTextForPlayer(playerid, "~W~警笛 ~G~开启", 1000, 3);
    }
    else
    {
        GameTextForPlayer(playerid, "~W~警笛 ~r~关闭", 1000, 3);
    }
    return 1;
}
```

## 注意事项

:::tip

本回调仅在警笛开关状态切换时触发，长按喇叭触发的交替警笛声不会触发

:::

## 相关函数

以下函数可能与该回调存在关联：

- [GetVehicleParamsSirenState](../functions/GetVehicleParamsSirenState): 检测车辆警笛当前状态
- [SetVehicleParamsSirenState](../functions/SetVehicleParamsSirenState): 设置车辆警笛状态

## 相关资源

- [车辆参数类型](../resources/vehicleparams)
