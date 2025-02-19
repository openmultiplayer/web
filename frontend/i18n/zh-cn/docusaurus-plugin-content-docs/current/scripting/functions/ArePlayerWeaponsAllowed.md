---
title: ArePlayerWeaponsAllowed
sidebar_label: ArePlayerWeaponsAllowed
description: Can the player use weapons?
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Can the player use weapons?

| Name     | Description                    |
| -------- | ------------------------------ |
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

- [AllowPlayerWeapons](AllowPlayerWeapons): Enable/Disable weapons for a player.
