---
title: SetVehicleZAngle
sidebar_label: SetVehicleZAngle
description: Set the Z rotation (yaw) of a vehicle.
tags: ["vehicle"]
---

## คำอธิบาย

Set the Z rotation (yaw) of a vehicle.

| Name          | Description                                   |
| ------------- | --------------------------------------------- |
| vehicleid     | The ID of the vehicle to set the rotation of. |
| Float:z_angle | The Z angle to set.                           |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. The vehicle specified does not exist.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/flip", true) == 0)
    {
        new currentveh;
        new Float:angle;
        currentveh = GetPlayerVehicleID(playerid);
        GetVehicleZAngle(currentveh, angle);
        SetVehicleZAngle(currentveh, angle);
        SendClientMessage(playerid, 0xFFFFFFFF, "Your vehicle has been flipped.");
        return 1;
    }

     return 0;
}
```

## บันทึก

:::tip

A vehicle's X and Y (pitch and roll) rotation will be reset when this function is used. The X and Y rotations can not be set. This function does not work on unoccupied vehicles (It is believed to be a GTA limitation).

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GetVehicleZAngle: Check the current angle of a vehicle.
- SetVehiclePos: Set the position of a vehicle.
