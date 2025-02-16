---
title: GetPlayerWantedLevel
sidebar_label: GetPlayerWantedLevel
description: Gets the wanted level of a player.
tags: ["player"]
---

## คำอธิบาย

Gets the wanted level of a player.

| Name     | Description                                                    |
| -------- | -------------------------------------------------------------- |
| playerid | The ID of the player that you want to get the wanted level of. |

## ส่งคืน

The player's wanted level.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
     if (strcmp(cmdtext, "/getmywantedlevel", true) == 0)
     {
          // Gets the current wanted level, saves it in the variable wantedlevel
          //and then tells the player his wanted in a client message.

          new wantedlevel;
          wantedlevel = GetPlayerWantedLevel(playerid);
          new tmp[64];
          format(tmp, sizeof(tmp), "Your current wanted level is: %i", wantedlevel);
          SendClientMessage(playerid, 0xFF0000FF, tmp);

          return 1;
     }
    return 0;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetPlayerWantedLevel: Set a player's wanted level.
- PlayCrimeReportForPlayer: Play a crime report for a player.
