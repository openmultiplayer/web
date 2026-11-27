---
title: "PlayCrimeReportForPlayer | open.mp"
description: "This function plays a crime report for a player - just like in single-player when CJ commits a crime."
canonical: https://open.mp/docs/scripting/functions/PlayCrimeReportForPlayer
language: en
---

# PlayCrimeReportForPlayer

## Description

This function plays a crime report for a player - just like in single-player when CJ commits a crime.

| Name | Description |
| --- | --- |
| playerid | The ID of the player that will hear the crime report. |
| suspectid | The ID of the suspect player whom will be described in the crime report. |
| crime | The [crime ID](https://open.mp/docs/scripting/resources/crimelist), which will be reported as a 10-code (i.e. 10-16 if 16 was passed as the crimeid). |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute. This means the player specified does not exist.

## Examples

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

## Related Functions

-   [PlayerPlaySound](https://open.mp/docs/scripting/functions/PlayerPlaySound): Play a sound for a player.

## Related Resources

-   [Crime IDs](https://open.mp/docs/scripting/resources/crimelist)
