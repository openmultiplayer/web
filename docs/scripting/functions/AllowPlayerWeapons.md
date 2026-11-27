---
title: "AllowPlayerWeapons | open.mp"
description: "Enable/Disable weapons for a player."
canonical: https://open.mp/docs/scripting/functions/AllowPlayerWeapons
language: en
---

# AllowPlayerWeapons

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Enable/Disable weapons for a player.

| Name | Description |
| --- | --- |
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

-   [ArePlayerWeaponsAllowed](https://open.mp/docs/scripting/functions/ArePlayerWeaponsAllowed): Can the player use weapons?
