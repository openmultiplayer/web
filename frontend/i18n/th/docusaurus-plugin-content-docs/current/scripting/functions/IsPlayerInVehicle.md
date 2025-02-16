---
title: IsPlayerInVehicle
sidebar_label: IsPlayerInVehicle
description: Checks if a player is in a specific vehicle.
tags: ["player", "vehicle"]
---

## คำอธิบาย

Checks if a player is in a specific vehicle.

| Name      | Description                               |
| --------- | ----------------------------------------- |
| playerid  | ID of the player.                         |
| vehicleid | ID of the vehicle. Note: NOT the modelid! |

## ส่งคืน

1 - Player IS in the vehicle.

0 - Player is NOT in the vehicle.

## ตัวอย่าง

```c
new specialcar;

public OnGameModeInit()
{
    specialcar = AddStaticVehicle(411, 0.0, 0.0, 5.0, 0.0, -1, -1);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/specialcar", true) == 0)
    {
        if (IsPlayerInVehicle(playerid, specialcar))
        {
            SendClientMessage(playerid, -1, "You're in the special car!");
        }
        return 1;
    }
    return 0;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [IsPlayerInAnyVehicle](../../scripting/functions/IsPlayerInAnyVehicle.md): Check if a player is in any vehicle.
- [GetPlayerVehicleSeat](../../scripting/functions/GetPlayerVehicleSeat.md): Check what seat a player is in.
