---
title: SetVehicleParamsCarDoors
sidebar_label: SetVehicleParamsCarDoors
description: Allows you to open and close the doors of a vehicle.
tags: ["vehicle"]
---

:::warning

ฟังก์ชั่นนี้ถูกเพิ่มใน SA-MP 0.3.7 และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

Allows you to open and close the doors of a vehicle.

| Name      | Description                                                             |
| --------- | ----------------------------------------------------------------------- |
| vehicleid | The ID of the vehicle to set the door state of                          |
| driver    | The state of the driver's door. 1 to open, 0 to close.                  |
| passenger | The state of the passenger door. 1 to open, 0 to close.                 |
| backleft  | The state of the rear left door (if available). 1 to open, 0 to close.  |
| backright | The state of the rear right door (if available). 1 to open, 0 to close. |

## ส่งคืน

[edit]

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GetVehicleParamsCarDoors: Retrive the current state of a vehicle's doors.
- SetVehicleParamsCarWindows: Open and close the windows of a vehicle.
- GetVehicleParamsCarWindows: Retrive the current state of a vehicle's windows
