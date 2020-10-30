---
title: SetVehicleParamsCarWindows
description: Allows you to open and close the windows of a vehicle.
tags: ["vehicle"]
---

:::warning

ฟังก์ชั่นนี้ถูกเพิ่มใน SA-MP 0.3.7 และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

Allows you to open and close the windows of a vehicle.

| Name      | Description                                                               |
| --------- | ------------------------------------------------------------------------- |
| vehicleid | The ID of the vehicle to set the window state of                          |
| driver    | The state of the driver's window. 0 to open, 1 to close.                  |
| passenger | The state of the passenger window. 0 to open, 1 to close.                 |
| backleft  | The state of the rear left window (if available). 0 to open, 1 to close.  |
| backright | The state of the rear right window (if available). 0 to open, 1 to close. |

## ส่งคืน

[edit]

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetVehicleParamsCarDoors: Open and close the doors of a vehicle.
- GetVehicleParamsCarDoors: Retrive the current state of a vehicle's doors.
- GetVehicleParamsCarWindows: Retrive the current state of a vehicle's windows
