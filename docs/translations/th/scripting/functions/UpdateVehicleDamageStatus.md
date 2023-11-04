---
title: UpdateVehicleDamageStatus
description: Sets the various visual damage statuses of a vehicle, such as popped tires, broken lights and damaged panels.
tags: ["vehicle"]
---

:::warning

This function was added in SA-MP 0.3a and will not work in earlier versions!

:::

## คำอธิบาย

Sets the various visual damage statuses of a vehicle, such as popped tires, broken lights and damaged panels.

| Name      | Description                                       |
| --------- | ------------------------------------------------- |
| vehicleid | The ID of the vehicle to set the damage of.       |
| panels    | A set of bits containing the panel damage status. |
| doors     | A set of bits containing the door damage status.  |
| lights    | A set of bits containing the light damage status. |
| tires     | A set of bits containing the tire damage status.  |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
new panels, doors, lights, tires;
GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);
UpdateVehicleDamageStatus(vehicleid, panels, doors, lights, 15); //Setting tires to 15 will pop them all
```

## บันทึก

:::tip

For some useful functions for working with vehicle damage values, see here.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SetVehicleHealth](SetVehicleHealth): Set the health of a vehicle.
- [GetVehicleHealth](GetVehicleHealth): Check the health of a vehicle.
- [RepairVehicle](RepairVehicle): Fully repair a vehicle.
- [GetVehicleDamageStatus](GetVehicleDamageStatus): Get the vehicle damage state for each part individually.
- [OnVehicleDamageStatusUpdate](../callbacks/OnVehicleDamageStatusUpdate): Called when a vehicle's damage state changes.
