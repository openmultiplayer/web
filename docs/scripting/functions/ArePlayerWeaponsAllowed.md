---
title: "ArePlayerWeaponsAllowed | open.mp"
description: "Can the player use weapons?"
canonical: https://open.mp/docs/scripting/functions/ArePlayerWeaponsAllowed
language: en
---

# ArePlayerWeaponsAllowed

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Can the player use weapons?

| Name | Description |
| --- | --- |
| playerid | The ID of the player to check. |

## Returns

**true** - Player is allowed.

**false** - Player is not allowed.

## Examples

```c
public OnPlayerSpawn(playerid)
{
    if (ArePlayerWeaponsAllowed(playerid))
    {
        // do something
    }

    return 1;
}
```

## Related Functions

-   [AllowPlayerWeapons](https://open.mp/docs/scripting/functions/AllowPlayerWeapons): Enable/Disable weapons for a player.
