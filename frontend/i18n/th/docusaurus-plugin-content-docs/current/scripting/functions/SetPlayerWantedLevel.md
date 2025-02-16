---
title: SetPlayerWantedLevel
description: Set a player's wanted level (6 brown stars under HUD).
tags: ["player"]
---

## คำอธิบาย

Set a player's wanted level (6 brown stars under HUD).

| Name     | Description                                      |
| -------- | ------------------------------------------------ |
| playerid | The ID of the player to set the wanted level of. |
| level    | The wanted level to set for the player (0-6).    |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. The player specified does not exist.

## ตัวอย่าง

```c
if (strcmp(cmdtext, "/turnuptheheat", true) == 0)
{
    SetPlayerWantedLevel(playerid, 6);
    SendClientMessage(playerid, 0xFF0000FF, "Wanted Level: 6");
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GetPlayerWantedLevel: Check a player's wanted level.
- PlayCrimeReportForPlayer: Play a crime report for a player.
