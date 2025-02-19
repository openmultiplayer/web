---
title: IsPlayerCameraTargetEnabled
sidebar_label: IsPlayerCameraTargetEnabled
description: Check if the player camera target is enabled.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Check if the player camera target is enabled.

| Name     | Description          |
| -------- | -------------------- |
| playerid | The ID of the player |

## Returns

**true** - Enable.

**false** - Disable.

## Examples

```c
public OnPlayerSpawn(playerid)
{
    if (IsPlayerCameraTargetEnabled(playerid))
    {
        // do something
    }

    return 1;
}
```

## Related Functions

- [EnablePlayerCameraTarget](EnablePlayerCameraTarget): Toggle camera targeting functions for a player.
