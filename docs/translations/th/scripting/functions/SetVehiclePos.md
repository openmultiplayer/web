---
title: SetVehiclePos
description: Set a vehicle's position.
tags: ["vehicle"]
---

## คำอธิบาย

Set a vehicle's position

| Name      | Description                                  |
| --------- | -------------------------------------------- |
| vehicleid | Vehicle ID that you want set new position.   |
| Float:x   | The X coordinate to position the vehicle at. |
| Float:y   | The Y coordinate to position the vehicle at. |
| Float:z   | The Z coordinate to position the vehicle at. |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. The vehicle specified does not exist.

## ตัวอย่าง

```c
// Put the player's vehicle at the coordinates 0, 0, 3 (center of SA)
new vehicleid = GetPlayerVehicleID(playerid);
SetVehiclePos(vehicleid, 0, 0, 3);
```

## บันทึก

:::warning

An empty vehicle will not fall after being teleported into the air.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetPlayerPos: Set a player's position.
- GetVehiclePos: Get the position of a vehicle.
- SetVehicleZAngle: Set the direction of a vehicle.
