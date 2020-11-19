---
title: IsPlayerAdmin
description: Check if a player is logged in as an RCON admin.
tags: ["administration"]
---

## คำอธิบาย

Check if a player is logged in as an RCON admin.

| Name     | Description                    |
| -------- | ------------------------------ |
| playerid | The ID of the player to check. |

## ส่งคืน

1: Player is an RCON admin. 0: Player is NOT an RCON admin.

## ตัวอย่าง

```c
public OnPlayerSpawn(playerid)
{
    if (IsPlayerAdmin(playerid))
    {
        SendClientMessageToAll(0xDEEE20FF, "An admin spawned.");
    }
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SendRconCommand](../../scripting/functions/SendRconCommand.md): Sends an RCON command via the script.

## Related Callbacks

- [OnRconLoginAttempt](../../scripting/callbacks/OnRconLoginAttempt.md): Called when an attempt to login to RCON is made.
