---
title: SetPlayerShopName
description: Loads or unloads an interior script for a player (for example the ammunation menu).
tags: ["player"]
---

## คำอธิบาย

Loads or unloads an interior script for a player (for example the ammunation menu).

| Name       | Description                                                  |
| ---------- | ------------------------------------------------------------ |
| playerid   | The ID of the player to load the interior script for.        |
| shopname[] | The shop script to load. Leave blank ("") to unload scripts. |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/enter", cmdtext))
    {
        SetPlayerInterior(playerid, 5);
        SetPlayerPos(playerid, 372.5565, -131.3607, 1001.4922);
        SetPlayerShopName(playerid,"FDPIZA");
        SendClientMessage(playerid,0xFFFFFFFF,"Welcome to Pizza Stack!");
        return 1;
    }
    return 0;
}
```

## บันทึก

:::tip

This function does not support casino scripts.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- DisableInteriorEnterExits: Disable the yellow door markers.
- SetPlayerInterior: Set a player's interior.
