---
title: 车辆灯光状态
sidebar_label: 车辆灯光状态
description: 车辆灯光状态定义表。
---

:::note

这些定义被原生函数使用，例如[获取车辆损伤状态](../functions/GetVehicleDamageStatus)和[更新车辆损伤状态](../functions/UpdateVehicleDamageStatus)。

:::

| 定义                                                                                      | 数值 |
| ----------------------------------------------------------------------------------------- | ---- |
| UNKNOWN_VEHICLE_LIGHT_STATUS（未知车辆灯光状态）                                          | 0    |
| VEHICLE_LIGHT_STATUS_NONE（无灯光损坏）                                                   | 0    |
| VEHICLE_LIGHT_STATUS_FRONT_LEFT_BROKEN ​**/**​ CARLIGHT_FRONT_LEFT_BROKEN（左前灯损坏）   | 1    |
| VEHICLE_LIGHT_STATUS_FRONT_RIGHT_BROKEN ​**/**​ CARLIGHT_FRONT_RIGHT_BROKEN（右前灯损坏） | 4    |
| VEHICLE_LIGHT_STATUS_DRIVER_BROKEN ​**/**​ CARLIGHT_DRIVER_BROKEN（驾驶侧灯光损坏）       | 1    |
| VEHICLE_LIGHT_STATUS_PASSENGER_BROKEN ​**/**​ CARLIGHT_PASSENGER_BROKEN（乘客侧灯光损坏） | 4    |
| VEHICLE_LIGHT_STATUS_REAR_BROKEN ​**/**​ CARLIGHT_REAR_BROKEN（后灯损坏）                 | 64   |
