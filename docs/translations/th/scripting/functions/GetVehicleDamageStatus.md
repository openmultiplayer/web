---
title: GetVehicleDamageStatus
description: Retrieve the damage statuses of a vehicle.
tags: ["vehicle"]
---

## คำอธิบาย

Retrieve the damage statuses of a vehicle.

| Name      | Description                                                        |
| --------- | ------------------------------------------------------------------ |
| vehicleid | The ID of the vehicle to get the damage statuses of.               |
| panels    | A variable to store the panel damage data in, passed by reference. |
| doors     | A variable to store the door damage data in, passed by reference.  |
| lights    | A variable to store the light damage data in, passed by reference. |
| tires     | A variable to store the tire damage data in, passed by reference.  |

## ส่งคืน

1: The function was executed successfully.

0: The function failed to execute. This means the vehicle specified does not exist.

## ตัวอย่าง

```c
new panels, doors, lights, tires;
GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);
printf("Vehicle Status: [Panels]: %d - [Doors]: %d - [Lights]: %d - [Tires]: %d", panels, doors, lights, tires);
```

## บันทึก

:::tip

The stored values are bit masks. Bitwise operators will allow you to use the values.

:::

:::tip

For some useful functions for working with vehicle damage values, see here.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- UpdateVehicleDamageStatus: Update the vehicle damage.
- SetVehicleHealth: Set the health of a vehicle.
- GetVehicleHealth: Check the health of a vehicle.
- RepairVehicle: Fully repair a vehicle.
- OnVehicleDamageStatusUpdate: Called when a vehicle's damage state changes.
