---
title: IsPlayerNPC
description: Check if a player is an actual player or an NPC.
tags: ["player", "npc"]
---

## คำอธิบาย

Check if a player is an actual player or an NPC.

| Name     | Description                    |
| -------- | ------------------------------ |
| playerid | The ID of the player to check. |

## ส่งคืน

1: The player is an NPC.

0: The player is not an NPC.

## ตัวอย่าง

```c
public OnPlayerConnect(playerid)
{
    if (IsPlayerNPC(playerid))
    {
        SendClientMessageToAll(-1, "An NPC connected!");
        return 1;
    }
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [ConnectNPC](../../scripting/functions/ConnectNPC.md): Connect an NPC.
- [IsPlayerAdmin](../../scripting/functions/IsPlayerAdmin.md): Checks if a player is logged into RCON.
