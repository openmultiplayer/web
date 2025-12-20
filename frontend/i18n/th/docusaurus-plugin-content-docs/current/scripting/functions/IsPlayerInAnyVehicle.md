---
title: IsPlayerInAnyVehicle
sidebar_label: IsPlayerInAnyVehicle
description: Check if a player is inside any vehicle (as a driver or passenger).
tags: ["player", "vehicle"]
---

## คำอธิบาย

Check if a player is inside any vehicle (as a driver or passenger).

| Name     | Description                    |
| -------- | ------------------------------ |
| playerid | The ID of the player to check. |

## ส่งคืน

1: The player is in a vehicle.

0: The player is not in a vehicle.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/invehicle", true) == 0)
    {
        if (IsPlayerInAnyVehicle(playerid))
        {
            SendClientMessage(playerid, 0x00FF00AA, "You're in a vehicle.");
        }
        return 1;
    }
    return 0;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [IsPlayerInVehicle](IsPlayerInVehicle): Check if a player is in a certain vehicle.
- [GetPlayerVehicleSeat](GetPlayerVehicleSeat): Check what seat a player is in.
