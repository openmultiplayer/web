---
title: IsPlayerTeleportAllowed
description: Can this player teleport by right-clicking on the map?
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Can this player teleport by right-clicking on the map?

| Name     | Description                             |
| -------- | --------------------------------------- |
| playerid | The ID of the player to allow teleport. |

## Returns

**true** - Player is allowed.

**false** - Player is not allowed.

## Examples

```c
public OnPlayerConnect(playerid)
{
    AllowPlayerTeleport(playerid, true);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    if (IsPlayerTeleportAllowed(playerid))
    {
        // Do something
    }
    return 1;
}
```

## Related Functions

- [AllowPlayerTeleport](AllowPlayerTeleport): Sets the player as an RCON admin.
