---
title: DisableRemoteVehicleCollisions
description: Disables collisions between occupied vehicles for a player.
tags: ["vehicle"]
---

:::warning

ฟังก์ชั่นนี้ถูกเพิ่มใน SA-MP 0.3.7 และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

Disables collisions between occupied vehicles for a player.

| Name     | Description                                                   |
| -------- | ------------------------------------------------------------- |
| playerid | The ID of the player for whom you want to disable collisions. |
| disable  | 1 to disable collisions, 0 to enable collisions.              |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. The player specified does not exist.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/collision", true))
    {
        new string[64];

        format(string, sizeof(string), "Vehicle collision for you is now '%s'", (GetPVarInt(playerid, "vehCollision") != 1) ? ("Disabled") : ("Enabled"));
        SendClientMessage(playerid, 0xFFFFFFFF, string);

        SetPVarInt(playerid, "vehCollision", !GetPVarInt(playerid, "vehCollision"));

        DisableRemoteVehicleCollisions(playerid, GetPVarInt(playerid, "vehCollision"));
        return 1;
    }
    return 0;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน
