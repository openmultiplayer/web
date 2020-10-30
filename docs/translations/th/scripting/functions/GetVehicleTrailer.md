---
title: GetVehicleTrailer
description: Get the ID of the trailer attached to a vehicle.
tags: ["vehicle"]
---

## คำอธิบาย

Get the ID of the trailer attached to a vehicle.

| Name      | Description                                  |
| --------- | -------------------------------------------- |
| vehicleid | The ID of the vehicle to get the trailer of. |

## ส่งคืน

The vehicle ID of the trailer or 0 if no trailer is attached.

## ตัวอย่าง

```c
new trailerid = GetVehicleTrailer(vehicleid);
DetachTrailerFromVehicle(trailerid);
```

## บันทึก

:::warning

This function does not work for trains.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- AttachTrailerToVehicle: Attach a trailer to a vehicle.
- DetachTrailerFromVehicle: Detach a trailer from a vehicle.
- IsTrailerAttachedToVehicle: Check if a trailer is attached to a vehicle.
