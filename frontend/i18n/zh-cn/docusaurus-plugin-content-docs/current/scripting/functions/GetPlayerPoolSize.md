---
title: GetPlayerPoolSize
description: Gets the highest playerid currently in use on the server.
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Gets the highest playerid currently in use on the server.  Note that in SA:MP this function is broken and will return `0` even when there are no players.  fixes.inc and open.mp correct this to return `-1`, but also deprecate the function in favour of `MAX_PLAYERS` or `foreach`.

## Examples

```c
FreezeAll()
{
    // note that we assign the return value to a new variable (j) to avoid calling the function with each iteration
    for (new i = 0, j = GetPlayerPoolSize(); i <= j; i++)
    {
        TogglePlayerControllable(i, 0);
    }
}
```

## Related Functions

- [GetVehiclePoolSize](GetVehiclePoolSize): Gets the highest vehicleid currently in use on the server.
- [GetMaxPlayers](GetMaxPlayers): Gets the maximum number of players that can join the server.
