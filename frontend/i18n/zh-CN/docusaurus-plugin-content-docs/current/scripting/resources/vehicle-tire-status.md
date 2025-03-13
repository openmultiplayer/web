---
title: 车辆轮胎状态
sidebar_label: 车辆轮胎状态
description: 车辆轮胎状态定义表。
---

:::note

这些定义被原生函数使用，例如[获取车辆损伤状态](../functions/GetVehicleDamageStatus)和[更新车辆损伤状态](../functions/UpdateVehicleDamageStatus)。

:::

| 定义                                                                                    | 数值 |
| --------------------------------------------------------------------------------------- | ---- |
| UNKNOWN_VEHICLE_TYRE_STATUS（未知车辆轮胎状态）                                         | -1   |
| VEHICLE_TYRE_STATUS_NONE（无轮胎损伤）                                                  | 0    |
| VEHICLE_TYRE_STATUS_FRONT_LEFT_POPPED ​**/**​ CARTYRE_FRONT_LEFT_POPPED（左前轮爆胎）   | 8    |
| VEHICLE_TYRE_STATUS_FRONT_RIGHT_POPPED ​**/**​ CARTYRE_FRONT_RIGHT_POPPED（右前轮爆胎） | 2    |
| VEHICLE_TYRE_STATUS_REAR_LEFT_POPPED ​**/**​ CARTYRE_REAR_LEFT_POPPED（左后轮爆胎）     | 4    |
| VEHICLE_TYRE_STATUS_REAR_RIGHT_POPPED ​**/**​ CARTYRE_REAR_RIGHT_POPPED（右后轮爆胎）   | 1    |
| VEHICLE_TIRE_STATUS_FRONT_LEFT_POPPED ​**/**​ CARTIRE_FRONT_LEFT_POPPED（左前轮爆胎）   | 8    |
| VEHICLE_TIRE_STATUS_FRONT_RIGHT_POPPED ​**/**​ CARTIRE_FRONT_RIGHT_POPPED（右前轮爆胎） | 2    |
| VEHICLE_TIRE_STATUS_REAR_LEFT_POPPED ​**/**​ CARTIRE_REAR_LEFT_POPPED（左后轮爆胎）     | 4    |
| VEHICLE_TIRE_STATUS_REAR_RIGHT_POPPED ​**/**​ CARTIRE_REAR_RIGHT_POPPED（右后轮爆胎）   | 1    |
