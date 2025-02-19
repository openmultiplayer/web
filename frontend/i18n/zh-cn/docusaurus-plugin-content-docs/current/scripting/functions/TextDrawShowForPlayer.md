---
title: TextDrawShowForPlayer
sidebar_label: TextDrawShowForPlayer
description: Shows a textdraw for a specific player.
tags: ["player", "textdraw"]
---

## Description

Shows a textdraw for a specific player.

| Name        | Description                                                                        |
| ----------- | ---------------------------------------------------------------------------------- |
| playerid    | The ID of the player to show the textdraw for.                                     |
| Text:textid | The ID of the textdraw to show.<br />Returned by [TextDrawCreate](TextDrawCreate). |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. This means either the player and/or textdraw specified does not exist.

## Examples

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 100.0, "Welcome!");
    return 1;
}

public OnPlayerConnect(playerid)
{
    TextDrawShowForPlayer(playerid, gMyTextdraw);
    return 1;
}
```

## Notes

:::tip

If only a single player will see a textdraw, it might be wise to use player-textdraws instead. This is also useful for textdraws that need to show information specific for an individual player.

:::

## Related Functions

- [TextDrawHideForPlayer](TextDrawHideForPlayer): Hide a textdraw for a certain player.
- [TextDrawShowForAll](TextDrawShowForAll): Show a textdraw for all players.
- [TextDrawHideForAll](TextDrawHideForAll): Hide a textdraw for all players.
- [IsTextDrawVisibleForPlayer](IsTextDrawVisibleForPlayer): Checks if a textdraw is shown for a player.
