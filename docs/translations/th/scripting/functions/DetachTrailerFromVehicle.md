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

- [AttachTrailerToVehicle](../../scripting/functions/AttachTrailerToVehicle.md): Attach a trailer to a vehicle.
- [IsTrailerAttachedToVehicle](../../scripting/functions/IsTrailerAttachedToVehicle.md): Check if a trailer is attached to a vehicle.
- [GetVehicleTrailer](../../scripting/functions/GetVehicleTrailer.md): Check what trailer a vehicle is pulling.
