---
title: "GetPlayerTime | open.mp"
description: "Get the player's current game time."
canonical: https://open.mp/docs/scripting/functions/GetPlayerTime
language: en
---

# GetPlayerTime

## Description

Get the player's current game time. Set by [SetWorldTime](https://open.mp/docs/scripting/functions/SetWorldTime), or by the game automatically if [TogglePlayerClock](https://open.mp/docs/scripting/functions/TogglePlayerClock) is used.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to get the game time of. |
| &hour | A variable in which to store the hour, passed by reference. |
| &minute | A variable in which to store the minutes, passed by reference. |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute. The player specified does not exist.

The current game time is stored in the specified variables.

## Examples

```c
new hour, minutes;
GetPlayerTime(playerid, hour, minutes);
if (hour == 13 && minutes == 37)
{
    SendClientMessage(playerid, COLOR_WHITE, "The time is 13:37!");
}
```

## Related Functions

-   [SetPlayerTime](https://open.mp/docs/scripting/functions/SetPlayerTime): Set a player's time.
-   [SetWorldTime](https://open.mp/docs/scripting/functions/SetWorldTime): Set the global server time.
-   [TogglePlayerClock](https://open.mp/docs/scripting/functions/TogglePlayerClock): Toggle the clock in the top-right corner.
