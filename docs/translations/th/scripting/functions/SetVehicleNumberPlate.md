---
title: SetVehicleNumberPlate
description: Set a vehicle numberplate.
tags: ["vehicle"]
---

## คำอธิบาย

Set a vehicle numberplate.

| Name        | Description                                            |
| ----------- | ------------------------------------------------------ |
| vehicleid   | The ID of the vehicle to set the number plate of.      |
| numberplate | The text that should be displayed on the number plate. |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. The vehicle does not exist

## ตัวอย่าง

```c
new vehicleid = CreateVehicle(542, 2074.73, 1089.89, 10.51, 0.0, -1, -1, -1);
SetVehicleNumberPlate(vehicleid, "ABCD 123");
```

## บันทึก

:::tip

This function has no internal error checking. Do not assign custom number plates to vehicles without plates (boats, planes, etc) as this will result in some unneeded processing time on the client. The vehicle must be re-spawned or re-streamed for the changes to take effect. There's a limit of 32 characters on each number plate (including embedded colors). The text length that can be seen on the number plate is around 9 to 10 characters, more characters will cause the text to split. Some vehicle models has a backward number plate, e.g. Boxville (498) (as an alternative to this vehicle you can use vehicle model ID 609, which is a duplicated Boxville (aka Boxburg), but with a regular number plate).

:::

:::tip

You can use color embedding on the number plate text.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetVehicleToRespawn: Respawn a vehicle.
- ChangeVehicleColor: Set the color of a vehicle.
- ChangeVehiclePaintjob: Change the paintjob on a vehicle.
