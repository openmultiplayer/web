---
title: GetVehicleVirtualWorld
description: Get the virtual world of a vehicle.
tags: ["vehicle"]
---

## คำอธิบาย

Get the virtual world of a vehicle.

| Name      | Description                                        |
| --------- | -------------------------------------------------- |
| vehicleid | The ID of the vehicle to get the virtual world of. |

## ส่งคืน

The virtual world that the vehicle is in.

## ตัวอย่าง

```c
new world = GetVehicleVirtualWorld(vehicleid);
SetPlayerVirtualWorld(playerid, world);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetVehicleVirtualWorld: Set the virtual world of a vehicle.
- GetPlayerVirtualWorld: Check what virtual world a player is in.
