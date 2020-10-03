---
id: OnPlayerRequestClass
title: OnPlayerRequestClass
description: Called when a player changes class at class selection (and when class selection first appears).
tags: ["player"]
---

## Description

Called when a player changes class at class selection (and when class selection first appears).

| Name     | Description                                                            |
| -------- | ---------------------------------------------------------------------- |
| playerid | The ID of the player that changed class.                               |
| classid  | The ID of the current class being viewed (returned by AddPlayerClass). |

## Returns

It is always called first in filterscripts.

## Examples

```c
public OnPlayerRequestClass(playerid,classid)
{
    if(classid == 3 && !IsPlayerAdmin(playerid))
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

## Related Functions

- [AddPlayerClass](../functions/AddPlayerClass.md): Add a class.
