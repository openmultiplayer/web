---
title: AllowAdminTeleport
description: This function will determine whether RCON admins will be teleported to their waypoint when they set one.
tags: []
---

:::warning

This function, as of 0.3d, is deprecated. Please see OnPlayerClickMap.

:::

## คำอธิบาย

This function will determine whether RCON admins will be teleported to their waypoint when they set one.

| Name  | Description                   |
| ----- | ----------------------------- |
| allow | 0 to disable and 1 to enable. |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
public OnGameModeInit()
{
    AllowAdminTeleport(1);
    // Other stuff
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [IsPlayerAdmin](../../scripting/functions/IsPlayerAdmin.md): Checks if a player is logged into RCON.
- [AllowPlayerTeleport](../../scripting/functions/AllowPlayerTeleport.md): Toggle waypoint teleporting for players.
