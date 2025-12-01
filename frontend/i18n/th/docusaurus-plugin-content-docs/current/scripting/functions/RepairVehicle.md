---
title: RepairVehicle
sidebar_label: RepairVehicle
description: Fully repairs a vehicle, including visual damage (bumps, dents, scratches, popped tires etc.
tags: ["vehicle"]
---

## คำอธิบาย

Fully repairs a vehicle, including visual damage (bumps, dents, scratches, popped tires etc.).

| Name      | Description                      |
| --------- | -------------------------------- |
| vehicleid | The ID of the vehicle to repair. |

## ส่งคืน

1: The function was executed successfully.

0: The function failed to execute. This means the vehicle specified does not exist.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/repair", cmdtext))
    {
        if (!IsPlayerInAnyVehicle(playerid)) return SendClientMessage(playerid, 0xFFFFFFFF, "You are not in a vehicle!");

        RepairVehicle(GetPlayerVehicleID(playerid));

        SendClientMessage(playerid, 0xFFFFFFFF, "Your vehicle has been repaired!");
        return 1;
    }
    return 0;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SetVehicleHealth](SetVehicleHealth): Set the health of a vehicle.
- [GetVehicleHealth](GetVehicleHealth): Check the health of a vehicle.
