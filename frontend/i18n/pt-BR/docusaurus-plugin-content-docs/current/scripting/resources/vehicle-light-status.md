---
title: Estado das Luzes do Veículo
sidebar_label: Estado das Luzes do Veículo
description: Definições de estado das luzes do veículo.
---

:::note

Essas definições são usadas por nativas como [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus) e [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus).

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
