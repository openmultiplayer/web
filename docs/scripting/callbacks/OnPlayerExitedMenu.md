---
id: OnPlayerExitedMenu
title: OnPlayerExitedMenu
description: Called when a player exits a menu.
tags: ["player", "menu"]
---

## Description

Called when a player exits a menu.

| Name     | Description                               |
| -------- | ----------------------------------------- |
| playerid | The ID of the player that exited the menu |

## Returns

It is always called first in gamemode.

## Examples

```c
public OnPlayerExitedMenu(playerid)
{
    TogglePlayerControllable(playerid,1); // unfreeze the player when they exit a menu
    return 1;
}
```

## Related Functions

- [CreateMenu](../functions/CreateMenu.md): Create a menu.
- [DestroyMenu](../functions/DestroyMenu.md): Destroy a menu.
