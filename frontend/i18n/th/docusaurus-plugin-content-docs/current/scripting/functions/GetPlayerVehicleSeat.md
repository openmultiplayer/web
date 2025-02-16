---
title: GetPlayerVehicleSeat
description: Find out which seat a player is in.
tags: ["player", "vehicle"]
---

## คำอธิบาย

Find out which seat a player is in.

| Name     | Description                                       |
| -------- | ------------------------------------------------- |
| playerid | The ID of the player you want to get the seat of. |

## ส่งคืน

The ID of the seat the player is in. -1 is not in vehicle, 0 is the driver, 1 is the front passenger, and 2 & 3 are the rear passengers.

## ตัวอย่าง

```c
if (strcmp(cmdtext, "/myseat", true) == 0)
{
    new szString[14], iSeat = GetPlayerVehicleSeat(playerid);

    // How you can discard of your information.
    if (iSeat == 128) return SendClientMessage(playerid, 0xFFFFFFFF, "An error has prevented us from returning the seat ID.");

    format(szString, sizeof(szString), "Your seat: %i", iSeat);
    SendClientMessage(playerid, 0xFFFFFFFF, szString);
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GetPlayerVehicleID: Get the ID of the vehicle the player is in.
- PutPlayerInVehicle: Put a player in a vehicle.
