---
title: GetPlayerSurfingVehicleID
sidebar_label: GetPlayerSurfingVehicleID
description: Get the ID of the vehicle that the player is surfing (stuck to the roof of).
tags: ["player", "vehicle"]
---

## คำอธิบาย

Get the ID of the vehicle that the player is surfing (stuck to the roof of).

| Name     | Description                                                      |
| -------- | ---------------------------------------------------------------- |
| playerid | The ID of the player you want to know the surfing vehicle ID of. |

## ส่งคืน

The ID of the vehicle that the player is surfing. If they are not surfing a vehicle or the vehicle they are surfing has no driver, INVALID_VEHICLE_ID. If the player specified is not connected, INVALID_VEHICLE_ID also.

## ตัวอย่าง

```c
new surf = GetPlayerSurfingVehicleID(playerid);
if (surf == INVALID_VEHICLE_ID)
{
	SendClientMessage(playerid, COLOR_RED, "You are not surfing.");
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GetPlayerVehicleID: Get the ID of the vehicle the player is in.
- GetPlayerVehicleSeat: Check what seat a player is in.
