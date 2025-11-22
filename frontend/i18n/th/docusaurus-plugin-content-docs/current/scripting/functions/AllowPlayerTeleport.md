---
title: AllowPlayerTeleport
sidebar_label: AllowPlayerTeleport
description: Enable/Disable the teleporting ability for a player by right-clicking on the map.
tags: ["player"]
---

:::warning

This function, as of 0.3d, is deprecated. Check OnPlayerClickMap.

:::

## คำอธิบาย

Enable/Disable the teleporting ability for a player by right-clicking on the map

| Name     | Description                             |
| -------- | --------------------------------------- |
| playerid | The ID of the player to allow teleport. |
| allow    | 1-allow, 0-disallow                     |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
public OnPlayerConnect( playerid )
{
    // Allows the Player to teleport by right-clicking on the map
    // since this is in OnPlayerConnect, this will be done for EACH player
    AllowPlayerTeleport( playerid, 1 );
}
```

## บันทึก

:::warning

This function will work only if AllowAdminTeleport is enabled, and you have to be an admin.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [AllowAdminTeleport](AllowAdminTeleport): Toggle waypoint teleporting for RCON admins.
