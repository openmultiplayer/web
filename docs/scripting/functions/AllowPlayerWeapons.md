---
title: AllowPlayerWeapons
description: Enable/Disable weapons for a player.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Enable/Disable weapons for a player.

| Name     | Description                                           |
| -------- | ----------------------------------------------------- |
| playerid | The ID of the player to allow weapons |
| bool:allow | true for allow and false for disallow. |

## Returns

This function always returns true.

## Examples

```c
public OnPlayerConnect(playerid)
{
    AllowPlayerWeapons(playerid, true);

    return 1;
}
```

## Related Functions

- [ArePlayerWeaponsAllowed](ArePlayerWeaponsAllowed): Can the player use weapons?
