---
title: "TogglePlayerGhostMode | open.mp"
description: "Toggle player's ghost mode."
canonical: https://open.mp/docs/scripting/functions/TogglePlayerGhostMode
language: en
---

# TogglePlayerGhostMode

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Toggle player's ghost mode. Ghost mode disables the collision between player models.

| Name | Description |
| --- | --- |
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

-   [GetPlayerGhostMode](https://open.mp/docs/scripting/functions/GetPlayerGhostMode): Get player's ghost mode.
