---
title: IsPlayerWidescreenToggled
sidebar_label: IsPlayerWidescreenToggled
description: Checks if a player widescreen is on or off.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Checks if a player widescreen is on or off.

| Name     | Description                    |
|----------|--------------------------------|
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

- [TogglePlayerWidescreen](TogglePlayerWidescreen): Toggle player's widescreen.
