---
title: "TogglePlayerWidescreen | open.mp"
description: "Toggle player's widescreen."
canonical: https://open.mp/docs/scripting/functions/TogglePlayerWidescreen
language: en
---

# TogglePlayerWidescreen

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Toggle player's widescreen.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to toggle the widescreen. |
| bool:wide | **true** for turn on and **false** for turn off. |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute. This means the player specified does not exist.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/widescreen", true))
    {
        TogglePlayerWidescreen(playerid, true);
        SendClientMessage(playerid, -1, "SERVER: You turned on the widescreen!");
        return 1;
    }
    return 0;
}
```

* * *

**Widescreen on:**

**Widescreen off:**

## Related Functions

-   [IsPlayerWidescreenToggled](https://open.mp/docs/scripting/functions/IsPlayerWidescreenToggled): Checks if a player widescreen is on or off.
