---
title: "SetPlayerTime | open.mp"
description: "Sets the game time for a player."
canonical: https://open.mp/docs/scripting/functions/SetPlayerTime
language: en
---

# SetPlayerTime

## Description

Sets the game time for a player. If a player's clock is enabled ([TogglePlayerClock](https://open.mp/docs/scripting/functions/TogglePlayerClock)) the time displayed by it will update automatically.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to set the game time of. |
| hour | Hour to set (0-23). |
| minute | Minutes to set (0-59). |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The player specified does not exist.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/noon", true))
    {
        SetPlayerTime(playerid, 12, 0); // Noon
        return 1;
    }
    if (!strcmp(cmdtext, "/midnight", true))
    {
        SetPlayerTime(playerid, 0, 0); // Midnight
        return 1;
    }
    return 0;
}
```

## Notes

note

Using this function under [OnPlayerConnect](https://open.mp/docs/scripting/callbacks/OnPlayerConnect) doesn't work.

## Related Functions

-   [SetWorldTime](https://open.mp/docs/scripting/functions/SetWorldTime): Set the global server time.
-   [GetPlayerTime](https://open.mp/docs/scripting/functions/GetPlayerTime): Get the time of a player.
-   [TogglePlayerClock](https://open.mp/docs/scripting/functions/TogglePlayerClock): Toggle the clock in the top-right corner.
