---
title: "IsPlayerCameraTargetEnabled | open.mp"
description: "Check if the player camera target is enabled."
canonical: https://open.mp/docs/scripting/functions/IsPlayerCameraTargetEnabled
language: en
---

# IsPlayerCameraTargetEnabled

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Check if the player camera target is enabled.

| Name | Description |
| --- | --- |
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

-   [EnablePlayerCameraTarget](https://open.mp/docs/scripting/functions/EnablePlayerCameraTarget): Toggle camera targeting functions for a player.
