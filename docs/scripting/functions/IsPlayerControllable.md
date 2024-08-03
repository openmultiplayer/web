---
title: IsPlayerControllable
description: Check if the player is controllable.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Check if the player is controllable.

| Name     | Description |
| -------- | ------------------- |
| playerid | The ID of the player. |

## Returns

**true** - Controllable

**false** - Uncontrollable

## Examples

```c
public OnPlayerSpawn(playerid)
{
    // Unfreeze the player if it is freezed
    if (IsPlayerControllable(playerid) == false)
    {
        TogglePlayerControllable(playerid, true);
    }

    return 1;
}
```

## Related Functions

- [TogglePlayerControllable](TogglePlayerControllable): Toggles whether a player can control their character or not. The player will also be unable to move their camera.
