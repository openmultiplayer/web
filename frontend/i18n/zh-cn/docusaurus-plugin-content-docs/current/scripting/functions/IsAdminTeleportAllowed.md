---
title: IsAdminTeleportAllowed
sidebar_label: IsAdminTeleportAllowed
description: Checks if the RCON admins allowed to teleport by right-clicking on the map.
tags: []
---

<VersionWarn version='omp v1.1.0.2612' />

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

- [AllowAdminTeleport](AllowAdminTeleport): Determine whether RCON admins will be teleported to their waypoint when they set one.
- [AllowPlayerTeleport](AllowPlayerTeleport): Toggle waypoint teleporting for players.
- [IsPlayerAdmin](IsPlayerAdmin): Checks if a player is logged into RCON.
