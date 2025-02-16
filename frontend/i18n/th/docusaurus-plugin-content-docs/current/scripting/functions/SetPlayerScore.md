---
title: SetPlayerScore
description: Set a player's score.
tags: ["player"]
---

## คำอธิบาย

Set a player's score. Players' scores are shown in the scoreboard (shown by holding the TAB key).

| Name     | Description                               |
| -------- | ----------------------------------------- |
| playerid | The ID of the player to set the score of. |
| score    | The value to set the player's score to.   |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. This means the player specified does not exist.

## ตัวอย่าง

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // Add 1 to this killer's score. We must check it is valid first.
    if (killerid != INVALID_PLAYER_ID)
    {
        SetPlayerScore(killerid, GetPlayerScore(killerid) + 1);
    }
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GetPlayerScore: Get the score of a player.
