---
title: GetVehicleModel
sidebar_label: GetVehicleModel
description: Gets the model ID of a vehicle.
tags: ["vehicle"]
---

## คำอธิบาย

Gets the model ID of a vehicle.

| Name      | Description                                |
| --------- | ------------------------------------------ |
| vehicleid | The ID of the vehicle to get the model of. |

## ส่งคืน

The vehicle's model ID, or 0 if the vehicle doesn't exist.

## ตัวอย่าง

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    if (GetVehicleModel(vehicleid) == 411) // 411 is the Infernus model
    {
        SendClientMessage(playerid, 0xFFFFFFFF, "Nice Infernus!");
    }
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GetPlayerVehicleID: Get the ID of the vehicle the player is in.
- GetVehiclePos: Get the position of a vehicle.
- GetVehicleZAngle: Check the current angle of a vehicle.
- GetPlayerVehicleSeat: Check what seat a player is in.
