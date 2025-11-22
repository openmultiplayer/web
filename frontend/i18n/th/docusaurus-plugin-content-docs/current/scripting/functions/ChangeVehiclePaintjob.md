---
title: ChangeVehiclePaintjob
sidebar_label: ChangeVehiclePaintjob
description: Change a vehicle's paintjob (for plain colors see ChangeVehicleColor).
tags: ["vehicle"]
---

## คำอธิบาย

Change a vehicle's paintjob (for plain colors see ChangeVehicleColor).

| Name       | Description                                                  |
| ---------- | ------------------------------------------------------------ |
| vehicleid  | The ID of the vehicle to change the paintjob of.             |
| paintjobid | The ID of the paintjob to apply. Use 3 to remove a paintjob. |

## ส่งคืน

This function always returns 1 (success), even if the vehicle passed is not created.

## ตัวอย่าง

```c
new rand = random(3); // Will either be 0 1 or 2 (all valid)
ChangeVehiclePaintjob(GetPlayerVehicleID(playerid), rand); // changes the paintjob of the player's current vehicle to a random one
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [ChangeVehicleColor](ChangeVehicleColor): Set the color of a vehicle.
- [OnVehiclePaintjob](../callbacks/OnVehiclePaintjob): Called when a vehicle's paintjob is changed.
