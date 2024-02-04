---
title: TogglePlayerGhostMode
description: Toggle player's ghost mode.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Toggle player's ghost mode.
Ghost mode disables the collision between player models.

| Name     | Description                                           |
| -------- | ----------------------------------------------------- |
| playerid | The ID of the player to toggle the ghost mode. |
| bool:toggle | true for enable and false for disable. |

## Returns

This function always returns true.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/ghostmode", true))
    {
        TogglePlayerGhostMode(playerid, true);
        SendClientMessage(playerid, -1, "SERVER: You enabled the ghost mode!");
        return 1;
    }
    return 0;
}
```

## Related Functions

- [GetPlayerGhostMode](GetPlayerGhostMode): Get player's ghost mode.
