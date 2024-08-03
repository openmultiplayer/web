---
title: PlayCrimeReportForPlayer
description: This function plays a crime report for a player - just like in single-player when CJ commits a crime.
tags: ["player"]
---

## คำอธิบาย

This function plays a crime report for a player - just like in single-player when CJ commits a crime.

| Name      | Description                                                                                                                  |
| --------- | ---------------------------------------------------------------------------------------------------------------------------- |
| playerid  | The ID of the player that will hear the crime report.                                                                        |
| suspectid | The ID of the suspect player whom will be described in the crime report.                                                     |
| crimeid   | The [crime ID](../resources/crimelist.md), which will be reported as a 10-code (i.e. 10-16 if 16 was passed as the crimeid). |

## ส่งคืน

1: The function was executed successfully.

0: The function failed to execute. This means the player specified does not exist.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/suspect"))
    {
        PlayCrimeReportForPlayer(playerid, 0, 16);
        SendClientMessage(playerid, 0xFFFFFFFF, "ID 0 committed a crime (10-16).");
        return 1;
    }
    return 0;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- PlayerPlaySound: Play a sound for a player.
