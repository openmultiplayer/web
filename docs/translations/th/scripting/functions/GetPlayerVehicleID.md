---
title: GetPlayerVehicleID
description: This function gets the ID of the vehicle the player is currently in.
tags: ["player", "vehicle"]
---

## คำอธิบาย

This function gets the ID of the vehicle the player is currently in. Note: NOT the model id of the vehicle. See GetVehicleModel for that.

| Name     | Description                                                        |
| -------- | ------------------------------------------------------------------ |
| playerid | The ID of the player in the vehicle that you want to get the ID of |

## ส่งคืน

ID of the vehicle or 0 if not in a vehicle

## ตัวอย่าง

```c
//add 10x Nitro if the player is in a car. Might be called on a command.
new vehicle;
vehicle = GetPlayerVehicleID(playerid);
if (vehicle > 0)
{
    AddVehicleComponent(vehicle, 1010);
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- IsPlayerInVehicle: Check if a player is in a certain vehicle.
- IsPlayerInAnyVehicle: Check if a player is in any vehicle.
- GetPlayerVehicleSeat: Check what seat a player is in.
- GetVehicleModel: Get the model id of a vehicle.
