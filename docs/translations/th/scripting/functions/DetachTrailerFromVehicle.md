---
title: DetachTrailerFromVehicle
description: Detach the connection between a vehicle and its trailer, if any.
tags: ["vehicle"]
---

## คำอธิบาย

Detach the connection between a vehicle and its trailer, if any.

| Name      | Description                |
| --------- | -------------------------- |
| vehicleid | ID of the pulling vehicle. |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
DetachTrailerFromVehicle(vehicleid);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [AttachTrailerToVehicle](AttachTrailerToVehicle): Attach a trailer to a vehicle.
- [IsTrailerAttachedToVehicle](IsTrailerAttachedToVehicle): Check if a trailer is attached to a vehicle.
- [GetVehicleTrailer](GetVehicleTrailer): Check what trailer a vehicle is pulling.
