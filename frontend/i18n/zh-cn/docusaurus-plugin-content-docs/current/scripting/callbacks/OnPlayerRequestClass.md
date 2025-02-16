---
title: OnPlayerRequestClass
description: This callback is called when a player changes class at class selection (and when class selection first appears).
tags: ["player", "class"]
---

## Description

This callback is called when a player changes class at class selection (and when class selection first appears).

| Name     | Description                                                                                           |
| -------- | ----------------------------------------------------------------------------------------------------- |
| playerid | The ID of the player that changed class.                                                              |
| classid  | The ID of the current class being viewed (returned by [AddPlayerClass](../functions/AddPlayerClass)). |

## Returns

It is always called first in filterscripts.

## Examples

```c
public OnPlayerRequestClass(playerid,classid)
{
    if (classid == 3 && !IsPlayerAdmin(playerid))
    {
        SendClientMessage(playerid, COLOR_RED, "This skin is only for admins!");
        return 0;
    }
    return 1;
}
```

## Notes

:::tip

This callback is also called when a player presses F4.

:::

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnPlayerRequestSpawn](OnPlayerRequestSpawn): This callback is called when a player attempts to spawn via class selection. 

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another. 

- [AddPlayerClass](../functions/AddPlayerClass): Add a player class.
