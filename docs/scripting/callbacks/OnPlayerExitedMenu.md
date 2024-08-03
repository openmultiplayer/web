---
title: OnPlayerExitedMenu
description: This callback is called when a player exits a menu.
tags: ["player", "menu"]
---

## Description

This callback is called when a player exits a menu.

| Name     | Description                               |
| -------- | ----------------------------------------- |
| playerid | The ID of the player that exited the menu |

## Returns

It is always called first in gamemode.

## Examples

```c
public OnPlayerExitedMenu(playerid)
{
    TogglePlayerControllable(playerid, true); // unfreeze the player when they exit a menu
    return 1;
}
```

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnPlayerSelectedMenuRow](OnPlayerSelectedMenuRow): This callback is called when a player selected a row in a menu.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another. 

- [CreateMenu](../functions/CreateMenu): Create a menu.
- [DestroyMenu](../functions/DestroyMenu): Destroy a menu.
