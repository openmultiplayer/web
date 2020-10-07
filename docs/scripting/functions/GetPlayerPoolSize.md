---
id: GetPlayerPoolSize
title: GetPlayerPoolSize
description: Gets the highest playerid currently in use on the server.
tags: ["player"]
---

:::warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

:::

## Description

Gets the highest playerid currently in use on the server.

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

- [GetVehiclePoolSize](GetVehiclePoolSize.md): Gets the highest vehicleid currently in use on the server.
- [GetMaxPlayers](GetMaxPlayers.md): Gets the maximum number of players that can join the server.
