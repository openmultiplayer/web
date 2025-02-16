---
title: GetPlayerVirtualWorld
sidebar_label: GetPlayerVirtualWorld
description: Retrieves the current virtual world the player is in.
tags: ["player"]
---

## คำอธิบาย

Retrieves the current virtual world the player is in.

| Name     | Description                                       |
| -------- | ------------------------------------------------- |
| playerid | The ID of the player to get the virtual world of. |

## ส่งคืน

The ID of the virtual world the player is currently in.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/world", true))
    {
        new string[32];
        format(string, sizeof(string), "Your virtual world: %i", GetPlayerVirtualWorld(playerid));
        SendClientMessage(playerid, 0xFFFFFFFF, string);
        return 1;
    }
    return 0;
}
```

## บันทึก

:::tip

Virtual worlds are not the same as interiors.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetPlayerVirtualWorld: Set the virtual world of a player.
- GetVehicleVirtualWorld: Check what virtual world a vehicle is in.
- GetPlayerInterior: Get the current interior of a player.
