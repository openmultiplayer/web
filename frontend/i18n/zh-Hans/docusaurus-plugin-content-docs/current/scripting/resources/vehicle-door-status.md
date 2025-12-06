---
title: 车辆车门状态
sidebar_label: 车辆车门状态
description: 车辆车门状态定义表。
---

:::note

这些定义被原生函数使用，例如[获取车辆损伤状态](../functions/GetVehicleDamageStatus)和[更新车辆损伤状态](../functions/UpdateVehicleDamageStatus)。

:::

| 定义                                                                                      | 数值       |
| ----------------------------------------------------------------------------------------- | ---------- |
| UNKNOWN_VEHICLE_DOOR_STATUS（未知车辆车门状态）                                           | -1         |
| VEHICLE_DOOR_STATUS_NONE ​**/**​ CARDOOR_NONE（无车门异常）                               | 0          |
| VEHICLE_DOOR_STATUS_BONNET_OPEN ​**/**​ CARDOOR_BONNET_OPEN（引擎盖开启）                 | 0x00000001 |
| VEHICLE_DOOR_STATUS_BONNET_DAMAGED ​**/**​ CARDOOR_BONNET_DAMAGED（引擎盖损坏）           | 0x00000002 |
| VEHICLE_DOOR_STATUS_BONNET_MISSING ​**/**​ CARDOOR_BONNET_MISSING（引擎盖缺失）           | 0x00000004 |
| VEHICLE_DOOR_STATUS_HOOD_OPEN ​**/**​ CARDOOR_HOOD_OPEN（发动机罩开启）                   | 0x00000001 |
| VEHICLE_DOOR_STATUS_HOOD_DAMAGED ​**/**​ CARDOOR_HOOD_DAMAGED（发动机罩损坏）             | 0x00000002 |
| VEHICLE_DOOR_STATUS_HOOD_MISSING ​**/**​ CARDOOR_HOOD_MISSING（发动机罩缺失）             | 0x00000004 |
| VEHICLE_DOOR_STATUS_BOOT_OPEN ​**/**​ CARDOOR_BOOT_OPEN（后备箱开启）                     | 0x00000100 |
| VEHICLE_DOOR_STATUS_BOOT_DAMAGED ​**/**​ CARDOOR_BOOT_DAMAGED（后备箱损坏）               | 0x00000200 |
| VEHICLE_DOOR_STATUS_BOOT_MISSING ​**/**​ CARDOOR_BOOT_MISSING（后备箱缺失）               | 0x00000400 |
| VEHICLE_DOOR_STATUS_TRUNK_OPEN ​**/**​ CARDOOR_TRUNK_OPEN（行李箱开启）                   | 0x00000100 |
| VEHICLE_DOOR_STATUS_TRUNK_DAMAGED ​**/**​ CARDOOR_TRUNK_DAMAGED（行李箱损坏）             | 0x00000200 |
| VEHICLE_DOOR_STATUS_TRUNK_MISSING ​**/**​ CARDOOR_TRUNK_MISSING（行李箱缺失）             | 0x00000400 |
| VEHICLE_DOOR_STATUS_FRONT_LEFT_OPEN ​**/**​ CARDOOR_FRONT_LEFT_OPEN（左前门开启）         | 0x00010000 |
| VEHICLE_DOOR_STATUS_FRONT_LEFT_DAMAGED ​**/**​ CARDOOR_FRONT_LEFT_DAMAGED（左前门损坏）   | 0x00020000 |
| VEHICLE_DOOR_STATUS_FRONT_LEFT_MISSING ​**/**​ CARDOOR_FRONT_LEFT_MISSING（左前门缺失）   | 0x00040000 |
| VEHICLE_DOOR_STATUS_DRIVER_OPEN ​**/**​ CARDOOR_DRIVER_OPEN（驾驶门开启）                 | 0x00010000 |
| VEHICLE_DOOR_STATUS_DRIVER_DAMAGED ​**/**​ CARDOOR_DRIVER_DAMAGED（驾驶门损坏）           | 0x00020000 |
| VEHICLE_DOOR_STATUS_DRIVER_MISSING ​**/**​ CARDOOR_DRIVER_MISSING（驾驶门缺失）           | 0x00040000 |
| VEHICLE_DOOR_STATUS_FRONT_RIGHT_OPEN ​**/**​ CARDOOR_FRONT_RIGHT_OPEN（右前门开启）       | 0x01000000 |
| VEHICLE_DOOR_STATUS_FRONT_RIGHT_DAMAGED ​**/**​ CARDOOR_FRONT_RIGHT_DAMAGED（右前门损坏） | 0x02000000 |
| VEHICLE_DOOR_STATUS_FRONT_RIGHT_MISSING ​**/**​ CARDOOR_FRONT_RIGHT_MISSING（右前门缺失） | 0x04000000 |
| VEHICLE_DOOR_STATUS_PASSENGER_OPEN ​**/**​ CARDOOR_PASSENGER_OPEN（乘客门开启）           | 0x01000000 |
| VEHICLE_DOOR_STATUS_PASSENGER_DAMAGED ​**/**​ CARDOOR_PASSENGER_DAMAGED（乘客门损坏）     | 0x02000000 |
| VEHICLE_DOOR_STATUS_PASSENGER_MISSING ​**/**​ CARDOOR_PASSENGER_MISSING（乘客门缺失）     | 0x04000000 |
