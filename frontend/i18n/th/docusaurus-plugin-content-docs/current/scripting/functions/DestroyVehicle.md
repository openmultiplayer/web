---
title: DestroyVehicle
sidebar_label: DestroyVehicle
description: Destroy a vehicle.
tags: ["vehicle"]
---

## คำอธิบาย

Destroy a vehicle. It will disappear instantly.

| Name      | Description                       |
| --------- | --------------------------------- |
| vehicleid | The ID of the vehicle to destroy. |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. The vehicle does not exist.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
     if (strcmp(cmdtext, "/destroyveh", true) == 0)
     {
          new vehicleid = GetPlayerVehicleID(playerid);
          DestroyVehicle(vehicleid);
          return 1;
     }

     return 0;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [CreateVehicle](../../scripting/functions/CreateVehicle.md): Create a vehicle.
- [RemovePlayerFromVehicle](../../scripting/functions/RemovePlayerFromVehicle.md): Throw a player out of their vehicle.
- [SetVehicleToRespawn](../../scripting/functions/SetVehicleToRespawn.md): Respawn a vehicle.
