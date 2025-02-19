---
title: GetVehiclePos
sidebar_label: GetVehiclePos
description: Gets the position of a vehicle.
tags: ["vehicle"]
---

## คำอธิบาย

Gets the position of a vehicle.

| Name      | Description                                                               |
| --------- | ------------------------------------------------------------------------- |
| vehicleid | The ID of the vehicle to get the position of.                             |
| &Float:x  | A float variable in which to store the X coordinate, passed by reference. |
| &Float:y  | A float variable in which to store the Y coordinate, passed by reference. |
| &Float:z  | A float variable in which to store the Z coordinate, passed by reference. |

## ส่งคืน

1: The function was executed successfully.

0: The function failed to execute. The vehicle specified does not exist.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
     if (strcmp(cmdtext, "/vehpos", true) == 0)
     {
          new currentveh;
          currentveh = GetPlayerVehicleID(playerid);

          new Float:vehx, Float:vehy, Float:vehz;
          GetVehiclePos(currentveh, vehx, vehy, vehz);

          new vehpostext[96];
          format(vehpostext, sizeof(vehpostext), "The current vehicle positions are: %f, %f, %f", vehx, vehy, vehz);

          SendClientMessage(playerid, 0xFFFFFFFF, vehpostext);
          return 1;
     }

     return 0;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GetVehicleDistanceFromPoint: Get the distance between a vehicle and a point.
- SetVehiclePos: Set the position of a vehicle.
- GetVehicleZAngle: Check the current angle of a vehicle.
- GetVehicleRotation: Get the rotation of a vehicle on the XYZ axis.
