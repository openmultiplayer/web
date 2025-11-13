---
title: SetPlayerAdmin
sidebar_label: SetPlayerAdmin
description: Sets the player as an RCON admin.
tags: ["player", "rcon", "administration"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Sets the player as an RCON admin.

| Name       | Description                                                              |
| ---------- | ------------------------------------------------------------------------ |
| playerid   | The ID of the player.                                                    |
| bool:admin | **true** for set as an RCON admin, **false** for remove from RCON admin. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/admin", true))
    {
        SetPlayerAdmin(playerid, true);
        SendClientMessage(playerid, -1, "SERVER: You are now RCON admin!");
        return 1;
    }
    return 0;
}
```

## Related Functions

- [IsPlayerAdmin](IsPlayerAdmin): Check if a player is logged in as an RCON admin.

## Related Callbacks

- [OnRconLoginAttempt](OnRconLoginAttempt): Called when an attempt to login to RCON is made.
