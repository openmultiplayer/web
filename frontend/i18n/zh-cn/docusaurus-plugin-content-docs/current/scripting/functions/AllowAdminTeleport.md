---
title: AllowAdminTeleport
sidebar_label: AllowAdminTeleport
description: This function will determine whether RCON admins will be teleported to their waypoint when they set one.
tags: []
---

:::warning

This function, as of 0.3d, is deprecated. Please see [OnPlayerClickMap](../callbacks/OnPlayerClickMap).

:::

## Description

This function will determine whether RCON admins will be teleported to their waypoint when they set one.

| Name       | Description                              |
| ---------- | ---------------------------------------- |
| bool:allow | 'false' to disable and 'true' to enable. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    AllowAdminTeleport(true);
    // Other stuff
    return 1;
}
```

## Related Functions

- [IsAdminTeleportAllowed](IsAdminTeleportAllowed): Checks if the RCON admins allowed to teleport by right-clicking on the map.
- [IsPlayerAdmin](IsPlayerAdmin): Checks if a player is logged into RCON.
- [AllowPlayerTeleport](AllowPlayerTeleport): Toggle waypoint teleporting for players.
