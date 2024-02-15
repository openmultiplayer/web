---
title: TogglePlayerWidescreen
description: Toggle player's widescreen.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Toggle player's widescreen.

| Name      | Description                                      |
|-----------|--------------------------------------------------|
| playerid  | The ID of the player to toggle the widescreen.   |
| bool:wide | **true** for turn on and **false** for turn off. |

## Returns

true - The function was executed successfully.

false - The function failed to execute. This means the player specified does not exist.

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

<hr />

**Widescreen on:**

![](https://i.ibb.co/Zcc2qmD/widescreen-on.png)

**Widescreen off:**

![](https://i.ibb.co/jb1YcQS/widescreen-off.png)

## Related Functions

- [IsPlayerWidescreenToggled](IsPlayerWidescreenToggled): Checks if a player widescreen is on or off.
