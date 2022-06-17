---
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

它在游戏模式中总是先被调用。

## Examples

```c
public OnPlayerExitedMenu(playerid)
{
    TogglePlayerControllable(playerid,1); // unfreeze the player when they exit a menu
    return 1;
}
```

## Related Functions

- [CreateMenu](../functions/CreateMenu): Create a menu.
- [DestroyMenu](../functions/DestroyMenu): Destroy a menu.
