---
title: "TextDrawShowForPlayer | open.mp"
description: "Shows a textdraw for a specific player."
canonical: https://open.mp/docs/scripting/functions/TextDrawShowForPlayer
language: en
---

# TextDrawShowForPlayer

## Description

Shows a [textdraw](https://open.mp/docs/scripting/functions/TextDrawCreate) for a specific player.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to show the textdraw for. |
| Text:textid | The ID of the textdraw to show.  
Returned by [TextDrawCreate](https://open.mp/docs/scripting/functions/TextDrawCreate). |

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

tip

If only a single player will see a textdraw, it might be wise to use [player-textdraws](https://open.mp/docs/scripting/functions/CreatePlayerTextDraw) instead. This is also useful for textdraws that need to show information specific for an individual player.

## Related Functions

-   [TextDrawHideForPlayer](https://open.mp/docs/scripting/functions/TextDrawHideForPlayer): Hide a textdraw for a certain player.
-   [TextDrawShowForAll](https://open.mp/docs/scripting/functions/TextDrawShowForAll): Show a textdraw for all players.
-   [TextDrawHideForAll](https://open.mp/docs/scripting/functions/TextDrawHideForAll): Hide a textdraw for all players.
-   [IsTextDrawVisibleForPlayer](https://open.mp/docs/scripting/functions/IsTextDrawVisibleForPlayer): Checks if a textdraw is shown for a player.
