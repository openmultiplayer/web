---
title: SetVehicleToRespawn
sidebar_label: SetVehicleToRespawn
description: Sets a vehicle back to the position at where it was created.
tags: ["vehicle"]
---

## คำอธิบาย

Sets a vehicle back to the position at where it was created.

| Name      | Description                      |
| --------- | -------------------------------- |
| vehicleid | The ID of the vehicle to respawn |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. The vehicle does not exist

## ตัวอย่าง

```c
// Respawns the first vehicle.
SetVehicleToRespawn(1);
for(new i = GetVehiclePoolSize(); i > 0; i--)
{
    SetVehicleToRespawn(i);
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- CreateVehicle: Create a vehicle.
- DestroyVehicle: Destroy a vehicle.
