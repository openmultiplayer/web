---
title: GetPlayerScore
description: This function returns a player's score as it was set using SetPlayerScore.
tags: ["player"]
---

## คำอธิบาย

This function returns a player's score as it was set using SetPlayerScore

| Name     | Description                     |
| -------- | ------------------------------- |
| playerid | The player to get the score of. |

## ส่งคืน

The player's score.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid,text[])
{
    if (!strcmp(cmdtext,"/score",true))
    {
        new string[128];
        format(string, sizeof(string), "Score: %i",GetPlayerScore(playerid));
        SendClientMessage(playerid, COLOR_ORANGE, string);
        return 1;
    }
    return 0;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetPlayerScore: Set the score of a player.
- GetPlayerPing: Get the ping of a player.
