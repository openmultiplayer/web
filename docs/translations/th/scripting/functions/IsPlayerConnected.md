---
title: IsPlayerConnected
description: Checks if a player is connected (if an ID is taken by a connected player).
tags: ["player"]
---

## คำอธิบาย

Checks if a player is connected (if an ID is taken by a connected player).

| Name     | Description                    |
| -------- | ------------------------------ |
| playerid | The ID of the player to check. |

## ส่งคืน

0: Player is NOT connected.

1: Player IS connected.

## ตัวอย่าง

```c
KillPlayer(playerid)
{
    if (!IsPlayerConnected(playerid))
    {
        printf("Player ID %i is not connected!", playerid);
    }
    else
    {
        SetPlayerHealth(playerid, 0);
    }
}
```

## บันทึก

:::tip

This function can be omitted in a lot of cases. Many other functions already have some sort of connection check built in.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [IsPlayerAdmin](IsPlayerAdmin): Checks if a player is logged into RCON.
- [OnPlayerConnect](../callbacks/OnPlayerConnect): Called when a player connects to the server.
- [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect): Called when a player leaves the server.
