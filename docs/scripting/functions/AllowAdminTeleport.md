---
id: AllowAdminTeleport
title: AllowAdminTeleport
description: This function will determine whether RCON admins will be teleported to their waypoint when they set one.
tags: []
---

:::warning

This function, as of 0.3d, is deprecated. Please see OnPlayerClickMap.

:::

## Description

This function will determine whether RCON admins will be teleported to their waypoint when they set one.

| Name  | Description                   |
| ----- | ----------------------------- |
| allow | 0 to disable and 1 to enable. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    AllowAdminTeleport(1);
    // Other stuff
    return 1;
}
```

## Related Functions

- [IsPlayerAdmin](../functions/IsPlayerAdmin.md): Checks if a player is logged into RCON.
- [AllowPlayerTeleport](../functions/AllowPlayerTeleport.md): Toggle waypoint teleporting for players.
