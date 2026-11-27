---
title: "IsPlayerWidescreenToggled | open.mp"
description: "Checks if a player widescreen is on or off."
canonical: https://open.mp/docs/scripting/functions/IsPlayerWidescreenToggled
language: en
---

# IsPlayerWidescreenToggled

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Checks if a player widescreen is on or off.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to check. |

## Returns

**true** - The player widescreen is on.

**false** - The player widescreen is off.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/widescreencheck", true))
    {
        SendClientMessage(playerid, -1, "Wide Screen: %s", IsPlayerWidescreenToggled(playerid) ? "On" : "Off");
        return 1;
    }
    return 0;
}
```

## Related Functions

-   [TogglePlayerWidescreen](https://open.mp/docs/scripting/functions/TogglePlayerWidescreen): Toggle player's widescreen.
