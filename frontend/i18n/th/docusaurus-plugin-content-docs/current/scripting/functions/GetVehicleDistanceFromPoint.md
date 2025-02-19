---
title: GetVehicleDistanceFromPoint
sidebar_label: GetVehicleDistanceFromPoint
description: This function can be used to calculate the distance (as a float) between a vehicle and another map coordinate.
tags: ["vehicle"]
---

## คำอธิบาย

This function can be used to calculate the distance (as a float) between a vehicle and another map coordinate. This can be useful to detect how far a vehicle away is from a location.

| Name      | Description                                          |
| --------- | ---------------------------------------------------- |
| vehicleid | The ID of the vehicle to calculate the distance for. |
| Float:X   | The X map coordinate.                                |
| Float:Y   | The Y map coordinate.                                |
| Float:Z   | The Z map coordinate.                                |

## ส่งคืน

A float containing the distance from the point specified in the coordinates.

## ตัวอย่าง

```c
/* when the player types 'vendingmachine' in to the chat box, they'll see this.*/
public OnPlayerText(playerid, text[])
{
    if (strcmp(text, "vendingmachine", true) == 0)
    {
        new
            Float: fDistance = GetVehicleDistanceFromPoint(GetPlayerVehicleID(playerid), 237.9, 115.6, 1010.2),
            szMessage[44];

        format(szMessage, sizeof(szMessage), "You're %f away from our vending machine.", fDistance);
        SendClientMessage(playerid, 0xA9C4E4FF, szMessage);
    }
    return 0;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GetPlayerDistanceFromPoint: Get the distance between a player and a point.
- GetVehiclePos: Get the position of a vehicle.
