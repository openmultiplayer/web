---
title: Vehicle Light Status
sidebar_label: Vehicle Light Status
description: Vehicle light status definitions.
---

:::note

These definitions are used by natives such as [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus) and [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus).

:::

| Definition                                                                | Value |
| ------------------------------------------------------------------------- | ----- |
| UNKNOWN_VEHICLE_LIGHT_STATUS                                              | 0     |
| VEHICLE_LIGHT_STATUS_NONE                                                 | 0     |
| VEHICLE_LIGHT_STATUS_FRONT_LEFT_BROKEN **/** CARLIGHT_FRONT_LEFT_BROKEN   | 1     |
| VEHICLE_LIGHT_STATUS_FRONT_RIGHT_BROKEN **/** CARLIGHT_FRONT_RIGHT_BROKEN | 4     |
| VEHICLE_LIGHT_STATUS_DRIVER_BROKEN **/** CARLIGHT_DRIVER_BROKEN           | 1     |
| VEHICLE_LIGHT_STATUS_PASSENGER_BROKEN **/** CARLIGHT_PASSENGER_BROKEN     | 4     |
| VEHICLE_LIGHT_STATUS_REAR_BROKEN **/** CARLIGHT_REAR_BROKEN               | 64    |
