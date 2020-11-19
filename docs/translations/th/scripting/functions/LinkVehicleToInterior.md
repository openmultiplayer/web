---
title: LinkVehicleToInterior
description: Links a vehicle to an interior.
tags: ["vehicle"]
---

## คำอธิบาย

Links a vehicle to an interior. Vehicles can only be seen by players in the same interior (SetPlayerInterior).

| Name       | Description                                                   |
| ---------- | ------------------------------------------------------------- |
| vehicleid  | The ID of the vehicle to link to an interior.                 |
| interiorid | The [Interior ID](../resources/interiorids.md) to link it to. |

## ส่งคืน

1: The function was executed successfully.

0: The function failed to execute. This means the vehicle does not exist.

## ตัวอย่าง

```c
public OnGameModeInit()
{
    new vehicle1 = AddStaticVehicle(559, 2543.7505, -21.8345, 27.1899, 52.6054, -1, -1);
    LinkVehicleToInterior(vehicle1, 6);
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SetVehicleVirtualWorld](../functions/SetVehicleVirtualWorld.md): Set the virtual world of a vehicle.
- [SetPlayerInterior](../functions/SetPlayerInterior.md): Set a player's interior.
