---
title: Vehicle Door Status
sidebar_label: Vehicle Door Status
description: Vehicle door status definitions.
---

:::note

These definitions are used by natives such as [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus) and [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus).

:::

| Definition                                                                | Value      |
| ------------------------------------------------------------------------- | ---------- |
| UNKNOWN_VEHICLE_DOOR_STATUS                                               | -1         |
| VEHICLE_DOOR_STATUS_NONE **/** CARDOOR_NONE                               | 0          |
| VEHICLE_DOOR_STATUS_BONNET_OPEN **/** CARDOOR_BONNET_OPEN                 | 0x00000001 |
| VEHICLE_DOOR_STATUS_BONNET_DAMAGED **/** CARDOOR_BONNET_DAMAGED           | 0x00000002 |
| VEHICLE_DOOR_STATUS_BONNET_MISSING **/** CARDOOR_BONNET_MISSING           | 0x00000004 |
| VEHICLE_DOOR_STATUS_HOOD_OPEN **/** CARDOOR_HOOD_OPEN                     | 0x00000001 |
| VEHICLE_DOOR_STATUS_HOOD_DAMAGED **/** CARDOOR_HOOD_DAMAGED               | 0x00000002 |
| VEHICLE_DOOR_STATUS_HOOD_MISSING **/** CARDOOR_HOOD_MISSING               | 0x00000004 |
| VEHICLE_DOOR_STATUS_BOOT_OPEN **/** CARDOOR_BOOT_OPEN                     | 0x00000100 |
| VEHICLE_DOOR_STATUS_BOOT_DAMAGED **/** CARDOOR_BOOT_DAMAGED               | 0x00000200 |
| VEHICLE_DOOR_STATUS_BOOT_MISSING **/** CARDOOR_BOOT_MISSING               | 0x00000400 |
| VEHICLE_DOOR_STATUS_TRUNK_OPEN **/** CARDOOR_TRUNK_OPEN                   | 0x00000100 |
| VEHICLE_DOOR_STATUS_TRUNK_DAMAGED **/** CARDOOR_TRUNK_DAMAGED             | 0x00000200 |
| VEHICLE_DOOR_STATUS_TRUNK_MISSING **/** CARDOOR_TRUNK_MISSING             | 0x00000400 |
| VEHICLE_DOOR_STATUS_FRONT_LEFT_OPEN **/** CARDOOR_FRONT_LEFT_OPEN         | 0x00010000 |
| VEHICLE_DOOR_STATUS_FRONT_LEFT_DAMAGED **/** CARDOOR_FRONT_LEFT_DAMAGED   | 0x00020000 |
| VEHICLE_DOOR_STATUS_FRONT_LEFT_MISSING **/** CARDOOR_FRONT_LEFT_MISSING   | 0x00040000 |
| VEHICLE_DOOR_STATUS_DRIVER_OPEN **/** CARDOOR_DRIVER_OPEN                 | 0x00010000 |
| VEHICLE_DOOR_STATUS_DRIVER_DAMAGED **/** CARDOOR_DRIVER_DAMAGED           | 0x00020000 |
| VEHICLE_DOOR_STATUS_DRIVER_MISSING **/** CARDOOR_DRIVER_MISSING           | 0x00040000 |
| VEHICLE_DOOR_STATUS_FRONT_RIGHT_OPEN **/** CARDOOR_FRONT_RIGHT_OPEN       | 0x01000000 |
| VEHICLE_DOOR_STATUS_FRONT_RIGHT_DAMAGED **/** CARDOOR_FRONT_RIGHT_DAMAGED | 0x02000000 |
| VEHICLE_DOOR_STATUS_FRONT_RIGHT_MISSING **/** CARDOOR_FRONT_RIGHT_MISSING | 0x04000000 |
| VEHICLE_DOOR_STATUS_PASSENGER_OPEN **/** CARDOOR_PASSENGER_OPEN           | 0x01000000 |
| VEHICLE_DOOR_STATUS_PASSENGER_DAMAGED **/** CARDOOR_PASSENGER_DAMAGED     | 0x02000000 |
| VEHICLE_DOOR_STATUS_PASSENGER_MISSING **/** CARDOOR_PASSENGER_MISSING     | 0x04000000 |
