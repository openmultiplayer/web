---
title: GetPlayerSpecialAction
description: Retrieves a player's current special action.
tags: ["player"]
---

## คำอธิบาย

Retrieves a player's current special action.

| Name     | Description                                        |
| -------- | -------------------------------------------------- |
| playerid | The ID of the player to get the special action of. |

## ส่งคืน

The special action of the player (see: [Special Actions](../resources/specialactions)).

## ตัวอย่าง

```c
public OnPlayerUpdate(playerid)
{
    // Ban players if they have a jetpack
    if (GetPlayerSpecialAction(playerid) == SPECIAL_ACTION_USEJETPACK)
    {
        Ban(playerid);
    }
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetPlayerSpecialAction: Set a player's special action.
- GetPlayerState: Get a player's current state.
