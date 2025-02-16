---
title: GetVehicleModelInfo
sidebar_label: GetVehicleModelInfo
description: Retrieve information about a specific vehicle model such as the size or position of seats.
tags: ["vehicle"]
---

## คำอธิบาย

Retrieve information about a specific vehicle model such as the size or position of seats

| Name         | Description                          |
| ------------ | ------------------------------------ |
| vehiclemodel | The vehicle model to get info of.    |
| infotype     | The type of information to retrieve. |
| &Float:X     | A float to store the X value.        |
| &Float:Y     | A float to store the Y value.        |
| &Float:Z     | A float to store the Z value.        |

## ส่งคืน

The vehicle info is stored in the specified variables.

## ตัวอย่าง

```c
new Float:X, Float:Y, Float:Z;
GetVehicleModelInfo(411, VEHICLE_MODEL_INFO_SIZE, X, Y, Z); //Get the size of vehicle model 411 (Infernus)
printf("The infernus is %.1fm wide, %.1fm long and %.1fm high", X, Y, Z);
//Prints "The infernus is 2.3m wide, 5.7m long and 1.3m high" into the console
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GetVehicleModel: Get the model id of a vehicle.
