---
title: PutPlayerInVehicle
description: Puts a player in a vehicle.
tags: ["player", "vehicle"]
---

## คำอธิบาย

Puts a player in a vehicle.

| Name      | Description                                 |
| --------- | ------------------------------------------- |
| playerid  | The ID of the player to put in a vehicle.   |
| vehicleid | The ID of the vehicle to put the player in. |
| seatid    | The ID of the seat to put the player in.    |

## ส่งคืน

1: The function was executed successfully.

0: The function failed to execute. The player or vehicle don't exist.

## ตัวอย่าง

```c
public OnPlayerEnterVehicle(playerid,vehicleid,ispassanger)
{
    PutPlayerInVehicle(playerid, vehicleid, 0);
    return 1;
}
```

```
0 - Driver
1 - Front passenger
2 - Back-left passenger
3 - Back-right passenger
4+ - Passenger seats (coach etc.)

```

## บันทึก

:::tip

You can use GetPlayerVehicleSeat in a loop to check if a seat is occupied by any players.

:::

:::warning

If the seat is invalid or is taken, will cause a crash when they EXIT the vehicle.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- RemovePlayerFromVehicle: Throw a player out of their vehicle.
- GetPlayerVehicleID: Get the ID of the vehicle the player is in.
- GetPlayerVehicleSeat: Check what seat a player is in.
- OnPlayerEnterVehicle: Called when a player starts to enter a vehicle.
