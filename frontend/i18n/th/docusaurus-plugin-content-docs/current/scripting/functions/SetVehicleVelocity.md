---
title: SetVehicleVelocity
sidebar_label: SetVehicleVelocity
description: Sets the X, Y and Z velocity of a vehicle.
tags: ["vehicle"]
---

## คำอธิบาย

Sets the X, Y and Z velocity of a vehicle.

| Name      | Description                                   |
| --------- | --------------------------------------------- |
| vehicleid | The ID of the vehicle to set the velocity of. |
| Float:X   | The velocity in the X direction.              |
| Float:Y   | The velocity in the Y direction .             |
| Float:Z   | The velocity in the Z direction.              |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. The vehicle does not exist.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/jump", cmdtext))
    {
    if (IsPlayerInAnyVehicle(playerid))
        SetVehicleVelocity(GetPlayerVehicleID(playerid), 0.0, 0.0, 0.2);
    return 1;
    }
}
```

## บันทึก

:::warning

This function has no affect on un-occupied vehicles and does not affect trains.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน
