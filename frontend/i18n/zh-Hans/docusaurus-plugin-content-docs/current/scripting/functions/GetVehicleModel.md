---
title: GetVehicleModel
sidebar_label: GetVehicleModel
description: 获取车辆的模型ID。
tags: ["车辆"]
---

## 描述

获取指定车辆的模型 ID。

| 参数名    | 说明                  |
| --------- | --------------------- |
| vehicleid | 需要查询的目标车辆 ID |

## 返回值

返回车辆的[模型 ID](../resources/vehicleid)，若车辆不存在则返回 **0**

## 示例代码

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    if (GetVehicleModel(vehicleid) == 411) // 411是Infernus车型
    {
        SendClientMessage(playerid, 0xFFFFFFFF, "酷炫的Infernus!");
    }
    return 1;
}
```

## 相关函数

- [GetPlayerVehicleID](GetPlayerVehicleID): 获取玩家所在车辆的 ID
- [GetVehiclePos](GetVehiclePos): 获取车辆的坐标位置
- [GetVehicleZAngle](GetVehicleZAngle): 获取车辆当前的水平旋转角度
- [GetPlayerVehicleSeat](GetPlayerVehicleSeat): 检测玩家所在的车辆座位

## 相关资源

- [车辆模型 ID 对照表](../resources/vehicleid)
