---
title: "SetWorldTime | open.mp"
description: "Sets the world time (for all players) to a specific hour."
canonical: https://open.mp/docs/scripting/functions/SetWorldTime
language: en
---

# SetWorldTime

## Description

Sets the world time (for all players) to a specific hour.

| Name | Description |
| --- | --- |
| hour | The hour to set (0-23) |

## Returns

This function does not return any specific values.

## Examples

```c
// Set the time to 12 o'clock (noon)
SetWorldTime(12);
```

## Notes

note

This function is only relevant for players that do not use a passing clock - see [TogglePlayerClock](https://open.mp/docs/scripting/functions/TogglePlayerClock).

tip

To set the minutes and/or to set the time for individual players, see [SetPlayerTime](https://open.mp/docs/scripting/functions/SetPlayerTime).

## Related Functions

-   [GetWorldTime](https://open.mp/docs/scripting/functions/GetWorldTime): Get the current world time.
-   [SetPlayerTime](https://open.mp/docs/scripting/functions/SetPlayerTime): Set a player's time.
-   [SetWeather](https://open.mp/docs/scripting/functions/SetWeather): Set the global weather.
-   [SetGravity](https://open.mp/docs/scripting/functions/SetGravity): Set the global gravity.
