---
title: SetVehicleVirtualWorld
description: Sets the 'virtual world' of a vehicle.
tags: ["vehicle"]
---

## คำอธิบาย

Sets the 'virtual world' of a vehicle. Players will only be able to see vehicles in their own virtual world.

| Name      | Description                                        |
| --------- | -------------------------------------------------- |
| vehicleid | The ID of vehicle to set the virtual world of.     |
| worldid   | The ID of the virtual world to put the vehicle in. |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
SetVehicleVirtualWorld(GetPlayerVehicleID(playerid), 10);
SetPlayerVirtualWorld(playerid, 10);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GetVehicleVirtualWorld: Check what virtual world a vehicle is in.
- SetPlayerVirtualWorld: Set the virtual world of a player.
