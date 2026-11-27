---
title: "SetPlayerWeather | open.mp"
description: "Set a player's weather."
canonical: https://open.mp/docs/scripting/functions/SetPlayerWeather
language: en
---

# SetPlayerWeather

## Description

Set a player's [weather](https://open.mp/docs/scripting/resources/weatherid).

| Name | Description |
| --- | --- |
| playerid | The ID of the player whose weather to set. |
| weather | The [weather](https://open.mp/docs/scripting/resources/weatherid) to set. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/storm", true))
    {
        SetPlayerWeather(playerid, 8);
        return 1;
    }
    return 0;
}
```

## Notes

note

-   If [TogglePlayerClock](https://open.mp/docs/scripting/functions/TogglePlayerClock) is enabled, weather will slowly change over time, instead of changing instantly.
-   There are only valid 21 weather IDs in the game (0 - 20), however the game does not have any form of range check.

## Related Functions

-   [GetPlayerWeather](https://open.mp/docs/scripting/functions/GetPlayerWeather): Get a player's weather.
-   [SetWeather](https://open.mp/docs/scripting/functions/SetWeather): Set the global weather.
-   [SetGravity](https://open.mp/docs/scripting/functions/SetGravity): Set the global gravity.

## Related Resources

-   [Weather IDs](https://open.mp/docs/scripting/resources/weatherid)
