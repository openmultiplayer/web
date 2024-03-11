---
title: GetPlayerState
description: Get a player's current state.
tags: ["player"]
---

## คำอธิบาย

Get a player's current state.

| Name     | Description                                       |
| -------- | ------------------------------------------------- |
| playerid | The ID of the player to get the current state of. |

## ส่งคืน

The player's current state as an integer (see: [Player States](../../scripting/resources/playerstates.md)).

## ตัวอย่าง

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    new playerState = GetPlayerState(killerid); // Get the killer's state

    if (playerState == PLAYER_STATE_DRIVER) // If the killer was in a vehicle
    {
        //It's a driver drive-by, take some money
        GivePlayerMoney(killerid, -10000);
    }
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GetPlayerSpecialAction: Get a player's current special action.
- SetPlayerSpecialAction: Set a player's special action.
- OnPlayerStateChange: Called when a player changes state.
