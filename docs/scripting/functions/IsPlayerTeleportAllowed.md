---
title: "IsPlayerTeleportAllowed | open.mp"
description: "Can this player teleport by right-clicking on the map?"
canonical: https://open.mp/docs/scripting/functions/IsPlayerTeleportAllowed
language: en
---

# IsPlayerTeleportAllowed

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Can this player teleport by right-clicking on the map?

| Name | Description |
| --- | --- |
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

-   [AllowPlayerTeleport](https://open.mp/docs/scripting/functions/AllowPlayerTeleport): Sets the player as an RCON admin.
