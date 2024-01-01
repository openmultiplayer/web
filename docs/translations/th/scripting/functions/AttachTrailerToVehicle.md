---
title: AttachTrailerToVehicle
description: Attach a vehicle to another vehicle as a trailer.
tags: ["vehicle"]
---

## คำอธิบาย

Attach a vehicle to another vehicle as a trailer.

| Name      | Description                                       |
| --------- | ------------------------------------------------- |
| trailerid | The ID of the vehicle that will be pulled.        |
| vehicleid | The ID of the vehicle that will pull the trailer. |

## ส่งคืน

This function always returns 1, even if neither of the vehicle IDs passed are valid.

## ตัวอย่าง

```c
new vehicleid = CreateVehicle(...);
new trailerid = CreateVehicle(...);

AttachTrailerToVehicle(trailerid, vehicleid);
```

## บันทึก

:::warning

This will only work if both vehicles are streamed in for a player (check IsVehicleStreamedIn).

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [DetachTrailerFromVehicle](DetachTrailerFromVehicle): Detach a trailer from a vehicle.
- [IsTrailerAttachedToVehicle](IsTrailerAttachedToVehicle): Check if a trailer is attached to a vehicle.
- [GetVehicleTrailer](GetVehicleTrailer): Check what trailer a vehicle is pulling.
