---
title: SetPlayerWantedLevel
description: Set a player's wanted level (6 brown stars under HUD).
tags: ["player"]
---

## Description

Set a player's wanted level (6 brown stars under HUD).

| Name     | Description                                      |
| -------- | ------------------------------------------------ |
| playerid | The ID of the player to set the wanted level of. |
| level    | The wanted level to set for the player (0-6).    |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The player specified does not exist.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/turnuptheheat", true) == 0)
    {
        SetPlayerWantedLevel(playerid, 6);
        SendClientMessage(playerid, 0xFF0000FF, "Wanted Level: 6");
        return 1;
    }
    return 0;
}
```

## Related Functions

- [GetPlayerWantedLevel](GetPlayerWantedLevel): Check a player's wanted level.
- [PlayCrimeReportForPlayer](PlayCrimeReportForPlayer): Play a crime report for a player.
