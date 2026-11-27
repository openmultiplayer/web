---
title: "IsAdminTeleportAllowed | open.mp"
description: "Checks if the RCON admins allowed to teleport by right-clicking on the map."
canonical: https://open.mp/docs/scripting/functions/IsAdminTeleportAllowed
language: en
---

# IsAdminTeleportAllowed

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Checks if the RCON admins allowed to teleport by right-clicking on the map.

## Returns

true: Allowed.

false: Not allowed.

## Examples

```c
if (IsAdminTeleportAllowed())
{
    // Do something
}
```

## Related Functions

-   [AllowAdminTeleport](https://open.mp/docs/scripting/functions/AllowAdminTeleport): Determine whether RCON admins will be teleported to their waypoint when they set one.
-   [AllowPlayerTeleport](https://open.mp/docs/scripting/functions/AllowPlayerTeleport): Toggle waypoint teleporting for players.
-   [IsPlayerAdmin](https://open.mp/docs/scripting/functions/IsPlayerAdmin): Checks if a player is logged into RCON.
